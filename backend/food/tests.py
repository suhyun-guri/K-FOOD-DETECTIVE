from io import BytesIO
from django.test import TestCase, Client
from django.core.files.uploadedfile import SimpleUploadedFile


ROOT_URL = 'http://0.0.0.0:8000/'
MODEL_SERVER_URL = 'http://192.168.247.118:5000/detect'
ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ2NTg2MTcwLCJpYXQiOjE2NDY0OTk3NzAsImp0aSI6IjhmNTZhMWFmOTliZjQxY2ZhM2ZkMWY1OWNiNDk1MGVjIiwidXNlcl9pZCI6Nn0.IUPFSRmj9Av4KIeh8gWNt0fRmhEyRm8X_ia7T-XlorI'

# Test for image detection
class FoodDetectTest(TestCase):
    def get_test_image(self):
        file = BytesIO()
        file.name = 'test_image.png'
        file.seek(0)
        return file

    def setUp(self):
        self.client = Client()
        self.upload_file = open('food/test_image.jpg', 'rb')
        self.img = SimpleUploadedFile('food/test_image.jpg', content=self.upload_file.read())
        self.test_data = {
            "img" : self.img
        }

    def test_food_detect(self):
        response = self.client.post(path='/food/detect', data=self.test_data, format='multipart/form-data')
        self.assertEqual(response.status_code, 200)
    
# Test for food scrap
class ScrapFoodTest(TestCase):
    def setUp(self):
        self.client = Client
        self.access_token = ACCESS_TOKEN
    
    def test_food_scrap(self):
        headers = {
            "Authorization" : "Bearer {self.access_token}"
        }
        data = {
            "food_id" : 23
        }
        response = self.client.post(path='/food/scrap', data=data, headers=headers, format='application/json')
        self.assertEqual(response.status_code, 200)
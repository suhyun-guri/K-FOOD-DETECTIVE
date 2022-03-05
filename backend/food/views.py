from django.http import HttpResponse, HttpResponseNotFound


def image_detect(request):
    if request.method == 'POST':
        image = request.FILES['image']
        
        return HttpResponse(image, status=200)
import pytest
import requests

base_url = "http://localhost:8000/account"


#테스트 클라이언트 정의
class Client():
    def __init__(self, username, email, password, access_token=None, refresh_token=None):
        self.username = username
        self.email = email
        self.password = password
        self.access_token = access_token
        self.refresh_token = refresh_token

test_client = Client("test_user", "test@test.com", "test_password")


#register 테스트
def test_register():
    path = "/register"
    user_info = {
      "username": test_client.username,
      "email": test_client.email,
      "password": test_client.password
    }

    #최초 회원가입 요청
    res_first = requests.post(base_url + path, user_info)
    assert res_first.status_code == 201

    #기존 회원이 가입을 하려고 할 경우 
    res_second = requests.post(base_url + path, user_info)
    assert res_second.status_code == 400


#login 테스트
def test_login():
    path = "/login"
    user_info_good = {
      "username": test_client.username,
      "password": test_client.password
    }
    user_info_none = {
      "username": "test_user1",
      "password": test_client.password
    }
    user_info_wrong = {
      "username": test_client.username,
      "password": "test_password1"
    }

    #정상 로그인 요청
    res_ok = requests.post(base_url + path, user_info_good)
    test_client.access_token = res_ok.json()["access"]
    test_client.refresh_token = res_ok.json()["refresh"]
    assert res_ok.status_code == 200

    #존재하지 않는 유저의 로그인 요청
    res_none = requests.post(base_url + path, user_info_none)
    assert res_none.status_code == 401

    #잘못된 패스워드 로그인 요청
    res_wrong = requests.post(base_url + path, user_info_wrong)
    assert res_wrong.status_code == 401


#logout 테스트
def test_logout():
    path = "/logout"
    headers = {
      "Authorization": f"Bearer {test_client.access_token}" 
    }
    data = {
      "refresh": test_client.refresh_token
    }

    # 정상적인 유저의 로그아웃 요청
    res_ok = requests.post(base_url + path, data=data, headers=headers)
    assert res_ok.status_code == 200

    # 로그인되지 않은 유저의 로그아웃 요청
    res_none = requests.post(base_url + path, data=data, headers=headers)
    assert res_none.status_code == 400
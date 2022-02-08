from django.http import HttpResponse
from chilsutest.models import Users

def index(request):
    new_name = Users.objects.all().values()[0]["name"]

    return HttpResponse(new_name)
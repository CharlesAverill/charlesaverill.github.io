from django.http import HttpResponse

def hello(request, number):
    text = "<h1>Hello World!</h1>"
    return HttpResponse(text)

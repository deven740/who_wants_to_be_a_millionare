from django.shortcuts import render, HttpResponse

def get_questions(request):
    print('hellloooo')
    return HttpResponse('Questions with answers')

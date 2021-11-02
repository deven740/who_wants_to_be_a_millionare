from django.shortcuts import render, HttpResponse
import json
from random import shuffle
from db_connection import get_db_handle
from bson.json_util import dumps

def get_questions(request):
    
    db, client = get_db_handle('mongo_db','mongodb://deven:deven@db:27017/', 27017, 'deven', 'deven')

    questions = db.questions.find()
    questions = [question for question in questions]
    shuffle(questions)
      
    return HttpResponse(dumps(questions))

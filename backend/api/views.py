from django.shortcuts import render, HttpResponse
import json

def get_questions(request):
    print('hellloooo')
    a = [
        {
    "id": 1,
    "question": "How to delete a directory in Linux?",
    "description": "delete folder",
    "options": ["ls", "delete", "remove", "rmdir"],
    "correct_answer": 3,
    "explanation": "rmdir deletes an empty directory",
    "difficulty": "Easy"
  },
  {
    "id": 2,
    "question": "How to delete a directory in Windows?",
    "description": "delete folder",
    "options": ["ls", "del", "remove", "rmdir"],
    "correct_answer": 2,
    "explanation": "rmdir deletes an empty directory",
    "difficulty": "Easy"
  },

  ]


    return HttpResponse(json.dumps(a))

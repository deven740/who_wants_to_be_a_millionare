from django.shortcuts import render, HttpResponse
import json

def get_questions(request):
    print('hellloooo')
    a = [
        {
    "id": 1,
    "question": "How to delete a directory in Linux?",
    "description": "delete folder",
    "options": {
      "answer_a": "ls",
      "answer_b": "delete",
      "answer_c": "remove",
      "answer_d": "rmdir",
    },
    "explanation": "rmdir deletes an empty directory",
    "difficulty": "Easy"
  },
  {
    "id": 2,
    "question": "How to delete a directory in Windows?",
    "description": "delete folder",
    "options": {
      "option_a": "ls",
      "option_b": "delete",
      "option_c": "remove",
      "option_d": "rmdir",
    },
    "explanation": "rmdir deletes an empty directory",
    "difficulty": "Easy"
  },

  ]


    return HttpResponse(json.dumps(a))

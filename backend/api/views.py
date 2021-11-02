from django.shortcuts import render, HttpResponse
import json
from random import shuffle
from db_connection import get_db_handle

def get_questions(request):
    print('hellloooo')
    a = [
  {
    "id": 1,
    "question": "How to delete a directory in Linuxsss?",
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
  {
    "id": 3,
    "question": "What is a Burgee?",
    "description": "delete folder",
    "options": ["Flag", "Rope", "Type of food", "Window"],
    "correct_answer": 0,
    "explanation": "rmdir deletes an empty directory",
    "difficulty": "Easy"
  },
  {
    "id": 4,
    "question": "Which sign of the zodiac comes between Virgo and Scorpio?",
    "description": "delete folder",
    "options": ["Libra", "Gemini", "Taurus", "Capricorn"],
    "correct_answer": 0,
    "explanation": "rmdir deletes an empty directory",
    "difficulty": "Easy"
  },
  {
    "id": 5,
    "question": "A statue of Charles Darwin sits in what London museum?",
    "description": "delete folder",
    "options": ["Tate", "British Museum", "Science Museum", "Natural History Museum"],
    "correct_answer": 3,
    "explanation": "rmdir deletes an empty directory",
    "difficulty": "Easy"
  },
  {
    "id": 6,
    "question": "What was the first commerically available computer processor?",
    "description": "delete folder",
    "options": ["AMD AM386", "TMS 1000", "Intel 4004", "Intel 486SX"],
    "correct_answer": 2,
    "explanation": "rmdir deletes an empty directory",
    "difficulty": "Easy"
  },
  {
    "id": 7,
    "question": "In web design, what does CSS stand for?",
    "description": "delete folder",
    "options": ["Cascading Style Sheet", "Computer Style Sheet", "Counter Strike: Source", "Corrective Style Sheet"],
    "correct_answer": 0,
    "explanation": "rmdir deletes an empty directory",
    "difficulty": "Easy"
  },

  ]

    db, client = get_db_handle('mongo_db','mongodb://deven:deven@db:27017/', 27017, 'deven', 'deven')

    shuffle(a)
    return HttpResponse(json.dumps(a))

import names
from random import randint
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials

cred = credentials.Certificate("../firebase/homestay.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
doc_ref = db.collection('users')
docs = doc_ref.get()
count = 0

for doc in docs:
    count += 1

print(count)
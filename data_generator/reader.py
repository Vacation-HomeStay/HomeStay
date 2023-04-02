import names
from random import randint
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials

cred = credentials.Certificate("../secrets/homestay.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
doc_ref = db.collection('users')

# doc_ref = doc_ref.document('HsDmCd3XbKVBDkC8orLlH0ZbfMq1')
doc_ref = doc_ref.document('Jh6lB9vVgjaHuvhIcESMOPRqr1r2')
doc = doc_ref.get()

# Check if the document exists
if doc.exists:
    print(f"Document data: {doc.to_dict()}")
    print(f"Document ID: {doc.id}")
else:
    print("The document does not exist")

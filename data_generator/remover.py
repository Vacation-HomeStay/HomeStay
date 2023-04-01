import names
from random import randint
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials

cred = credentials.Certificate("../firebase/homestay.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
doc_ref = db.collection('users')

doc_ref = doc_ref.document('HsDmCd3XbKVBDkC8orLlH0ZbfMq1')
doc_ref.delete()
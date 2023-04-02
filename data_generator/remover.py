import names
from random import randint
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials

cred = credentials.Certificate("../secrets/homestay3.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
doc_ref = db.collection('users')

doc_ref = doc_ref.document('XOY5t0sRMZOen8WqUuSbPX55HsJ3')
doc_ref.delete()
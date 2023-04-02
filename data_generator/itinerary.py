import names
from random import randint
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from datetime import datetime, timedelta
from faker import Faker
from datetime import datetime, timedelta
from lorem_text import lorem
import time

# HOST UID MUST BE FROM IND_RES UID'S or or rev UID
cred = credentials.Certificate("../secrets/homestay.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
fake = Faker()


docs = db.collection("users").list_documents()
open_uid = [doc.id for doc in docs]
print('oki')
# time.sleep(35)
ir_docs = db.collection("individual_residence").list_documents()
vac_ids = [d.id for d in ir_docs]
print("doki")
for vac_id in vac_ids:
    random_uid = open_uid[randint(0, len(open_uid) - 1)]
    open_uid.remove(random_uid)

    listofiternary = []
    for i in range(10):
        iternarytext = lorem.words(15)
        listofiternary.append(iternarytext)

    data = {"host_uid": random_uid, "itinerary": listofiternary}
    db.collection("itinerary").add(data)
    print(i)

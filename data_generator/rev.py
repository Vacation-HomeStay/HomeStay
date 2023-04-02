import names
from random import randint
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from datetime import datetime, timedelta
from faker import Faker
from datetime import datetime, timedelta
from lorem_text import lorem

# HOST UID MUST BE FROM IND_RES UID'
cred = credentials.Certificate("../secrets/homestay.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
fake = Faker()


docs = db.collection("users").list_documents()
open_uid = [doc.id for doc in docs]
import pdb
pdb.set_trace()

ir_docs = db.collection("individual_residence").list_documents()
vac_ids = [d.id for d in ir_docs]

print(len(vac_ids))
for vac_id in vac_ids:
	for i in range(2):
		"""
		reviewer_uid
		host_uid: 
		dateofstay: 
		vacationid: 
		reviews: {
		rating:  INT
		review: STR
		"""
		random_uid = open_uid[randint(0, len(open_uid) - 1)]
		open_uid.remove(random_uid)
	
		random_uid2 = open_uid[randint(0, len(open_uid) - 1)]
		open_uid.remove(random_uid2)
	
		# vac_id = vac_ids[randint(0, len(vac_ids)-1)]
		# vac_ids.remove(vac_id)
	
		year = randint(2010, 2023)
		month = randint(1, 12)
		day = randint(1, 28)

		random_datetime = datetime(year, month, day, 0, 0, 0)

		random_num = randint(1, 5)

		review_text = lorem.words(50)  
		data = {
			"reviewer_uid": random_uid,
			"host_uid": random_uid2,
			"dateofstay": random_datetime,
			"vacationid": vac_id,
			"reviews": {
				"rating":  random_num,
				"review": review_text
			}
		}
		db.collection("reviews").add(data)
		# print(i)

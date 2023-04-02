import names
from random import randint
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from faker import Faker

fake = Faker()
activity = {"Sightseeing":0, "Adventure":1, "Relaxation":2, "Culture":3}
house = {"Apartment":0, "Cabin":1, "House":2}

family = {
	"Single":0, "Couple":1, "Family with children":2, "Family with no children":3,
	"Group of friends":4
}
cities = [
    "Paris",
    "London",
    "New York City",
    "Tokyo",
    "Cancun",
    "Barcelona",
    "Sydney",
    "Rome",
    "Dubai",
    "Amsterdam",
    "San Francisco",
    "Bangkok",
    "Maui",
    "Rio de Janeiro",
    "Istanbul",
    "Las Vegas",
    "Florence",
    "Berlin",
    "Athens",
    "Banff",
    "Mumbai",
    "Seoul",
    "Buenos Aires",
    "Melbourne",
    "Lagos", "Lima"
]
def getIndexCity(city):
    for c,i in enumerate(city):
        if city==i:
            return c
    return 0
cred = credentials.Certificate("../secrets/homestay_mini.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
usersDB = db.collection("users").get()
vacationDB = db.collection("individual_residence").get()
reviewsDB = db.collection("reviews").get()
import pdb
# pdb.set_trace()
users={} #key is user id 
vac={} 
reviewList ={}
for i in usersDB:
	users[i.id]=i.to_dict()
for j in vacationDB:
	vac[j.id]=j.to_dict()
for k in reviewsDB:
	try:
		data = k.to_dict()
		user_id = data["reviewer_uid"]
		vac_id = k.id
		key=user_id
		rating = data["reviews"]["rating"]
		
		userData = users[user_id]
		import pdb
		# pdb.set_trace()
		newData={
			"age": userData["age"],
			"budget": userData["budget"],
			"family_idx": family[userData["preferences"]["familyType"]],
			"house_idx": house[userData["preferences"]["housestayType"]],
			"activity_idx": activity[userData["preferences"]["activityType"]],
			"city" : getIndexCity(vac[vac_id]["city"]),
			"rating": int(rating)
		}
		import pdb
		# pdb.set_trace()
		if(key in reviewList):
			reviewList[key].append(newData)
		else:
			reviewList[key]=[]
			reviewList[key].append(newData)
	except:
	   pass
		
print(reviewList)

# template = ["age","budget", familyIdx, houseIdx, activityIdx, ]
import pdb
# pdb.set_trace()


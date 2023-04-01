import names
from random import randint
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials

cred = credentials.Certificate("../firebase/homestay.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

for i in range(66):

    f_name = names.get_first_name()
    age = randint(18, 85)
    activity = ["Sightseeing", "Adventure", "Relaxation", "Culture"]
    house = ["Apartment", "Cabin", "House"]
    family = [
        "Single", "Couple", "Family with children", "Family with no children",
        "Group of friends"
    ]

    a = activity[randint(0, len(activity)-1)]
    h = house[randint(0, len(house)-1)]
    f = family[randint(0, len(family)-1)]
    data = {
        'name': f_name,
        'age' : age,
        'preferences':{
            'activityType': a,
            'familyType':f,
            'housestayType':h
        }
    }
    db.collection('users').add(data)
    print(i)
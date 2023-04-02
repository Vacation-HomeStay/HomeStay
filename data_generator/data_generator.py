import names
from random import randint
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials

cred = credentials.Certificate("../secrets/homestay.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
budget = list(range(50,301,50))
for i in range(500):

    f_name = names.get_first_name()
    age = randint(18, 85)
    activity = ["Sightseeing", "Adventure", "Relaxation", "Culture"]
    house = ["Apartment", "Cabin", "House"]
    
    family = [
        "Single", "Couple", "Family with children", "Family with no children",
        "Group of friends"
    ]
    bud = budget[randint(0,len(budget)-1)]
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
        },
        'budget': bud
    }
    db.collection('users').add(data)
    print(i)
import names
from random import randint
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from datetime import datetime, timedelta
from faker import Faker
from datetime import datetime, timedelta
from image import get_image
from lorem_text import lorem

fake = Faker()

cred = credentials.Certificate("../secrets/homestay_mini.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
budget = list(range(50,301,50))
for i in range(30):

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

##########################################################

docs = db.collection("users").list_documents()
open_uid = [doc.id for doc in docs]
open_uid1 = open_uid.copy()
open_uid2 = open_uid.copy()
open_uid3 = open_uid.copy()


possible_vac_ids = list(range(1000000))
possible_iten_ids = list(range(1000000))

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

for city in cities:
    for i in range(5):
        """
        host_uid: ak done
        host_location: ak done
        vacation_id: ak done
        host_iternary_id: ak done
        open_days: days
        number_of_rooms: num_rooms
        images:
        host_contact: done
        cost: cost
        """
        name = names.get_first_name()
        random_uid = open_uid[randint(0, len(open_uid) - 1)]
        open_uid.remove(random_uid)
        vacation_id = possible_vac_ids[randint(0, len(possible_vac_ids) - 1)]
        possible_vac_ids.remove(vacation_id)

        iten_id = possible_iten_ids[randint(0, len(possible_iten_ids) - 1)]
        possible_iten_ids.remove(iten_id)

        # city = cities[randint(0,len(cities))]

        year = randint(2010, 2023)

        start_month = randint(1, 12)
        start_day = randint(1, 28)

        range_days = randint(1, 7)

        start_date = datetime(year, start_month, start_day)
        end_date = start_date + timedelta(days=range_days)

        date_range = (start_date, end_date)

        num_rooms = randint(1, 10)

        cost = randint(50, 300)

        host_email = fake.email()

        images = get_image(city)
        data = {
            "host_uid": random_uid,
            "host_name": name,
            "city": city,
            "vacation_id": vacation_id,
            "itinerary_id": iten_id,
            "open_days": date_range,
            "number_of_rooms": num_rooms,
            "cost": cost,
            "host_contact": host_email,
            "images": images,
        }
        print(data)
        db.collection("individual_residence").add(data)
        print(i)
        

#######################################
open_uid = open_uid1

ir_docs = db.collection("individual_residence").list_documents()
vac_ids = [d.id for d in ir_docs]
vac_ids2 = vac_ids.copy()
try:
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
except:
    pass
    
##########################################################
open_uid = open_uid2

vac_ids = vac_ids2
print("doki")x``
for c,vac_id in enumerate(vac_ids):
    print(c,len(open_uid))
    random_uid = open_uid[randint(0, len(open_uid) - 1)]
    open_uid.remove(random_uid)

    listofiternary = []
    for i in range(10):
        iternarytext = lorem.words(15)
        listofiternary.append(iternarytext)

    data = {"host_uid": random_uid, "itinerary": listofiternary}
    db.collection("itinerary").document(vac_id).set(data)
    # print(i)

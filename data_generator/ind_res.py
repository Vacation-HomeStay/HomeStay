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
cred = credentials.Certificate("../secrets/homestay.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
fake = Faker()


docs = db.collection("users").list_documents()
open_uid = [doc.id for doc in docs]
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

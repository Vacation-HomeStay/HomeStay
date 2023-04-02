from unsplash.api import Api
from unsplash.auth import Auth
from random import randint
from unsplash_keys import client_id, client_secret, redirect_uri

auth = Auth(client_id, client_secret, redirect_uri)
api = Api(auth)

def get_image(query):
    page = randint(0,1)
    s = api.search.photos(query,page=page)
    res = s['results']
    photo1 = res[randint(0,len(res)-1)]
    res.remove(photo1)
    photo2 = res[randint(0,len(res)-1)]
    return [photo1.urls.raw, photo2.urls.raw]
    
# print(get_image('paris'))
    
    
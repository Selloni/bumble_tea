from pymongo import MongoClient

def db_for_client():
    client = MongoClient('mongodb://localhost:27017/')
    db = client['client_for_tea']  # db = client.client_for_tea 
    collection_client = db['collection_of_client']

def regestion_client():
    db_for_clienr()
    # print ('имя клиента')
    # name = input ()
    # print ('номер телефона')
    # number = input()
    # print ('сколько чая заказ')
    # cup = input()
    name = 'ivan'
    number = 333
    cup = 0
    
    one_client = {
        'name': name,
        'cup tea': cup,
        'phone': number
    }
    collection_client.insert_one(one_client) # add one recret in collection
    # print(ins.inserted_id)
    print(collection_client.find_one({'phone': 333}))
# print(date)
pull_db()

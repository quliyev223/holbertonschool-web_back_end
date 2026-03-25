#!/usr/bin/env python3
"""9-insert_school module"""


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document in a collection based on kwargs"""
    # insert_one() takes a dictionary and adds it as a new document in MongoDB
    # kwargs is already a dictionary of all the named arguments we passed in
    # For example: insert_school(col, name="UCSF", address="505 Parnassus Ave")
    # kwargs will be -> {"name": "UCSF", "address": "505 Parnassus Ave"}
    result = mongo_collection.insert_one(kwargs)

    # insert_one() returns an object, not the ID itself
    # the actual new ID is stored inside that object under .inserted_id
    # MongoDB automatically creates a unique _id for every new document
    return result.inserted_id

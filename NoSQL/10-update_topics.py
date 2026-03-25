#!/usr/bin/env python3
"""10-update_topics module"""


def update_topics(mongo_collection, name, topics):
    """Changes all topics of a school document based on the name"""
    # update_many() finds ALL documents that match the filter and updates them
    # First argument is the filter -> find documents where "name" equals our name
    # For example: {"name": "Holberton school"} -> finds that specific school
    mongo_collection.update_many(
        {"name": name},
        # Second argument is the update operation
        # "$set" is a MongoDB operator that says "replace this field with new value"
        # Here we are replacing the "topics" field with our new list of topics
        # For example: {"$set": {"topics": ["Sys admin", "AI", "Algorithm"]}}
        {"$set": {"topics": topics}}
    )

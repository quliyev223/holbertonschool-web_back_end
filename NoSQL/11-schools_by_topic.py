#!/usr/bin/env python3
"""
Module to find schools by a specific topic
"""

def schools_by_topic(mongo_collection, topic):
    """
    Returns a list of schools that have a specific topic
    """
    # 1. We use the .find() method to search in the collection.
    # 2. We pass a dictionary: {"field_name": value_to_find}.
    # 3. MongoDB is smart: if "topics" is an array, it will look 
    #    inside that array to see if it contains our "topic" string.
    query = { "topics": topic }
    
    # We call find() with our query. This returns a "cursor" object.
    results = mongo_collection.find(query)
    
    # We convert the results into a standard Python list so we can return it.
    return list(results)

# If you call the function like this:
# my_schools = schools_by_topic(school_collection, "Python")

# MongoDB will return every document where "Python" is inside the "topics" list.

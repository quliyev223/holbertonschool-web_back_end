#!/usr/bin/env python3
"""8-all module"""


def list_all(mongo_collection):
    """List all documents in a collection"""

    # mongo_collection.find() - searches the collection for documents
    # No arguments = "give me EVERYTHING" (like SELECT * FROM table in SQL)
    # It returns a "cursor" - think of it as a lazy iterator, not a real list yet

    # list() - converts that cursor into a real Python list
    # If the collection is empty, find() returns an empty cursor
    # and list() turns it into [] automatically - no extra checks needed!

    return list(mongo_collection.find())

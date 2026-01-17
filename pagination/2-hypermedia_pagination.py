#!/usr/bin/env python3
"""
Hypermedia pagination module.
This module provides a Server class to paginate a database of popular baby names
and provides metadata for navigation (HATEOAS style).
"""
import csv
import math
from typing import List, Dict, Any, Optional


def index_range(page: int, page_size: int) -> tuple:
    """
    Calculate the start and end indexes for a specific page and page size.
    
    Args:
        page (int): The current page number (1-indexed).
        page_size (int): The number of items per page.
        
    Returns:
        tuple: A tuple containing the (start_index, end_index).
    """
    return ((page - 1) * page_size, page * page_size)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Reads and caches the dataset from the CSV file.
        
        Returns:
            List[List]: The dataset excluding the header row.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            # Store dataset while skipping the header
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retrieves a specific page of data from the dataset.
        
        Args:
            page (int): The page number (must be > 0).
            page_size (int): Items per page (must be > 0).
            
        Returns:
            List[List]: The list of rows for that page, or empty list if out of range.
        """
        # Validate inputs using assertions
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Get the range of indexes
        start, end = index_range(page, page_size)
        data = self.dataset()
        
        # Return empty list if the start index is beyond the dataset size
        if start >= len(data):
            return []
        
        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """
        Returns a dictionary containing the data and pagination metadata.
        
        Args:
            page (int): The current page number.
            page_size (int): The requested page size.
            
        Returns:
            Dict: A dictionary with page_size, page, data, next_page, 
                  prev_page, and total_pages.
        """
        # Reuse get_page to fetch the actual data
        data = self.get_page(page, page_size)
        
        # Calculate total number of items and total pages
        total_items = len(self.dataset())
        # Use math.ceil to account for partial last pages
        total_pages = math.ceil(total_items / page_size)
        
        # Determine next and previous page numbers
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None
        
        # Construct the hypermedia response dictionary
        return {
            "page_size": len(data),    # Actual length of the returned data
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }

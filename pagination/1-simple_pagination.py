#!/usr/bin/env python3
"""
Module for simple pagination of the Popular Baby Names dataset.
"""
import csv
import math
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate the start and end index for a specific page and page size.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Reads and caches the dataset from the CSV file.

        Returns:
            List[List]: The cached dataset excluding the header.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            # Skip header row and store the rest
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retrieves a specific page of the dataset.

        Args:
            page (int): Current page number (must be > 0).
            page_size (int): Number of items per page (must be > 0).

        Returns:
            List[List]: A list of rows for the requested page,
                        or an empty list if out of range.
        """
        # Validate that page and page_size are integers greater than 0
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Calculate indices using the helper function
        start, end = index_range(page, page_size)

        # Retrieve the dataset content
        data = self.dataset()

        # Check if requested start index is within the dataset range
        if start >= len(data):
            return []

        # Return the slice of data for the requested page
        return data[start:end]

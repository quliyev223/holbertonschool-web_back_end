#!/usr/bin/env python3
"""Async comprehension example using async_generator"""

from typing import List

# Dynamic import to work with checker
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Coroutine that collects 10 random numbers from async_generator
    using an async comprehension and returns them as a list.

    Returns:
        List[float]: list of 10 random floats
    """
    # Use async comprehension to iterate over async_generator
    numbers: List[float] = [i async for i in async_generator()]

    # Return the collected list of random numbers
    return numbers

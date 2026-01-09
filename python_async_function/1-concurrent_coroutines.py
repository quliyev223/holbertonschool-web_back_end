#!/usr/bin/env python3
"""
Import wait_random and write an async routine wait_n.
"""
import asyncio
from typing import List

# Importing wait_random using the __import__ syntax
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with the specified max_delay.

    Returns:
        List[float]: All delays in ascending order.
    """
    delays = []
    # Create a list of n coroutine objects
    tasks = [wait_random(max_delay) for _ in range(n)]

    # as_completed yields futures as they finish
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays

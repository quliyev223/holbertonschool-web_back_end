#!/usr/bin/env python3
"""
Module that uses task_wait_random to execute multiple tasks.
"""
import asyncio
from typing import List

# Importing task_wait_random and wait_random via the previous task files
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with the specified max_delay.

    Args:
        n (int): Number of tasks to spawn.
        max_delay (int): Maximum delay for each task.

    Returns:
        List[float]: List of delays in ascending order.
    """
    # Create a list of Task objects using our wrapper function
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    # Use as_completed to gather results in the order they finish
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays

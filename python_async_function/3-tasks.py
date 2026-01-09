#!/usr/bin/env python3
"""
Module to create an asyncio.Task from wait_random.
"""
import asyncio

# Importing wait_random using the __import__ syntax
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Takes an integer max_delay and returns an asyncio.Task.

    Args:
        max_delay (int): The maximum delay for wait_random.

    Returns:
        asyncio.Task: The scheduled task.
    """
    # create_task schedules the coroutine to run on the loop
    return asyncio.create_task(wait_random(max_delay))

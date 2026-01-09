#!/usr/bin/env python3
"""Measure runtime for running four async_comprehension coroutines in parallel"""

import asyncio
import time
from typing import Callable

# Dynamic import to work with checker
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Measure the total runtime of running four async_comprehension coroutines in parallel.

    Returns:
        float: total runtime in seconds
    """
    # Record the start time
    start_time = time.time()

    # Run four async_comprehension coroutines concurrently
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    # Record the end time
    end_time = time.time()

    # Return the total runtime
    return end_time - start_time

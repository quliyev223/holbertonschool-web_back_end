#!/usr/bin/env python3
"""
Module to measure the runtime of parallel async comprehensions.
"""
import asyncio
import time

# Importing async_comprehension using the __import__ syntax as requested
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel and
    measures the total execution time.
    """
    start_time = time.perf_counter()

    # asyncio.gather runs the coroutines concurrently
    await asyncio.gather(*(async_comprehension() for _ in range(4)))

    end_time = time.perf_counter()
    return end_time - start_time

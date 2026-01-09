#!/usr/bin/env python3
"""Generator that yields 10 random numbers with a 1-second pause"""

import random
import time
from typing import Generator


def async_generator() -> Generator[float, None, None]:
    """
    Synchronous generator that yields a float between 0 and 10, 10 times

    Return:
        Generator[float, None, None]: yields random float values
    """
    for _ in range(10):
        # Pause execution for 1 second
        time.sleep(1)

        # Yield a random float between 0 and 10
        yield random.uniform(0, 10)

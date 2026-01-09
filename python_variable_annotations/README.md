## 0. Basic annotations - add

Write a type-annotated function `add` that takes a float `a` and a float `b` as arguments and returns their sum as a float.

### Requirements
- Use type annotations
- The function must be named `add`
- `a` must be a float
- `b` must be a float
- The return value must be a float
- You are not allowed to import any module

### File
- **File:** `0-add.py`

### Example

```python
add = __import__('0-add').add

print(add(1.11, 2.22) == 1.11 + 2.22)
print(add.__annotations__)

## 1. Basic annotations - concat

Write a type-annotated function `concat` that takes a string `str1` and a string `str2` as arguments and returns a concatenated string.

### Requirements
- Use type annotations
- The function must be named `concat`
- `str1` must be a string
- `str2` must be a string
- The return value must be a string
- You are not allowed to import any module

### File
- **File:** `1-concat.py`

### Example

```python
concat = __import__('1-concat').concat

str1 = "egg"
str2 = "shell"

print(concat(str1, str2) == "{}{}".format(str1, str2))
print(concat.__annotations__)

## 2. Basic annotations - floor

Write a type-annotated function `floor` which takes a float `n` as argument and returns the floor of the float.

### Requirements
- Use type annotations
- The function must be named `floor`
- `n` must be a float
- The return value must be an integer
- You may import the `math` module

### File
- **File:** `2-floor.py`

### Example

```python
import math

floor = __import__('2-floor').floor

ans = floor(3.14)

print(ans == math.floor(3.14))
print(floor.__annotations__)
print("floor(3.14) returns {}, which is a {}".format(ans, type(ans)))


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

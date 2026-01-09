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

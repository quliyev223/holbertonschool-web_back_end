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

## 3. Basic annotations - to_str

Write a type-annotated function `to_str` that takes a float `n` as argument and returns the string representation of the float.

### Requirements
- Use type annotations
- The function must be named `to_str`
- `n` must be a float
- The return value must be a string
- You are not allowed to import any module

### File
- **File:** `3-to_str.py`

### Example

```python
to_str = __import__('3-to_str').to_str

pi_str = to_str(3.14)
print(pi_str == str(3.14))
print(to_str.__annotations__)
print("to_str(3.14) returns {} which is a {}".format(pi_str, type(pi_str)))


## 4. Define variables

Define and annotate the following variables with the specified values:

- `a`, an integer with a value of 1
- `pi`, a float with a value of 3.14
- `i_understand_annotations`, a boolean with a value of `True`
- `school`, a string with a value of `"Holberton"`

### Requirements
- Use type annotations
- Each variable must have the correct type
- You are not allowed to import any module

### File
- **File:** `4-define_variables.py`

### Example

```python
a = __import__('4-define_variables').a
pi = __import__('4-define_variables').pi
i_understand_annotations = __import__('4-define_variables').i_understand_annotations
school = __import__('4-define_variables').school

print("a is a {} with a value of {}".format(type(a), a))
print("pi is a {} with a value of {}".format(type(pi), pi))
print("i_understand_annotations is a {} with a value of {}".format(type(i_understand_annotations), i_understand_annotations))
print("school is a {} with a value of {}".format(type(school), school))

## 5. Complex types - list of floats

Write a type-annotated function `sum_list` which takes a list `input_list` of floats as argument and returns their sum as a float.

### Requirements
- Use type annotations
- The function must be named `sum_list`
- `input_list` must be a list of floats
- The return value must be a float
- You may import `List` from `typing`

### File
- **File:** `5-sum_list.py`

### Example

```python
sum_list = __import__('5-sum_list').sum_list

floats = [3.14, 1.11, 2.22]
floats_sum = sum_list(floats)
print(floats_sum == sum(floats))
print(sum_list.__annotations__)
print("sum_list(floats) returns {} which is a {}".format(floats_sum, type(floats_sum)))

## 6. Complex types - mixed list

Write a type-annotated function `sum_mixed_list` which takes a list `mxd_lst` of integers and floats and returns their sum as a float.

### Requirements
- Use type annotations
- The function must be named `sum_mixed_list`
- `mxd_lst` must be a list of integers and floats
- The return value must be a float
- You may import `List` and `Union` from `typing`

### File
- **File:** `6-sum_mixed_list.py`

### Example

```python
sum_mixed_list = __import__('6-sum_mixed_list').sum_mixed_list

mixed = [5, 4, 3.14, 666, 0.99]
ans = sum_mixed_list(mixed)
print(sum_mixed_list.__annotations__)
print(ans == sum(mixed))
print("sum_mixed_list(mixed) returns {} which is a {}".format(ans, type(ans)))

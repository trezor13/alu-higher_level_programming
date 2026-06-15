# JavaScript Objects, Scopes and Closures

This project contains solutions for JavaScript exercises focused on:

- Classes and Objects
- Constructors
- Inheritance
- Methods
- Arrays
- Closures
- Module exports

## Files

### 0-rectangle.js
Creates an empty `Rectangle` class.

### 1-rectangle.js
Creates a rectangle with:
- `width`
- `height`

### 2-rectangle.js
Creates a rectangle only if:
- width > 0
- height > 0

Otherwise, an empty object is created.

### 3-rectangle.js
Adds a `print()` method that prints the rectangle using the character `X`.

Example:
```
XX
XX
XX
```

### 4-rectangle.js
Adds:
- `print()`
- `rotate()` → swaps width and height
- `double()` → doubles width and height

### 5-square.js
Creates a `Square` class that inherits from `Rectangle`.

### 6-square.js
Adds a `charPrint(c)` method that prints the square using any character.

Example:
```
CCCC
CCCC
CCCC
CCCC
```

### 7-occurrences.js
Returns the number of times an element appears in an array.

### 8-esrever.js
Returns a reversed version of an array without using the built-in `reverse()` method.

### 9-logme.js
Prints:
- the number of previous calls
- the current argument

Example:
```
0: Hello
1: Best
2: School
```

### 10-converter.js
Returns a function that converts a number from base 10 to another base.

Example:
```javascript
const converter = require('./10-converter').converter;

const hex = converter(16);

console.log(hex(89)); // 59
```

## Running the Files

Make the files executable:

```bash
chmod +x *.js
```

Run a file using:

```bash
./0-main.js
```

or

```bash
node 0-main.js
```

## Introduction
Welcome to TypeScript ADT Library! 
This library provides implementations of common data structures using TypeScript. 
An interface-based approach is taken to ensure flexibility and consistency in how you interact with different data structures implementations. 
Whether working on a backend project with Node.js or a frontend application with React, Angular, or Vue.js, this library is designed to be easy to use and integrate.

## Usage

### Installation
```shell
npm intall @dmohindru/typescript-adt
```

**CommonJS**
```javascript
const {ArrayList} = require('@dmohindru/typescript-adt/list');

// Create List
const list = new ArrayList(['one', 'two', 'three']);

// Add Items to list
list.append('four');

// Run operation on each item
list.forEach((item, index) =>
    console.log(`[${index}] - ${item}`));

...
```

**ES Module**
```javascript
import {ArrayList} from '@dmohindru/typescript-adt/list';

// Create List
const list = new ArrayList(['one', 'two', 'three']);

// Add Items to list
list.append('four');

// Run operation on each item
list.forEach((item, index) =>
    console.log(`[${index}] - ${item}`))

...
```

## Interfaces and Implementations
Library is built on a robust set of interfaces to ensure consistency and flexibility. Below are the primary interfaces provided by the library and some of their implementations.

### Interfaces
- [`List<T>`](./docs/modules/list.html): A linear collection that allows for indexed access to elements.
- `Stack<T>`: A collection that follows the Last-In-First-Out (LIFO) principle. (TBI)
- `Queue<T>`: A collection that follows the First-In-First-Out (FIFO) principle. (TBI)
- `Graph<T>`: A collection of nodes connected by edges. (TBI)
- `Tree<T>`: A hierarchical structure of nodes. (TBI)

### Implementation
**[`List<T>`](./docs/modules/list.html)**
- ArrayList

```javascript
// CommonJS
const {ArrayList} = require('@dmohindru/typescript-adt/list');

// ES Module
import {ArrayList} from '@dmohindru/typescript-adt/list';
```

### Docs

- [API Docs](./docs/index.html)
- [Github](https://github.com/dmohindru/typescript-adt)
 
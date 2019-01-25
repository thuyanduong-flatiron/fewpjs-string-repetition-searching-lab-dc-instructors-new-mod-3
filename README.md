# String Repetition & Searching in JavaScript

## Learning Goals

* Demonstrate string repitition in JavaScript
* Demonstrate searching in JavaScript
* Use `repeat()` to duplicate strings
* Declare a search function

## Introduction

Working with string values is one of the most popular functions
in JavaScript. Strings are objects within the JavaScript language.
Strings are not treated the same as arrays, so built-in functions
must be used to work with their values. We have various functions
that provide ways to access or manipulate the contents of a string
such as with repitition and searching.

## Demonstrate String Repitition in JavaScript

Ever needed to repeat a string or character multiple times? If not,
Think of a scenario such as a song with lyrics that is repeated over
and over again. There have been a number of complex ways to do such a
simple operation with loops, but now `repeat()` available in JavaScript!

### Manual String Repitition

Even though we can now leverage the `repeat()` method that has been added
to the ECMAScript 2015 specification, it may not be available in all
implementations yet.

The most scaled down implementation of a repeater function without loops
and conditionals looks like this:

```js
function repeat(str, num) {
    return (new Array(num+1)).join(str); 
}
```

### String Repitition With JavaScript's `repeat()` Method

The `repeat()` method constructs and returns a new string which contains the
specified number of copies of the string on which it was called. It's just
a couple of lines:

```js
"foo".repeat(3)
```

## Demonstrate Searching in JavaScript

With JavaScript methods like `find()` and `filter()`, we are often searching
against exact matches and it can be complex to filter results on various
conditions. When you want to know whether a pattern is found in a string
use `search()`. `search()` method executes the search for a match between
a regular expression and this `String`. It searches the string for the
specified value and returns its position of the match. The search value
can be the string or the regular expression. The search method returns -1
if no match is found.

```js
let str = 'Obama was the 44th president of the US';
let result  = str.search('44th');
console.log(result);
// => 14
```

## Use `repeat()` to Duplicate Strings



##Declare a search function

## Conclusion

## Resources

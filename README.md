# String Repetition & Searching in JavaScript

## Learning Goals

* Demonstrate string repitition in JavaScript
* Demonstrate searching in JavaScript
* Use `repeat()` to duplicate strings
* Declare a function that utilizes `search()` method

## Introduction

Working with `String` values is one of the most popular functions
in JavaScript. Strings are objects in the JavaScript language, and
working with their values is one of the most common tasks a JavaScript
developer performs. We have various functions that provide ways to
access or manipulate the contents of a string such as with repitition
and searching.

## Demonstrate String Repitition in JavaScript

Ever needed to repeat a string or character multiple times? If not,
think of a scenario such as a song with lyrics that is repeated over
and over again. There have been a number of complex ways to do such a
simple operation with loops, but now `repeat()` is available in JavaScript!

### Manual String Repitition

Even though we can now leverage the `repeat()` method that has been added
to the ECMAScript 2015 specification, it may not be available in all
implementations yet. It will be useful to know how to write a simpler version
of the function manually.

The most scaled down implementation of a repeater function without loops
and conditionals looks like this:

```js
function repeat(str, num) {
  return (new Array(num+1)).join(str); 
}

repeat("foo",3)
//=> "foofoofoo"
```

### String Repitition With JavaScript's `repeat()` Method

The `repeat()` method constructs and returns a new string which contains the
specified number of copies of the string on which it was called. It's just
a couple of lines:

```js
"foo".repeat(3)
//=> "foofoofoo"
```

## Demonstrate Searching in JavaScript

Knowing if something is or isn't in a string can be very important.
When you want to know whether a pattern is found in a string use `search()`.
`search()` method executes the search for a match between a `String` or a
_regular expression_ and the search `String`. In JavaScript, a regular
expression is a type is used to match character combinations in strings.

This method searches the string for the specified value and returns its
position of the match. The search value can be the string or the regular
expression. The search method returns -1 if no match is found.

```js
let str = 'Obama was the 44th president of the US';
let result  = str.search('44th');
console.log(result);
// => 14
```

## Use `repeat()` to Duplicate Strings

Let's put `repeat()` to the test! "Hey Jude" is a song by English rock band
the Beatles and it was named the 10th "biggest" song of all time by Billboard.
After the fourth verse in this song, the same lyrics are repeated
for more than four minutes. The popularity of the "long-play" (LP) record
started to pick up in the 1960s, and performers took advantage of the longer
playing time to create coherent themes or concept albums. It is believed that
the Beatles simply wanted to make the song long enough to utilize the _entire_
record.

* Create a function called `heyJude` that repeats the lyric "Na na na na na na
na, na na na na, hey Jude." 16 times.

## Declare a Function that Utilizes the `search()` Method

We have an online forum and don't want people to be able to create usernames 
that include swear words or other offensive language. Let's use the `search()`
method to find inappropriate words in usernames and reject them if any are found.

When creating a regular expression, it must be surrounded with slashes:
`/regular expression/`. With that knowledge a search string with the word 
"pineapplepizza" is inside it looks like this:

```js
let myRegExp = /pineapplepizza/;
```

* Create a function called `prohibitedLanguage` that will prevent usernames with
the `String`s "candycorn" and/or "brusselssprouts"

**Note:** A tool in regular expressions is the pipe character `|` (the pipe character
that shares the backslash `\` key on standard keyboards) which allows you to search
for alternative words `/RegExp1|RegExp2/`. Instead of just searching for just one
word, we can use the pipe character to search for multiple words.

## Conclusion

Strings are a fundamental part of every programming language, and JavaScript has
many powerful built-in functions that make working with strings easier. The
`repeat()` method simply repeats your string. It returns a new string that
concatentates the specified number of copies you indicated. With `repeat()`, so
we no longer have to build up the string some other way. When we want to quickly
search a specified pattern and return its index, we can use `search()` with a
`String` or regular expression, which allows us to match neary _any_ string/phrase.

## Resources
* [MDN: String.prototype.repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
* [MDN: String.prototype.search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)
* [An Introduction to Regular Expressions (Regex) In JavaScript](https://codeburst.io/an-introduction-to-regular-expressions-regex-in-javascript-1d3559e7ac9a)

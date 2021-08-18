# Is Matching Curly Brackets

This program contains the `isMatchingBrackets(str)` function. This function checks to see if the inputted string contains matching curly brackets/braces. For example, if we input `{}`, it should return `true`. Likewise, if we input `{{}`, it should return `false`.

# How it works
This fully recursive function does the following:
* removes the junk (_anything that isn't a curly brace_) from the string,
* finds bracket-pairs — `{}`,
* excludes the found bracket-pairs from the string by simply appending the remaining right onto the remaining left,
* and runs through the recursion.

# How it works — detailed
Finding bracket-pairs is from left to right:
```
"{{{}{}}}{}" , which recurses to
"{{{}}}{}" , which recurses to
"{{}}{}" , which recurses to
"{}{}" , which recurses to
"{}" , which recurses to
"" 
```
Our base cases are: `str.length == 0` or `str.length == 1`

# How to install and run on your local environment
In your terminal:
```linux
git clone https://github.com/adamgerhartz/IsMatchingCurlyBrackets.git
cd IsMatchingCurlyBrackets
npm install
npm test
```
Note: I'm not sure if you'll need to run `npm install -global mocha` before running `npm test`

# Output
<img width="1078" alt="Screen Shot 2021-08-18 at 12 31 33 AM" src="https://user-images.githubusercontent.com/55208138/129849099-065cba2a-2304-44ef-9b7d-7b6b61c4440e.png">

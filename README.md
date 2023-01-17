# This is hometask from QA Bootcamp, where I tried to test a few features from online shop https://www.newegg.com/

## How to test
- Install node.js
- Clone repository
- Run: `yarn install` command to install all dependencies
- Run: `yarn wdio` command to run tests

## My scenario choice (in add_to_cart.feature)
First scenario choice seemed obvious to me, because if we want to check "Adding to cart feature" first of all we have to check if we are able to add anything. I decided to test also changing quantity inside the cart in two critical situations, because I think it might be prone to errors and easy to miss during manual tests. 

## Tests results
`1st run results:`
> 2 passed, 2 total (100% completed) in 00:01:14

`2nd run results:`
> 2 passed, 2 total (100% completed) in 00:01:15

`3rd run results:`
> 2 passed, 2 total (100% completed) in 00:01:11

`4th run results:`
> 2 passed, 2 total (100% completed) in 00:01:14

`5th run results:`
> 2 passed, 2 total (100% completed) in 00:00:59

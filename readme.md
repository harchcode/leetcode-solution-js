This repository contains solutions to Leetcode's problems using Javascript. Thank you very much for your contribution!

# How to contribute
- Star this repo.
- Go to [Leetcode](https://leetcode.com) and sign up there.
- Go to problems page.
- Choose any problems to solve. Before you decide to contribute here, please make sure the problem you choose isn't already solved in this repo.
- Make PR.

# How to run test
- Install [NodeJS](https://nodejs.org).
- Clone this repo.
- Go into the project's directory.
- Run `npm install`.
- Run `npm run test:all` to run all test.
- To run test on individual file, run `npm test <name-of-file>`. For example, to run test on `476-number-complement.js`, run `npm test leetcode/476-number-complement.js`.

# Conventions
- Make sure to only add solutions into `leetcode` directory.
- Solution's file name should be `<problem-no>-<title-of-problem>.js`, for example `476-number-complement.js`.
- Make sure to copy the description of the problem into the file as comment. Please take some time to make it pretty.
- After the description, comes the solution.
- After the solution, comes the tests. We use [Ava](https://github.com/avajs/ava) for the test.
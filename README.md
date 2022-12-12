# T9 Keyboard

[![React](https://img.shields.io/badge/react-18.2.0-lightgrey)](https://reactjs.org)
[![TestingLibrary](https://img.shields.io/badge/@testing--library/react-13.4.0-lightgrey)](https://testing-library.com)
[![Prettier](https://img.shields.io/badge/prettier-2.8.1-lightgrey)](https://prettier.io)

Project that reproduces a telephone keypad with letters. Based on the input keys it returns all the possible letter combination.

**Commands**

- `yarn install`: installs all the dependencies
- `yarn start`: runs the project in `locahost:3000`
- `yarn test`: runs the tests

**Possible extensions**

- Move `wordsFromNumbers` to a dedicated backend service and filter the words through a dictionary
- Add a 'loading' status for long computations
- E2E tests with Cypress
- Improve aesthetics
- Add the `0` key to create spaces and start typing a new word
# End-to-End Testing with Cypress on Circle CI

## Author

- Ariel Duarte

## Configuration

Required to use Visual Studio Code as a IDE

[Download VS Code](https://code.visualstudio.com/download)

please install this extensions:

- [Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Then, in your user settings, make sure you enable formatting on save:

`"editor.formatOnSave": true`,
`"prettier.singleQuote": true`

## This project was generated with:

- [Cypress](https://www.cypress.io/) version 3.1.5.
- [Node](https://nodejs.org/en/) version 10.15.1.
- [Npm](https://www.npmjs.com/) version 6.4.1.
- [Mocha](https://mochajs.org/) version 5.2.0
- [Mochawesome](https://github.com/adamgruber/mochawesome) version 3.1.1

## Setup

- Step 1: Install node+npm (generally you get npm when you install node)

[Download Node](https://nodejs.org/en/download/)

> Important: Install LTS Node version (Recommended For Most Users)

- Step 2: Install node package

Go into app's directory and run `npm install` to install all needed node packages.

```
npm install
```

## Creating automated tests

Into the project we have a structure folders like this `src/` and here we are two folders `app/` and `cy-example`. The examples path `cy-example/cypress/integration` has some examples how to writte tests with cypress and into `app/cypress/integration` path we have our test folders structure separated by sections; `login` and `home` page.

Cypress's documentations has a good explanation to create tests [Link](https://docs.cypress.io/guides/getting-started/testing-your-app.html#Step-2-Visit-your-server)

## Running tests as a developer

Run `npm run cypress:open` into app's directory then cypress will opened a dialog with all integration tests and then you will find a `app` folder and select the test that you want to run.

```
npm run cypress:open
```

## Running All tests

```
npm test
```

> Important: this script run all tests on Electron browser.

[About Electron](https://electronjs.org/docs/tutorial/about)

## Running a specific test

```
npm run cy:run -- --spec "src/app/cypress/integration/login/login.spec.js"
```

## Running tests and generate Mochawesome report results

```
npm run test-aw
```

## Circleci project

- [Project Setup](https://circleci.com/gh/reyduar/E2ETestingWithCypress)

- [Report output](https://18-172927535-gh.circle-artifacts.com/0/root/app/mochawesome-report/mochawesome.html)

- Videos output

* [Login](https://18-172927535-gh.circle-artifacts.com/0/root/app/src/app/cypress/videos/login/login.spec.js.mp4)
* [Home](https://18-172927535-gh.circle-artifacts.com/0/root/app/src/app/cypress/videos/home/home.spec.js.mp4)

- [Screenshots fails tets](https://19-172927535-gh.circle-artifacts.com/0/root/app/src/app/cypress/screenshots/home/home.spec.js/Tests%20para%20la%20pagina%20de%20Inicio%20%28%2B%20Nueva%20Inscripci%C3%B3n%29%20--%20Visitar%20la%20p%C3%A1gina%20de%20Nueva%20Inscripci%C3%B3n%20%28failed%29.png)

## References

- https://www.cypress.io/
- https://onesoftwaretester.wordpress.com/2018/10/02/cypress-and-mochawesome/
- https://deliciousbrains.com/cypress-testing/
- https://github.com/cypress-io/cypress-example-docker-circle
- http://lance.bio/2018/04/08/cypress-io-data-list-processing/
- https://angularfirebase.com/lessons/cypress-angular-testing-end-to-end/

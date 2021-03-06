# Epic Software Sale API - WORK IN PROGRESS, NOT PRODUCTION READY

This is part of a product suite that allows you to build a full featured 
e-commerce system and to self host it. The platform includes an API, Web App, iOS and Android native apps.
All open source, all 100% free. [Contact us](mailto:justin@epic-software.co.uk) if you want bespoke hosting solutions.

## Installation

Follow these simple instructions to get up and running:

```bash
$ git clone https://github.com/justin-nodeboy/epic-software-pos-api.git
```
Once the project has been cloned, `cd` into the directory and run the following
```bash
$ npm install
```
You will next need to run a new mongoDB instance, your best bet is to use homebrew.
```bash
$ brew install mongodb
```
Finally you will need a `.env` file to store your environment variables.
```bash
$ touch .env
```
A sample of this would look like:
```bash
BRAND=Epic POS
PORT=3443
NODE_ENV=development
NODE_TLS_REJECT_UNAUTHORIZED=0
```
## Features

* Full unit test coverage
* Efficient API
* Easily customisable
* ES6 code base

## What needs doing
* Routes needed for basket checkout (I'll pick this up next)
* Functional tests of the API (Mocha/Chai or something else?)
* More unit tests, including mongo function tests
* Create docker file and image

## Other platform components
* Web App is located [here](https://github.com/justin-nodeboy/epic-software-pos-web)


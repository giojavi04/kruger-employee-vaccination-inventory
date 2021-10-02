
## Description
To run need install docker to init the app.

```bash
$ docker-compose -f docker.yml up
```

## Installation

```bash
$ npm install
```

## Running the app

```bash

# watch mode
$ npm run start:dev
```

## Create admin user

```bash
# send a request to
http://localhost:3000/users/generate-admin
```

## Swagger api

```bash
# You can see all api doc
http://localhost:3000/api/
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).

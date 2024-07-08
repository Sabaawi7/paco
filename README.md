# Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Docker Executin

To pull the docker image, you need to create a personal github token (Github -> Setting -> Developer Settings -> Personal Access Token -> Token Classic)
then run `docker login ghcr.io`, type in your username and then the token you previously created.

After successfully logging in, run `docker run -p 4200:4200 ghcr.io/sabaawi7/paco:latest
` to pull/run the latest version of the app. Once it runs, you can access the web app on your browser by navigate to `http://localhost:4200/`

## Running with Docker Compose

This repository contains the frontend of the application. To run both the frontend and the backend, follow these steps:

1. Clone this repository and the backend repository:
    ```bash
    git clone https://github.com/Sabaawi7/paco
    git clone https://github.com/Sabaawi7/pacoBackEnd
    ```

2. Open a terminal and create a Docker network:
    ```bash
    docker network create my_network
    ```

3. Navigate to each repository and run the following commands:
    ```bash
    docker-compose build
    docker-compose up
    ```

4. Ensure both frontend and backend are running. The backend repository can be found at [pacoBackEnd](https://github.com/Sabaawi7/pacoBackEnd). Access the frontend at `http://localhost:4200/` and the backend at `http://localhost:8000/admin`.
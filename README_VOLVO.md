# Volvo Cars Automated Test Suite

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Build the Docker image:
    ```sh
    docker-compose build
    ```

3. Run the tests:
    ```sh
    docker-compose up
    ```

## Configuration

- The WebdriverIO configuration file is located at `wdio.conf.js`.
- Update the `maxInstances` parameter to adjust the number of parallel test executions.

## Reporting

- Test reports are generated using the Allure reporter. To view the reports:
    ```sh
    allure generate allure-results --clean
    allure open
    ```

## Visual Regression Testing

- Visual regression tests are included using the `wdio-image-comparison-service`.

## Kubernetes

- For distributed testing using Kubernetes, see the `kubernetes` directory for setup instructions.
Install the wdio-image-comparison-service
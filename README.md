In order to carry out fundamental arithmetic operations like addition, subtraction, multiplication, and division via a REST API, this microservice was constructed using Node.js and Express. It is Dockerized on Docker Compose with a container health check and has Winston-based logging.


Prerequisites:

Node.js
Git
Visual Studio Code
Docker Desktop

Clone the Repository:

Cloned the GitHub repository to our local machine and navigated into the project directory.

Install Dependencies:

Installed all necessary Node.js packages for Express and Winston logging.

Run the Microservice:

Started the application locally using Node.js. The microservice will run on port 3000 and respond to HTTP requests at various endpoints.

API Endpoints:

Addition: /add?num1=5&num2=3

Subtraction: /subtract?num1=5&num2=2

Multiplication: /multiply?num1=5&num2=3

Division: /divide?num1=5&num2=2

Docker Setup:

Docker is used to containerize the application. The image is built using a Dockerfile, and the container is defined and executed using Docker Compose.

Health Check:
 
The Docker Compose file has a container health check set up to keep an eye on the /add endpoint. Docker is going to restart the container to preserve availability if the health check is unsuccessful.

Docker image:

The Docker image, thoufiyashaik/calculator-app, has been successfully uploaded to Docker Hub.

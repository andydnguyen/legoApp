## Microservices in Node.js

In microservices, every single service is independently deployable, scalable and updatable, this is what makes microservices such an appealing architectural approach to the industry.

## Example

In this example, I created a microservice using Node.js which connects to an external API.

The requirement for this service is to accept two Zip Codes and return the distance between them in miles.

## How-to

To run, open a console window and run type `npm start`

The port is define as 3000, open browser and naviate to http://localhost:3000/about

Now if you add two parameters, the two zip codes: http://localhost:3000/distance/32223/32258 the distance will return in miles

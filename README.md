<h1>Admin Panel API</h1>
<p>Using the Admin Panel API you can add / modify / read / delete companies and their employees</p>
Production URL - <a href="https://employee-companies-api.sabavar.redberryinternship.ge/" target="_blank">employee-companies-api.sabavar.redberryinternship.ge</a>

---

#

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Resources](#resources)

## Prerequisites

- <img style="padding-right:10px;" align="left"  src="readme/assets/NodeJs.png"   height="22"/> <p>_Node JS @12.X and up_</p>
- <img style="padding-right:10px;" align="left"  src="readme/assets/Npm.png"   height="20"/> <p>_npm @6 and up_</p>

#

## Tech Stack

- <img style="padding-right:10px;" align="left"  src="readme/assets/NodeJs.png"   height="25"/> <p><a href="https://nodejs.org/en/" target="_blank">[NodeJS @16.15.1]</a> - JavaScript runtime built on Chrome's V8 JavaScript engine<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/Express.png"   height="25"/> <p><a href="https://expressjs.com/" target="_blank">[Express @4.18.1]</a> - Fast, unopinionated, minimalist web framework for Node.js<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/MongoDb.png"   height="25"/> <p><a href="https://www.mongodb.com/" target="_blank">[MongoDB]</a> - Open source NoSQL database management program<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/Mongoose.png"   height="25"/> <p><a href="https://mongoosejs.com/" target="_blank">[mongoose @6.3.6]</a> - elegant mongodb object modeling for node.js<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/ExpressValidator.png"   height="25"/> <p><a href="https://express-validator.github.io/docs/" target="_blank">[express-validator @6.14.1]</a> - Middlewares that wraps validator.js validator and sanitizer functions<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/JsonWebToken.png"   height="25"/> <p><a href="https://jwt.io/" target="_blank">[JSON Web Token @8.5.1]</a> - RFC 7519 method for representing claims securely between two parties<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/Swagger.png"   height="25"/> <p><a href="https://www.npmjs.com/package/swagger-ui-express" target="_blank">[Swagger UI Express @4.4.0]</a> - Serve auto-generated swagger-ui generated API docs from express<p/>

#

## Getting Started

1\. First of all you need to clone repository from github:

```sh
git clone https://github.com/RedberryInternship/company-employees-api-Var-Saba.git
```

2\. Next step requires install all the dependencies

```sh
npm install
```

or

```sh
yarn install
```

3\. Copy .env

```sh
cp .env.example .env
```

4\. If you want you can also change default configuration of .env file and connect to mongodb

```sh
MONGO_DATABASE=adminPanel
MONGO_HOST=localhost
MONGO_PORT=27017

SERVER_PORT=3000

ACCESS_TOKEN_SECRET=secret-text

USER_PASSWORD=***
USER_EMAIL=***
```

5\. after that you can run Admin Panel API from terminal:

```sh
npm run dev
```

6\. To create new user from the terminal run the following command:

```sh
npm run user:create
```

To see swagger documentation visit [localhost:3000/api-docs/](http://localhost:3000/api-docs/)

#

#

## Project Structure

```bash
├─── readme
├─── src
│    ├── bin
│    ├── config
│    ├── controllers
│    ├── middlewares
│    ├── models
│    ├── routes
│    └── schemas
- .env
- .eslintrc.json
- .gitignore
- .prettierrc.json
- package.json
- README.md


```

#

## Resources

- [Application Details](https://redberry.gitbook.io/assignment-iii-admin-panel-api/)
- [Git commit rules](https://redberry.gitbook.io/resources/git-is-semantikuri-komitebi)

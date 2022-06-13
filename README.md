<h1>Admin Panel API</h1>
<p>Using the Admin Panel API you can add / modify / read / delete companies and their employees.</p>

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

- <img src="readme/assets/NodeJs.png" width="40" style="position: relative; top: 8px" /> _Node JS @12.X and up_
- <img src="readme/assets/Npm.png" width="40" style="position: relative; top: 4px" /> _npm @6 and up_

#

## Tech Stack

<ul style="display:flex; flex-direction:column; gap:10px;">

<div style="display:flex; align-items:center;">
<img style='display:block;' src="readme/assets/NodeJs.png" height="25"/>
<div style='padding-left:5px;'>
<a href="https://nodejs.org/en/">[NodeJS @16.15.1]</a> - JavaScript runtime built on Chrome's V8 JavaScript engine.
</div>
</div>

<div style="display:flex; align-items:center;">
<img style='display:block;' src="readme/assets/MongoDb.png" height="25"/>
<div style='padding-left:5px;'>
<a href="https://www.mongodb.com/">[MongoDB]</a> - Open source NoSQL database management program.
</div>
</div>

<div style="display:flex; align-items:center;">
<img style='display:block;' src="readme/assets/Express.png" height="25"/>
<div style='padding-left:5px;'>
<a href="https://expressjs.com/">[Express @4.18.1]</a> - Fast, unopinionated, minimalist web framework for Node.js
</div>
</div>

<div style="display:flex; align-items:center;">
<img style='display:block;' src="readme/assets/Mongoose.png" height="25"/>
<div style='padding-left:5px;'>
<a href="https://mongoosejs.com/">[mongoose @6.3.6]</a> - elegant mongodb object modeling for node.js
</div>
</div>

<div style="display:flex; align-items:center;">
<img style='display:block;' src="readme/assets/ExpressValidator.png" height="25"/>
<div style='padding-left:5px;'>
<a href="https://express-validator.github.io/docs/">[express-validator @6.14.1]</a> - Set of express.js middlewares that wraps validator.js validator and sanitizer functions.
</div>
</div>

<div style="display:flex; align-items:center;">
<img style='display:block;' src="readme/assets/JsonWebToken.png" height="25"/>
<div style='padding-left:5px;'>
<a href="https://jwt.io/">[JSON Web Token @8.5.1]</a> - Industry standard RFC 7519 method for representing claims securely between two parties.
</div>
</div>

<div style="display:flex; align-items:center">
<img style='display:block;' src="readme/assets/Swagger.png" height="25" />
<div style='padding-left:5px;'>
<a href="https://www.npmjs.com/package/swagger-ui-express">[Swagger UI Express @4.4.0]</a> - Allows you to serve auto-generated swagger-ui generated API docs from express
</div>
</div>

</ul>
#

## Getting Started

1\. First of all you need to clone repository from github:

```sh
git clone https://github.com/RedberryInternship/company-employees-api-Var-Saba.git
```

2\. Next step requires install all the dependencies.

```sh
npm install
```

or

```sh
yarn install
```

3\. copy .env

```sh
cp .env.example .env
```

4\. after that you can run Admin Panel API from terminal:

```sh
npm run dev
```

5\. To create new user from the terminal run the following command:

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

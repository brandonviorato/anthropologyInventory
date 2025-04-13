# Anthropology Inventory Mangement Application 💀🔍
This app is built to help Green River College's Anthropology department in organizing and tracking their artifact inventory.

#### Tools used & Links:
- [Electron-Vite](https://evite.netlify.app): Used to create a lightweight app with Electron and Vite.
- [React](https://react.dev/): Helped to reduce redundancy through the use of components.
- [Node.js](https://nodejs.org/en): For the backend API.
- [Express.js](https://expressjs.com/): Framework for Node.js, helped streamline development.
- [MongoDB](https://www.mongodb.com/): Opted for Mongo due to the clients budget constraint and desire to keep application local.
- [npm-run-all](https://www.npmjs.com/package/npm-run-all): Used to run both front and backend simultaneously with one script.

## Table of contents:
- [How to contribute](#how-to-contribute)
- [Credits](#credits)

## How to Contribute
1) To contribute first create a branch and name it according to the feature/update you'll be working on.
   - This branch is where you'll be pushing your changes.  
2) In your development environment of choice, create a copy of the repo.
   - **Prior to coding, ensure you're working within the correct branch**.
3) From the main folder:
   - run __`npm run install`__ to install all dependencies needed.
4) Next, change directories into the __`api`__ folder:
   - Within the folder is a __`.env.example`_ file, use this to create a __`.env`__ file.
   - The file should include:
     - __`PORT=____`__ where you specify a port for the api to run, this should be different from the frontend.
     - __`MONGO_URI=___`__ this variable will need to be requested and shouldn't be shared.
     - Lastly, __ensure the `.env` file is added into the `.gitignore file`__. This is important in maintaining security.
5) After, change directiories back to the main using __`cd .. `__
   - run __`npm run dev`__ and both the frontend and backend will be started.


## Credits

### Dev Team
This app was built by:
- [@Gecervantes01](https://github.com/Gecervantes01)
- [@Mingrkli](https://github.com/Mingrkli)
- [@kaur000](https://github.com/kaur000)
- [@brandonviorato](https://github.com/brandonviorato)

### Client
We created this app in partnership with our client _Madeleine Aguilar_ -- a professor working in the Department of Anthropology at Green River College. She'll be the main point of contact moving forward in regards to the future of the project.

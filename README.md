# Anthropology Inventory Mangement Application 💀🔍
This app is built to help Green River College's Anthropology department in organizing and tracking their artifact inventory.

#### Tools used & Links:
- [Vite](https://vite.dev/): Used to improve frontend performance.
- [React](https://react.dev/): Helped to reduce redundancy through the use of components.
- [Node.js](https://nodejs.org/en): For the backend API.
- [Express.js](https://expressjs.com/): Framework for Node.js, helped streamline development.
- [MongoDB](https://www.mongodb.com/): Opted for Mongo due to the clients budget constraint and desire to keep application local.
- [Electron](https://www.electronjs.org/): Enabled us to build a desktop app with react.

## Table of contents:
- [How to contribute](#how-to-contribute)
- [Credits](#credits)

## How to Contribute
1) To contribute first create a branch and name it according to the feature/update you'll be working on.
   - This branch is where you'll be pushing your changes.  
2) In your development environment of choice, create a copy of the repo.
   - **Prior to coding, ensure you're working within the correct branch**.  
3) Next you'll need to change directories into the __`frontend`__ folder.
   - From here you'll run __`npm install`__ in the console.
   - A link should then display in the terminal, allowing you to view the frontend running on your local machine.
4) Similarly to step 3, you'll now need to change directories to the __`api`__ folder.
   - Again, run __`npm install`__ in the console.
   - Unlike the frontend, we'll need to follow a few more steps to get the backend working properly.
5) In the __`api`__ folder, create a __`.env`__ file.
   - Within the file include:
     - __`PORT=____`__ where you specify a port for the api to run, this should be different from the frontend.
     - __`MONGO_URI=___`__ this variable will need to be requested and shouldn't be shared.
     - Lastly, __ensure the `.env` file is added into the `.gitignore file`__. This is important in maintaining security.


## Credits

### Dev Team
This app was built by:
- [@Gecervantes01](https://github.com/Gecervantes01)
- [@Mingrkli](https://github.com/Mingrkli)
- [@kaur000](https://github.com/kaur000)
- [@brandonviorato](https://github.com/brandonviorato)

### Client
We created this app in partnership with our client _Madeleine Aguilar_ -- a professor working in the Department of Anthropology at Green River College. She'll be the main point of contact moving forward in regards to the future of the project.

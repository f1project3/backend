# F1 App - Backend

#### The backend of a full-stack application built as Project 3, a group project.

## DESCRIPTION 
F1 App - Backend is one half of the F1 application designed to allow F1 fans to learn more about their favorite F1 teams and drivers. 

## TABLE OF CONTENTS
* [Technologies Used](#technologiesused)
* [Features](#features)
* [Project Management](#projectmanagement)
* [Installation Instructions/Getting Started](#installation-instructionsgetting-started)
* [Deployed Backend](#deployedbackend)

## <a name="technologiesused"></a>TECHNOLOGIES USED: 
* HTML5 
* JavaScript 
* Express 
* Node 
* Mongoose

## <a name="features"></a>FEATURES
* Users can create, read, update, or destroy items from the working JSON API 



## <a name="installationinstructions/gettingstarted"></a>INSTALLATION INSTRUCTIONS/GETTING STARTED
* Fork the Backend Repository 

 ![Fork Backend Repository](./public/imgs/backend_fork.png)

* Copy that Repository code 

![Copy Backend Repository Code](./public/imgs/Copy_backend_url.png)

* In Terminal, mkdir a directory for your code (**Hint**: it can be called backend)

 ![Create Repo Directory](./public/imgs/mkdir_repo_directory.png)

* CD into your directory

 ![Cd into Directory](./public/imgs/cd_repo.png)  

* Clone the Repository to your local machine by typing git clone (+url) and hit enter 

 ![Create Repo Directory](./public/imgs/git_clone_repo.png)

* Once the repository has been cloned, cd into it and `npm install` to download all dependencies

 ![NPM Install](./public/imgs/npm_install.png)
 
* This should download any and all dependencies affliated with the file, however, if it does not, `npm i` the following dependencies: 
        - cors 
        - express 
        - dotenv 
        - mongoose

 ![Downloading Dependencies Individually](./public/imgs/downloading_dependencies.png)

* Create a .env file and add the port listed in the DriverList.jsx file housed in the Frontend repository.
* Once created, start the server by typing `nodemon` into the IDE's terminal 
* A working server will feature a messsage such as the example below: 

 ![Backend Nodemon Working](./public/imgs/backend_nodemon.png)

## <a name="deployedbackend"></a>DEPLOYED BACKEND
The Backend of the F1 App can be accessed via this link: [https://backend-esrb.onrender.com](https://backend-esrb.onrender.com)

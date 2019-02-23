# SoftwareEngineering
Software Engineering Project

## 2/5/2019
### Getting started with git & GitHub

1. Make sure git is installed on your system. If you type "git" into your
command line/terminal and you don't get a reference for git commands, take these
steps to install git:

https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

2. Make a GitHub account

https://github.com/

3. Follow this guide to generate a key so you have access to GitHub repositories
through git:

https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/

### Contributing to the Application

1. While logged in to your account, navigate to the original repository page
(https://github.com/jharvey8/SoftwareEngineering)

2. Press the "fork" button on the upper right. This will create a copy of the repository
under your own repositories.

3. Open a command line/terminal. Navigate to the directory you want this repository to
be downloaded to, and type:

`git clone git@github.com:[Your GitHub username here]/SoftwareEngineering`

4. Enter the project directory in your command line/terminal.

5. To connect your local repository to the original on GitHub that it was forked from,
type:

`git remote add jharvey git://github.com/jharvey8/SoftwareEngineering`

6. Every time you sit down to start making changes, you should pull from the
original repository's master branch to make sure you are up to date before starting your work:

`git pull jharvey master`

7. Then, you should push any updates to your own online repository:

`git push`

8. Make your changes. Add and commit them each time:

`git add -A`

`git commit -m "[short description of the changes here]"`

9. At your discretion, push your changes to your online repository:

`git push`

10. When you want to request that your changes be added to the original repository,
you must make a pull request. This process is documented here:

https://help.github.com/articles/creating-a-pull-request-from-a-fork/

John is the repository owner and is currently responsible for handling these pull
requests, so make sure to communicate with him when you send one.

<strike> ### Initializing Application

1. If you don't already have it, download and install Node.js
https://nodejs.org/en/

This will give you Node Package Manager as well, which we will be using over the
course of this project.

2. In the command line/terminal, navigate to the SoftwareEngineering/GhoulAlert directory

3. Initialize the application with the following command:

`node app.js`

4. Open a browser and navigate to http://localhost:3000 to access the web view of
the application.</strike>

## 2/23/2019
### Node Package Manager (npm)

Node package manager helps us to install packages among different environments
that will help us to accomplish various features, including database support and
object relations. Some important points:

* The project itself is in the GhoulAlert directory. npm commands will not work if
you use them from the SoftwareEngineering directory.

* Every time you pull from a remote repository or install new packages, run the following
command:

`npm install`

This will install every dependency locally. This is important to do, as you will
not receive the modules themselves from a pull.

* To install a package to the project, use the command:

`npm install [package]`

If you find a package online, it will usually tell you what keyword you need to
use in the place of [package] to install it, and any command line options you
can use to modify the installation.

* To install a package to your own machine (globally) instead of the project itself,
use the same command but with the following option:

`npm install [package] -g`

You will usually only want to do this with special packages that generate or compile code, etc.

### Run the Express Application

1. In the command line/terminal, navigate to the SoftwareEngineering/GhoulAlert directory

2. Run the application with one of the following commands:

#### Standard, non-debug mode
Has no debug console. Will not refresh the server on changes.

`npm run start`

#### Standard, debug mode
Has debug console. Will not refresh the server on changes.

`DEBUG=ghoulalert:* npm run start`

#### Nodemon, non-debug mode
Has no debug console. Uses the nodemon package to refresh the server on changes.

`npm run devstart`

#### Nodemon, debug mode
Has debug console. Uses the nodemon package to refresh the server on changes.
This is the most useful option for development.

`DEBUG=ghoulalert:* npm run devstart`

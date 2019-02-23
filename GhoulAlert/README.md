# GhoulAlert Structure

## app.js

Application entry point. One of the most important/relevant functions of this
script is to establish which routers are used for a given path.

See lines 7-8 and 22-23 as of 2/23/2019:

```
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
```
Lines 7-8 *import the scripts, defining where they are located in the directory structure* and *stores them
in variables that are later used*.

```
app.use('/', indexRouter);
app.use('/users', usersRouter);
```
Lines 22-23 then *define what paths these router scripts are assigned to*. The indexRouter
is used for the base path (/), while the usersRouter is used for the users path (/users).

## package.json

This is the package file that npm uses. As long as npm is being utilized, this will
probably not be touched manually unless package versions need to be modified.

#Note app

# What this app is all about

This project is a note app. Its as simple as it sounds. Also if you have too many notes, you can search through them all with the search bar.

## how to open app

The fastest way to open the app is this link => https://safe-badlands-19535.herokuapp.com/

# OR

Fork from https://github.com/Yasin162/noties

1. Open your terminal and then change directory until you get to a place where you want to clone it.

2. Next cd into the directory you just cloned.

3. Run `install bundle` in your terminal

4. cd into the client directory

5. Run `npm install` in your terminal

6. Make sure you are still in the client directory of the project and run `npm start`

7. Open another terminal and change directory to cloned project

8. Run `rails s` in your terminal

9. Enjoy!

## Features

    create a note with up to 300 characters
    search through notes to easily find a note
    easily edit a note and save it
    sorts notes from oldest to newest
    delete a note

# How it was made

I used react for the frontend, ruby on rails for the backend, and as for the database I used postgresql for active record. Active record helped with making the methods to run sql to interact with the database. I have two models called user and note. Three controllers session controller which is an encrypted cookie, so you will need to enable cookies. and the other two controllers is the user and note controller. I made 8 routes, 4 of them (get , update, create, and destroy) are for the note controller. For the user controller I have a create and get. and for the session I have create and destroy.

The frontend I have context that holds the user state to let the rest of the app know if the user is signed in. Also I have the a logout and sign in function in context. Both of those functions allow me to change the user state and say if the user is logged in or logged out. Then I for set up the related http request I made in the backend to the frontend. The notes are textarea boxes styled with some css.

# Credits

@Yasin162

# RC Crawler Competition Tracker

## Project Details
This project was created to get rid of the pen and paper tracking system implemented at current RC rock crawling competitions, thus reducing user error. As it  currently stands there are multiple standards for points systems that can vary from competition to competition. The ultimate goal of this project is to create a flexible application that can be used for various competitions and events with varying point multipliers.

## Technical Details 
It will be made up of both a mobile application and a web application. Both applications will be backed by the same mongo database.

### Web application
This will be written in Javascript

### Mobile Application
This will be written in React Native so it can be used on both on android and apple devices in the future

### Mongo Database
This will be constructed based on the event being the document name. This will further break down into competitors which will break down into various points data including the total points for that competitor which will be calculated in the application side before being sent over to the database.

## Future Features:
* Login for users so they don't have to re-enter name. 
* Locate event on maps. 
  * Event will take in an address on creation
* See schedule of events
* Find event based on name

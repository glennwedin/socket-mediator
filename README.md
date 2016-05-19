# socket-mediator
Mediator for frontend socket handling
The mediator is the "Notifications"-object in index.html
It lets you register modules to listen for and receive notifications when there is any.
The module also lets you create notifications.


To run:
```javascript
npm install -g browser-sync
npm install
npm start
```
Register listener
```javascript
/*Callback*/
var handleData = function (data) {
//do stuff with the received data
}

/*Depends on a instance of socket.io*/
var notify = new Notifications(socket);
notify.listen(handleData);
```
Create notification
```javascript
/*Depends on a instance of socket.io*/
var notify = new Notifications(socket);
notify.create({
    title: "Notification title",
    notification: "This is the actual notification";
});
```

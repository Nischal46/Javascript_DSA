//NOTE; callback concept;
//NOTE: high order fn 
function Login(callbackFn){
  setTimeout(() => {
    //after Login
    console.log("Login successfully");
    callbackFn();
  }, 4000);
}

function LoadDashboard(callbackFn){
  setTimeout(() => {
    console.log("Loaded dashboard successfully");
    callbackFn();
  }, 2000)
}

function NotificationAlert(){
  setTimeout(() => {
    console.log("Notification alert");
  },1000)
}

//callback hell
Login(function() {
  LoadDashboard(function () {
    NotificationAlert();
  });
});



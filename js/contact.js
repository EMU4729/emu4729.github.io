(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk')); //luke why - samuel


// TODO: 
// document.getElementById("send").onclick = function () {
//   var name = document.getElementById("name");
//   var email = document.getElementById("email");
//   var msg = document.getElementById("message");
// }
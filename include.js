

function storequestion() {
var JSONObject = {
  "":"John Johnson",
  "street":"Oslo West 16", 
  "age":33,
  "phone":"555 1234567"};
document.getElementsByTagName("jname").innerHTML=JSONObject.name;
document.getElementById("jage").innerHTML=JSONObject.age;
document.getElementById("jstreet").innerHTML=JSONObject.street;
document.getElementById("jphone").innerHTML=JSONObject.phone;
}
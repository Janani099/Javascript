//xml http request
//create an ml http instance(obj)
var request = new XMLHttpRequest();
//initiate a new connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending request  to server
request.send();
//if server responded successfully,we need to retrive the data
request.onload = function()
{
    var data = JSON.parse(this.response);
       console.log(data);

for(var i=0;i<data.length;i++)
{
    console.log(data[i].name);
}
   
}
var express = require('express'); 
var app = express(); 

app.get("/", function(req, res){
	res.send("ho ho ho"); 
}); 

app.listen(8080, function(){
	console.log('express server running on port 8080'); 
})
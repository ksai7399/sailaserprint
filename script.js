// Script for navigation bar
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.get("/products", function(req, res){
  res.sendFile(__dirname + "/sproduct.html");
});

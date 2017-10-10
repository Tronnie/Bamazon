var inquirer = require ('inquirer');

var mysql = require ('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "bamazonDB"
}); //<--var connection

connection.connect(function(err){
  if (err) throw err;
  console.log ("connected as id " + connection.threadId);

//1.Testing...
function readProducts(){
   connection.query("SELECT  * FROM products", function(err, res){
     if (err) throw err;
     console.log("\n-------------------------");
     console.log(res);
     });
   };

readProducts();



/////THIS WORKS!
//   inquirer.prompt([
//     {
//       type: "rawlist",
//       name: "choice",
//       message: "Welcome to Bamazon! What would you like to do today?",
//       choices: ["Browse",
//               "Purchase",
//               "Quit"]
//     }]).then(function(response) {
//       console.log(response.choice)
// ///////view products
//       if (response.choice === "Browse") {
//         console.log("Here are the products")
//       } //<--browse
// ///////purchase products
//       else if (response.choice === "Purchase"){
//         console.log("Pick a product by ID number.")
//       } //<--purchase
// ///////quit
//       else if (response.choice === "Quit"){
//         console.log ("See ya next time!")
//       } //<--quit
//     }) //<--.then







    connection.end();

}) //<--the connection.connect


/////WIP Snippets
// function readProducts(){
//   connection.query("SELECT * FROM products", function(err, res){
//     if (err) throw err;
//     console.log(res);
//     });

var inquirer = require ('inquirer');

var mysql = require ('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "bamazonDB"
});

connection.connect(function(err){
  if (err) throw err;
  console.log ("connected as id " + connection.threadId);
  start();

function start(){
  inquirer
    .prompt({
        type: "rawlist",
        name: "choice",
        message: "Welcome to Bamazon! What would you like to do today?",
        choices: ["Browse","Purchase","Quit"]
      })
      .then(function(response) {
        console.log(response.choice)
        if (response.choice === "Browse") {
          console.log("Here are the products");
          browseItems();
        } //<--browse
        else if (response.choice === "Purchase") {
          console.log("Pick a product by ID number.");
          purchaseItem();
        } //<--purchase
        else if (response.choice === "Quit"){
          console.log ("See ya next time!");
          start();
        } //<--quit
      }) //<--.then
} //<--function start


//1.this works! but doing auto display
function browseItems(){
  console.log("\n-------------------------");
  connection.query('SELECT * FROM products', function(err, res){
    // if (err) throw err;
    console.log(res);
  });
};



//2.  Testing... Purchase...line 91 Great Bay
function purchaseItem(){
  connection.query("SELECT * FROM products", function (err, res) {
    // if (err) throw err;
      console.log("\n-------------------------");
      console.log(res);
      console.log("\n-------------------------");
      inquirer
        .prompt([
          {
          name: "choice",
          type: "rawlist",
          choices: function(){
            var choiceArray =[];
            for (var i = 0; i < results.length; i++){
            choiceArray.push(results[i].product_name);
              }
              return choiceArray;
            },
            message: "Which Item would you like to purchase?"
          },
          {
            name: "qty",
            type: "input",
            message: "How many of the item would you like to purchase?"
          }
      ])
      .then(function(answer){
        var chosenItem;
        for(var i =0; i < results.length; i++){
          chosenItem = results[i];
        }
      })
      if (chosenItem.stock_qty < answer.qty) {
        connection.query(
          "UPDATE products SET ? WHERE ?"
          [
            {
          ///LINE 132
              stock_qty: 666
            },
            {
              id: choseItem.id
            }
          ],
          function (error){
            if (error) throw err;
            console.log ("quantities updated");
            start();
          }
        );
      }
      else {
        console.log("There is not enough stock to fill your order");
      }
  })
}

connection.end();

}) //<--the connection.connect


/////WIP Snippets

// function readProducts(){
//    connection.query("SELECT  * FROM products", function(err, res){
//      if (err) throw err;
//      console.log("\n-------------------------");
//      console.log(res);
//      });
//    };
//
// readProducts();

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

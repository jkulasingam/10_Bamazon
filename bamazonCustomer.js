var mysql = require("mysql");
var inquirer = require("inquirer");


// connection info for mysql db
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: 'tweeks',
	database: 'bamazon_db'
});

//connect to the mysql server and db
connection.connect(function(err) {
	if(err) throw err;
});

function displayInventory() {
	// Construct the db query string
	queryStr = 'SELECT * FROM products';
	// Make the db query
	connection.query(queryStr, function(err, data) {
		if (err) throw err;
		// console.log('___ENTER displayInventory___');
		console.log('Existing Inventory: ');
		console.log('===================\n');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].item_id + '\n';
			strOut += 'Product Name: ' + data[i].product_name + '\n';
			strOut += 'Price: $' + data[i].price + '\n';
			strOut += '-----------'

			console.log(strOut);
		}
	  	console.log("=====End of Inventory=====\n");
	  	console.log("=====Hit Enter To Purchase Items=====\n");
	})
};
displayInventory ();

// Validates user input
function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
};

function userPrompt() {
	inquirer.prompt([
	{
		type: 'input',
		name: 'item_id',
		message: "Please enter the Item ID of the product you would like to purchase: ",
		validate: validateInput,
		filter: Number
	},
	{
		type: 'input',
		name: 'quantity',
		message: "Please enter the Quantity of the product you would like to purchase: ",
		validate: validateInput,
		filter: Number
	}
	]).then(function(input) {
		var item = input.item_id;
		var quantity = input.quantity;
		var queryStr = 'SELECT * FROM products WHERE ?';
		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;

			if (data.length === 0) {
				console.log('===Invalid Item ID: Please enter a valid Item ID===');
				displayInventory();
			} else {
				var productInfo = data[0];
				if (quantity <= productInfo.stock_quantity) {
					console.log("The item requested is in stock and available!");
					var
				}
			}
		})

	})
}; userPrompt();





















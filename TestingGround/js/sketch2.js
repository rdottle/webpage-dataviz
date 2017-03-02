
//created variables
var MyData = [12, 3, 56, 607, 23]
var labels = ['Colombia', 'Brazil', 'Peru', 'Chile', 'Venezuela']

var dataset = [];                        //Initialize empty array
// var refugeecount = refugeeTable.getColumn('Refugees');
//load Refugee Data from csv
var refugeeTable; 
var maxLength = 750;
var maxValue = 0;
var maxLength = 550;


function preload(){
	refugeeTable = loadTable('../data/RefugeesUNHCR.csv', 'csv', 'header');
		console.log('Done loading table...');

}

//create canvas

function setup(){
	createCanvas(1200, 1200);
	console.log('Setup complete...');
	textAlign(RIGHT, TOP);
	print(refugeeTable);
	print(refugeeTable.getRowCount() + " total rows in table");
  	print(refugeeTable.getColumnCount() + " total columns in table");
  	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
  		maxValue = max(maxValue, refugeeTable.getNum(i, 'Total'));
  	}
  	print(maxValue);
}

/*var refugeecount = refugeeTable.getColumn('Refugees');
*/

function draw(){
	background(255);
	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
		var rectLength = map(refugeeTable.getNum(i, 'Total'), 0, maxValue, 0, maxLength);
		rect(100, 20*i, rectLength, 15);
	}
	console.log('rectangles printed');	
}

/*function draw(){
	background(255);
	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
		rect(50 + 20*i, refugeeTable.getNum(i,'Total'), 15);
/*function draw(){*/
	/*background(255);
	for (var i = 0; i < 25; i++) {           //Loop 25 times
    var newNumber = Math.random() * 30;  //New random number (0-30)
    dataset.push(newNumber); 
    rect(50 + 30*i,50, dataset[i], 100);

}*/


// Draw function 

// function draw(){
// 	background(255);
// 	for (var i = 0; i < MyData.length; i++) {
// 		rect(80, 50 + 130*i, MyData[i], 100);
// 		text(MyData[i], (100 + MyData[i]+10), 70 + 130*i);
// 	}

// 	for (var i = 0; i < labels.length; i++) {
// 		text(labels[i], 70, 70 + 130*i);
// 	}

// }
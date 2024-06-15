let table = document.getElementById("table")
fillTable();
function fillTable(){
	let numbersOfRows = [];
	for(let indexOfRow = 0; indexOfRow <= 10; indexOfRow++){
		numbersOfRows.push(indexOfRow);
	}
	let lettersOfColumns = "ABCDEFGH".split("");

	numbersOfRows.map(function(numberOfRow) {	
		let row = document.createElement("div");
		row.classList.add("flex");
		row.classList.add("row");
		table.appendChild(row);

		let numberOfRowDiv = document.createElement("input");
		numberOfRowDiv.value = numberOfRow;
		row.appendChild(numberOfRowDiv);

		lettersOfColumns.map(function(letterOfColumn) {
			let cell = document.createElement("input");
			cell.classList.add("cell");
			cell.classList.add("cellRow" + numberOfRow);
			cell.classList.add("cellCollumn" + letterOfColumn);
			if(numberOfRow == 0){
				cell.value = letterOfColumn;
			}
			row.appendChild(cell);
		})
	})
}

'use strict';

/**
 * Create multiply table
 *
 * @returns {Array}
 */
function createMultiplyTable() {
	var result = [];
	var tdInner;
	for (var i = 1; i <= 10; i++) {
		for (var j = 1; j <= 10; j++) {
			tdInner += '<div style="padding: 5px">' + i + '*' + j + '=' + (i * j) + '</div>';
		}

		result.push(tdInner);
	}
	return result;
}

/**
 * Render multiply table
 *
 * @param source
 */
function renderMultiplyTable(source) {
	var body = document.querySelector('body');
	var table = document.createElement('table');
	var tr, td;

	table.style.width = '100%';
	table.setAttribute('border', 1);

	for (var i = 1; i <= source.length; i++) {
		td = document.createElement('td');
		if (i == 1 || i == 6) {
			tr = document.createElement('tr');
		}

		td.innerHTML = source[i];
		tr.appendChild(td);

		if (i == 5 || i == 10) {
			table.appendChild(tr);
		}
	}
	body.appendChild(table);
}

function outputTable() {
	var table = createMultiplyTable();
	renderMultiplyTable(table);
}

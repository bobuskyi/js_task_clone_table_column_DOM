'use strict';

const tbodyRows = document.querySelectorAll('table tbody tr');
const theadPosition = document.querySelectorAll('table thead th')[1];
const theadAge = document.querySelectorAll('table thead th')[3];
const theadPositionCopy = theadPosition.cloneNode(true);
const tfootPosition = document.querySelectorAll('table tfoot th')[1];
const tfootAge = document.querySelectorAll('table tfoot th')[3];
const tfootPositionCopy = tfootPosition.cloneNode(true);

theadAge.after(theadPositionCopy);
tfootAge.after(tfootPositionCopy);

for (const row of tbodyRows) {
  const rowCells = row.querySelectorAll('td');
  const tdPosition = rowCells[1];
  const tdAge = rowCells[3];
  const tdPositionCopy = tdPosition.cloneNode(true);

  tdAge.after(tdPositionCopy);
}

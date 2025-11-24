interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",  
    age: 22,    
    location: "Los Angeles"
};
const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
["First Name", "Location"].forEach((h) => {
  const th = document.createElement("th");
  th.textContent = h;
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");
table.appendChild(tbody);

document.body.appendChild(table);

studentsList.forEach((s) => {
  const row = document.createElement("tr");

  const cellName = document.createElement("td");
  cellName.textContent = s.firstName;
  row.appendChild(cellName);

  const cellLocation = document.createElement("td");
  cellLocation.textContent = s.location;
  row.appendChild(cellLocation);

  tbody.appendChild(row);
});
// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Accra",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Kumasi",
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Render a table with firstName and location
const table: HTMLTableElement = document.createElement("table");
table.border = "1";

// Table header
const headerRow: HTMLTableRowElement = table.insertRow();
const nameHeader = headerRow.insertCell();
nameHeader.textContent = "First Name";
const locationHeader = headerRow.insertCell();
locationHeader.textContent = "Location";

// Append each student row
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Append table to the body
document.body.appendChild(table);

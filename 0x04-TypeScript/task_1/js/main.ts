// Task 1: Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Task 2: Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


// Interface for the printTeacher function

interface printTeacherFunction {
    (teacher: { firstName: string; lastName: string }): string;
}

// Function implementation that accepts an object
const printTeacher: printTeacherFunction = (teacher: { firstName: string; lastName: string }): string => {
    return `${teacher.firstName.charAt(0)}. ${teacher.lastName}`;
};
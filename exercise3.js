// Part A
let classRoster = 
["Alice", "Tom", "Charlie", "Diana", "Evan"];

console.log(classRoster.toString());
console.log(classRoster)

classRoster.push("Fiona");
classRoster.push("Nancy");

let removed = classRoster.shift();
console.log(removed);


console.log(classRoster);

console.log(classRoster.lengt);
// Part B
let classInfo = {
    className: 'ENSF381: Full-Stack Web Development',
    instructor: 'Dr. Smith',
    students: classRoster,
    details: {
        semester: 'Winter',
        year: 2025
    }};

classInfo.schedule = ["Monday", "Wednesday", "Friday"];

classInfo.instructor = 'Dr.Abdellatif';


console.log(classInfo.className);
console.log(classInfo.instructor);
console.log(classInfo.students);
console.log(classInfo.details.semester);
console.log(classInfo)

let { className, students } = classInfo;
console.log(className);
console.log(students);

let {semester, year} = classInfo.details;
console.log(semester);
console.log(year);

let [student1, student2, ...remainingStudents] = classRoster;

console.log(student1);
console.log(student2);
console.log(remainingStudents);










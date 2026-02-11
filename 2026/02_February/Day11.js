// Day 11
//question 1


const students = [
    { name: "Alice", score: 95 },
    { name: "Bob", score: 42 },
    { name: "Charlie", score: 68 },
    { name: "Diana", score: 81 },
    { name: "Eve", score: 93 },
    { name: "Frank", score: 55 },
];

const filterStudents = students.filter((student) => student.score >= 60);

console.log(filterStudents);

const mapStudents = filterStudents.map((student) => {
    return {
        name: student.name,
        score: student.score,
    };
});

console.log(mapStudents);

    
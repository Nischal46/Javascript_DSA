// sorting student details according to their highest mark obtained

let stresult = [
    {
        name: 'abc',
        percentage: 89
    },
    {
        name: 'cde',
        percentage: 93
    },
    {
        name: 'fgh',
        percentage: 77
    },
    {
        name: 'ijk',
        percentage: 72
    }
]

const sorting = stresult.sort((a, b) => a.percentage - b.percentage);
console.log(sorting);
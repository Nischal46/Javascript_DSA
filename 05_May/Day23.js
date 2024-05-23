let moviesarray = [
    {
        id: 's123',
        name: 'kung fu panda 2',
        type: 'action'

    },

    {
        id: 's432',
        name: 'Intestellar',
        type: 'science-fiction'
    },

    {
        id: 's654',
        name: 'inception',
        type: "science-fiction"
    }
]

let movienamearray = moviesarray.flatMap(cl => cl.name);
console.log(movienamearray);

let typemovie = moviesarray.filter(cl => {
    if(cl.type === "science-fiction"){
        return cl.type
    }
})

console.log(typemovie);


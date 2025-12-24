//NOTE: Currying technique

function ParentBlock(a){
    console.log("Logging in parent", a)
    return function ChildBlock(b){
        console.log("Logging in child", b)
        return function NestedChildBlock(c){
            console.log("Logging in nested", c)
        }
    }
}

ParentBlock(2)(3)(4)

const uniqueSymbolReference = Symbol("id")

const obj = {
    id: 1,
    name: "Nischal",
     "uniqueSymbolReference": "fsdf323"
};

obj.uniqueSymbolReference = "gfgfdgdf"

console.log(obj)
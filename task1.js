let arr = [
    ["name1", "id", [{ fname: "Usman1", age: 23 }, { fname: "Usman2", age: 23 }, { fname: "Usman3", age: 23 }, { fname: "Usman4", age: 23 }], "instruc"],
    ["name2", "id", [{ fname: "Usman21", age: 23 }, { fname: "Usman22", age: 23 }, { fname: "Usman23", age: 23 }, { fname: "Usman24", age: 23 }], "instruc"],
    ["name3", "id", [{ fname: "Usman31", age: 23 }, { fname: "Usman32", age: 23 }, { fname: "Usman33", age: 23 }, { fname: "Usman34", age: 23 }], "instruc"],
    ["name4", "id", [{ fname: "Usman41", age: 23 }, { fname: "Usman42", age: 23 }, { fname: "Usman43", age: 23 }, { fname: "Usman44", age: 23 }], "instruc"],
]
// let anarr = arr.flat(Infinity)
// console.log(anarr)
// [
//     ["name1", "id", { fname: "Usman1", age: 23 }, "instruc"],
//     ["name1", "id", { fname: "Usman2", age: 23 }, "instruc"],
//     ["name1", "id", { fname: "Usman3", age: 23 }, "instruc"],
//     ["name1", "id", { fname: "Usman4", age: 23 }, "instruc"],
//     ["name2", "id", { fname: "Usman1", age: 23 }, "instruc"],
//     ["name2", "id", { fname: "Usman2", age: 23 }, "instruc"],
//     ["name2", "id", { fname: "Usman3", age: 23 }, "instruc"],
//     ["name2", "id", { fname: "Usman4", age: 23 }, "instruc"],

// ]
let tarr = []
for (let narr of arr) {
    for (let inarr of narr[2]) {
        tarr.push([narr[0], narr[1], inarr, narr[3]]);
    }
}
console.log(tarr)

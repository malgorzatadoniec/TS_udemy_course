// LESSON 14 UNION TYPE

function combine (input1: number | string, input2: number | string) {
    //const result = input1 + input2; // ale po wprowadzeniu number | string tu pojawia się error, bo TS nie analizuje, co jest w union typie, widzi tylko, że jest union type
    // jak sobie z tym poradzić za pomocą runtime checka (często będzie to potrzebne, choć nie zawsze):

    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString()
    }
    return result;
}

const combinedAges = combine(30, 26)

console.log(combinedAges)

const combinedNames = combine('Max', 'Anne')

console.log(combinedNames)
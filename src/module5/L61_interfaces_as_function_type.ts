// LESSON 61 interfaces as function types

// mogą być też używane do definiowania struktury funkcji (alternatywa do def. typu funkcji)

// powtórka def. typu funkcji

type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2
};

interface AddFnInt {
    (a: number, b: number): number;
};

let add2: AddFnInt

add2 = (n1: number, n2: number) => {
    return n1 + n2
};

// jest to alternatywa, ale generalnie częściej używa się typów
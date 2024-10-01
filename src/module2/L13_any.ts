// LESSON 13 ANY - najczęściej należy go unikać

let favouriteActivities: any // są każdego typu
favouriteActivities = 5
let favAct: any[] // tablica z różnymi typami
// // favAct = 5 // error
favAct = [5, 'hello', true, [6, 7, 'world']]

// LESSON 79 generic utility types

// wbudowane typy, które używają generic types - przykłady

// Partial

interface CourseGoal {
    title: string;
    desc: string;
    completeUntil: Date;
};

// function createCourseGoal(title: string, desc: string, date: Date): CourseGoal {   // poprawnie zdefiniowana funkcja w jednym kroku
//     return {title: title, desc: desc, completeUntil: date};
// };

function createCourseGoal(title: string, desc: string, date: Date): CourseGoal { 
    let courseGoal: Partial<CourseGoal>= {};                                        // dzięki Partial dalejmy znać, że ostatecznie ten obiekt będzie typu 
    courseGoal.title = title;                                                       // CourseGoal, ale na początku jeszcze niem nie jest, bo jest pusty
    courseGoal.desc = desc;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;      // teraz za pomocą type casting dajemy znać, że to jest po prostu CourseGoal, bo już jest wszystko kompletne
};

// Readonly

const names: Readonly <string[]>= ['Max', 'Anne'];
// names.push('John');                                   // dzięki readonly widać, że nie powinniśmy nic dodawać ani odejmować 
// names.pop();
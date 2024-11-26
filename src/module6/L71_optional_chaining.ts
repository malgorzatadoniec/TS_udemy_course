// LESSON 71 optional chaining

// przydaje się do poboerania danych z obiektów (np z bazy danych czy innego źródła), o których nie mamy pewności, czy posiadają jakąś właściwość
// pozwala w bezpieczny sposób dostać się do zagnieżdżonych danych, a jeśli ich nie ma, to zapobiec errorowi w runtime

// const fetchUserData = {
//     id: 'u1', 
//     name: 'Anna',
// //    job: {title: 'CEO', description: 'The boss'}
// };

// console.log(fetchUserData?.job?.title); // dzięki dodaniu ? najpierw zostaje sprawdzone, czy jest job, a potem title (tu TS wie, że nie ma, więc wyrzuca 
                                        // error, ale gdyby to były dane z BE, sprawdziłby to)
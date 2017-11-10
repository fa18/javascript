localStorage.setItem("username", "John");

console.log("username = " + localStorage.getItem("username"));

const people = [
    { name: 'alice', gender: 'female', notes: [14, 16, 11, 17] },
    { name: 'denis', gender: 'male', notes: [2, 0, 9, 4, 6] },
    { name: 'bob', gender: 'male', notes: [12, 13, 9, 11, 15] },
    { name: 'greg', gender: 'male', notes: [18, 15, 20, 10, 20] },
    { name: 'sonia', gender: 'female', notes: [13, 9, 4, 5, 9] }
  ]
  
  localStorage.setItem('people', JSON.stringify(people))
  console.log(JSON.parse(localStorage.getItem('people')))


// 1 - Calculer les moyennes individuelles

nbNote=0;
for(i in people){
    let moyenne = 0;
    for(note in people[i].notes){
        moyenne+=people[i].notes[note];
        nbNote=people[i].notes.length;     
    }
    people[i].moyenne = moyenne/nbNote;
}
console.log(people);

// 2 - Calculer la moyenne des garçons

// 3 - Calculer la moyenne de la classe

// 4 - Pour chaque élèves calculer la moyenne des notes supérieur à 10
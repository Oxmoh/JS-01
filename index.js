// var age=40; 

// const myName="Franck";

// const family="Chermette";

// alert("Bonjour je m'appelle" + myName + family + "et j'ai" + age + "ans");

// alert(`Bonjour je m'appelle ${myName} ${family} et j'ai ${age} ans`);

// let num=5;
// let number="5"; 
// avec les guillemets type caractère, sans c'est un nombre.
// let sum= num+number;

// alert(sum);

// console.log("hello");

// let num1= 2
// let num2= 5
// addition
// soustraction
// multiplication
// division

// let sum= num1 + num2;
// let min= num2 - num1;
// let mul= num1 * num2;
// let div= num2 / num1;

// console.log(sum);
// console.log(min);
// console.log(mul);
// console.log(div);

// ajouter 1
// soustraire 1
// trouver le carré de chaque réponse
// trouver le cube de chaque réponse
// trouver le reste de la variable div

// ajouter 1
// console.log(sum +1);
// console.log(min +1);
// console.log(mul +1);
// console.log(div +1);

// // soustraire 1
// console.log(sum -1);
// console.log(min -1);
// console.log(mul -1);
// console.log(div -1);

// trouver le carré de chaque réponse
// console.log()
// console.log()
// console.log()
// console.log()

// trouver le cube de chaque réponse
// console.log()
// console.log()
// console.log()
// console.log()

// trouver le reste de la variable div
// console.log()
// console.log()
// console.log()
// console.log()

// condition

// if (age >= 18) {
//     console.log("Vous êtes majeur");
// } else {
//     console.log("Vous êtes mineur");
// }


// let age= prompt("votre age");

// if (age<=18) {
//     console.log("Vous êtes un enfant");
// } else if (age<=64) {
//     console.log("Vous êtes un adulte actif");
// } else {
//     console.log("Vous avez de la chance vous!");
// }

// création de tableau et appel du n°2 du tableau à l'intérieur du premier
// let array = ["Arcachon", 43, true, [1,2,3]]
// console.log(array[3][1]);

// Les objets
// let obj = {
    // nom: "Franck",
//     lieu: "Arcachon",
//     age: 40,
//     fatigue: true,
// };
// console.log(obj.lieu);

// Boucle
// let i = 0;
// while (i<5){
//     i++;
//     console.log(i);
// }

// Boucle avec tableau
// for (let i = 0; i<5; i++){
//     console.log(i);
// }

// exemple pour détailler le contenu d'un tableau à base de boucle
// let fruits = ["pomme", "poire", "fraise", "framboise", "banane"];

// for (let i = 0; i < fruits.length; i++) {
// console.log(fruits[i]);
// }

// fonction
// function addNumbers(a, b) {
//     return a + b;
// }
// console.log(addNumbers(5, 10));

// appeler et modifier le style du html avec javascript (DOM)
let myTitle = document.querySelector("h1");
console.log(myTitle);

let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
console.log(p1);
console.log(p2);
console.log(p3);

// querySelector pour une class et getElementById pour une id
// let p4 = document.querySelector("#p4");
// console.log(p4);

// let p4 = document.getElementById("p4");
// console.log(p4);

// myTitle.style.backgroundColor = "red";
// myTitle.textContent = "Mon super nouveau titre";
// myTitle.innerHTML = "Je modifie mon <em>html</em>";

// myTitle.append("Mon sous-titre");

// let newElement = document.createElement("div");
// newElement.textContent = "test";
// let parentElement = document.querySelector(".container");
// parentElement.appendChild(newElement);

// let myButton = document.getElementById("myButton");
// console.log(myButton);

// myButton.addEventListener("click", function(){
//     console.log("bravo tu as cliqué!");
// });

let myTrue = document.querySelector(".myTrue");
myTrue.addEventListener("click", function(){
console.log("bravo tu as trouvé!");
});

let myFalse = document.querySelector(".myFalse");
myFalse.addEventListener("click", function(){
    console.log("t'es une merde!");
});
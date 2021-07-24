
/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    
    let elementArray = Array.from(document.querySelectorAll("div"));

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

let paragraphEl  = document.querySelectorAll("p");
console.log(paragraphEl);

const elementArray = Array.from(paragraphEl);
console.log(elementArray);

const firstDiv =document.querySelector("div");
console.log(firstDiv);

const jumbotronText=document.querySelector("#jumbotronText");
console.log(jumbotronText);

// const primaryContent = document.querySelectorAll(".primary-content p");
// console.log(primaryContent);

const primaryContent = document.querySelector(".primary-content p")[1];
console.log(primaryContent);




/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
//  document
//    .getElementById("alertBtn")
//      .addEventListener("click", alertSomething);

//      function alertSomething() {
//         alert("hello CYF");
//       }

document.getElementById("alertBtn").addEventListener("click", alertMessage);
function alertMessage() {
    alert(" Alert CYF");
}
//       let alertButton = document.getElementById('alertBtn')


// alertButton.addEventListener('click', ()=>{alert('Button was clicked')})

// let myButton = document.querySelector("#myButton");
// myButton.addEventListener("click", alertSomething);



/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const changeColor = document.querySelector("#bgrChangeBtn");
changeColor.addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
});
/*
Task 4
======
const ourParagraph =document.createElemnt("p");
ourParagraph
When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

const addTextButton = document.getElementById("addTextBtn")
const addButtonPara = document.querySelector(".buttons")
 addTextButton.addEventListener("click", () => {

    const ourParagraph =document.createElement("p");
    ourParagraph.innerText = "read more below" ;
    addButtonPara.appendChild(ourParagraph);
});






/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const largeLinkButton = document.getElementById("largerLinksBtn")
 largeLinkButton.addEventListener("click", () => {
 const links = document.querySelectorAll("a");
 Array.from(links).forEach(link => {
    link.style.fontSize = "3rem"
 });
});

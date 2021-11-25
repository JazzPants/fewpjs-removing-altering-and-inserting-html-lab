// Write your code here!

// //create div section
// let element = document.createElement('div')
// element.innerHTML = 'Hello, DOM!'
// document.body.appendChild(element)
// //add it to the body

// let header = document.createElement("div");
// header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
// document.body.appendChild(header)

// //create ul
// let ul = document.createElement('ul')


// for (let i = 0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 1).toString()
//   ul.appendChild(li) //add the li element inside the ul, up to i = 2 (0,1,2)
// }
// //put ul inside element (the div)
// element.appendChild(ul)


// element.style.backgroundColor = '#27647B';
// element.style.textAlign = 'left';
// ul.style.textAlign = 'center'
// ul.removeChild(ul.querySelector('li:nth-child(2)'))

let x = document.getElementById("main");
x.remove();
//can be named anything, x, main, main2 etc.

let newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory")
// alternative method -- newHeader.id = "victory"
newHeader.innerHTML = "Aladdin is the champion"
document.body.appendChild(newHeader)


/* 2.1 Inserta dinamicamente en un html un div vacio con javascript. */
const insertDiv = document.createElement("div");
document.body.appendChild(insertDiv);
insertDiv.textContent = "Hola Neoland";

/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/
const insertDiv2 = document.createElement("div");
document.body.appendChild(insertDiv2);
insertDiv2.textContent = "Ya hemos insertado el div 2";

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */
/* const insertDivP = document.createElement('div')
const divP = document.createElement('p')
for(let i=0; i<6; i++) {
	
	insertDivP.body.appendChild('p')
}
document.body.appendChild(insertDivP) */

/* 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.*/
const insertText = document.createElement("p");
insertText.textContent = "Soy dinámico!";
document.body.appendChild(insertText);

/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */
const text = document.querySelector(".fn-insert-here");
text.textContent = "Wubba Lubba dub dub";

/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. */
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
document.body.appendChild(ul);

for (const app of apps) {
  const li = document.createElement("li");
  ul.appendChild(li);
  const listLi = document.createTextNode(app);
  li.appendChild(listLi);
  document.body.appendChild(li);
}

/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me*/
const removeNodes = document.querySelectorAll(".fn-remove-me");
for (const node of removeNodes) {
  node.remove();
}

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild */
const listDiv = document.getElementsByName('div')
listDiv.insertAdjacentHTML('afterbegin', '<div><p>Voy en medio!</p></div>')


/* 	let box2 = document.getElementById('box2');
box2.insertAdjacentHTML('beforebegin', '<div><p>un parrafo nuevo.</p></div>');

// beforebegin - El nuevo HTML es insertado justo antes del elemento, a la misma altura (hermano).
// afterbegin - El nuevo HTML se inserta dentro del elemento, antes del primer hijo.
// beforeend - El nuevo HTML se inserta dentro del elemento, después del último hijo.
// afterend - El nuevo HTML es insertado justo después del elemento, a la misma altura (hermano). */

/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */
const divs = document.querySelectorAll("div");
for (const div of divs) {
  if (div.classList.contains(".fn-insert-here")) {
    div.innerHTML = `<p>'Voy dentro!'</p>`;
  }
}

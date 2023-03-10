/* 2.1 Inserta dinamicamente en un html un div vacio con javascript. */
const insertDiv = document.createElement("div");
document.body.appendChild(insertDiv);
insertDiv.textContent = "Hola Neoland";

/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/
const insertDiv2 = document.createElement("div");
document.body.appendChild(insertDiv2);
insertDiv2.textContent = "Ya hemos insertado el div 2";

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */












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
  
  

/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */
document.querySelectorAll('.fn-insert-here').forEach(function(div) {
  div.innerHTML += '<p>Voy dentro!</p>';
});




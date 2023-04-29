// EXAMINE THE DOCUMENT OBJECT--------- //

// console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 123;
// console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.images);

// Get element by id

// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';

//  GETELEMENTSBYCLASSNAME//
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
// items[1].textContent = "Hello 2"; 
items[1].style.fontWeight= 'bold';
items[1].style.backgroundColor= 'yellow';

// items.style.backgroundColor= 'yellow';
/* Its not gonna work for all itmes as it is in an array.
    so we have to use loop*/

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor= 'yellow'; 
    items[i].style.fontWeight= 'bold';

}
items[2].style.backgroundColor= 'green';












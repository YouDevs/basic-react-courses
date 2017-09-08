// Cómo se dibujan elementos con javscript puro

// Mala manera de crear elementos, porqué en realidad es texto.
// document.getElementById('app').innerHTML = "<h1 id=''>Hola Mundo</h1>";

/*
* Vanilla JS
**/

// Buena manera
// const el = document.createElement('h1');
// const child = document.createElement('span');
// el.setAttribute('id', 'title');
// el.textContent = 'Hola ';
//
// child.textContent = 'Mundo';
// el.appendChild(child);
//
// // appendChild: recibe un elemento, no un string
// document.getElementById('app').appendChild(el);


/*
* REACT
*/
// Elementos de react, no del dom: virtual dom de react
// createElement: ipo de elemento, propiedades, hijos

// const el = React.createElement(
//     'h1',
//     {id:'title'},
//     'Hola ',
//     React.createElement('span', null, 'mundo')
// );
// ReactDOM.render(el, document.getElementById('app'));


/*
* Con REACT y JSX
**/

// const el = (
//     <h1 id="title" className="title">
//         Hola { 2 + 5 }
//         <span>Mundo</span>
//     </h1>
// );
// ReactDOM.render(el, document.getElementById('app'));


/*
* Reloj Vanilla JS
**/

// const app = document.getElementById('app');
// function reloj(){
//     app.textContent = new Date().toLocaleTimeString();
// }
// setInterval(reloj, 1000);


/*
* Reloj REACT y JSX
**/

// const app = document.getElementById('app');
//
// function reloj(){
//     let now = new Date().toLocaleTimeString();
//
//     const el = <span>{ now }</span>;
//
//     ReactDOM.render(el, app);
// }
//
// setInterval(reloj, 1000);

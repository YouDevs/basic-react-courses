"use strict"
import {createStore} from 'redux';


/* #### MORE COMPLEX APP:2 CRUD #### */

// STEP 3: define reducers
const reducer = function(state={books:[]}, action){
    switch (action.type) {
        case "POST_BOOK":
            // let books = state.books.concat(action.payload);
            // return {books};

            // Con los tres puntos pasamos todo el obj. props
            // es decir el siguiente código retorna una copia e los respectivos arrays
            return {books:[...state.books, ...action.payload]};
            break;

    }
    return state
}

// STEP 1: create the store
const store = createStore(reducer)

store.subscribe(function(){
    console.log('Current state is: ', store.getState());
    // console.log('\nPrice: ', store.getState()[1].price);
})

// STEP 2: create and dispatch actions
store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 1,
        title: 'this is the book title',
        description: 'this is the book description',
        price: 33.33
    }, {
        id: 2,
        title: 'this is the Second book title',
        description: 'this is the Second book description',
        price: 28.28
    }, ]
});

// DISPATCH a second action
store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 3,
        title: 'this is the Third book title',
        description: 'this is the Third book description',
        price: 60.40
    }]
});


/* #### MORE COMPLEX APP: 1 #### */

// // STEP 3: define reducers
// const reducer = function(state={}, action){
//     switch (action.type) {
//         case "POST_BOOK":
//             return state = action.payload;
//             break;
//
//     }
//     return state
// }
//
// // STEP 1: create the store
// const store = createStore(reducer)
//
// store.subscribe(function(){
//     console.log('Current state is: ', store.getState());
//     console.log('\nPrice: ', store.getState().price);
// })
//
// // STEP 2: create and dispatch actions
// store.dispatch({
//     type: "POST_BOOK",
//     payload: {
//         id: 1,
//         title: 'this is the book title',
//         description: 'this is the book description',
//         price: 33.33
//     }
// });


/* #### SIMPLE APP ####*/

// import {createStore} from 'redux';
//
// // STEP 3: define reducers
// const reducer = function(state=0, action){
//     switch (action.type) {
//         case "INCREMENT":
//             return state + action.payload;
//             break;
//         case "DECREMENT":
//             return state - action.payload;
//             break;
//
//
//     }
//     return state
// }
//
// // STEP 1: create the store
// const store = createStore(reducer)
//
// store.subscribe(function(){
//     console.log('Current state is: ' + store.getState());
// })
//
// // STEP 2: create and dispatch actions
// store.dispatch({type: "INCREMENT", payload: 1});
// store.dispatch({type: "INCREMENT", payload: 1});
// store.dispatch({type: "DECREMENT", payload: 1});

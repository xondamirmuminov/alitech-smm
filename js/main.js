
// function increment(index){
//     var input = document.getElementById('inp-' + index);
//     if(input.value) {
//         input.value = parseInt(input.value) + 1;
//     }else{
//         input.value = 1;
//     }
// }

// function decrement(index) {
//     var input = document.getElementById('inp-' + index);
//     if(input.value > 1) {
//         input.value = parseInt(input.value) - 1;
//     }else{
//         removeElementIfZero(index)
//     }
// }

// function removeElementIfZero(index) {
//     var el = document.getElementById('list-' + index);
//     el.remove()
// }

// function addItem() {
//     var ul = document.getElementById('card-list')
//     var currentID = ul.children.length + 1;
//     currentID = Date.now()
//     ul.innerHTML += `
//     <li id="list-${currentID}">
//         <button data-index="${currentID}" onclick="decrement(${currentID})">-</button>
//         <input type="number"  id="inp-${currentID}">
//         <button data-index="${currentID}" onclick="increment(${currentID})">+</button>
//     </li>
//     `
// }



// function User(name,lastName) {
//     this.Name = name;
//     this.LastName = lastName;
// }

// var xondamir = new User('Xondamir','Mo\'minov');
// console.log(xondamir);

// var btn = document.getElementById('btn');
// var inp = document.getElementById('inp');
// var box = document.getElementById('box');

// function add(){
//     box.innerHTML += `
//     <img class="image" onclick="none(event)" src="${inp.value}" >
//     `
//     var image = document.getElementsByClassName('image');
// }

// function none(event){
//     event.target.remove()
//   }
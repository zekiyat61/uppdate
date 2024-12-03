// // import React, { useState } from 'react'

// // const App = () => {
// //   const [counter, setcount] = useState("") // 3
// //   function inc(value){
// //    setcount( c=>c +1 );
// //    setcount( c=>c +1 );
// //    setcount( c=>c +1 );
// //   };
// //   function dec(){
// //     setcount(c=>c -1 );
// //     setcount(c=>c -1 );
// //     setcount(c=>c -1 );
// //   };
// //   function res(){
// //     setcount(0)
// //   };
// //   return (
// //     <div>
// //       <p>{counter}</p>
// //       <button onClick={inc}>Inc</button>
// //       <button onClick={dec}>Dec</button>
// //       <button onClick={res}>Res</button>
// //     </div>
// //   )
// // }

// // export default App





// // import { useState } from "react";


// // const App = () => {
// //     const [car, setCar] = useState({year:2024,make:"ford",model:"mustang"});
// //     function handleYearChange(event){
// //       setCar(c=>({...c,year:event.target.value}));
// //     }
// //     function handleMakeChange(event){
// //       setCar(c=>({...c,make:event.target.value}));
// //     }
// //     function handleModelChange(event){
// //       setCar(c=>({...c,model:event.taget.value}));
// //     }
// //   return (
// //     <div>
// //       <p>your favorite car is:{car.year} {car.make} {car.model} </p>
// //       <input type="number" value={car.year} onchange={handleYearChange}/><br />
// //       <input type="text" value={car.make}onchange={handleMakeChange} /><br />
// //       <input type="text" value={car.model} onchange={handleModelChange}/><br />
// //     </div>
// //   );
// // }

// // export default App
// import { useState } from "react";

// const App = () => {
//   const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

//   function handleAddFood() {
//     const newFood = document.getElementById("foodInput").value;
//     if (newFood.trim()) { // Ensure no empty or whitespace-only inputs
//       setFoods((f) => [...f, newFood]);
//     }
//     document.getElementById("foodInput").value = ""; // Clear input
//   }

//   function handleRemoveFood(index) {
//     setFoods((prevFoods) => prevFoods.filter((_, i) => i !== index));
//   }

//   return (
//     <div>
//       <h2>List of Foods</h2>
//       <ul>
//         {foods.map((food, index) => (
//           <li key={index} onClick={() => handleRemoveFood(index)}>
//             {food}
//           </li>
//         ))}
//       </ul>
//       <input type="text" id="foodInput" placeholder="Enter food name" />
//       <button onClick={handleAddFood}>Add Food</button>
//     </div>
//   );
// };

//export default App;

// import { useState } from 'react';

// const App = () => {
//   const [item, setItem] = useState('');
// const [todolist, setTodolist] = useState([{name:'task 1',id:1},{name:"task 2",id:2}]);
// const addTodo = () => {
//   setTodolist([...todolist, {id:crypto.randemUUID(), name: item, isChecked: false }]);
//   setItem('');
//   console.log(todolist)
// };
//   return (
//     <div>
//       <div>
//         <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
//         <button onClick={addTodo}>add item</button>
//       </div>
//       <div>
//         {todolist.map((task) => (
//             <div key={task.id}>
//               {task.name}
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;



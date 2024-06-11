import './App.css';
import { useState } from 'react';

function MyButton() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
      <button onClick ={handleClick}>
      Empiers: {count}
    </button>
  );
}

const products = [
  { title: 'Cucumber', isFruit: false, id: 1 },
  { title: 'Cabbage', isFruit: false, id: 2 },
  { title: 'Garlic', isFruit: false, id: 3 },
  { title: 'Apple', isFruit: true, id: 4 },
  { title: 'Orange', isFruit: true, id: 5 },
  { title: 'strawberry', isFruit: true, id: 6 },
  { title: 'Poteto', isFruit: false, id: 7 },
  
  
];

function ShoppingList(){
  const listItems = products.map(product =>
  <li 
    key={product.id}
    style={{
      color: product.isFruit ? 'red' : 'darkgreen'
    }}>
       {product.title}
  </li>
);

  return (
    <ul>{listItems}</ul>
  );
}



export default function App() {
  return (
    <div>
      <h1>You are the King!</h1>
      <h2> Make an empier! </h2>
      <MyButton/>
      <h2>Kings Shopping List:</h2>
      <ShoppingList/>
    </div>
  );
}


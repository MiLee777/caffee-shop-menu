import { useState } from 'react';
import './App.css';
import Carousel from './Carousel';
import Basket from './Basket';

function App() {
  const [orderList, setOrderList] = useState([]);

  const addItem = (item) => {
        setOrderList(prevOrderList => [...prevOrderList, item]);
    }

  const clearOrderList = () => {
      setOrderList([]);
  }

  const removeItem = (id) => {
    let newItems = orderList.filter(item => item.id !== id);
    setOrderList(newItems);
  }

  return (
    <div className='App'>
      <Carousel addItem={ addItem } />
      <Basket orderList={ orderList } clearOrderList={ clearOrderList } removeItem={ removeItem } />
    </div>
  );
}

export default App;

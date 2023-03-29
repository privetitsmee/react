import React, { useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';



function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])

  const [cartOpened, setOpen] = React.useState(false)

React.useEffect(() => {
  axios.get('https://641df0bb945125fff3d9885c.mockapi.io/items').then((res) => {
  setItems(res.data)})
  // axios.get('https://641df0bb945125fff3d9885c.mockapi.io/card').then((res) => {
  // setCartItems(res.data)})
}, [])

const onAddToCart = (obj) => {
  axios.post('https://641df0bb945125fff3d9885c.mockapi.io/card', obj)
 
  // .then(res => setCartItems(cartItems => [...cartItems, res.data]))

  setCartItems([...cartItems, obj])

}

const onRemoveItem = (id) => {
  console.log(id);
  axios.delete('https://641df0bb945125fff3d9885c.mockapi.io/card/${id}')

  setCartItems((prev) => prev.filter(item => item.id !== id))
}

  return (
    <div className="wrapper clear p-40">
    {cartOpened && <Drawer items={cartItems} onCloseCart={() => setOpen(false)} onRemove={onRemoveItem}/>} 
    <Header onClickCart={() => setOpen(true)} />
    <div className='content'>
      
      <h1>Все кроссовки</h1>

    <div className='d-flex flex-wrap'>
    
    {items.map((item) => (
      <Card
        title={item.name}
        price={item.price}
        imageUrl={item.imageUrl}
        onPlus={(obj) => onAddToCart(obj)}
      />
    ))}
    </div>

    </div>
    </div>
  );
}

export default App;

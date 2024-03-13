import React from 'react'
import '../src/App.css'

import Header from './components/Header';
import Productslist from './components/Productslist';


import CartList from './components/CartList';
import { useState } from 'react';

function App() {
  

  const [product, setProduct] = useState([
    {
      url: 'https://cdn.pixabay.com/photo/2020/10/11/05/36/nike-5644799_1280.jpg',
      name: 'Nike',
      category: 'Shoes',
      seller: 'Nike Store',
      price: 11999
    },
    {
      url: 'https://staticimg.titan.co.in/Titan/Catalog/94006QM04_1.jpg?impolicy=pqmed&imwidth=640',
      name: 'Titan Modern Classics',
      category: 'Watches',
      seller: 'Titan store',
      price: 10499
    },
    {
      url: 'https://images.samsung.com/in/computers/galaxy-book3-pro/buy/kv_pro_front_MO.jpg',
      name: 'Samsung Book 3',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 150000
    },
    {
      url: 'https://images.pexels.com/photos/20232807/pexels-photo-20232807/free-photo-of-model-in-a-brown-leather-jacket-and-gray-sweater-posing-on-a-footbridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Brown Jacket',
      category: 'Jacket',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      url: 'https://cdn.pixabay.com/photo/2018/10/29/07/18/apple-3780515_1280.jpg',
      name: 'Boat245',
      category: 'Boat',
      seller: 'Amazon',
      price: 2000
    },
    {
      url: 'https://m.media-amazon.com/images/I/41WHROpqv4L.jpg',
      name: 'Joogers',
      category: 'Bottom Wear',
      seller: 'ashok seller',
      price: 1099
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
  
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <Productslist product={product} addToCart={addToCart} ></Productslist>
      }


    </div>
  );
}

export default App;

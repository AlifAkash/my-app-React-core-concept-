import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const person={
    name:"Dr, Mahfuz",
    job: "Singer"
  }
  const person2={
    name:"Eva Rahman",
    job: "Singer"
  }
  const nayoks=["Razzak","Salman shah","Sakib","Shuvo","taskin"]
  const peoples=["Munna","Jamal","Joy","Bijoy","Tamim"]
  const profsssions=["Student","Web Devoloper","Footboller","Cricketer","Govt. Employee"]
  const products=[
    {name:"photoShop", price:"$490.99"},
    {name:"Illastrator", price:"$165.45"},
    {name:"PDF Reader", price:"$9.50"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>My heading : {person.name+" "+person.job}</h1>
        <h3>My heading : {person2.name+" "+person2.job}</h3>
        <p>My first react paragraph</p>
        <p>I am react person</p>

        <Counter></Counter>

        <Users></Users>

        <ul>
          {
            products.map(products=><li>{products.name}</li>)
          }
        </ul>
  
        <ul>
          {
            products.map(pd => <Products products={pd}></Products>)
          }
        </ul>

        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
        </ul>

        <Products products={products[0]}></Products>
        <Products products={products[1]}></Products>
        <Products products={products[2]}></Products>
        
        <Person3 name= {peoples[0]} job={profsssions[0]}></Person3>
        <Person3 name= {peoples[1]} job={profsssions[2]}></Person3>
        <Person3 name= {peoples[2]} job={profsssions[4]}></Person3>
        <Person3 name= {peoples[3]} job={profsssions[1]}></Person3>
        <Person3 name= {peoples[4]} job={profsssions[3]}></Person3>

       {
         products.map(pd => <Products products={pd}></Products>)
       }


      </header>
    </div>
  );
}

function Users(){
  const [user,setUser]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUser(data))



  },[])

  return(
    <div>
      <h4>Dynamic Users : {user.length}</h4>
      <ul>
        {
          user.map(users=><li>{users.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount]= useState(0);
  const handlerIncrease=()=>{
    const newCount= count+1;
    setCount(newCount);
  }
  const handlerDecrease=()=>{
    const newCount=count-1;
    setCount(newCount);
  }
  return(
    <div>
      <h3>Count : {count} </h3>
      <button onClick={handlerIncrease}>Increase</button>
      <button onClick={handlerDecrease}>Decrease</button>
    </div>
  )
}

function Products(props) {
  const productStyle={
    margin:"5px",
    border:"1px solid gray",
    borderRadius:"5px",
    backgroundColor:"lightgray",
    height:"200px",
    width:"200px",
    float:"left"
  }
  const {name,price}=props.products;
  return (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <button>Buy now</button>
      </div>
  )
}

function Person3(props) {
  const personStyle={
    border:"2px solid yellow", 
    margin:"10px",
    padding:"0px 20px",
    width:"600px"
  }
  return (
    <div style={personStyle}>
      <h2>Name : {props.name} </h2>
      <h3>Profession : {props.job}</h3>
    </div>
  )
}
export default App;

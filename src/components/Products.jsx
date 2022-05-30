import React from "react";
import Pagination from "./Pagination";
import Product from "./Product";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Flex , Grid } from  "@chakra-ui/react";
import AddProduct from "./AddProduct";
// import styles from "Products.module.css";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  const [todos, setTodos]=useState([]);
  const[page, setPage]=useState(1);
  const[limit, setLimit]=useState(3);


  useEffect(()=>{
    const getTodo =async ()=>{
      let r=await axios.get("http://localhost:8080/products?");
     
      //console.log(r.data);
      setTodos(r.data)
      //setTotalCount(Number(r.headers["x-total-count"]))
    }
    getTodo();
    },[])


  return (
    <div>
    <Flex>
      {/*  AddProduct */}
      

      <Grid>{/* List of Products */}
      

      </Grid>
      {/* Pagination */}
     
    </Flex>
    <AddProduct/>
    <div></div>
     <Pagination setPage={setPage} setLimit={setLimit} />
     {todos.map((todo)=>(<div className="innerDiv"> <p> <img src={todo.imageSrc}/>{todo.category}</p> <div>{todo.title}</div> <p>{todo.price}</p></div>))}
     </div>

    
    // <div>
    //  <Pagination/>
    //   hiiii0
    // </div>

    
  );
};

export default Products;

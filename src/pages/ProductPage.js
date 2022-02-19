import React,  { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { useParams } from "react-router-dom";

export function ProductPage() {
  const [status, setStatus] = useState('initial');
  const [error, setError] = useState(null);
  const [item, setItem] = useState([]);
  
  const params = useParams();
  const prodId = params.id;

  useEffect(() => {
      let mountState = {
        isMount: true,
      };
      
      fetch(`https://61f5558a62f1e300173c40f3.mockapi.io/products/${prodId}`)
        .then((res) => {
          console.log('---> Products: res', res);
          return res.json();
        })
        .then((data) => {
          if (mountState.isMount) {
            console.log('---> Products: data', data);
            setError(null); 
            setStatus('success');
            setItem(data); 
         }
        })      
        .catch((error) => {
          if (mountState.isMount) {
            console.log('---> Products: error', error);
            setError(error.message);
            setStatus('error');
          }
        })
      return () => {
        mountState.isMount = false;
      }
              
  
      },[]);
      
  return(
    <>
      <Header/> 
      <ProductCard
        id={item.id}
        name={item.title}
        photo={item.photo + item.id} 
        description={item.description} 
        price={item.price} />
    </>

  );
}
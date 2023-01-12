import {getData} from '../utils/fetchData'
import { useState } from 'react'
import Head from 'next/head'
import ProductItem from '../components/product/ProductItem'

const Home =(props )=>{

     const [products,setProducts]= useState(props.products)

     return (

      <div className='products  justify-content-center d-flex p-2'>
          <Head>


          {/* <title>Home </title> */}
          </Head>
          
          

          {

                products.length===0
                ? <h2>not product</h2>
                :products.map(product=>(
                    <ProductItem key={product.id} product={product}/>
                ))
          }




          </div>
     )
}


export async function getServerSideProps(){

     const res = await getData('product')
     console.log(res);

     return {
          props:{
               products: res.products,
               result:res.result
           },
     }
}

export default Home
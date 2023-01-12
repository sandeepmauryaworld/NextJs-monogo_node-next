import Head from "next/head";
import { useState } from "react";
import { getData } from "../../utils/fetchData";

const DetailProduct=(props)=>{

    const [Product] = useState(props.product)

    const [tab, setTab]= useState(0)
   


    const isActive=(index)=>{
        if(tab===index) return "active";
    }

    
     return (
        <div className="row detail_page">

            <Head>
                {/* <title>Detail Product </title> */}
            </Head>
            
            <div className="col-md-6">
                <img src={Product.images[tab].url } alt={Product.images[tab].url}
                className='d-block img-thumbnail rounded mt-4 w-100'
                style={{height:'350px'}} />
                
                <div className="row mx-0" style={{cursor:"pointer"}} >

                    {
                    Product.images.map((img,index)=>(
                        <img key={index} src={img.url} alt={img.url}
                        className={` img-thumbnail rounded ${isActive(index)}`}
                        style={{height:'80px', width:'20%'}} 
                       onClick={()=>setTab(index)} />

                    )) 
                    }

                </div>
            </div>
            <div className="col-md-6 mt-2 ">
                <h2 className="text-uppercase">{Product.title}</h2>
                <h5 className="text-danger" >$ {Product.price}</h5>

                <div className="row mx-8 d-flex justify-content-between">
                    {
                        Product.inStock>0
                        ? <h6 className="text-danger" >$ {Product.inStock}</h6>
                        :<h6 className="text-danger" >$ Out Stock</h6>
                    }

                        <h6 className="text-danger" >Sold:{Product.sold} {Product.inStock}</h6>
                </div>

                <div className="py-2">{Product.description}  </div>
                <div className="py-2">
                 
                 </div>
                <button className=" btn btn-dark d-block my-3 px-5" type="button">Buy</button>
            </div>
        </div>
     )
}



export async function getServerSideProps({params:{id}}){

        console.log(id, "this is");
    const res = await getData(`product/${id}`)
    console.log(res);
    // console.log(res);

    return {
         props:{
          product:res.product
          },
    }
}
export default DetailProduct


 import Head from 'next/head';
import { useContext, useEffect,useState } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Image from 'next/image'






export default function Details(){
  

const router =useRouter();
const {id} =router.query;
  const [dataResponse,setdataResponse]=useState([]);
  useEffect(()=>{
   

    async function getPageData(){
      const api=`http://localhost:3000/api/getdata-lib`;

      const postData={

        method:"post",
        headers:{"Content-Type":"application/json"},
        body:   JSON.stringify({

        id:id,
}),

  
        
      };


      const response= await fetch(api,postData);
    

     const res= await response.json();

      
      
    
      setdataResponse(res.product);
      
    }



  getPageData() 
  },[router.query.id, router.isReady]);

  

  return (
  <>

  <Head>
<title> STORE | Details </title>
<meta  name='description' content='ecommerce store' ></meta>

  </Head>


    <div className='container w-100 mt-2 mb-2  position-relative bg-light '>

<h1 className='text-center'>Product</h1>


  


{dataResponse.map((product) =>{

return(


  <div key={ product.id} className=' row'>
    
    

 <img src=  {`/product1.jpg`} className='pic'
  alt={product.title}></img>

  <div className=' col-6'>
  <h1 className=''>{product.title}</h1>

 

      <p className='fw-bold fs-5  pt-5'>Some text about the {product.discription}..</p>

 <div className='d-flex '>
  <p class="price   p-2 flex-grow-1 w-100 position-absolute bottom-0   ">Price=${product.price}</p>

  <p className='product  mb-2 '><button>Add to Cart</button></p>
</div>
</div>
</div>
)
})}







    
    </div>
    </>
)
}

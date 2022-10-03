import Head from 'next/head'
import Image from 'next/image'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useEffect,useState } from 'react'
import Link from 'next/link'
import Feature from './components/Feature'
import 'bootstrap/dist/css/bootstrap.css';




export default function Home(){


  const [dataResponse,setdataResponse]=useState([]);
  useEffect(()=>{
   

    async function getPageData(){
      const api=`http://localhost:3000/api/getdata`;


      const response= await fetch(api);
    

     const res= await response.json();

   

  

 
      console.log(res.product.image);
      
      
    
      setdataResponse(res.product);
      
    }

   getPageData() 
  },[]);





  return (
  <>

  <Head>
<title> STORE | Home </title>
<meta  name='description' content='ecommerce store' ></meta>

  </Head>

<Feature></Feature>

    <div className='container  mt-5 mb-2  bg-light '>

<h1 className='text-center'>Product</h1>


  
<div className='row  ' >
    

{dataResponse.map((product) =>{

return(


  <div key={ product.id} className='col-4  '>
    <div class="card">
    

 <Link href={'/product/' + product.id}  ><img src= {`/product1.jpg`}
  alt={product.title}></img></Link>
  <h1>{product.title}</h1>
  <p class="price">${product.price}</p>
  <p>Some text about the {product.discription}..</p>
  <p><button>Add to Cart</button></p>
</div>
</div>



)
})}

</div>





    
    </div>
    </>
)
}
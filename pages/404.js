import Link from "next/link";
import { useEffect } from "react";
import Router, {useRouter} from 'next/router'

const NotFound = () => {
    const router=useRouter;

useEffect(() =>{

    setTimeout(()=>{

Router.push('/');        
    },3000)
},[])


    return ( 

<div className="container  bg-light text-center" >
<img  src="oopss.jpg" ></img>
<Link href='/' ><a className=" btn btn-outline-secondary">GO BACK TO HOME PAGE</a></Link>
</div>
     );
}
 
export default NotFound;
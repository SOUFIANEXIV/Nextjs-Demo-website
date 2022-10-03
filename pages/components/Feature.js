

import{useState} from 'react'
const Feature =()=> {
    const[index,setIndex]=useState(0);

     const images = [
       
         '/product6.jpg',
         '/product8.jpg',
         '/product5.jpg',
         
         
         
     ];


   
/*const handlerArrow=(direction)=>{
    if(direction ==="l"){
        setIndex(index !==0  ? index-1 : 3)

    }
    if(direction ==="r"){
        setIndex(index !==3  ? index+1 : 0)

    }
}
console.log(index)*/

     return (
      <> 
      <h1 className='text-center'>Our Features</h1>


<div className='container-sm'>

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='/product4.jpg' class="d-block w-100" alt="..."></img>
    </div>

    {images.map((img,i) => (

    <div class="carousel-item">
      <img src={img} key={i} class="d-block w-100" alt="..."></img>
    </div>

))}
    
   
  </div>
  <button class="carousel-control-prev  " type="button  " data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon        " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next  " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon  " aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


</div>

      </>
            )
     
          };
export default Feature;

/*<div className="container-1   overflow-hidden position-relative  ">
  
 
         <img src='left.png'  className="photo position-absolute top-50 start-0 translate-middle-y   " onClick={()=>handlerArrow("l")} ></img> 
         
        <div className="wrapper   " style={{transform:`translateX(${-100*index}vw)`}}  >
      

        {images.map((img,i) => (
  <img src={img} key={i} class="ima" alt="..."></img>

))}
</div>


       <img src="right.png" className="photo  position-absolute top-50 end-0 translate-middle-y"  onClick={()=>handlerArrow("r")} ></img>   

    
      </div>*/
import Head from "next/head";

import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.css';




 const Contact = () =>{


  

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_t0260oo', 'template_1ct5qn9', e.target, 'k9gOw_P9VvLJdcmtj')
        .then((result) => {
              alert('Your email has been successfully sent' )
          
        }, (error) => {
          alert("ERROR")
        });
        e.target.reset()
    }

   

    return(

        <><Head>
            <title> STORE | Contact Us </title>
            <meta name='description' content='ecommerce store'></meta>


        </Head><div className='container bg-light mt-5 px-5'>

                <h1>Contact Form</h1>

 <form onSubmit={sendEmail} className="row"> 



        <div class="col-md-6">

                
  <label for="fullname" class="form-label">FullName</label>
  <input type="fullName"   name="fullname"  class="form-control" id="exampleFormControlInput1" placeholder="FullName"  required />

</div>

                <div class="col-md-6">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
</div>
<div class="mb-3">
  <label for="message" class="form-label">Example textarea</label>
  <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"    maxLength={500}   required ></textarea>

  <button type="submit" name="submit" class="btn btn-primary mt-2  " value="send" >Send  </button>

</div>
</form> 

</div>

         
            </>
    
    )
    }
    
export default Contact;
    
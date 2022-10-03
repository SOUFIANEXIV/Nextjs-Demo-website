
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';

import { useContext } from 'react';
import React from 'react';



function Navbar() {
    

    return (
        <nav class="navbar navbar-expand-lg   bg-light">
            <div class="container ">
                <Link href="/"><a className=' nav-link  fs-2'>STORE</a></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse active  " id="navbarNavAltMarkup">
                    <div class="navbar-nav    mx-auto pe-5  ">
                        <Link href="/"><a class="nav-link   fs-5   ">Home </a></Link>
                        <Link href="/about"><a class="nav-link fs-5  ">About  </a></Link>
                        <Link href="/contact"><a class="nav-link fs-5"> Contact  </a></Link>

                    </div>
                    <div>
                        <Link href='/cart'><a className='nav-link fs-5'>Cart

                            

                        </a></Link>
                    </div>
                </div>
            </div>
        </nav>

    );
}
 
export default  Navbar ;
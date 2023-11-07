/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import person_1 from '../images/person_1.jpg'
import person_2 from '../images/person_2.jpg'
import person_3 from '../images/person_3.jpg'
import person_4 from '../images/person_4.jpg'
export const Team = () => {
  return (
    <div><div class="untree_co-section">
    <div class="container">

        <div class="row mb-5">
            <div class="col-lg-5 mx-auto text-center">
                <h2 class="section-title">Our Team</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                <img src={person_1} class="img-fluid mb-5"/>
                <h3 clas><a href="#"><span class="">Lawson</span> Arnold</a></h3>
        <span class="d-block position mb-4">CEO, Founder, Atty.</span>
        <p>Separated they live in.
         Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
            </div> 
        
            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                <img src={person_2} class="img-fluid mb-5"/>

                <h3 clas><a href="#"><span class="">Jeremy</span> Walker</a></h3>
    <span class="d-block position mb-4">CEO, Founder, Atty.</span>
    <p>Separated they live in.
    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>

            </div> 
          
            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                <img src={person_3} class="img-fluid mb-5"/>
                <h3 clas><a href="#"><span class="">Patrik</span> White</a></h3>
    <span class="d-block position mb-4">CEO, Founder, Atty.</span>
    <p>Separated they live in.
    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
            </div> 
           
            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                <img src={person_4} class="img-fluid mb-5"/>

                <h3 clas><a href="#"><span class="">Kathryn</span> Ryan</a></h3>
    <span class="d-block position mb-4">CEO, Founder, Atty.</span>
    <p>Separated they live in.
    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>

  
            </div> 
        </div>
    </div>
</div></div>
  )
}

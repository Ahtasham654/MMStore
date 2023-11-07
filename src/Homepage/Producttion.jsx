/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Production1 from '../images/product-1.png'
import Production2 from '../images/product-2.png'
import Production3 from '../images/product-3.png'
import Cross from '../images/cross.svg'
export const Producttion = () => {
  return (
    <div class="product-section">
			<div class="container">
				<div class="row">

					
					<div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 class="mb-4 section-title">Crafted with excellent material.</h2>
						<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><a href="/shop" class="btn">Explore</a></p>
					</div> 
					
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src={Production1} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>

							<span class="icon-cross">
								<img src={Cross} class="img-fluid"/>
							</span>
						</a>
					</div> 
					
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src={Production2} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Kruzo Aero Chair</h3>
							<strong class="product-price">$78.00</strong>

							<span class="icon-cross">
                            <img src={Cross} class="img-fluid"/>
							</span>
						</a>
					</div>
					
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src={Production3} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Ergonomic Chair</h3>
							<strong class="product-price">$43.00</strong>

							<span class="icon-cross">
                            <img src={Cross} class="img-fluid"/>
							</span>
						</a>
					</div>
					
				</div>
			</div>
		</div>
  )
}

import React from 'react'
import { useEffect } from "react"
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
export default function Footer() {

  return (
    <>

      <footer className='footer'>
        <div className='container'>
          <div className='wrap'>
            <div className='leftBox'>
              <img src={logo} />
              <p>Bushido is a global community of like-minded souls who want to expand and grow, we provide a range of tools and services to help everyone prosper and shift from the norm to extraordinary growth. </p>
              <span>Copyright © All rights reserved</span>
            </div>
            <div className='rgtBox'>
              <ul>
                <h5>SUPPORT</h5>
                <li><Link to="/about">About</Link></li>
                <li><a>Contact Us</a></li>
                <li><a>Privacy & Policy</a></li>
              </ul>
              <div className='servicePart'>
                <h5>Service</h5>
                <div className='d-flex'>
                <ul>
                  <li><a>E Store</a></li>
                  <li><a>Bushido</a></li>
                  <li><a>Podcast</a></li>
                  <li><a>OTT</a></li>
                  <li><a>Partners</a></li>
                </ul>
                <ul>

                  <li><a>Learning</a></li>
                  <li><a>virtual id card</a></li>
                  <li><a>News</a></li>
                  <li><a>Business</a></li>
                </ul>
                </div>
              </div>
              <ul>
                <h5>About</h5>
                <li><a>lorem ipsum</a></li>
                <li><a>lorem ipsum</a></li>
                <li><a>lorem ipsum</a></li>
                <li><a>lorem ipsum</a></li>
              </ul>
              <div className='social-media'>
                <h5>Social Link</h5>
                <div>
                  <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                  <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

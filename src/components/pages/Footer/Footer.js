import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import'./Footer.css';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import{MdFingerprint} from 'react-icons/md';

function Footer() {
    return (
        <div className='footer-container' >
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    what do you thing about this?
                </p>
                <p className='footer-subscription-text'>
                you can unsubcribe at any time.
                </p>
                <div className= 'input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>

                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                        </form>
                </div>     
            </section>

            <div className='footer-links'>
                <div className=' footer-link-wrapper'>
                    <div className=' footer-link-items'>
                        <h2>contact Us</h2>
                        <Link to='./sign-up'>How it works</Link>
                        <Link to='./'>Test imoianls</Link>
                        <Link to='./'>Careers</Link>
                        <Link to='./'>Ivestors</Link>
                        <Link to='./'>Terms of Service</Link>
                    </div>
                    <div className=' footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='./sign-up'>How it works</Link>
                        <Link to='./'>Test imoianls</Link>
                        <Link to='./'>Careers</Link>
                        <Link to='./'>Ivestors</Link>
                        <Link to='./'>Terms of Service</Link>
                    </div>
                </div>
                <div className=' footer-link-wrapper'>
                    <div className=' footer-link-items'>
                        <h2>Explore</h2>
                        <Link to='./sign-up'>How it works</Link>
                        <Link to='./'>Test imoianls</Link>
                        <Link to='./'>Careers</Link>
                        <Link to='./'>Ivestors</Link>
                        <Link to='./'>Terms of Service</Link>
                    </div>
                    <div className=' footer-link-items'>
                        <h2>Learn More ++</h2>
                        <Link to='./sign-up'>Data Privacy Policy</Link>
                        <Link to='./'>Test imoianls</Link>
                        <Link to='./'>Careers</Link>
                        <Link to='./'>Ivestors</Link>
                        <Link to='./'>Terms of Service</Link>
                    </div>
                </div>
            </div>
            
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <MdFingerprint className='navbar-icon'/>
                            IDRIS 
                        </Link>
                    </div>
                    <small className='website-rights'>
                        Idris ⓒ 2022
                    </small>

                    <div className='social-icons'>
                        <Link className='social-icon-link' 
                              to='/' 
                              target='-blank' 
                              aria-label='facbook'>
                                <FaFacebook/>
                    
                        </Link>
                        <Link className='social-icon-link' 
                              to='/' 
                              target='-blank' 
                              aria-label='instagram'>
                                <FaInstagram/>
                        </Link>

                        <Link className='social-icon-link ' 
                              to='/' 
                              target='-blank' 
                              aria-label='twitter'>
                                <FaTwitter/>
                        </Link>
                        <Link className='social-icon-link' 
                              to='/' 
                              target='-blank' 
                              aria-label='Youtube'>
                                <FaYoutube/>
                        </Link>
                        <Link className='social-icon-link' 
                              to='/' 
                              target='-blank' 
                              aria-label='LinkedIn'>
                                <FaLinkedin/>
                        </Link>
                    </div>
                    

                </div>
            </section>
        </div>
    )
}

export default Footer

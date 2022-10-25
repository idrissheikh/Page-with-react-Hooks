import React from 'react';
import { Button } from './Button';
import {FaFire} from 'react-icons/fa';
import {BsXDiamondFill} from 'react-icons/bs';
import{GiCrystalize} from 'react-icons/gi';
import { IconContext} from 'react-icons/lib';
import './Pricing.css';
import { Link } from 'react-router-dom';



function Pricing() {
  return (
    <IconContext.Provider value={{color:'#fff', size:64}}>
    <div className='pricing__section'>
        <div className='pricing__wrapper'>
            <h1 className='pricing__heading'>Pricing</h1>
                <div className='pricing__container'>
                    <Link to='/sing-up' className='pricing__container-card'>
                        <div className='pricing__container-cardInfo'>
                        <div className='icon'>
                            <FaFire/>
                            </div>
                            <h3>Gold</h3>
                            <h4>$82.99</h4>
                            <p>per month</p>
                            <ul className='pricing__container-features'>
                                <li> 100 TRacection</li>
                                <li> 23% cash back</li>
                                <li> 100 TRacection</li>
                            </ul>
                            <Button buttonSize='btn-wide' buttonColor='primary'>
                                Choose Plan
                            </Button>
                        </div>
                    </Link>
                    <Link to='/sing-up' className='pricing__container-card'>
                        <div className='pricing__container-cardInfo'>
                            <div className='icon'>
                                <BsXDiamondFill/>
                            </div>
                            <h3>Gold</h3>
                            <h4>$82.99</h4>
                            <p>per month</p>
                            <ul className='pricing__container-features'>
                                <li> 100 TRacection</li>
                                <li> 23% cash back</li>
                                <li> 100 TRacection</li>
                            </ul>
                            <Button buttonSize='btn-wide' buttonColor='blue'>
                                Choose Plan
                            </Button>
                        </div>
                    </Link>
                    <Link to='/sing-up' className='pricing__container-card'>
                        <div className='pricing__container-cardInfo'>
                            <div className='icon'>
                                <GiCrystalize/>
                            </div>
                            <h3>Diamond</h3>
                            <h4>$122.99</h4>
                            <p>per month</p>
                            <ul className='pricing__container-features'>
                                <li> 100 TRacection</li>
                                <li> 23% cash back</li>
                                <li> 100 TRacection</li>
                            </ul>
                            <Button buttonSize='btn-wide' buttonColor='primary'>
                                Choose Plan
                            </Button>
                        </div>
                    </Link>
                </div>
        </div>
    </div></IconContext.Provider>
  )
}

export default Pricing
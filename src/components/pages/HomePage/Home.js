import React from 'react';
import MainSection from '../../MainSection';
import {homeObjOne, homeObjTwo,homeObjThree, homeObjFour, homeObjFive} from './Data';
import Pricing from '../../Pricing';

function Home() {
  return (
    <>
    <MainSection {...homeObjOne} />
    <MainSection {...homeObjTwo} />
    <Pricing/>
    <MainSection {...homeObjThree} />
    <MainSection {...homeObjFour} />
    <MainSection {...homeObjFive} />

    


    </>
  )
}

export default Home
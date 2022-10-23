import React from 'react';
import MainSection from '../../MainSection';
import {homeObjOne, homeObjTwo,homeObjThree, homeObjFour} from './Data';

function Home() {
  return (
    <>
    <MainSection {...homeObjOne} />
    <MainSection {...homeObjTwo} />
    <MainSection {...homeObjThree} />
    <MainSection {...homeObjFour} />


    </>
  )
}

export default Home
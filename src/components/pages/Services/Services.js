import React from 'react';
import MainSection from '../../MainSection';
import { homeObjFour} from './Data';
import Pricing from '../../Pricing';

function Home() {
  return (
    <>
        <Pricing/>
    <MainSection {...homeObjFour} />


    </>
  )
}

export default Home
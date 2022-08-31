// import Item from './Item';
import NavBar from './NavBar';
import React, {useEffect, useState} from 'react'
import ItemContainer from './ItemContainer';

function Landing() {
  return (
    <div className="landing">
      <NavBar />
      <ItemContainer />
    </div>
  );
}

export default Landing;
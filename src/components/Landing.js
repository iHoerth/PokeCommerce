// import Item from './Item';
import NavBar from './NavBar';
import React, {useEffect, useState} from 'react'
import ItemListContainer from './ItemListContainer';
import ItemList from './ItemList';

function Landing() {
  return (
    <div className="landing">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default Landing;
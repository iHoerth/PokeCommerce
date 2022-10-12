import {useState} from 'react'
import ItemDetail from './ItemDetail';
import Counter from './Counter';
import { toTitleCase } from '../Services/Helpers';

export const Item = ({poke}) => {
  const [openDetail,setOpenDetail] = useState(false);
  const [isHover,setIsHover] = useState(false);
   
  const showDetail = () => {
    setOpenDetail(!openDetail);
    document.body.classList.toggle('no-scroll');
  }

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <div className='card-container' onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
        <Counter poke={poke} style={{fontSize:'32px', position:'absolute'}} isHover={isHover} />
        <div className="card" onClick={showDetail} style={{ cursor:'pointer' }}  >
          <div className='card-typeImg'>
            {poke.types.map(type => <img key={poke.id+type} className={'icon '+type} src={'/Images/'+type+'.svg'} alt=''/>)}
          </div>
          <div>
            {`#`+poke.id}
          </div>
          <div>{toTitleCase(poke.name)}</div>
            <div className='pokeimgContainer'>
            <img src ={poke.sprites.front_default || poke.sprites.default} alt=''/>
          </div>
        </div>
        <div>${poke.cost}</div>
      </div>
      
      {
        openDetail ?
        <>
          <div className='backgroundModal' onClick={() => showDetail()}/>
          <ItemDetail  showDetail={showDetail} poke={poke} />
        </>
        :
        null
      }
    </>
  )
}

export default Item;
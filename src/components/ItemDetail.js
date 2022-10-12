import {toTitleCase} from '../Services/Helpers';
import Counter from './Counter';
import CancelIcon from '@mui/icons-material/Cancel';

const ItemDetail = ({showDetail, product}) => {
  
  return (
    
    <div id='itemDetail'>
      <div id='detail-closeModal-container'>
        <div className='detail-types'>
          {
            product.productType === 'pokemon' ?
            product.types.map(type => <img key={product.id+type} className={'icon-large '+type} src={type+'.svg'} alt='' />)
            :
            null
          }
          <div className='detail-number'># {product.id}</div>
        </div>
        <div className='detail-title'>
          <div className="detail-text">{toTitleCase(product.name)}</div>
        </div>
        <CancelIcon onClick={showDetail} style={{fontSize:'60px',color:'#E64848',cursor:'pointer'}}/>
      </div>


      <div id='detail-pokeContainer'> 
        <div className='detail-description-container'>
          <div className='detail-img-container'> 
            <img className="detail-img" src={product.sprites.front_default} alt="" />
            <div className='detail-description'>
            <h3>DESCRIPTION</h3>
              <p>
                {
                  product.species.flavor_text_entries[0].flavor_text + product.species.flavor_text_entries[1].flavor_text
                }
              </p>
            </div>
          </div>
     
            <div className='detail-img-container'> 
              <img className="detail-img" src={product.sprites.back_default} alt="" />
              <div className='detail-description'>
                <p>
                  {
                    product.species.flavor_text_entries[2].flavor_text + product.species.flavor_text_entries[3].flavor_text
                  }
                </p>
              </div>
            </div>
          
        </div>
        <div className='detail-description-container'>
          <div className='detail-stats'>
            <h3>BASE STATS</h3>
            <p>
              {
                product.stats.map(stat => <p>{toTitleCase(stat.stat.name)} : {stat.base_stat} </p>)
              }
            </p>
          </div>
          <div className='detail-evoChain-container'>
            <h3>EVO CHAIN</h3>
            <div className='detail-evoChain-img-container'> 
              <img className="detail-evoChain-img" src={product.sprites.front_default} alt="" />
              <img className="detail-evoChain-img" src={product.sprites.front_default} alt="" />
              <img className="detail-evoChain-img" src={product.sprites.front_default} alt="" />
            </div>
          </div>
        </div>

      </div>
      <Counter product={product} style={{fontSize:'50px', position:'relative'}} />
     
    </div>
  )
}

export default ItemDetail
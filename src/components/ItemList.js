import Item from './Item'

const ItemList = ({pokemons}) => {
  return (
    <>
      {
        pokemons.map(poke => <Item key={poke.id} poke={poke} />)
      }
    </>
  )
}

export default ItemList;


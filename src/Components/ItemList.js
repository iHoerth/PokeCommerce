import Item from './Item'

const ItemList = ({products}) => {
  return (
    <>
      {
        products.map(x => <Item key={x.id} product={x} />)
      }
    </>
  )
}

export default ItemList;


import React, {useEffect, useState} from 'react'

export const Item = ({id,title,price,pictureUrl}) => {
  // const [openDetail,setOpenDetail] = useState(false);

  // const showDetail = () => {
  //   setOpenDetail(!openDetail);
  // }

  return (
    <div className="card">
      <div>{id}</div>
      <div>{title}</div>
      <div>{price}</div>
      <img src ={pictureUrl} alt=''/>
      {/* <button onClick={showDetail}>Show Detail</button> */}
    </div>
  )
}

export default Item;
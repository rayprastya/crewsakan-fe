import React, {useEffect, useState} from 'react';
import GetOrderList from "@/components/getOrderList";

const OrderList = ({ foods, handleClickState = null }) => {
  const [wishlist, setWishlist] = useState(null);

  useEffect(()=> {
    GetOrderList(1, setWishlist);
  }, [])

  return (
    <div className="mt-2">
        {wishlist?.map((food, index) => (
          <div className={`w-100 card p-2 custom-hover-bg`} key={index}
               onClick={()=> {handleClickState && handleClickState(food)}}>
            <h5>{food.name}</h5>
            <div className="d-flex">
              <img src={'https://via.placeholder.com/150'} style={{height:'100px', width:'100px', borderRadius:'20px'}} alt={food.name} />
              <div className="ms-2 w-100">
                <div style={{fontSize:'12px'}}>{food.recipes}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OrderList;

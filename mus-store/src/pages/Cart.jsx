import React from "react";

const Cart = () => {

  const cartItems = ['Italy Guitar', 'Combo Piano', 'Spanish Ukulele'];

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="pt-14 pb-5 text-2xl">Cart</h2>
      <hr />
      <br />
      <div className="flex justify-between gap-x-10">
        
        <div className="flex flex-col w-screen">
          <p>Shopping continue</p> <br />
          <hr /><br />
          <h2>Shopping cart</h2>
          <p>You have 3 item in your cart</p> <br /> 
          <div className="cart_items flex flex-col gap-y-5">
            {cartItems.map((item) => (
              <div className="cart_item border rounded-lg p-3">
                <img src="" alt="" />
                <h2>{item}</h2>
              </div>
            ))}
          </div>
        
        </div>


        <div className="flex flex-col p-6 w-3/5 rounded-3xl cardColor gap-y-8">
          <h2>Card Details</h2>
          <p>Card type</p>
          Cards
          <br />
          <h2>Name of card</h2>
          <input className="cartInput" type="text" placeholder="Name"/>
          <h2>Card Number</h2>
          <input className="cartInput" type="text" placeholder="1111 2222 3333 4444"/>
          <button>$1,672 Checkout</button>
        </div>

      </div>
    </div>
  );
};

export default Cart;

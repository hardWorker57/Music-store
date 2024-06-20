import React, { useState } from "react";
import Auth from "../components/Specials/Catalogs/Auth";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";
import SignIn from "../components/Specials/Catalogs/SignIn";
import AuthDetails from "../components/Specials/Catalogs/AuthDetails";

const Account = ({ likedList, addToCart, isUserAuth, userAuth }) => {
  
  const [toast, setToast] = useState(false);
  const [bol, setBol] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="pt-14 pb-5 text-2xl">Account</h2>
      <hr />
      <br />
      <p className="text-lg">LikedList</p><br />
      { userAuth && <div>
        {likedList.length > 0 && <div className="liked_list_wrap flex-wrap flex justify-between gap-y-3 pb-7 pt-7 cart_item rounded-lg p-3">
          {likedList.map((item, i) => (
            <div key={i} className="liked_list flex flex-col items-center bg-slate-600 cart_item overflow-hidden rounded-lg p-3">
              <Link to={`/product/good/${item.id}`}><img className="rounded-xl max-w-full h-44 object-contain" src={item.img} alt="" /></Link>
              {item.title}
              <p>{item.price}$</p>
              <div className="flex gap-x-4 pb-1">
                <button className="text-sm p-2 pt-1 pb-1" onClick={() => { item.stock && addToCart(item); item.stock && setToast(true); setTimeout(() => { setToast(false) }, 800); }}>Add to cart</button>
                <button className="text-sm p-2 pt-1 pb-1" onClick={() => { setBol(!bol); likedList.splice(i, 1) }}><GoTrash /></button>
              </div>
              <div className={`${toast ? 'toastActive fixed top-24 bg-green-500 right-10 p-2.5 cart_item border-t-red-600 border-t-4 border border-transparent' : 'toast fixed top-24 bg-green-500 right-10 p-2.5 cart_item border-t-red-600 border-t-4 border border-transparent'} `}>Successfully added</div>
            </div>
          ))}
        </div>}
      </div>}
      <br />

      <Auth />
      <br /><hr /><br />
      <SignIn />
      <AuthDetails isUserAuth={isUserAuth} />
    </div>
  );
};

export default Account;

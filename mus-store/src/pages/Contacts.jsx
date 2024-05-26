import React from "react";

const Contacts = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="pt-14 pb-5 text-2xl text-center">Contact us</h2>
      <hr />
      <br />
      <div className="flex flex-col gap-y-10">
        <p className="text-center mx-auto max-w-md">Say Hello send us your thoughts about our products or share your ideas with our Team!</p>
        <div className="flex justify-between">
          <div className="flex flex-col items-center w-full">+996 556 202 806 </div>
          <div className="flex flex-col items-center w-full">pobedovataj@gmail.com</div>
        </div>
        <div className="flex justify-center"><button className="">Send</button></div>
      </div>
    </div>
  );
};

export default Contacts;

import React from "react";

const CRUD = () => {
  return (
    <div>
          <h2>CRUD</h2>
          <div>
            <input placeholder="title" type="text" onChange={(e) => setNewInstrTitle(e.target.value)}/>
            <input placeholder="price" type="text" onChange={(e) => setNewInstrPrice(e.target.value)}/>
            <input placeholder="description" type="text" onChange={(e) => setNewInstrDesc(e.target.value)}/>
            <input placeholder="producer" type="text" onChange={(e) => setNewInstrProducer(e.target.value)}/>
          </div>
    </div>
  );
};

export default CRUD;

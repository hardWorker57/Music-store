import "./App.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Basics/Footer";
import Header from "./components/Basics/Header";
import Home_page from "./pages/Home_page";
import Blog from "./pages/Blog";
import Account from "./pages/Account";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import Catalog from "./components/Specials/Catalogs/Catalog";
import {db} from './config/firebase'
import { useState, useEffect } from "react";
import { getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import About from "./pages/About";

function App() {
  const [instrumentsList, setInstrumentsList] = useState([]);

  const [newInstrTitle, setNewInstrTitle] = useState("")
  const [newInstrPrice, setNewInstrPrice] = useState(0)
  const [newInstrDesc, setNewInstrDesc] = useState("")
  const [newInstrProducer, setNewInstrProducer] = useState("")
  const [newInstrType, setNewInstrType] = useState("")

  const instrumentsCollectionRef = collection(db, 'instruments');

  const getInstrumentsList = async () => {
    try {
      const data = await getDocs(instrumentsCollectionRef);
      const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setInstrumentsList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteInstrument = async (id) => {
    const instrDoc = doc(db, 'instruments', id);
    await deleteDoc(instrDoc);
  }

  useEffect(() => {
    getInstrumentsList();

  }, [deleteInstrument()]);

  const onSubmitInstrument = async () => {
    try {
      await addDoc(instrumentsCollectionRef, {
        title: newInstrTitle,
        price: newInstrPrice,
        description: newInstrDesc,
        producer: newInstrProducer,
        type: newInstrType
      })
    } catch (err) {
      console.error(err)
    }
  }
  
  // getInstrumentsList();

  return (
    <div className="bg-slate-500 text-white h-full overflow-x-hidden">
      <Header />
      <div className="relative mt-10 z-10">
        <input placeholder="title" type="text" onChange={(e) => setNewInstrTitle(e.target.value)}/>
        <input placeholder="price" type="text" onChange={(e) => setNewInstrPrice(Number(e.target.value))}/>
        <input placeholder="description" type="text" onChange={(e) => setNewInstrDesc(e.target.value)}/>
        <input placeholder="producer" type="text" onChange={(e) => setNewInstrProducer(e.target.value)} />
        <input placeholder="type" type="text" onChange={(e) => setNewInstrType(e.target.value)}/>
        <button onClick={onSubmitInstrument}>Submit</button>
      </div>
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/personal" element={<Account />}/>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Catalog instruments={instrumentsList} deleteInstrument={deleteInstrument} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

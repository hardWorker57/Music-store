//  App.jsx
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
import Good_page from "./components/Specials/Catalogs/Good_page";

function App() {
  const [instrumentsList, setInstrumentsList] = useState([]);

  const [newInstrTitle, setNewInstrTitle] = useState("")
  const [newInstrPrice, setNewInstrPrice] = useState(0)
  const [newInstrDesc, setNewInstrDesc] = useState("")
  const [newInstrProducer, setNewInstrProducer] = useState("")
  const [newInstrType, setNewInstrType] = useState("")
  const [newInstruments, setNewInstruments] = useState([])
  const [likedList, setLikedList] = useState([])
  const [cart, setCart] = useState([])
  const [userAuth, setUserAuth] = useState('')

  const instrumentsCollectionRef = collection(db, 'instruments');

  const deleteInstrument = async (id) => {
    try {
      const instrDoc = doc(db, 'instruments', id);
      await deleteDoc(instrDoc);
    } catch (err) {
      console.error(err);
    }
    
  } 

  useEffect(() => {
    const getInstrumentsList = async () => {
      try {
        const data = await getDocs(instrumentsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setInstrumentsList(filteredData);
      } catch (err) {
        console.error(err);
      }
    }
    getInstrumentsList()
  }, [])

  // useEffect(() => {
  //   const getNewInstruments = () => {
  //     fetch('https://665379241c6af63f4674c745.mockapi.io/api/v1/instruments')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data) {
  //           setNewInstruments(data)
  //         }
  //       });
  //   }
  //   getNewInstruments();
  // }, [])

  const addToCart = (item) => {
    cart.includes(item) ? console.log('error') : setCart( prev => [...prev, item])
  }

  const addToLikedList = (item) => {
    likedList.includes(item) ? console.log('error') : setLikedList( prev => [...prev, item])
  }

  const getUserAuth = (userAuth) => {
    setUserAuth(userAuth)
  }

  
  const onSubmitInstrument = async () => {
    try {
      await addDoc(instrumentsCollectionRef, {
        title: newInstrTitle,
        price: newInstrPrice,
        description: newInstrDesc,
        producer: newInstrProducer,
        type: newInstrType
        // img: newImage,
        // stock: true
      })
    } catch (err) {
      console.error(err)
    }
  }
  

  return (
    <div className="bg-slate-500 text-white h-full overflow-x-hidden">
      <Header instruments={instrumentsList}/>
      {/* <div className="relative mt-10 z-10">
        <input placeholder="title" type="text" onChange={(e) => setNewInstrTitle(e.target.value)}/>
        <input placeholder="price" type="text" onChange={(e) => setNewInstrPrice(Number(e.target.value))}/>
        <input placeholder="description" type="text" onChange={(e) => setNewInstrDesc(e.target.value)}/>
        <input placeholder="producer" type="text" onChange={(e) => setNewInstrProducer(e.target.value)} />
        <input placeholder="type" type="text" onChange={(e) => setNewInstrType(e.target.value)}/>
        <button onClick={onSubmitInstrument}>Submit</button>
      </div> */}
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/personal" element={<Account userAuth={userAuth} isUserAuth={getUserAuth} likedList={likedList} addToCart={addToCart} />}/>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart cart={cart} userAuth={userAuth} />} />
        <Route path="/product/good/:id" element={<Good_page instruments={instrumentsList} />} />
        <Route path="/product/:id" element={<Catalog likedList={likedList} addToLikedList={addToLikedList} instruments={instrumentsList} deleteInstrument={deleteInstrument} addToCart={addToCart} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

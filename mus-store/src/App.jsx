import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Footer from "./components/Basics/Footer";
import Header from "./components/Basics/Header";
import Home_page from "./pages/Home_page";
import Blog from "./pages/Blog";
import Account from "./pages/Account";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import Catalog from "./components/Specials/Catalogs/Catalog";

function App() {
  return (
    <div className="bg-slate-500 text-white h-max overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="/personal" element={<Account />}/>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Catalog/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

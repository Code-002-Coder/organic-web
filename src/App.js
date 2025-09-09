import './App.css';
import { Navbar, RequiresAuth, Footer, Services } from './Components';
import { Routes, Route, useLocation } from "react-router-dom";
import { 
  Home, Products, Wishlist, Cart, Login, SignUp, 
  SingleProduct, Address, CheckoutPage, Order, Error 
} from "./Pages";
import Contact from "./Components/Contact/Contact";
import About from './Components/About/About';

function App() {
  const location = useLocation();
  return (
    <>
      {/* Navbar now applied globally */}
      {/* <Navbar />    */}
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<RequiresAuth><Wishlist /></RequiresAuth>} />
          <Route path="/cart" element={<RequiresAuth><Cart /></RequiresAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/address" element={<Address />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Error />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </div>
      {location.pathname !== "/products" && <Footer />}
    </>
  );
}

export default App;































// import './App.css';
// import { Navbar, RequiresAuth } from './Components';
// import {  Routes,Route } from "react-router-dom";
// import { Home,Products,Wishlist,Cart,Login,SignUp,SingleProduct, Address, CheckoutPage,Order,Error } from "./Pages";
// import { Footer } from './Components';
// import Contact from "./Components/Contact/Contact";
// import About from './Components/About/About';
// import { Services } from './Components';
// import { useLocation } from "react-router-dom";

// function App() {
//   const location = useLocation();
//   return (
//     <>
//     {/* <Navbar /> */}
//     <div className='App'>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/wishlist" element={<RequiresAuth><Wishlist /></RequiresAuth>} />
//         <Route path="/cart" element={<RequiresAuth><Cart /></RequiresAuth>} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/product/:productId" element={<SingleProduct />} />
//         <Route path="/address" element={<Address />} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//         <Route path="/order" element={<Order />} />
//         <Route path="*" element ={<Error/>}/>
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Services" element={<Services />} />
//      </Routes>
//     </div>
//     {location.pathname !== "/products" && <Footer />}
//     </>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Pricing from "./Pricing";
import Signup from "./Signup";
import Features from "./Features";
import Checkout from "./Checkout";


function AllRoutes() {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/Features' element={<Features />} />
         <Route path='/pricing' element={<Pricing />} />
         <Route path='/Checkout' element={<Checkout />} />
      </Routes>
   );
}

export default AllRoutes;
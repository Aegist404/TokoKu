import { BrowserRouter, Routes, Route } from "react-router-dom"

// * Pages
// import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Home from "./components/pages/Home"
import Keranjang from "./components/pages/Cart"
import Pesanan from "./components/pages/pesanan"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/cart" element={<Keranjang />}/>
          <Route path="/order" element={<Pesanan/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

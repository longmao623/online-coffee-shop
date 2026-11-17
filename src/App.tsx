import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import { Layout } from "@/components/layout/Layout"
import { Home } from "@/pages/Home"
import { Menu } from "@/pages/Menu"
import { Cart } from "@/pages/Cart"
import { Checkout } from "@/pages/Checkout"
import { OrderSuccess } from "@/pages/OrderSuccess"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-success" element={<OrderSuccess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App

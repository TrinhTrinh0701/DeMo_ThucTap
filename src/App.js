import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./components/Layout/Main";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Product from "./pages/Product/Product";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/pricing" element={<Pricing></Pricing>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
        </Route>
        <Route path="*" element={<>This is 404 Page</>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

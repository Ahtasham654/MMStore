import  './css/style.css'
import './css/bootstrap.min.css'
import './css/tiny-slider.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Homepage/Homepage';
import { About } from './AboutUS/About';
import {Shop} from './Shop/Shop';
import { Service } from './Services/Service';
import { Blog } from './Blog/Blog';
import { Contact } from './Contact/Contact';
import { Cart } from './Cart/Cart';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} exact/>
      <Route path='/aboutus' element={<About/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

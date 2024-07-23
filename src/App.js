import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Feature from './components/main/Feature';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/main/Signin';
import Signup from './components/main/Signup';
import NotFound404 from './components/main/NotFound404';
import About from './components/main/About';
import Support from './components/main/Support';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from './components/products/Product';
import ContactUs from './components/main/ContactUs';
import ProductDetails from './components/products/ProductDetails';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path='/' element={<Feature />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Product />} />
        <Route path='/product-detail/:id' element={<ProductDetails />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/support' element={<Support />} />
        <Route path='*' element={<NotFound404 />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

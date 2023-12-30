import './App.css';
import Cart from './components/cart/cart';
import Header from './components/header/header';
import Products from './components/products/products';
import Provider from './context/provider';

function App() {
  return (
    <Provider className="">
      <Header/>

      <Products />
      <Cart/>
    </Provider>
  );
}

export default App;

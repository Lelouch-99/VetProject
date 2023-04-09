import Home from './Sections/Components/Home/Home';
import About from './Sections/Components/About/About';
import Products from './Sections/Components/Products/Products';
import Service from './Sections/Components/Service/Service';
import Contact from './Sections/Components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Products/>
      <Service/>
      <Contact/>
    </div>
  );
}

export default App;

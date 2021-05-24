import './GlobalStyles.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Portifolio from './Components/Portifolio/Portifolio';
import About from './Components/About/About';
import Contanct from './Components/Contact/contact';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portifolio />
      <Contanct />
    </>
  );
}

export default App;

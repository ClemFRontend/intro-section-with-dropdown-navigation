import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      {/* To delete */}
      <div className='design' />
      {/*  */}
    </>
  );
}

export default App;

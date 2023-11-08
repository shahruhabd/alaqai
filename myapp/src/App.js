import './css/app.css'
import Main from './pages/Main';
import Programs from './pages/Programs';
import Price from './pages/Price';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Main />
        <Programs />
        <Price /> 
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;

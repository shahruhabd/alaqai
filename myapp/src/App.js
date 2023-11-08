import './css/app.css'
import Main from './pages/Main';
import Programs from './pages/Programs';
import Price from './pages/Price';
function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Main />
        <Programs />
        <Price /> 
      </div>
    </div>
  );
}

export default App;

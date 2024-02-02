import Search from './components/Search/index'
import CurrentWeather from './components/CurrentWeather/index'
import Forecast from './components/Forecast';
import ToggleButton from './components/ToggleButton';
import './App.css';


function App() {
  return (
    <>
     <div className='container'>
        <div className='overlay'>
          <Search/>
          <CurrentWeather/>
          <Forecast/>
        </div>
     </div>
    </>
  );
}

export default App;

import './assets/scss/App.scss';
import AirbnbHeader from './components/AirbnbHeader.js';
import AirbnbHero from './components/AirbnbHero.js';

// App root
function App() {
  	return (
  	  	<div className="App">  	  		
  	  		<AirbnbHeader/>
  	  		<AirbnbHero/>
  	  	</div>
  	);
}

export default App;
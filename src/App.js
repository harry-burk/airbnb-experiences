import './assets/scss/App.scss';
import AirbnbHeader from './components/AirbnbHeader.js';
import AirbnbHero from './components/AirbnbHero.js';
import AirbnbExperiences from './components/AirbnbExperiences.js';

// App root
function App() {
  	return (
  	  	<div className="App">  	  		
  	  		<AirbnbHeader/>
  	  		<AirbnbHero/>
  	  		<AirbnbExperiences/>
  	  	</div>
  	);
}

export default App;
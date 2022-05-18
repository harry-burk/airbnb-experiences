import hero from '../assets/img/hero.png';

function AirbnbHero() {
  	return (
  	  	<div className="section-hero pt-5 my-5">
  	  		<div className="container">
  	  			<div className="row">
  	  				<div className="col-12">
  	  					<img src={hero}/>	
  	  				</div>
  	  			</div>

  	  			<div className="row mt-5">
  	  				<div className="col-7">
  	  					<h1>Online Experiences</h1>
						<h4>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h4>
  	  				</div>
  	  			</div>
  	  		</div>
  	  	</div>
  	);
}

export default AirbnbHero;
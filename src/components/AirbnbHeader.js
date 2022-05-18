import logo from '../assets/img/logo.svg';

function AirbnbHeader() {
  	return (
  	  	<header>
  	  		<div className="container">
  	  			<div className="row">
  	  				<div className="col-12">
  	  					<img src={logo} className="app-logo"/>		
  	  				</div>
  	  			</div>
  	  		</div>  	  		
  	  	</header>
  	);
}

export default AirbnbHeader;
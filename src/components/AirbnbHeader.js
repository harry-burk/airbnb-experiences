import logo from '../assets/img/logo.svg';

function AirbnbHeader() {
  	return (
  	  	<header>
  	  		<div class="container">
  	  			<div class="row">
  	  				<div class="col-12">
  	  					<img src={logo} className="app-logo"/>		
  	  				</div>
  	  			</div>
  	  		</div>  	  		
  	  	</header>
  	);
}

export default AirbnbHeader;
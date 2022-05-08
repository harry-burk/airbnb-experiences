import img from '../assets/img/katie.jpg';
import star from '../assets/img/star.svg';

function AirbnbExperiences() {
  	return (
  	  	<div className="section-experiences">
  	  		<div className="container">
  	  			<div className="row">
  	  				<div className="col-12">
  	  					<div className="card">
  	  						<div className="card-img mb-1" style={{backgroundImage: "url(" + img + ")"}}>
  	  							<div className="card-status">
  	  								<p className="m-0 text-uppercase">SOLD OUT</p>
  	  							</div>
  	  						</div>

  	  						<div className="card-meta d-flex m-0">
  	  							<img src={star} className="star"/>
  	  							<p className="m-0">&nbsp;5.0&nbsp;</p>
  	  							<p className="m-0 grey">(6) — USA</p>
  	  						</div>

  	  						<p className="m-0">Life lessons with Katie Zeferes</p>
  	  						<p className="m-0"><strong>From $136</strong> / person</p>
  	  					</div>
  	  				</div>
  	  			</div>
  	  		</div>	
  	  	</div>
  	);
}

export default AirbnbExperiences;
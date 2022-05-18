import star from '../assets/img/star.svg';

function AirbnbCard(props) {
	let status = (props.item.openSpots == 0) ? 'Sold Out' : (props.item.openSpots < 5) ? 'Selling Fast' : false;

  	return (
  		<div className="card">
  			<div className="card-img mb-1" style={{backgroundImage: "url(/img/" + props.item.coverImg + ")"}}>

  				{/* Only render the badge if status has a value */}
  				{status && 
  					<div className="card-status">
  						<p className="m-0 text-uppercase">{status}</p>
  					</div>
  				}

  			</div>

  			<div className="card-meta d-flex m-0">
  				<img src={star} className="star"/>
  				<p className="m-0">&nbsp;{props.item.stats.rating}&nbsp;</p>
  				<p className="m-0 grey">({props.item.stats.reviewCount}) — {props.item.location}</p>
  			</div>

  			<p className="m-0">{props.item.title}</p>
  			<p className="m-0"><strong>From ${props.item.price}</strong> / person</p>
  		</div>	 	  	
  	);
}

export default AirbnbCard;
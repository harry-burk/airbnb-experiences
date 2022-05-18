import katie from '../assets/img/katie.jpg';
import wedding from '../assets/img/wedding.jpg';
import data from '../assets/data/data';
import AirbnbCard from './AirbnbCard.js';

function AirbnbExperiences() {
	const cards = data.map( function(item) {
		// console.log(item)

		return (
			<AirbnbCard   	  						
				key={item.id}
				item={item}
				// CardImg={item.coverImg}
				// CardRating={item.stats.rating}
				// CardReviewCount={item.stats.reviewCount}
				// CardLocation={item.location}
				// CardTitle={item.title} 
				// CardPrice={item.price}
				// openSpots={item.openSpots}
			/> 
		)
	})

  	return (
  	  	<div className="section-experiences">
  	  		<div className="container">
  	  			<div className="row">
  	  				<div className="col-12 d-flex">
  	  					{cards}  					
  	  				</div>
  	  			</div>
  	  		</div>	
  	  	</div>
  	);
}

export default AirbnbExperiences;
import Bottom from './Bottom';
import Sneakers from './Sneakers';
import Top from './Top';

function Card() {
	return (
		<section className="card">
			<Top />
			<Sneakers />
			<Bottom />
		</section>
	);
}

export default Card;

import Cars from './Cars'
import Toyota from './assets/hyryder.jpeg'
import Venue from './assets/venue.jpg'
import Virtus from './assets/virtus.jpg'
import { Link } from 'react-router-dom'

function CarsList(){
    const carslist = [
        {name : "Toyota", image : Toyota, desc : "This is the Toyota HyRyder"},
        {name : "Hyundai", image : Venue, desc : "This is the Hyundai Venue"},
        {name : "Volkswagen", image : Virtus, desc : "This is the Volkswagen Virtus"},
    ];

    let cars = carslist.map((car, index) => {
        return(
            <Cars key = {index} name = {car.name} image = {car.image} desc = {car.desc}/>
        );
    });

    return(
        <>
            {cars}
            <br />
            <Link to={"/form"}>Form</Link>
        </>
    );
}

export default CarsList;
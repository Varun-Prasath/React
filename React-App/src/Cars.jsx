import Virtus from './assets/virtus.jpg'

function Cars(props){
    return (
        <div className="car">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
        </div>
    );
}

Cars.defaultProps = {
    name : "Hyundai",
    image : Virtus,
    desc : "This is a new car" 
};

export default Cars;
function Cars(props){
    return (
        <div className="car">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
        </div>
    );
}

export default Cars;
import './Card.css';
import { Link } from "react-router-dom";

function Card(props) {
    // const navigate = useNavigate();

    return (

        <div className="container">
            <div className="card">
                <img src={props.img} alt="hello" className="card-img-top" style={{ height: 200 }}></img>
                <div className="card-body">
                    <div style={{ textAlign: "center" }}>
                        <h3 className="card-title">{props.name}</h3>
                        <Link to="/groceries" className="btn btn-danger">Check Now</Link>
                    </div>            
                </div>
            </div>
        </div>
    );
}

export default Card;
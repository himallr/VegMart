import './Card.css';
import { Link, useNavigate } from "react-router-dom";

function Card(props) {
    const navigate = useNavigate();

    const navigation = (id) => {
        switch (id) {
            case 1: navigate("/Groceries");
                break;
            case 2: navigate('/grains');
                break;
            case 3: navigate('/snack');
                break;
            case 4: navigate('/phones');
                break;
        }
    }

    return (
        <div className="card mx-2 my-3">
            <img src={props.img} alt="hello" className="card-img-top" style={{ height: 200 }}></img>
            <div className="card-body">
                <div style={{ textAlign: "center" }}>
                    <h3 className="card-title">{props.name}</h3>
                    <button key={props.id} onClick={() => navigation(props.id)} className="btn btn-danger">Check Now</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
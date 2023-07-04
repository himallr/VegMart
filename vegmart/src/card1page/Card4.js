import { CardHeader, Card, Avatar, CardMedia, CardContent, Typography } from "@mui/material";
import { red } from '@mui/material/colors';
import React from "react";
import { Link } from "react-router-dom";

function Card4(props) {

    // const { onAdd } = { name, image, price, weight };
    
    const {products, onAdd} = props;

    return (
        <div style={{ paddingLeft: "20" }}>
            <div className="card mx-2 border-0">
                <div className="pl-5">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    {props.id}
                                </Avatar>
                            }
                            title={props.name}
                        />
                        <CardMedia
                            component="img"
                            sx={{
                                display: "flex", marginLeft: "auto",
                                marginRight: "auto", maxWidth: 200
                            }}
                            image={props.image}
                            alt="tomatoes"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {props.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Rs.{props.price} {props.weight}
                            </Typography>
                        </CardContent>
                        <div style={{ textAlign: "center" }}>
                            <Link to="/Cart"><button onClick={() => onAdd(products)} className="btn btn-danger mx-5 my-2">Add to Cart</button></Link>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Card4;
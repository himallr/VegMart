import { CardHeader, Card, Avatar, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { red } from '@mui/material/colors';
import React from "react";
import { Link } from "react-router-dom";

function Card4(props) {

    const { products, onAdd } = props;

    return (
        <div style={{ paddingLeft: "20" }}>
            <div className="card mx-2 border-0">
                <div className="pl-5">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    {products.id}
                                </Avatar>
                            }
                            title={products.name}
                        />
                        <CardMedia
                            component="img"
                            sx={{
                                display: "flex", marginLeft: "auto",
                                marginRight: "auto", maxWidth: 200
                            }}
                            image={products.image}
                            alt="tomatoes"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {products.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Rs.{products.price}{products.weight}
                            </Typography>
                        </CardContent>
                        <div style={{ textAlign: "center" }}>
                            <Link to="/Cart"><button onClick={() => onAdd(products)} className="btn btn-danger mx-5 my-2">Add to Cart</button></Link>
                            
                        </div>
                    </Card>
                    <Link to="/Cart">Cart</Link>
                </div>
            </div>
        </div>
    )
}

export default Card4;
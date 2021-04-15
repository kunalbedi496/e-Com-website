import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect, Link } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper";

const Card = ({
    product,
    addToCart = true,
    removeFromCart = false,
    setReload = (f) => f,
    // function(f){return f}
    reload = undefined
}) => {
    const [redirect, setRedirect] = useState(false);
    // const [count, setCount] = useState(product);
    const addtoCart = () => {
        addItemToCart(product, () => setRedirect(true));
    };

    const getAredirect = (redirect) => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const cardTitle = product ? product.name : "A photo from pexels";
    const cardDescription = product
        ? product.description
        : "A photo from pexels";
    const cardPrice = product ? product.price : "A photo from pexels";

    const ShowAddToCart = (addToCart) => {
        return (
            addToCart && (
                <div className="col-12">
                    <button
                        onClick={addtoCart}
                        className="btn btn-block btn-outline-success mt-2 mb-2"
                    >
                        Add to Cart
                    </button>
                </div>
            )
        );
    };

    const ShowRemoveFromCart = (removeFromCart) => {
        return (
            removeFromCart && (
                <div className="col-12">
                    <button
                        onClick={() => {
                            removeItemFromCart(product._id);
                            setReload(!reload);
                        }}
                        className="btn btn-block btn-outline-danger mt-2 mb-2"
                    >
                        Remove from cart
                    </button>
                </div>
            )
        );
    };
    return (
        <div style={{ margin: 5 }} >
            <div className="card  cmain border ">
                <div className="card-body text-center">
                    <ImageHelper product={product} />
                    <div className="mt-3 card-title h4">{cardTitle}</div>
                    <div className="lead font-weight-normal text-wrap">
                        {cardDescription}
                        {getAredirect(redirect)}
                    </div>
                   
                    <div >
                        Price : ₹{cardPrice}
                    </div>
                    <div className="row">
                        {ShowAddToCart(addToCart)}
                        {ShowRemoveFromCart(removeFromCart)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

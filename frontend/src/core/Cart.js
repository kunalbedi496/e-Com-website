import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/CartHelper";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        setProducts(loadCart());
    }, [reload]);
    const loadAllProducts = () => {
        // console.log(products);
        return (
            <div className="row">
                {/* <h2>Your Cart</h2> */}
                {products.map((product, index) => (
                    <ul key={index} className="" >

                        <Card
                            key={index}
                            product={product}
                            addToCart={false}
                            removeFromCart={true}
                            setReload={setReload}
                            reload={reload}
                        />
                    </ul>
                ))}
            </div>
        );
    };

    const loadCheckout = () => {
        return (
            <div>
                <h2>Checkout</h2>
            </div>
        );
    };

    return (
        <Base title="Cart" description="Let's Checkout">
            <div className="row d-flex justify-content-center">
                <div>{loadAllProducts()}</div>
                {/* <div className="col-6">{loadCheckout()}</div> */}
            </div>
        </Base>
    );
};
export default Cart;

import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

const Home = () => {
    const [products, setProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProduct = () => {
        getProducts().then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
            }
        });
    };

    useEffect(() => {
        loadAllProduct();
    }, []);

    return (
        <Base title="Welcome to the T-shirt Store" description="Lets buy new t-shirts!">
            <div className="row text-center">
                {/* <h1 className="">All of tshirts</h1> */}
                <div className="row d-flex justify-content-center">
                    {products.map((product, index) => {
                        return (
                            <ul key={index} className="" >
                                <Card product={product} />
                            </ul>
                        );
                    })}
                </div>
            </div>
        </Base>
    );
};
export default Home;

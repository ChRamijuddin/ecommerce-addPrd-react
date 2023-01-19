import React from "react";
// import Header from "../components/header/Header";
import Product from "../components/product/Product";
import "./Home.css";

const Home = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="home">
                <img
                    className="home_image"
                    src="https://t3.ftcdn.net/jpg/03/59/15/22/240_F_359152211_hdmFLcnqcxn0VNOu9AmTKpINfNPOxa7V.jpg"
                    alt=""
                />
                <div className="home_row">
                    <Product
                        id="14246"
                        title="The product 1"
                        price={120.33}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/71y5bIv2XiL._AC_UL1500_.jpg"
                    />
                    <Product
                        id="14224"
                        title="The product 2"
                        price={140.33}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/4114cX+XHgL._AC_UF226,226_FMjpg_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="16824"
                        title="The product 3"
                        price={465.3}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81bnFc3QuUL._AC_UF226,226_FMjpg_.png"
                    />
                    <Product
                        id="144"
                        title="The product 4"
                        price={505}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/316Aw7TN4tL._AC_UF226,226_FMjpg_.jpg"
                    />
                    <Product
                        id="1224"
                        title="The product 5"
                        price={127.33}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/41zVUiJBVcL._AC_UF226,226_FMjpg_.jpg"
                    />
                </div>

                <div className="home_row">
                    <Product
                        id="1424"
                        title="The product 6"
                        price={133.33}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/41ylftZVO7L._AC_UF226,226_FMjpg_.jpg"
                    />
                </div>

            </div>
        </>
    );
};

export default Home;

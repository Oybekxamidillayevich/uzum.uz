import React from "react";
import "./Product.css";
import Data from '../../Data';
import { Link } from "react-router-dom"

const Product = () => {
    return (

        <div className="Product_Container">
            <h1 className="lkop">Barcha Mahsulotlar</h1>
           

            <div className="BoxCards">
                {Data?.map((Value, inx) => {
                    return (

                        <div key={inx} className="Cards">
                            <img width={150} src={Value.img} alt="" />
                            <Link to={`mahsulot/${Value.id}`}>
                                <h3>{Value.name}</h3>
                            </Link>

                            <b>{Value.model}</b>
                            <p>{Value.price}</p>

                        </div>
                    )
                })

                }

            </div>
        </div >

    )
}
export default Product
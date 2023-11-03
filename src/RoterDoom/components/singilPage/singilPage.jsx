import React from "react";
import "./singilPage.css"
import { useParams } from "react-router"
import Data from "../../Data"


const SingelPage = () => {
    const { id } = useParams()


    const result = Data?.filter(i => i.id == id)


    return (

        <div>
            {
                result?.map((Value, inx) => {
                    return (
                        <div key={inx} className="">
                            <img src={Value.img} alt="" />
                            <h3>{Value.name}</h3>
                            <b>{Value.model}</b>
                            <p>{Value.price}</p>
                        </div>
                    )
                })
            }


        </div >

    )
}
export default SingelPage
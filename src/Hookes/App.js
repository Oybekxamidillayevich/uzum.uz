import React, { Fragment, useEffect, useState } from "react";
import "./style.css"
import image from "./image/planeta.jpg"
const App = () => {
    const [state, setState] = useState(0);
    const [msg, setmsg] = useState("")
  
    useEffect(() => {
        console.log("Hello world");
        setmsg(`event - ${state}`)
    }, [state]);
    const data = [
        {
            name: "Kobalt",
            surname: "160.000",
            age: 2018,
            phone: "Qora kraska yoq",
            addres: "14.000$"

        },
        {
            name: "Nexia",
            surname: "220.000",
            age: 2014,
            phone: "Ko'k kraska bor",
            addres: "10.000$"

        },
        {
            name: "Spark",
            surname: "100.000",
            age: "2020",
            phone: "Oq kraska ozgina bor",
            addres: "14.500$"

        },
        {
            name: "Gentra",
            surname: "60.00",
            age: "2023",
            phone: "Qora kraska yoq",
            addres: "19.000$"

        }
    ]
    return (
        <Fragment>
            <div className="App">
                <img className="img" src={image} alt="" />


                <table className="Table" border={1}>
                    <thead>
                        <tr>
                            <th>N%</th>
                            <th>Markasi</th>
                            <th>Probeg</th>
                            <th>Yili</th>
                            <th>Rangi</th>
                            <th>Narxi</th>
                        </tr>
                    </thead>

                    <tbody className="tBody">
                        {data.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.age}</td>
                                    <td className="phone1">{item.phone}</td>
                                    <td>{item.addres}</td>
                                </tr>

                            );
                        })}
                    </tbody>

                </table>

            </div>

        </Fragment>
    )
}
export default App

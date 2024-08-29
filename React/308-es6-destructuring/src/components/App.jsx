import React from "react";
import cars from "../practice";

function App(){

    const [honda, tesla] = cars;

   return <div>
        <table>
            <tr>
                <th>Brand</th>
                <th>Top Speed</th>
                <th>Top Colour</th>
            </tr>
            <tr>
                <td>{tesla.model}</td>
                <td>{tesla.speedStats.topSpeed}</td>
                <td>{tesla.coloursByPopularity[0]}</td>
            </tr>
            <tr>
                <td>{honda.model}</td>
                <td>{honda.speedStats.topSpeed}</td>
                <td>{honda.coloursByPopularity[0]}</td>
            </tr>
     </table>
    </div>
}

export default App;
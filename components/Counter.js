import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Counter () {
    const [count, setCount] = useState(0);
    return (
        <Layout>
            <div>
                <button onClick={() => {setCount(count + 1)}}>+</button> <br/>
                <button onClick={() => {setCount(count - 1)}}>-</button>
            </div>
            <div>{count}</div>
        </Layout>
    )
}
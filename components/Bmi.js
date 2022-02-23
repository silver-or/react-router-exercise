import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Bmi () {
    const [name, setName] = useState("")
    const [height, setHeight] = useState(0.0)
    const [weight, setWeight] = useState(0.0)
    const [result, setResult] = useState("")
    const getBmi = () => {
        let name = document.getElementById('name').value
        let height = document.getElementById('height').value
        let weight = document.getElementById('weight').value
        setName(name)
        setHeight(height)
        setWeight(weight)
        setResult("이름 : " + name + ", " +
                "키 : " + height + ", " +
                "몸무게 : " + weight)
    }

    return (
        <Layout>
            <form>
                <label><b>이름</b></label> &nbsp;
                <input id="name"/> <br/>
                <label><b>키</b></label> &nbsp;
                <input id="height"/> <br/>
                <label><b>몸무게</b></label> &nbsp;
                <input id="weight"/> <br/>
            </form>
            <div>
                <button onClick={() => {getBmi()}}>Bmi 지수 계산하기</button>
                <div>{result}</div>
                <button>취소</button>
            </div>
        </Layout>
    )
}
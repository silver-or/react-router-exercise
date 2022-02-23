import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Calc () {
    const [num1, setNum1] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState("")
    const calculate = () => {
        let num1 = document.getElementById('num1').value
        let opcode = document.getElementById('opcode').value
        let num2 = document.getElementById('num2').value
        setNum1(num1)
        setOpcode(opcode)
        setNum2(num2)
        switch (opcode) {
            case "+" : setResult(num1 + opcode + num2 + "=" + (Number(num1) + Number(num2))); break;
            case "-" : setResult(num1 + opcode + num2 + "=" + (Number(num1) - Number(num2))); break;
            case "*" : setResult(num1 + opcode + num2 + "=" + (Number(num1) * Number(num2))); break;
            case "/" : setResult(num1 + opcode + num2 + "=" + (Number(num1) / Number(num2))); break;
            case "%" : setResult(num1 + opcode + num2 + "=" + (Number(num1) % Number(num2))); break;
            default : setResult("올바른 연산자가 아닙니다."); break;

        }
    }
    return (
        <Layout>
            <form>
                <label><b>num1</b></label> &nbsp;
                <input id="num1"/> <br/>
                <label><b>opcode</b></label> &nbsp;
                <select id="opcode">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                    <option value="%">%</option>
                </select> <br/>
                <label><b>num2</b></label> &nbsp;
                <input id="num2"/>
            </form>
            <div>
                <button onClick={() => calculate()}>계산하기</button>
                <div>{result}</div>
                <button>취소</button>
            </div>
        </Layout>
    )
}
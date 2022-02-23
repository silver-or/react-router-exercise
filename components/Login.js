import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Login () {
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [result, setResult] = useState("")
    const login = () => {
        let id = document.getElementById('id').value
        let pw = document.getElementById('pw').value
        setId(id)
        setPw(pw)
        setResult("ID : " + id + ", " + "PW : " + pw)
    }
    return (
        <Layout>
            <form>
                <label><b>ID</b></label> &nbsp;
                <input id="id"/> <br/>
                <label><b>PW</b></label> &nbsp;
                <input id="pw"/> <br/>
            </form>
            <div>
                <button onClick={() => login()}>로그인하기</button>
                <div>{result}</div>
                <button>취소</button>
            </div>
        </Layout>
    )
}
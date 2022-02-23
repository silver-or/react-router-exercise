import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Grade () {
    const [name, setName] = useState("")
    const [kor, setKor] = useState(0)
    const [eng, setEng] = useState(0)
    const [math, setMath] = useState(0)
    const [result, setResult] = useState("")
    const getGrade = () => {
        let name = document.getElementById('name').value
        let kor = document.getElementById('kor').value
        let eng = document.getElementById('eng').value
        let math = document.getElementById('math').value
        setName(name)
        setKor(kor)
        setEng(eng)
        setMath(math)
        setResult("이름 : " + name + ", " +
                "국어 점수 : " + kor + ", " +
                "영어 점수 : "+ eng + ", " +
                "수학 점수 : " + math)
    }
    return (
        <Layout>
            <form>
                <label><b>이름</b></label> &nbsp;
                <input id="name"/> <br/>
                <label><b>국어 점수</b></label> &nbsp;
                <input id="kor"/> <br/>
                <label><b>영어 점수</b></label> &nbsp;
                <input id="eng"/> <br/>
                <label><b>수학 점수</b></label> &nbsp;
                <input id="math"/>
            </form>
            <div>
                <button onClick={() => getGrade()}>성적표 확인하기</button>
                <div>{result}</div>
                <button>취소</button>
            </div>
        </Layout>
    )
}
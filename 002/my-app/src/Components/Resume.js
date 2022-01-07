import React from "react";
import "../App.css";

function Resume(props) {
    return (
        <div className="resume">
            <h1>
                {props.name} 자기소개서
                <br />
                {props.hello}
            </h1>
            <h2>취미 : {props.hobby}</h2>
            <h2>좋아하는 음식 : {props.food}</h2>
            <h2 className="color">좋아하는 색 : {props.color}</h2>
        </div>
    );
}
export default Resume;

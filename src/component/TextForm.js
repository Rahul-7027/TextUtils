import React, { useState } from 'react'

export default function TextForm(props) {


    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleLpClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClean = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Clean Successfully", "success");
    }

    const removeSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState("")
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <div className="mb-3">
                    <h2 style={{ textAlign: "center" }}>{props.heading}</h2>
                    <textarea className="form-control" onChange={handleChange} style={{ backgroundColor: props.mode === "light" ? "white" : "#042743", color: props.mode === "light" ? "black" : "white" }} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-danger mx-2" onClick={handleLpClick}>Convert To LowerCase</button>
                <button className="btn btn-success mx-2" onClick={handleClean}>Clear</button>
                <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy</button>
                <button className="btn btn-success mx-2" onClick={removeSpace}>Remove Extra Space</button>


            </div>
            <hr />
            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} charcaters</p>
            </div>
            <hr />
            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>Preview Text</h2>
                <p>{text.length > 0 ? text : "Enter Some Text"}</p>
            </div>
        </>
    )
}

import React from "react"
import "./Input.css"

const Input = (props) => {
    return (
        <div className={"inputBlock"}>
            <input value={props.value}
                   onChange={e => props.setValue(e.target.value)}
                   type={props.type}
                   maxLength={props.maxLength}
                   placeholder={props.placeholder}
            />
            {props.child}
        </div>
    )
}

export default Input
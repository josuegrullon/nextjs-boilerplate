import * as React from "react";

const GeneralButtonBox = ({text= "", onClick = () => {}}) => {

    return (<>
        <button type="button" onClick={onClick}  className={["general-button-box"].join(" ")}>
        {text}
        </button>
    </>)
}
const GeneralButton = ({text= "", onClick = () => {}}) => {

    return (<>
        <button type="button" onClick={onClick}  className={["general-button"].join(" ")}>
        {text}
        </button>
    </>)
}
const SecondaryButton = ({text= "", className=""}) => {

    return (<>
        <button type="button"  className={["secondary-button", className].join(" ")}>
        {text}
        </button>
    </>)
}



export  {
    GeneralButtonBox,
    GeneralButton,
    SecondaryButton
   
};
import * as React from "react";

const FloatingPlaceholderComponent= ({textLabel="", wrapperClassName = "",  children }: {textLabel: string; wrapperClassName: string; children: React.ReactNode}) => {

    return (<>
        <div className={["floating-placeholder-wrapper", wrapperClassName].join(" ")}>
        <label>{textLabel}</label>
        <div className="wrapper-inputs flex baseline">
        {children}
        </div>
        </div>
    </>)
}

const FloatingPlaceholderComponentComplete= ({
    // textLabel="", 
    wrapperClassName = "", 
    inputWrapperClassName = "", 
    children }: {
        // textLabel: string; 
        wrapperClassName: string; 
        inputWrapperClassName: string; 
        children: React.ReactNode
    }) => {

    return (<>
        <div className={["", wrapperClassName].join(" ")}>
  
        <div className={[inputWrapperClassName].join(" ")}>
        {children}
        </div>
        </div>
    </>)
}
const FloatingPlaceholderFilter= ({textLabel="", wrapperClassName = "",  children }: {textLabel: string; wrapperClassName: string; children: React.ReactNode}) => {

    return (<>
        <div className={["floating-placeholder-wrapper-filter", wrapperClassName].join(" ")}>
        <label>{textLabel}</label>
        <div className="wrapper-inputs-filter flex baseline">
        {children}
        </div>
        </div>
    </>)
}
const FloatingPlaceholder= ({textLabel="", wrapperClassName = "", inputClassName = ""}) => {

    return (<>
        <FloatingPlaceholderComponent textLabel={textLabel} wrapperClassName={wrapperClassName}>
           
            <InputComponent inputClassName={inputClassName} />
            
        </FloatingPlaceholderComponent>
    </>)
}
const InputComponent = ({ inputClassName = "" , placeholder="Ciudad, aeropuerto o hotel"}) => {
    
    return (<>
        <input type="text"  placeholder={placeholder} className={["custom-input-placeholder", inputClassName].join(" ")}/>
    </>)
}



export  {
    FloatingPlaceholder,
    FloatingPlaceholderComponent,
    InputComponent,
    FloatingPlaceholderFilter,
    FloatingPlaceholderComponentComplete
};
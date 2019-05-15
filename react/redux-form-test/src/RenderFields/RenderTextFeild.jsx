import React from 'react';

const RenderTextField = ({ input, label, type, classname, meta: { touched, error, warning}}) => {
    
    return (
        <div className={classname}>
            <label htmlFor={input.name}>{label}</label>
            <input  type="text" 
                    className="form-control"                
                    {...input} />
        </div>
    );
}


export default RenderTextField;
import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker' ;
import moment from 'moment';
import momentLocaliser from 'react-widgets/lib/localizers/moment';
import 'react-widgets/dist/css/react-widgets.css'
momentLocaliser(moment);


const RenderDateTimePicker = ({ input: { onChange, value, name}, label, classname, showTime}) => {

    console.log("value: ", value);
    return (
        <div className={classname}>
            <label htmlFor={name}>{label}</label>
            <DateTimePicker onChange={onChange}
                            className="form-control form-control-sm"
                            time={showTime}
                            value={!value ? null : new Date(value)}
            />
        </div>
    );

};


export default RenderDateTimePicker;
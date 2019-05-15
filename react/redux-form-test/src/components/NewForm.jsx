import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import RenderTextField from '../RenderFields/RenderTextFeild';
import RenderDateTimePicker from '../RenderFields/RenderDateTimePicker';


class NewForm extends Component {


    onSubmit(values) {
        console.log(values);
    }


    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                <Field  name="title"
                        label="Title"
                        classname="form-group"
                        component={RenderTextField}
                />

                <Field  name="startDt"
                        label="End Date"
                        classname="form-group"
                        showTime={false}
                        component={RenderDateTimePicker}
                />

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'testForm'
})(
    connect(null)(NewForm)
);

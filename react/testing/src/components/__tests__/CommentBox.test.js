import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import Root from 'Root'


let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>)
})

afterEach(() => {
    wrapped.unmount();
})




// TEST PLAN
/*
    - Find textarea
    - Find button
*/
it('has a text area and a button', () => {    
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
});



// describe function
// instead of using the global beforeEach to set redundant code for these two methods, 
// the first one doesn't need it.  So will wrap the methods with the describe.
describe('the text area', () => {

    // redundant code for the next two it statements
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    })


    // TEST PLAN
    /*
        - Find the text area element
        - Simulate a 'change' event
        - Provide a fake event object
        - Force the component to update
        - Assert that the textarea value has changed
    */
    it('has a text area that users can type in', () => {       
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    })



    // TEST PLAN
    /*
        - Find the text area element
        - Simulate a 'change' event
        - Provide a fake event object
        - Force the component to update
        - Simulate submitting the form
        - Assert that the textarea is cleared out
    */
    it('when form is submitted, text area gets emptied', () => {        
        //expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');

    })

})
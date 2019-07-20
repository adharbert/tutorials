import React from 'react'
//import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommnetList from 'components/CommentList'

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
})

afterEach(() => {
    wrapped.unmount();
})


it('shows a comment box', () => {
    // find will return an array, so using length to count elements in array.
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    expect(wrapped.find(CommnetList).length).toEqual(1);
});




/*
**** Use this if we can't use enzyme
    // since there is no browser with test files, Jest uses JSDOM to trick
    // react into thinking there is a browser.
    // JSDOM is creating the div tag and pushing everything into this div tag in JSDOM
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);

    // Looks inside the div
    // and checks to see if the COmmentBox is in there
    //console.log(div.innerHTML);
    //expect(div.innerHTML).toContain('Comment Box'); // not best way to test

    



    // Clean up
    ReactDOM.unmountComponentAtNode(div);

*/
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {

    const users = [
        {
            'name': faker.name.firstName(),
            'comment': 'Nice blog post!',
            'date': 'Today at 5:00 PM'
        },
        {
            'name': faker.name.firstName(),
            'comment': 'This is an ok post.',
            'date': 'Today at 5:30 PM'
        },
        {
            'name': faker.name.firstName(),
            'comment': 'This is the worst post ever!',
            'date': 'Yesterday at 6:00 PM'
        }
    ]

    // loop through array
    const details = users.map((user, key) => {
       return (
            <ApprovalCard key={key}>
                <CommentDetail user={user} />
            </ApprovalCard>
       );
    });

    return (
      <div className="ui container comments">
        {details}
      </div> 
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
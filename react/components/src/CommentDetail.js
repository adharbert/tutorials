import React from 'react'
import faker from 'faker';

const CommentDetail = (props) => {

    console.log(props);

    const { name, comment, date } = props.user;


    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="authro">
                    {name}
                </a>
                <div className="metadata">
                    <span className="date">{date}</span>
                </div>
                <div className="text">{comment}</div>
            </div>
        </div>   
    );
};

export default CommentDetail;

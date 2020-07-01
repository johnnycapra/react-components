import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="sam" 
                timeAgo="Today at 6:00pm" 
                post="Yoo"
                avatar={faker.image.avatar()}/>
            <CommentDetail 
                author="jordan" 
                timeAgo="Yesterday at 10:00am" 
                post="nice drop"
                avatar={faker.image.avatar()}/>
            <CommentDetail 
                author="katie" 
                timeAgo="about a minute ago" 
                post="farty magoo"
                avatar={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));

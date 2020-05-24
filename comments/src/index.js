import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()} commentText="Dope!" />
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" avatar={faker.image.avatar()} commentText="Groovy" />
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" avatar={faker.image.avatar()} commentText="Amazeballs" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
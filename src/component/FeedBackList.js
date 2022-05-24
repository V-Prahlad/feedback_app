import React from 'react';
import FeedBackItem from './FeedBackItem';

const FeedBackList = ({ feedback, handleDelete }) => {
  return (
    <div>
      {feedback.map((item) => {
        return (
          <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
};

export default FeedBackList;

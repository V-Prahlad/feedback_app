import { useState } from 'react';
import './App.css';
import FeedBackList from './component/FeedBackList';
import Header from './component/Header';

const feedbackData = [
  { id: 1, rating: 7, text: 'An awsome gift shop with all items available' },
  {
    id: 2,
    rating: 9,
    text: 'Shopkeeper listen properly and delive product ASAP',
  },
];

function App() {
  const [feedback, setFeedbck] = useState(feedbackData);

  const deleteFeedback = (id) => {
    setFeedbck(feedback.filter((item) => item.id !== id));
  };
  return (
    <div className="App">
      <Header />
      <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;

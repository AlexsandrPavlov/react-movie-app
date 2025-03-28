import {Rate} from 'antd';
import './StarRate.css';
import {useState} from 'react';
import MovieService from '../../api/api.js';

export const StarRate = ({id, youRating}) => {
  const [rating, setRating] = useState(youRating);

  const handleRatingChange = async (value) => {
    setRating(value);
    try {
      await MovieService.addRaitng(id, value);
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  return <Rate className="star-rait" allowHalf count={10} value={rating} onChange={handleRatingChange} />;
};

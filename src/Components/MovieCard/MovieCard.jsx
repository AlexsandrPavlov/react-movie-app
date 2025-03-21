import React from 'react';

import './MovieCard.css';

import poster from './poster.jpg';
import {Rate, Progress, Typography} from 'antd';
const {Text} = Typography;

const discription =
  'A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul  and salvation by becoming the coach of a disparate ethnically mixed high ...';

const title = `The Way Back`;

const time = `March 5, 2020`;
const raiting = 6.6;

const red = 'Red';
const green = 'Green';
const yellow = 'Yellow';
let color;

if (raiting >= 8) {
  color = green;
}
if (raiting >= 5 && raiting < 8) {
  color = yellow;
}
if (raiting < 5) {
  color = red;
}

const MovieCard = () => (
  <div className="movie-card">
    <div className="movie-poster">
      <img src={poster} alt="Poster" />
    </div>
    <div className="about-movie">
      <section className="header-card">
        <h2>{title}</h2>
        <Progress
          type="circle"
          percent={100}
          size={35}
          strokeColor={color}
          format={() => `${raiting}`}
          colorText={'Black'}
        />
      </section>
      <p className="time-movie">{time}</p>
      <span>
        <Text code>comedy</Text>
        <Text code>comedy</Text>
      </span>

      <section className="discription-movie">
        <p>{discription}</p>
      </section>
      <Rate count={10} disabled defaultValue={raiting} allowHalf />
    </div>
  </div>
);

export default MovieCard;

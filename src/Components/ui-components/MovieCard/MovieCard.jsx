import {React} from 'react';

import {Image} from 'antd';
import './MovieCard.css';
import {TitleCard} from '../TitleCard/TitleCard';
import {ReleaseDate} from '../ReleaseDate/ReleaseDate';
import {Description} from '../Discripitions/Discriptions';
import {StarRate} from '../StarRate/StarRate';
import {TagGenre} from '../TagGenre/TagGenre';

const MovieCard = (props) => {
  const {
    title = 'The Way Back',
    rating = 5,
    releaseDate = ' March 5 , 2025',
    description = ' A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul  and salvation by becoming the coach of a disparate ethnically mixed high ... A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul  and salvation by becoming the coach of a disparate ethnically mixed high ...',
    genre = 'conedy',
  } = props;
  return (
    <div className="movi-card">
      <div className="card-wrapper">
        <div className="img-pc">
          <Image width={183} height={279} src="src/Components/ui-components/MovieCard/poster.jpg" />
        </div>

        <div className="about-film">
          <div className="title-block">
            <div className="img-mobile">
              <Image width={60} height={91} src="src/Components/ui-components/MovieCard/poster.jpg" />
            </div>
            <div className="title-pc">
              <TitleCard title={title} />
            </div>

            <div className="mobile-block">
              <TitleCard title={title} />
              <ReleaseDate releaseDate={releaseDate} />
              <div className="genre-mobile">
                <TagGenre genre={genre} />
              </div>
            </div>

            <span
              className="title-raiting"
              style={{
                border: `2px solid ${
                  rating < 3
                    ? '#e90000'
                    : rating > 3 && rating < 5
                      ? '#e97E00'
                      : rating >= 5 && rating <= 7
                        ? '#e9D100'
                        : '#66E900'
                }`,
              }}
            >
              {rating.toFixed(1)}
            </span>
          </div>
          <div className="pc-block">
            <ReleaseDate releaseDate={releaseDate} />
            <div className="genre">
              <TagGenre genre={genre} />
            </div>
          </div>

          <Description text={description || 'No description'} />

          <StarRate />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

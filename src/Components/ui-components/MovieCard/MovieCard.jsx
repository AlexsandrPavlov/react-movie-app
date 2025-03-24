import {React} from 'react';

import {Image} from 'antd';
import './MovieCard.css';
import {TitleCard} from '../TitleCard/TitleCard';
import {ReleaseDate} from '../ReleaseDate/ReleaseDate';
import {Description} from '../Discripitions/Discriptions';
import {StarRate} from '../StarRate/StarRate';
import {TagGenre} from '../TagGenre/TagGenre';
import {IMAGE_BASE_URL} from '../../api/config/api.config';
import notFound from './notFound.jpg';

const MovieCard = (props) => {
  const {
    item,
    genre,
    title = item.title,
    rating = item.vote_average,
    releaseDate = item.release_date,
    description = item.overview,
    poster = item.poster_path,
  } = props;
  return (
    <div className="movi-card">
      <div className="card-wrapper">
        <div className="img-pc">
          <Image width={183} height={279} src={poster ? `${IMAGE_BASE_URL}${poster}` : notFound} />
        </div>

        <div className="about-film">
          <div className="title-block">
            <div className="img-mobile">
              <Image width={60} height={91} src={poster ? `${IMAGE_BASE_URL}${poster}` : notFound} />
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

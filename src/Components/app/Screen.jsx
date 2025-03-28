import {Offline, Online} from 'react-detect-offline';
import {ErrAlert} from '../ui-components/ErrAlert/ErrAlert';
import SearchCards from './SearchCards/SearchCard';
import RatedCards from './RatedCards/RatedCrad';

export const Screen = (props) => {
  const {menuPage, query, session} = props;
  const message = 'No network';
  const description = 'Please, try again later';
  const type = 'error';

  return (
    <div>
      <Online>
        {menuPage === 'search' && <SearchCards query={query} session={session} />}
        {menuPage === 'rated' && <RatedCards session={session} />}
      </Online>
      <Offline>
        <ErrAlert message={message} description={description} type={type} />
      </Offline>
    </div>
  );
};

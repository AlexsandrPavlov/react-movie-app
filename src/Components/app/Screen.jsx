import {Offline, Online} from 'react-detect-offline';
import {ErrAlert} from '../ui-components/ErrAlert/ErrAlert';
import SearchCards from './SearchCards/SearchCard';

export const Screen = (props) => {
  const {menuPage, query} = props;
  const message = 'No network';
  const description = 'Please, try again later';
  const type = 'error';

  return (
    <div>
      <Online>
        {menuPage === 'search' && <SearchCards query={query} />}
        {menuPage === 2 && null}
      </Online>
      <Offline>
        <ErrAlert message={message} description={description} type={type} />
      </Offline>
    </div>
  );
};

/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../components/show/Cast';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import ShowMainData from '../components/show/ShowMainData';
import { useShow } from '../misc/custom-hooks';

// const reducer = (preState, action) => {
//   switch (action.type) {
//     case 'FETCH_SUCCESS': {
//       return { isLoading: false, error: null, show: action.show };
//     }

//     case 'FETCH_FAILED': {
//       return { ...preState, isLoading: false, error: 'Error occured' };
//     }

//     default:
//       return preState;
//   }
// };

// const initialState = {
//   show: null,
//   isLoading: true,
//   error: null,
// };

const Show = () => {
  const { id } = useParams();

  const { show, isLoading, error } = useShow(id);

  // const [{ show, isLoading, error }, dispatch] = useReducer(
  //   reducer,
  //   initialState
  // );

  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   let isMounted = true;

  //   apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
  //     .then(results => {
  //       if (isMounted) {
  //         dispatch({ type: 'FETCH_SUCCESS', show: results });

  //         // setShow(results);
  //         // setIsLoading(false);
  //       }
  //     })
  //     .catch(err => {
  //       if (isMounted) {
  //         dispatch({ type: 'FETCH_FAILED', error: err.message });

  //         // setError(err.message);
  //         // setIsLoading(false);
  //       }
  //     });

  //   return () => {
  //     isMounted = false;
  //   };
  // }, [id]);

  if (isLoading) {
    return <div>Data Loading...</div>;
  }

  if (error) {
    return <div>Error occured: {error}</div>;
  }

  return (
    <div>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <div>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>

      <div>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </div>

      <div>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </div>
    </div>
  );
};

export default Show;

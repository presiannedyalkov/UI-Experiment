/**
 * Asynchronously loads the component for NsThankYou
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

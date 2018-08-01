/**
 * Asynchronously loads the component for ThankYou
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

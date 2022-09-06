import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import CoinApp from '../components/coin';
import store from '../redux/configure';

test('should be equal to Coin list', () => {
  const tree = render(
    <Provider store={store}>
      <CoinApp />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

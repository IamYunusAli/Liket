import { render } from '@testing-library/react';
import CoinNav from '../components/nav';

test('should be equal to Coin list', () => {
  const tree = render(
    <CoinNav />,
  );
  expect(tree).toMatchSnapshot();
});

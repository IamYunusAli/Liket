import { render } from '@testing-library/react';
import Footer from '../components/footer';

test('should be equal to Coin list', () => {
  const tree = render(
    <Footer />,
  );
  expect(tree).toMatchSnapshot();
});

const FETCHCOIN = 'FETCHCOIN';
const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap&per_page=14';

export const fetchCoin = async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  dispatch({ type: FETCHCOIN, payload: data });
};

const coinReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHCOIN:
      return action.payload;
    default:
      return state;
  }
};

export default coinReducer;

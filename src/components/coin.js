import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCoin } from '../redux/coin';
import './style/coin.css';

const CoinApp = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  useEffect(() => { dispatch(fetchCoin); }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) => coin.id.includes(search.toLowerCase()) || coin.id.includes(search.toLowerCase()),
  );

  return (
    <div className="coinlist">
      <input
        className="input"
        type="text"
        onChange={handleChange}
        placeholder="Search Coin"
      />
      <ul className="all-item">
        {filteredCoins.map((coin) => (
          <NavLink key={coin.id} to={`details/${coin.id}`}>
            <li className={`list-item ${coin.market_cap_rank % 3 === 1 ? 'bg' : ''}`}>
              <div className="first">
                <p className="name">{ coin.name }</p>
                <BsArrowRightCircle className="arrow-icon" size="20" />
              </div>
              <div className="items">
                <p className="rank">{ coin.market_cap_rank }</p>
                <p className="symbol">{ coin.symbol }</p>
              </div>
              <div className="items">
                <img className="coin-logo " src={coin.image} alt="logo" />
                <p className="current_price">{coin.current_price}</p>
              </div>
            </li>
          </NavLink>

        ))}
      </ul>
    </div>
  );
};

export default CoinApp;

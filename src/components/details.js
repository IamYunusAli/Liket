import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { fetchCoin } from '../redux/coin';
import './style/deails.css';

const CoinDetails = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);

  useEffect(() => {
    dispatch(fetchCoin);
  }, [dispatch]);
  const Space = '  ';
  const { id } = useParams();
  const coin = coins.find((item) => item.id === id);
  return (
    <>
      <NavLink to="/">
        <BsArrowLeft className="back-Arrow" size="30" />
      </NavLink>
      <div className="detail">
        <img className="big-logo " src={coin.image} alt="logo" />
        <ul className="detail-list">
          <li>
            <p>Name:</p>
            <p>{Space + coin.name}</p>
          </li>
          <li>
            <p>Symbol:</p>
            <p>{Space + coin.symbol}</p>
          </li>
          <li>
            <p>Rank:</p>
            <p>{Space + coin.market_cap_rank}</p>
          </li>
          <li>
            <p>Market Cap:</p>
            <p>{Space + coin.market_cap}</p>
          </li>
          <li>
            <p>All Time low:</p>
            <p>{Space + coin.atl}</p>
          </li>
          <li>
            <p>All Time High:</p>
            <p>{Space + coin.ath}</p>
          </li>
          <li>
            <p>24H Low:</p>
            <p>{Space + coin.low_24h}</p>
          </li>
          <li>
            <p>24H High:</p>
            {Space + coin.high_24h}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CoinDetails;

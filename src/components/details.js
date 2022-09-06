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
        <div className="row">
          <p>
            Name:
            {Space + coin.name}
          </p>
          <p>
            Symbol:
            {Space + coin.symbol}
          </p>
        </div>
        <div className="row">
          <p>
            Rank:
            {Space + coin.market_cap_rank}
          </p>
          <p>
            Market Cap:
            {Space + coin.market_cap}
          </p>
        </div>
        <div className="row">
          <p>
            All Time low:
            {Space + coin.atl}
          </p>
          <p>
            All Time High:
            {Space + coin.ath}
          </p>
        </div>
        <div className="row">
          <p>
            24H Low:
            {Space + coin.low_24h}
          </p>
          <p>
            24H High:
            {Space + coin.high_24h}
          </p>
        </div>
      </div>
    </>
  );
};

export default CoinDetails;

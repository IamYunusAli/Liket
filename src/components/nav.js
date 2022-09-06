import { BsFillMicFill, BsFillGearFill } from 'react-icons/bs';
import './style/nav.css';

const CoinNav = () => (
  <header>
    <ul className="nav">
      <h2>Liket</h2>
      <div className="icons">
        <BsFillMicFill size="20" />
        <BsFillGearFill size="20" />
      </div>
    </ul>
  </header>
);

export default CoinNav;

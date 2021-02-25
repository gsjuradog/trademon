import '../../styling/navs.scss';
import { useHistory } from 'react-router-dom';

export default function TradeDetailTitleBar() {
  const history = useHistory();

  return (
    <div className="detail-title">
      <div className="detail-title-back-box"
        onClick={(): void => history.goBack()}
      >
        <img className="detail-title-back-img"
          src="/assets/backIcon.png"
        />
        <div className="detail-title-back-text">
          back
        </div>
      </div>
      <div className="detail-title-text">
        Trade Details
      </div>
    </div>
  )
}

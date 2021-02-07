import '../../styling/temp_tradePage.scss';
import imageBuyer from '../../assets/users/user1.jpg';
import imageCard from '../../assets/mtgs/3.png';
import imageSeller from '../../assets/users/user2.jpg';
import badge_n3 from '../../assets/badges/_n3.png';
import badge_s2 from '../../assets/badges/_s2.png';
import badge_s3 from '../../assets/badges/_s3.png';
import badge_t1 from '../../assets/badges/_t1.png';
import badge_t2 from '../../assets/badges/_t2.png';
import badge_q2 from '../../assets/badges/_q2.png';
import badge_q3 from '../../assets/badges/_q3.png';
import badge_p2 from '../../assets/badges/_p2.png';


import Chat from './trade_dmPage';

export default function orga() {
  return (
    <div className="trading-container parent">
      <header className="trading-container-header">
        {' '}
        <h1>Trading Room</h1>
      </header>

      <section className="left-side">
        <img className="user_image" alt="" src={imageBuyer}></img>
        <p className="user-text-top">SANTIAGO</p>
        <div className="user-badges">
          <img className="user-badge" alt="" src={badge_p2}></img>
          <img className="user-badge" alt="" src={badge_s3}></img>
          <img className="user-badge" alt="" src={badge_t1}></img>
          <img className="user-badge" alt="" src={badge_q2}></img>
        </div>
        <div className="user-comm">
          <textarea
            className="user-textarea"
            rows={6}
            placeholder="I am interested in your card. Would you accept $10 and my card World Shaper?"
          ></textarea>
          <button style={{ margin: 10, background: '#aa3b1d' }}>SEND</button>
          <button style={{ margin: 10 }}>DEAL</button>
        </div>
      </section>

      <main className="trade">
        <img className="trade-item-size" alt="" src={imageCard}></img>
        <div className="chat-container">
          <Chat></Chat>
        </div>
      </main>

      <section className="right-side">
        <img className="user_image" alt="" src={imageSeller}></img>
        <p className="user-text-top">WLADIMIR</p>
        <div className="user-badges">
          <img className="user-badge" alt="" src={badge_s2}></img>
          <img className="user-badge" alt="" src={badge_t2}></img>
          <img className="user-badge" alt="" src={badge_n3}></img>
          <img className="user-badge" alt="" src={badge_q3}></img>
        </div>
        <section className="user-comm">
          <textarea
            className="user-textarea"
            rows={6}
            placeholder="... Ahhmm ... I think we can do it ..."
          ></textarea>
          <button style={{ margin: 10, background: '#aa3b1d' }}>SEND</button>
          <button style={{ margin: 10 }}>DEAL</button>
        </section>
      </section>

      <footer className="footer"></footer>
    </div>
  );
}

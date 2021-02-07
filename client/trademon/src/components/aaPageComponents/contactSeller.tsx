import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';

import { createChat } from '../../utils/rest';

import { contactSellerAnimation } from '../../utils/animations';
import { ClockLoader }  from 'react-spinners';

import '../../styling/containers.scss'

const ContactSeller = ({setMessageSeller, tradeDetails} : any) => {

  const history = useHistory();
  const color = '#075f59';     //Spinner colour

  const [sendStatus, setSendStatus] = useState('DEFAULT');
  const [textAreaValue, setTextAreaValue] = useState<string>("");

  useEffect (() => {
    contactSellerAnimation()
  }, []);

  const chatHandler = async () => {
    setSendStatus('SENDING');
    const reply = await createChat(1, 2, textAreaValue);
    if (!reply) {
      setSendStatus('SEND ERROR');
      return;
    } 
    setSendStatus('SEND SUCCESS');
  }

  const backHandler = () => {
    history.push(`trade/${tradeDetails.tradeID}`);
    setMessageSeller(false);
  }

  const textAreaState = () => {
    if (ClockLoader) {
      switch(sendStatus) {
        case 'SENDING' : 
          return <ClockLoader size={80} color={color}/>
        case 'SEND ERROR' :
          return <p>Send error!</p>;
        case 'SEND SUCCESS' :
          return <i className="fas fa-check fa-10x"></i>
        default :
          return <textarea 
                    id="contact-seller-content" 
                    autoFocus 
                    placeholder="Message seller..."
                    value={textAreaValue}
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>)
                    : void => setTextAreaValue(ev.target.value)}
                    ></textarea>;  
      }
    }
  }

  return (
    <div className="contact-seller-container">
      <div className="contact-seller-box contact-seller-trade">
        <h1>Trade Details</h1>
        <img src={tradeDetails.pokeSprite} alt={tradeDetails.pokeName}></img>
        <p>Pokemon: {tradeDetails.pokeName}</p>
        <p>Seller: {tradeDetails.seller}</p>
        <p>Price: {tradeDetails.price}</p>
      </div>
      <div className="contact-seller-box contact-seller-message">
        <h1>Contact Seller</h1>
        {textAreaState()}
        <div className="contact-seller-btns">
          <button onClick={backHandler}>Back to trade</button>
          {
          sendStatus === 'DEFAULT' ?  
          <button onClick={chatHandler}>Send message</button> : null}
        </div>
      </div>
    </div>
  )
}

export default withRouter(ContactSeller);
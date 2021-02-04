import React, { useState } from 'react'
import SearchBar from '../navComponents/searchComponents/searchBarComponent'
import '../../styling/forms.scss'
import UserRatingComponent from '../ratingComponents/userRatingComponent';

import { TradeData } from '../../utils/interfaces'

import { createTrade } from '../../utils/rest' 

export default function CreateListingForm() {

  const formData = {
    pokeName: '',
    CP: 0,
    catchLocation: '',
    fastMove: '',
    chargeMove: '',
    shiny: false,
    price: 0,
    appraisal: 0,
    listingType: 'Sale'
  }

  const [formState, setFormState] = useState <TradeData> (formData); 

  const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let stateCopy : TradeData = {...formState};
    stateCopy.listingType = handleSelect();

    //Fetch
    createTrade(stateCopy);
 
    //ClearUp
    setFormState(formData);
    
  }

  const handleFormChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    let stateCopy : TradeData = {...formState};

    switch(name) {
      case 'pokeName':
        stateCopy.pokeName = value;
        break;
      case 'CP':
        stateCopy.CP = +value;     //Because it's a number...
        break;
      case 'catchLocation':
        stateCopy.catchLocation = value;
        break;
      case 'fastMove':
        stateCopy.fastMove = value;
        break;
      case 'chargeMove':
        stateCopy.chargeMove = value;
        break;
      case 'shiny':
        stateCopy.shiny = !stateCopy.shiny;
        break;
      case 'price':
        stateCopy.price = +value;
        break;
      default:
        return
    }
    setFormState(stateCopy);
  }

  const handleSelect = () => {
    let value = (document.getElementById('listingType')) as HTMLSelectElement;
    let sel = value.selectedIndex;
    let opt = value.options[sel];
    let trade = opt.value;
    return trade;
  }

  const ratingHandler = (appraisal:number) => {
    let stateCopy : TradeData = {...formState};
    stateCopy.appraisal = appraisal;
    setFormState(stateCopy)
  }

  return (
    <div>
      <SearchBar></SearchBar>
      <div className="form-spacer">
        <form 
          className="form-container" onSubmit={formSubmitHandler} 
          onChange={handleFormChange} spellCheck="false"
        >
          <div className="form-title">
            Create Listing
          </div>
          <input name="pokeName" type="text" className="form-input" placeholder="Item Name..."></input>
          <div className="horiz-input-box">
            <input name="CP" type="text" className="form-input" placeholder="CP..."></input>
            <input name="catchLocation" type="text" className="form-input" placeholder="Catch Location..."></input>
          </div>
          <div className="horiz-input-box">
            <input name="fastMove" type="text" className="form-input" placeholder="Fast Move..."></input>
            <input name="chargeMove" type="text" className="form-input" placeholder="Charge Move..."></input>
          </div>
          <div className="form-appraisal-box">
            <div className="special-attrib-box-left">
              <div className="standard-text">
                Shiny?
              </div>
              {formState.shiny ? 
                <i className="fas fa-check fa-2x"></i> : 
                <i className="fas fa-times fa-2x"></i>}
              <input name="shiny" type="checkbox" className="shiny-checkbox"/>
            </div>
            <div className="special-attrib-box-right">
              <div className="form-appraisal-font">Appraisal:</div>
              <UserRatingComponent 
                ratingHandler={ratingHandler}
              />
            </div>
          </div>
          <div className="horiz-input-box">
            <select id="listingType" className="trade-dropdown">
              <option value="sale">For Sale</option>
              <option value="trade">For Trade</option>
            </select>
            <input name="price" type="text" className="form-input" placeholder="Price..."></input>
          </div>
          <button className="submit__btn" value="NameHEREE">Create</button>
        </form>
      </div>
    </div>
  )
}

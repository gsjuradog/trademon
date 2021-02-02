import React from 'react'
import SearchBar from '../navComponents/searchComponents/searchBarComponent'
import '../../styling/forms.scss'
import UserRatingComponent from '../ratingComponents/userRatingComponent';

export default function CreateListingForm() {

  const handleFormChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    if (name === 'item-name') {

    }
  }

  const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          <input name="item-name" type="text" className="form-input" value="Item Name..."></input>
          <div className="horiz-input-box">
            <input name="CP" type="text" className="form-input" value="CP..."></input>
            <input name="catch-location" type="text" className="form-input" value="Catch Location..."></input>
          </div>
          <div className="horiz-input-box">
            <input name="fast-move" type="text" className="form-input" value="Fast Move..."></input>
            <input name="charge-move" type="text" className="form-input" value="Charge Move..."></input>
          </div>
          <div className="form-appraisal-box">
            <div className="small-text">
              Shiny?
            </div>
            <input type="checkbox" className="shiny-checkbox"/>
            <div className="half-em-font">Appraisal: </div>
            <UserRatingComponent />
          </div>
          <div className="horiz-input-box">
            <select className="trade-dropdown">
              <option value="For Sale">For Sale</option>
              <option value="For Trade">For Trade</option>
            </select>
            <input name="price" type="text" className="form-input" value="Price..."></input>
          </div>
          <button className="submit__btn" value="NameHEREE">Create</button>
        </form>
      </div>
    </div>
  )
}

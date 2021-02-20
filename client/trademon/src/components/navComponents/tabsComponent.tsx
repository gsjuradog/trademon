import '../../styling/navs.scss';

export default function TabsComponent({ detailsTchatF }:any) {
 
  return (
    <div className="tabs-container">
      <div className="tab-back">
        <div className="tab-text">
          Back
        </div>
      </div>
      <div className="tab-spacer-box">
        <div className={`${detailsTchatF == false ? "tab-box" :"tab-box-selected"}`}>
          <div className="tab-text">
            Trade Details
          </div>
        </div>
        <div className={`${detailsTchatF == false ? "tab-box-selected" :"tab-box"}`}>
          <div className="tab-text">
            Chat
          </div>
        </div>
      </div>
    </div>
  )
}

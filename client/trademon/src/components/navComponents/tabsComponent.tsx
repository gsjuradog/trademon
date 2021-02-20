import '../../styling/navs.scss';
import { setPreferences } from '../../store/preferencesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../store/store';
  
export default function TabsComponent() {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const setTab = (detailOrChat: boolean) => {
    dispatch(setPreferences({detailOrChat: detailOrChat}));
  }

  return (
    <div className="tabs-container">
      <div className="tab-back" onClick={(): void => history.goBack()}>
        <div className="tab-text">
          Back
        </div>
      </div>
      <div className="tab-spacer-box">
        <div className={`${state.preferences.detailOrChat == false ? "tab-box" :"tab-box-selected"}`}
          onClick={(): void => setTab(true)}
        >
          <div className="tab-text">
            Trade Details
          </div>
        </div>
        <div className={`${state.preferences.detailOrChat == false ? "tab-box-selected" :"tab-box"}`}
          onClick={(): void => setTab(false)}
        >
          <div className="tab-text">
            Chat
          </div>
        </div>
      </div>
    </div>
  )
}

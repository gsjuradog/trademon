import '../../styling/navs.scss';
import { setPreferences } from '../../store/preferencesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useParams } from 'react-router';
import { getChatByItemId } from '../../utils/rest';

export default function TabsComponent() {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const { tradeID } : any = useParams();
  
  const setTab = async (detailOrChat: boolean) => {
    const chatIdFound = await getChatByItemId(state.preferences.currentChatOtherUserId, state.user.user.id, tradeID);
    console.log('RESULTTTTTTT ', chatIdFound)
    dispatch(setPreferences({
      detailOrChat: detailOrChat,
      currentChatId: state.preferences.currentChatId,
      currentChatItemId: tradeID,
      currentChatOtherUserId: state.preferences.currentChatOtherUserId,
    }));
  } 

  return (
    <div className="tabs-container">
      <div className="tab-back" onClick={(): void => history.goBack()}>
        <div className="tab-text">
          Back
        </div>
      </div>
      <div className="tab-spacer-box">
        <div className={`${state.preferences.detailOrChat === false ? "tab-box" :"tab-box-selected"}`}
          onClick={(): Promise<void> => setTab(true)}
        >
          <div className="tab-text">
            Trade Details
          </div>
        </div>
        <div className={`${state.preferences.detailOrChat === false ? "tab-box-selected" :"tab-box"}`}
          onClick={(): Promise<void> => setTab(false)}
        >
          <div className="tab-text">
            Chat
          </div>
        </div>
      </div>
    </div>
  )
}

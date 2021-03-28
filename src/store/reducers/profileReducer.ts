import { ActionType } from '../types';
import { ProfileActions } from '../actions/profileActions';

// Данные profile
export type ProfileStoreData = {
  userName: string  // Имя пользователя
}

export const initialState: ProfileStoreData = {
  userName: 'User'
};

export const profileReducer = (state = initialState, action: ProfileActions): ProfileStoreData => {  

  switch (action.type) {
    case ActionType.POST_USER_NAME_SUCCESS:
    case ActionType.FETCH_PROFILE_SUCCESS: {      
      // Обновляю state
      return { userName: action.payload.userName };
    }
    
    default:
      return state;
  }  
}

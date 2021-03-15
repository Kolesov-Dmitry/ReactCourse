import { ActionType } from '../types';
import { ProfileActions } from '../actions/profileActions';

// Данные profile
export type ProfileStoreData = {
  userName: string
}

export const initialState: ProfileStoreData = {
  userName: 'User'
};

export const profileReducer = (state = initialState, action: ProfileActions): ProfileStoreData => {  

  switch (action.type) {
    case ActionType.SET_USER_NAME: {      
      // Обновляю state
      return { userName: action.payload.name };
    }
    
    default:
      return state;
  }  
}

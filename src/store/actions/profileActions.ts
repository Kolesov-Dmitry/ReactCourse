import { Action } from 'redux';
import { ActionType } from '../types';

export interface SetUsenNameAction extends Action  {
  type: ActionType.SET_USER_NAME;
  payload: {
    name: string;    
  };
};

export type ProfileActions = SetUsenNameAction;
                        
export const profileActions = {
  // Задать имя пользователя
  setUserName: (name: string): ProfileActions => ({  
    type: ActionType.SET_USER_NAME,
    payload: {
      name
    }  
  })  
}

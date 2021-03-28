import { Action } from 'redux';
import { ActionType } from '../types';


export interface ProfileUserNameAction extends Action  {
  type: ActionType.FETCH_PROFILE_SUCCESS | ActionType.POST_USER_NAME | ActionType.POST_USER_NAME_SUCCESS;
  payload: {
    userName: string
  }
};

export interface ProfileEmptyAction extends Action  {
  type: ActionType.FETCH_PROFILE | ActionType.POST_USER_NAME_FAILED | ActionType.FETCH_PROFILE_FAILED;
};

export type ProfileActions = ProfileUserNameAction | ProfileEmptyAction;;
                        
export const profileActions = {
  /**
   * Возвращает Action на загрузку профиля с сервера
   * */ 
  fetchProfile: (): ProfileActions => ({  
    type: ActionType.FETCH_PROFILE,    
  }),

  /**
   * Возвращает Action на запись, загруженного с сервера профиля, в store
   * @param {string} userName Имя пользователя
   * */ 
  fetchProfileSuccess: (userName: string): ProfileActions => ({  
    type: ActionType.FETCH_PROFILE_SUCCESS,
    payload: {
      userName
    }
  }),

  /**
   * Возвращает Action-заглушку, в случае неудачи загрузки профиля
   */
  fetchProfileFailed: (): ProfileActions => ({  
    type: ActionType.FETCH_PROFILE_FAILED,    
  }),

  /**
   * Возвращает Action на запись в профиль на сервере нового имения пользователя
   * @param {string} userName Имя пользователя
   * */ 
  postUserName: (userName: string): ProfileActions => ({  
    type: ActionType.POST_USER_NAME,
    payload: {
      userName
    }
  }),

  /**
   * Возвращает Action на запись нового имения пользователя в store
   * @param {string} userName Имя пользователя
   * */ 
  postUserNameSuccess: (userName: string): ProfileActions => ({  
    type: ActionType.POST_USER_NAME_SUCCESS,
    payload: {
      userName
    }
  }),

  /**
   * Возвращает Action-заглушку, в случае неудачи записи нового имени пользовтеля на сервере
   */
  postUserNameFailed: (): ProfileActions => ({  
    type: ActionType.POST_USER_NAME_FAILED,
  }),
}

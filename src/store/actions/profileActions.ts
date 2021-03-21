import { Action } from 'redux';
import { ActionType } from '../types';

export interface FetchProfileAction extends Action  {
  type: ActionType.FETCH_PROFILE;  
};

export interface FetchProfileSuccessAction extends Action  {
  type: ActionType.FETCH_PROFILE_SUCCESS;
  payload: {
    userName: string;
  };
};

export interface FetchProfileFailedAction extends Action  {
  type: ActionType.FETCH_PROFILE_FAILED;
};

export interface PostUserNameAction extends Action  {
  type: ActionType.POST_USER_NAME;
  payload: {
    userName: string
  }
};

export interface PostUserNameSuccessAction extends Action  {
  type: ActionType.POST_USER_NAME_SUCCESS;
  payload: {
    userName: string;
  };
};

export interface PostUserNameFailedAction extends Action  {
  type: ActionType.POST_USER_NAME_FAILED;
};

export type ProfileActions = FetchProfileAction
                           | FetchProfileSuccessAction
                           | FetchProfileFailedAction
                           | PostUserNameAction
                           | PostUserNameSuccessAction
                           | PostUserNameFailedAction;;
                        
export const profileActions = {
  // Загружает профиль
  fetchProfile: (): ProfileActions => ({  
    type: ActionType.FETCH_PROFILE,    
  }),

  fetchProfileSuccess: (userName: string): ProfileActions => ({  
    type: ActionType.FETCH_PROFILE_SUCCESS,
    payload: {
      userName
    }
  }),

  fetchProfileFailed: (): ProfileActions => ({  
    type: ActionType.FETCH_PROFILE_FAILED,    
  }),

  // Загружает профиль
  postUserName: (userName: string): ProfileActions => ({  
    type: ActionType.POST_USER_NAME,
    payload: {
      userName
    }
  }),

  postUserNameSuccess: (userName: string): ProfileActions => ({  
    type: ActionType.POST_USER_NAME_SUCCESS,
    payload: {
      userName
    }
  }),

  postUserNameFailed: (): ProfileActions => ({  
    type: ActionType.POST_USER_NAME_FAILED,
  }),
}

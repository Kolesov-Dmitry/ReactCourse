// Данные profile
export type ProfileStoreData = {
  userName: string
}

export const initialState: ProfileStoreData = {
  userName: 'User'
};

export const profileReducer = (state = initialState, action: {}): ProfileStoreData => {  
  return state;   
}
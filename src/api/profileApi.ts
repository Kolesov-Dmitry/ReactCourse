import { ProfileStoreData } from "../store";

export const profileApi = {
  fetchProfile: async (): Promise<ProfileStoreData> => {
    const response = await fetch('http://127.0.0.1:5000/api/profile');    
    return await response.json();
  },

  postUserName: async (userName: string): Promise<string> => {
    const response = await fetch('http://127.0.0.1:5000/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName })
    })

    return await response.text();
  },

};
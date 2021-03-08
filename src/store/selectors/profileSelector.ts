import { StoreData } from "../store";

export const profileSelector = {
  // Возвращает имя пользователя
  userName: (store: StoreData): string => {
    return store.profile.userName;
  }
};
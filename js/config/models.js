import AsyncStorage from '@react-native-community/async-storage';

export const addFav = async favId => {
  try {
    const strValue = JSON.stringify({
      id: favId,
      faved_on: new Date(),
    });
    return await AsyncStorage.setItem(`${favId}`, strValue);
  } catch (e) {
    return false;
  }
};

export const getAllFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    return values.filter(value => value[1].includes('faved_on'));
  } catch (e) {
    return false;
  }
};

export const removeFav = async favId => {
  try {
    const fav = await AsyncStorage.removeItem(`${favId}`);
    return fav;
  } catch (e) {
    return false;
  }
};

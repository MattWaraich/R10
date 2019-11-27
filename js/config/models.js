import AsyncStorage from '@react-native-community/async-storage';

export const addFav = async favId => {
  try {
    await AsyncStorage.setItem(
      `${favId}`,
      JSON.stringify({id: favId, favedOn: new Date()}),
    );
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getFav = async favId => {
  try {
    return await AsyncStorage.getItem(`${favId}`);
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getAllFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    return values.map(value => JSON.parse(value[1]));
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const removeFav = async favId => {
  try {
    const fav = await AsyncStorage.removeItem(`${favId}`);
    return fav;
  } catch (e) {
    console.log(e);
    return false;
  }
};

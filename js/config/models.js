import AsyncStorage from '@react-native-community/async-storage';

export const addFave = async favId => {
  try {
    return await setItem(
      `${favId}`,
      JSON.stringify({id: favId, faved_on: newDate()}),
    );
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getAllFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    return values.filter(value => value[1].includes('faved_on'));
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getFave = async favId => {
  try {
    return await getItem(`${favId}`);
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const removeFave = async favId => {
  try {
    const fav = await AsyncStorage.removeItem(`${favId}`);
    return fav;
  } catch (e) {
    console.log(e);
    return false;
  }
};

import AsyncStorage from "@react-native-async-storage/async-storage";

// export const setLocalStorage = async (key: string, value) => {
//   await AsyncStorage.setItem(key, JSON.stringify(value));
// };

// export const getLocalStorage = async (key: string) => {
//   const result = await AsyncStorage.getItem(key);
//   return JSON.parse(result);
// };
export const setLocalStorage = async (key: string, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log(`Saved ${key}:`, value);
    } catch (error) {
      console.error("Error saving to AsyncStorage:", error);
    }
  };
  
  export const getLocalStorage = async (key: string) => {
    try {
      const result = await AsyncStorage.getItem(key);
      console.log(`Fetched ${key}:`, result);
      return JSON.parse(result);
    } catch (error) {
      console.error("Error fetching from AsyncStorage:", error);
      return null;
    }
  };

export const removeLocalStorage = async () => {
  await AsyncStorage.clear();
};

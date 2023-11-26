// service/userService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = 'users';

export const registerUser = async (email, password, name) => {
  try {
    const existingUsersString = await AsyncStorage.getItem(USERS_KEY);
    console.log(existingUsersString)
    const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];

    const newUser = { user: email, password, name, createdAt: new Date() };
    existingUsers.push(newUser);

    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(existingUsers));

    // Log com a data de criação
    console.log(`Usuário registrado em ${newUser.createdAt}:`, newUser);

    return newUser;
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const existingUsersString = await AsyncStorage.getItem(USERS_KEY);
    const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];

    return existingUsers;
  } catch (error) {
    console.error('Erro ao obter usuários:', error);
    return [];
  }
};

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage limpo com sucesso.');
  } catch (error) {
    console.error('Erro ao limpar AsyncStorage:', error);
  }
};


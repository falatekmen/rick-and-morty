import AsyncStorage from '@react-native-community/async-storage';
import { USER_NAMESPACE } from '../Modules/Auth';

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: true,
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    blacklist: ['nav', 'app'],
    whitelist: [
      'theming',
      USER_NAMESPACE
    ],
  },
};

export default REDUX_PERSIST;
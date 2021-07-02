import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const Metrics = {
  width,
  height,
};

export default Metrics;
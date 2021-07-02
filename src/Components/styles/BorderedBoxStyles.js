import { StyleSheet } from 'react-native';
import { Metrics} from '../../StylingConstants';

const styles = StyleSheet.create({
    container: {
        borderRadius: Metrics.width / 36,
        borderWidth:1,
    },
    normalHeight: {
        height: Metrics.width * 0.12,
    },
    tallHeight: {
        height: Metrics.normalHeight,
    },
});

export default styles;
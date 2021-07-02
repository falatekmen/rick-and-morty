import {StyleSheet } from "react-native";
import { Metrics} from '../../../StylingConstants/';

export default Colors => StyleSheet.create({ 
    iconContainer: {
        width: Metrics.width * 0.1,
        height: undefined,
        marginRight: Metrics.width * 0.03,
    },
    image: {
        width: undefined,
        height: '100%',
        resizeMode: 'contain',
    },
})

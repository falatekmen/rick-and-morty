import { StyleSheet } from 'react-native';
import { colorNames } from '../../Theming'
import { Metrics, Fonts } from '../../../StylingConstants'

const styles = (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors[colorNames.home.homeBackground],
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Metrics.width / 36
    },
    image: {
        width: Metrics.width / 1.6,
        height: Metrics.width / 1.6
    },
    characterNameContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Metrics.width / 24
    },
    characterName: {
        color: Colors[colorNames.details.text],
        fontSize: Fonts.size(26),
        fontFamily: Fonts.type.bold,
        borderBottomWidth: Metrics.width / 180
    },
    detailContainer: {
        marginLeft: Metrics.width / 15,
        marginTop: Metrics.width / 18
    },
    detailText: {
        color: Colors[colorNames.details.text],
        fontSize: Fonts.size(20),
        fontFamily: Fonts.type.light,
    },
});

export default styles;
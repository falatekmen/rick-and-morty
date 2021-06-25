import { StyleSheet } from 'react-native';
import { Metrics,Fonts } from '../../../StylingConstants';
import { colorNames } from '../../Theming'

const styles = (Colors) => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors[colorNames.auth.background],
    },
    keyboardAvoiding: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: Metrics.width * 0.03,
        paddingHorizontal: Metrics.marginHorizontal,
    },
    inputsContainer: {
        minHeight: Metrics.width * 0.4,
        justifyContent: 'center',
    },
    image: {
        width: undefined,
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
        justifyContent:'center',
        alignContent:'center'
    },
    logoAndNameContainer: {
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    },
    buttonsContainer: {
        justifyContent: 'center',
    },
    signupTouchable: {
        alignItems: 'center',
        marginTop: Metrics.width * 0.01,
        backgroundColor: Colors[colorNames.auth.paleButtonBackground],
    },
    signupText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(16),
        color: Colors[colorNames.auth.paleButtonText],
        paddingVertical: Metrics.width / 72
    },
    authLogoContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appNameContainer: {
        alignItems: 'center',
    },
    appNameText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(25),
        color: Colors[colorNames.auth.appNameText],
        letterSpacing: Metrics.width * 0.002,
    },
    icon: {
        color: Colors[colorNames.auth.appIcon],
    },
    inputContainer: {
        marginVertical: Metrics.width * 0.005,
    },
});

export default styles;
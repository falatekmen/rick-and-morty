import { StyleSheet } from 'react-native';
import { colorNames } from '../../Theming'
import {Metrics, Fonts} from '../../../StylingConstants'

const styles = (Colors) => StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: Colors[colorNames.home.homeBackground],
    },
    flatListContainer: {
        flex:1,
        paddingHorizontal: Metrics.width * 0.05
    },
    characterButton:{ 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Colors[colorNames.home.buttonBackground],
        marginTop: Metrics.width / 24,
        borderWidth: Metrics.width / 72,
        borderRadius: Metrics.width / 20,
        borderColor: Colors[colorNames.home.buttonBorder]
    },
    characterNameText:{ 
        color: Colors[colorNames.home.episodeText],
        fontSize: Fonts.size(18),
        fontFamily: Fonts.type.bold,
        marginHorizontal: Metrics.width * 0.05,
        marginTop: Metrics.width / 36,
        marginBottom: Metrics.width / 30
    },
    episodeNameContainer:{
        alignItems: 'center', 
        marginTop: Metrics.width / 18,
    },
    episodeNameText:{
        color: Colors[colorNames.details.text], 
        fontSize: Fonts.size(28), 
        fontFamily: Fonts.type.light,
        borderBottomWidth: Metrics.width / 180, 
        borderColor: Colors[colorNames.details.text] 
    },
    detailsContainer:{
        marginLeft: Metrics.width / 14, 
        marginTop: Metrics.width / 20,
    },
    detailsText:{
        color: Colors[colorNames.details.text],
        fontSize: Fonts.size(18),
        fontFamily: Fonts.type.light
    },
    characterTitleContainer:{
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingBottom:1
    },
    characterTitleText: {
        color: Colors[colorNames.details.text], 
        fontSize: Fonts.size(18), 
        fontFamily: Fonts.type.light,
        marginTop: Metrics.width / 15, 
        marginLeft: Metrics.width / 15, 
        borderBottomWidth: Metrics.width / 360, 
        borderColor: Colors[colorNames.details.text],
    }
});

export default styles;
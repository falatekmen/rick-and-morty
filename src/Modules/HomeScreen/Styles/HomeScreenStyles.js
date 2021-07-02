import { StyleSheet } from 'react-native';
import { colorNames } from '../../Theming'
import {Metrics, Fonts} from '../../../StylingConstants'

const styles = (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors[colorNames.home.homeBackground],
        justifyContent:'center',
        alignItems:'center'
    },
    flatListContainer: {
        flex:1,
        paddingHorizontal: Metrics.width * 0.05
    },
    episodeButton:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Colors[colorNames.home.buttonBackground],
        marginTop: Metrics.width / 24,
        borderWidth: Metrics.width / 72,
        borderRadius: Metrics.width / 20,
        borderColor: Colors[colorNames.home.buttonBorder]
    },
    episodeNameText:{
        color: Colors[colorNames.home.episodeText],
        fontSize: Fonts.size(18),
        fontFamily: Fonts.type.bold,
        marginHorizontal: Metrics.width * 0.05,
        marginTop: Metrics.width / 36,
        marginBottom: Metrics.width / 30
    },
    episodeText:{
        justifyContent:'center', 
        alignItems:'center', 
        color: Colors[colorNames.home.episodeText],
        fontFamily: Fonts.type.light,
        fontSize:Fonts.size(11),
        borderBottomWidth: Metrics.width / 360,   
    }
});

export default styles;
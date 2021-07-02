import { StyleSheet } from "react-native";
import { Fonts, Metrics } from "../../../StylingConstants";
import { colorNames } from "../../Theming";

export default Colors => StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors[colorNames.settings.background],
    },
    SafeAreaView: {
        flex:1,
    },
    displayName:{
        marginTop: Metrics.width / 15,
        marginBottom: Metrics.width / 120,
        fontSize: Fonts.size(27),
        marginLeft: Metrics.width / 24,
        color:Colors[colorNames.settings.username],
        fontFamily:Fonts.type.bold,
    },
    email:{
        fontSize: Fonts.size(23),
        marginLeft: Metrics.width / 24,
        color: Colors[colorNames.settings.eMail],
        fontFamily: Fonts.type.light,
    },
    optionContainer:{
        flex:1,
        marginHorizontal: Metrics.width / 24,
        marginTop: Metrics.width / 12,
        flexGrow:1,
    },
    signOutContainer: {
        justifyContent:'center', 
        alignItems:'center'
    },
    signOutTouchable:{
        justifyContent:"center",
        alignItems:"center",
        borderWidth: Metrics.width / 120,
        borderColor:Colors[colorNames.settings.signOutBorder],
        borderRadius: Metrics.width / 20,
        height: Metrics.width / 9,
        width: Metrics.width / 1.4,
        marginBottom: Metrics.width / 36,
        marginHorizontal: Metrics.width / 18,
        backgroundColor:Colors[colorNames.settings.signOutButtonBackground],
        fontFamily:Fonts.type.light,
    },
    signOutText:{
        color:Colors[colorNames.settings.signOutText],
        fontSize: Fonts.size(20),
        fontFamily:Fonts.type.bold,
    },
})
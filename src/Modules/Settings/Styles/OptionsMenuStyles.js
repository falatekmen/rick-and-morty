import { StyleSheet } from "react-native";
import { colorNames } from "../../Theming";
import { Fonts} from "../../../StylingConstants";
import { Metrics } from "../../../StylingConstants";

export default Colors =>  StyleSheet.create({
    menuTitle:{
        marginBottom: Metrics.width / 72,
        fontSize: Fonts.size(22),
        color:Colors[colorNames.settings.titleColor],
        fontFamily:Fonts.type.bold,
    },
    optionTouchable:{
        flexDirection:"row",
        marginVertical: Metrics.width / 72,
        marginLeft: Metrics.width / 50,
        color:Colors[colorNames.settings.signOutText],
        alignItems:"center",
        fontFamily: Fonts.type.light,
    },
    iconContainer:{
        width: Metrics.width / 36,
        height: Metrics.width / 36,  
        justifyContent:"center",
        alignItems:"center",
    },
})
import { StyleSheet } from "react-native";
import { colorNames } from "../../Theming";
import { Fonts} from "../../../StylingConstants";

export default Colors =>  StyleSheet.create({
    menuTitle:{
        marginBottom:5,
        fontSize:25,
        color:Colors[colorNames.settings.titleColor],
        fontFamily:Fonts.type.bold,
    },
    optionTouchable:{
        flexDirection:"row",
        marginVertical:5,
        marginLeft:5,
        color:Colors[colorNames.settings.signOutText],
        alignItems:"center" ,
        fontFamily:Fonts.type.light
    },
    iconContainer:{
        width:10,
        height:10,  
        justifyContent:"center",
        alignItems:"center",
    },
})
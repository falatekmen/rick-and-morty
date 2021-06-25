import { StyleSheet } from 'react-native';
import { colorNames } from '../../Theming'

const styles = (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors[colorNames.home.homeBackGround],
    },
    
});

export default styles;
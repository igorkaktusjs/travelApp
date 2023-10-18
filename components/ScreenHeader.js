import react from "react";
import {Text, View, StyleSheet} from 'react-native';
import { spacing, sizes } from "../constants/theme";

const ScreenHeader = ({mainTitle, secondTitle}) => {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.mainTitle}>{mainTitle}</Text>
            <Text style={styles.secondTitle}>{secondTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.l
    },
    mainTitle: {
        fontSize: sizes.title,
        fontWeight: 'bold',
    },
    secondTitle: {
        fontSize: sizes.title
    }
    
})

export default ScreenHeader;
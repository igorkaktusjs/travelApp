import  React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';
import { spacing, sizes } from '../constants/theme';

const ScreenHeader = ({title, onPress, buttonTitle = 'Button'}) => {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.title}>{title}</Text>
            <Button title={buttonTitle}/>
        </View>
    );
};

const styles = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: spacing.l,
        marginRight: spacing.m,
        marginTop: spacing.l,
        marginBottom: 10 
    },
    title: {
        fontSize: sizes.h3,
        fontWeight: 'bold'
    }
})

export default ScreenHeader;
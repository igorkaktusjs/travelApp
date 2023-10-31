import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Review from "./Review";
import { sizes, spacing } from '../../constants/theme';


const Reviews = ({reviews = []}) => {
    return <View style={styles.conteiner}>
        {reviews.map(review => (
            <Review review={review} key={review.id}> </Review>
        ))}
    </View>
}

const styles = StyleSheet.create({
    conteiner: {
        marginHorizontal: spacing.l
    }
})

export default Reviews; 

import React from "react";
import { FlatList, Text, View, StyleSheet, Image } from "react-native";
import {sizes, } from '../constants/theme';
import {SharedElement} from 'react-navigation-shared-element';


const TripDetailsCorousel = ({ slides, id }) => {
  return (
    <FlatList
      data={slides}
      horizontal
      pagingEnabled
      bounces={false}
      renderItem={({ item: image, index }) => {
          if(!index){
            return (
                <View style={styles.slide}>
                <SharedElement id={`trip.${id}.image`} style={styles.slide}>
                  <Image source={image} style={styles.image} />
                </SharedElement>
                </View>
              );
            }
            return (
                <View style={styles.slide}>
                    <Image source={image} style={styles.image} />
                </View>
            )
        }
          }
        
    />
  );
};

const styles = StyleSheet.create({
    slide: {
        width: sizes.width,
        height: sizes.height,
    },
    image:{
        width: sizes.width,
        height: sizes.height,
        resizeMode: 'cover'
    }
});

export default TripDetailsCorousel;

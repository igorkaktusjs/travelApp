import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { sizes, spacing, colors } from "../constants/theme";
import Icon from "../components/shared/Icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {SharedElement} from 'react-navigation-shared-element';
import TripDetailsCard from "../components/TripDetailCard/TripDetailsCard";
import * as Animatable from 'react-native-animatable'
import TripDetailsCarousel from "../components/TripDetailsCarousel";
import FavoriteButton from "../components/FavoriteButton";



const TripDetailsScreen = ({navigation, route}) => {
    const insets = useSafeAreaInsets();
    const {trip} = route.params;
    const slides = [trip.image, ...trip.gallery];
    return (
      <View style={styles.container}>
        <Animatable.View
          style={[styles.backButton, {marginTop: insets.top}]}
          animation="fadeIn"
          delay={500}
          duration={400}
          easing="ease-in-out">
          <Icon
            icon="ArrowLeft"
            style={styles.backIcon}
            onPress={navigation.goBack}
          />
        </Animatable.View>
        <Animatable.View
          style={[styles.favoriteButton, {marginTop: insets.top}]}
          animation="fadeIn"
          delay={500}
          duration={400}
          easing="ease-in-out">
          <FavoriteButton onPress={() => {}}/>
        </Animatable.View>
        <TripDetailsCarousel slides={slides} id={trip.id}/>
        {/* {  <SharedElement
          id={`trip.${trip.id}.image`}
          style={StyleSheet.absoluteFillObject}>
          <View style={[StyleSheet.absoluteFillObject, styles.imageBox]}>
            <Image
              source={trip.image}
              style={[StyleSheet.absoluteFillObject, styles.image]}
            />
          </View>
        </SharedElement> } */}
        <TripDetailsCard trip={trip} />
      </View>
    );
  };
  
  TripDetailsScreen.sharedElements = route => {
    const {trip} = route.params;
    return [
      {
        id: `trip.${trip.id}.image`,
      },
    ];
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    borderRadius: sizes.radius,
    overflow: "hidden",
  },
  image: {
    width: sizes.width,
    height: sizes.height,
    resizeMode: "cover",
  },
  backButton: {
      position: 'absolute',
      left: spacing.l,
      zIndex: 1

  },
  backIcon: {
      tintColor: colors.white
  },
  favoriteButton: {
    position: 'absolute',
    right: spacing.l,
    zIndex: 1
  }
});

export default TripDetailsScreen;

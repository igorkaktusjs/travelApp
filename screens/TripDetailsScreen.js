import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { sizes, spacing, colors } from "../constants/theme";
import Icon from "../components/icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TripDetailsScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const { trip } = route.params;
  return (
    <View style={styles.container}>
      <View style={[styles.backButton, {marginTop: insets.top}]}>
        <Icon icon="ArrowLeft" style={styles.backIcon} onPress={navigation.goBack}/>
      </View>
      <View style={[StyleSheet.absoluteFillObject, styles.imageBox]}>
        <Image
          source={trip.image}
          style={[StyleSheet.absoluteFillObject, styles.image]}
        />
      </View>
    </View>
  );
};

TripDetailsScreen.sharedElement = route => {
    const {trip} = route.params;
    return [
        {
            id: `trip.${trip.id}.image`,
        }
    ]
}

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
  }
});

export default TripDetailsScreen;

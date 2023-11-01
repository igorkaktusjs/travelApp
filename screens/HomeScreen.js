import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import MainHeader from "../components/shared/MainHeader";
import ScreenHeader from "../components/shared/ScreenHeader";
import TopPlacesCarousel from "../components/Home/TopPlacesCarousel";
import { colors } from "../constants/theme";
import { TOP_PLACES, PLACES } from "../data/index";
import SectionHeader from "../components/shared/SectionHeader";
import TripsList from "../components/Home/TripsList";

const HomeScreen = () => {
  return (
    <View style={styles.conteiner}>
      <MainHeader title="Travel App" />
      <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Popular Trips"
          buttonTitle="See All"
          onPress={() => {}}
        />
        <TripsList list={PLACES}/>
      </ScrollView>
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

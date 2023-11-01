import react from "react";
import { Text, View, StyleSheet } from "react-native";
import MainHeader from "../components/shared/MainHeader";
import { colors } from "../constants/theme";
import SearchInput from "../components/Search/SearchInput";
import Tabs from "../components/shared/Tabs";
import SearchMasonry from "../components/Search/SearchMasonry";
import {SEARCH_ALL, SEARCH_HOTELS, SEARCH_PLACES} from '../data';


const tabs = [
    {
    title: 'All',
    content: () => (
        <SearchMasonry list={SEARCH_ALL}/>
    )
},
{
    title: 'Places',
    content: () => (<SearchMasonry list={SEARCH_PLACES}/>)
},
{
    title: 'Hotels',
    content: () => (<SearchMasonry list={SEARCH_HOTELS}/>)
}
]

const SearchScreen = () => {
  return (
    <View style={styles.conteiner}>
      <MainHeader title="Search"/>
      <SearchInput/>
      <Tabs items={tabs}/>
    </View>
  );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: colors.light
    }
});

export default SearchScreen;

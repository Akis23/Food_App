import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import ResultDetail from "../components/ResultsDetail";

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');

    console.log(id);

    return (
        <View>
            <Text>Show Results Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ResultsShowScreen;
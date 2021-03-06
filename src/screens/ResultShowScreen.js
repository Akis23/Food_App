import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    
    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }

    return (
        <View style={styles.view}>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 150,
        marginBottom: 10,
        borderRadius: 4
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    view: {
        alignItems: 'center'
    }
});

export default ResultsShowScreen;
import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultDetail = ({results}) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: results.image_url }}
                style={styles.imageStyle}
            />
            <Text style={styles.nameStyle}>{results.name}</Text>
            <Text>{results.rating} Stars, {results.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        width:250,
        height: 120,
        borderRadius: 4
    },
    nameStyle: {
        fontWeight: 'bold',
    }
});

export default ResultDetail;
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultByPrice = (price) => {
        return results.filter( result => {
            return result.price === price;
        });
    };

    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultsList 
                title="Cost Effective"
                results={filterResultByPrice('$')}
            />
            <ResultsList 
                title="Bit Pricier"
                results={filterResultByPrice('$$')}
            />
            <ResultsList 
                title="Big Spender"
                results={filterResultByPrice('$$$')}
            />
            <ResultsList 
                title="Very Big Spender"
                results={filterResultByPrice('$$$$')}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    console.log(results);

    const filterByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    };

    return (
        <View style={{ flex:1 }}>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit= {() => searchApi(term)}
            />
            <Text>{term}</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList navigation={navigation} results={filterByPrice('$')} title="Cost Effective" />
                <ResultsList navigation={navigation} results={filterByPrice('$$')} title="Bit Pricier"/>
                <ResultsList navigation={navigation} results={filterByPrice('$$')} title="Big Spender"/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
import React from 'react';
import {View, Text, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultDetails from './ResultDetails';

const ResultsList = ({title,results,navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return( 
                        <TouchableOpacity onPress={() => navigation.navigate('ResultShow',{id:item.id})}>
                            <ResultDetails result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}   


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
        color: 'black'
    },
    container: {
        marginBottom: 10
    }
});
export default ResultsList;

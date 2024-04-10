import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, SafeAreaView } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image, FlatList} from 'react-native';

export default function versenyzok() {

        const url1 = 'http://localhost:8000/versenyzok';
       
        const [versenyzok, setVersenyzok] = useState([]);
       
        function handleFetchButton() {
          fetch(url1)
          .then(resp => resp.json())
          .then(data => {
            console.log(data)      
            setVersenyzok(data);      
          })
          .catch( error => {
            alert('Hiba: ' + error);
          })
        }

        useEffect(() => {
            handleFetchButton();
            }, [])
       
        return (
          <View style={styles.container}>
          <Text style={styles.h1}>Versenyzök</Text>
            
        <FlatList 
            data = {versenyzok}
            renderItem={ ({item}) => (
                <Text style={styles.listitem}>
                    Nev: {item.nev}{"\n"}
                    Születési idö: {item.szuletes}{"\n"}
                    Nem: {item.nem}{"\n"}
                    Súly: {item.suly}{"\n"}
                    Csapat id: {item.klubId}
                </Text>

            )}
        />

            <StatusBar style="auto" />
          </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listitem: {
    borderColor: 'rgba(0, 0, 0, .5)',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderRadius: 10
  },
  h1: {
    fontSize: 50,
    padding: 10,
  },
});
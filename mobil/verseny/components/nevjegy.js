import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function versenyzok() {

    const [date, setDate] = useState("");

    function getdate(){
        let datevar = new Date().toLocaleString()
        console.log(datevar)
        setDate(datevar);
    }

    useEffect(() => {
        getdate()
        }, [])

    return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        Szekeres András{"\n"}
        SZOFT II/2{"\n"}
        Projek készités ideje: 2024.04.10{"\n"}
        Jelenlegi dátum: 
        <TextInput style={styles.ido}
            value={date}
          />
      </Text>

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
  h1:{
    borderColor: 'rgba(0, 0, 0, .5)',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderRadius: 10,
    fontSize: 20
  },    
  ido:{
    paddingLeft: 5,
    fontSize: 20
  }
});
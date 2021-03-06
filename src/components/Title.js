import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';

export default function Title({name, onPress}) {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    console.log('loading');
    async function getFont() {
      await Font.loadAsync({
        'GROBOLD': require('../../assets/fonts/GROBOLD.ttf'),
      });
      setFontLoaded(true);
    };
    getFont();
	}, []);

  return (
    fontLoaded ? (
      <Text style={styles.title}>{name}</Text>
    ) : (
      <Text>{name}</Text>
    )
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 70,
    fontFamily: 'GROBOLD',
    alignSelf: 'center',
    marginTop: 130
  }
});

import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import Logo from '../../assets/cup-coffee.png'; 

export default function Home(){
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Um Cafezinho</Text>
      <Image source={Logo} />
    </View>
  );
}


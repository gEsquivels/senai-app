import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

import Logo from '../../assets/cup-coffee.png'; 

export default function Home(){
  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  );
}


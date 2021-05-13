import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import { SafeAreaViewAndroid } from '../../components/SafeAreaViewAndroid';

import wateringImg from '../../assets/watering.png';
import styles from './styles';

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaViewAndroid style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} 
        suas plantas de {'\n'} 
        forma fácil
      </Text>

      <Image 
        source={wateringImg} 
        style={styles.image}
        resizeMode='contain'
      />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.7}
        onPress={handleStart}
      >
        <Feather name="chevron-right" style={styles.buttonIcon} />
      </TouchableOpacity>
    </SafeAreaViewAndroid>
  )
}
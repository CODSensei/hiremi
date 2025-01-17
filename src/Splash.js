import {Easing, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import Animated, {FadeIn, Transition} from 'react-native-reanimated';

const Splash = ({navigation}) => {
  const zoom = {
    from: {
      scale: 1,
    },
    to: {
      scale: 25,
    },
  };

  return (
    <View className="bg-primary flex flex-1 justify-center items-center">
      <StatusBar hidden/>
      <View>
        <Animatable.Image
          delay={500}
          animation={zoom}
          duration={1500}
          easing="ease-out"
          source={require(`../assets/images/Tie.png`)}
        />
      </View>
      <View className="bottom-12">
        <Animated.Image
          className="flex justify-center items-center"
          entering={FadeIn.delay(2500)}
          duration={3000}
          source={require(`../assets/images/Text.png`)}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BellAlertIcon, ChevronLeftIcon} from 'react-native-heroicons/outline';

const Profile = ({navigation}) => {
  return (
    <ScrollView className="bg-background flex flex-1">
      <View className="h-20 flex flex-row justify-between px-6 top-10">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <ChevronLeftIcon color={'#1C1B1F'} size={32} />
        </TouchableOpacity>
        <Text className="text-black font-Semibold">Options</Text>
        <BellAlertIcon color={'#3D4652'} size={28} />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});

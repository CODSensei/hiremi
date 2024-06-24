import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { CalendarDaysIcon, UserCircleIcon } from 'react-native-heroicons/outline';

const Register = ({navigation}) => {
  return (
    <ScrollView className="bg-background flex flex-1">
      <Image
        source={require(`../assets/images/Text.png`)}
        resizeMode="contain"
        className="self-center w-[88.42px] h-[22px]"
      />

      <Text className="text-black">Register to get started,</Text>
      <Text className="text-black">Start your journey with us.</Text>

      <View className="bg-white w-full h-[1895px] border rounded-t-[32px]">
        <Text className="text-black">Personal Information</Text>

        <Text className="text-black">
          Your Full Name
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="John Doe"></TextInput>
        </View>
        <Text className="text-black">
          Father's Full Name
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="Robert Dave"></TextInput>
        </View>

        <Text className="text-black">
          Gender <Text className="text-red-600">*</Text>
        </Text>
        
        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="Gender"></TextInput>
        </View>


        <Text className="text-black">
          Email Address
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
        <TextInput placeholder="youremail@gmail.com"></TextInput>
        </View>

        <Text className="text-black">
          Date of Birth
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="bg-yellow-300 flex flex-row">
          <View className="border">
            <CalendarDaysIcon stroke="black"></CalendarDaysIcon>
          </View>
          <TextInput placeholder="DD/MM/YYYY"></TextInput>
        </View>

            <Text className="text-black">Contact Information</Text>
            <Text className="text-black">
          Phone Number
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="+91"></TextInput>
        </View>
        <Text className="text-black">
          Whatsapp Number
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="+91"></TextInput>
        </View>

        <Text className="text-black">Educational Information</Text>
            <Text className="text-black">
          College Name
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="College Name Here"></TextInput>
        </View>
        <Text className="text-black">
College's State
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="Select State"></TextInput>
        </View>
        <Text className="text-black">
          Branch
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="Select Branch"></TextInput>
        </View>
        <Text className="text-black">
          Degree
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="Select Course"></TextInput>
        </View>
        <Text className="text-black">
          Passout Year
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="Select Year"></TextInput>
        </View>


        <Text className="text-black">Let's Creater Password</Text>

        <Text className="text-black">
          Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="bg-yellow-300 flex flex-row">
          <View className="border">
            <UserCircleIcon stroke="black"></UserCircleIcon>
          </View>
          <TextInput placeholder="**********"></TextInput>
        </View>
        <Text className="text-black">
          Confirm Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="bg-yellow-300 flex flex-row">
          <View className="border">
            <UserCircleIcon stroke="black"></UserCircleIcon>
          </View>
          <TextInput placeholder="**********"></TextInput>
        </View>

        <TouchableOpacity className="border">
          <Text className="text-black"
          onPress={()=>{
            navigation.navigate('Login');
          }}>Register Now</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});

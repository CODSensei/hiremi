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
  import {UserCircleIcon} from 'react-native-heroicons/outline';
  
  const Reset = ({navigation}) => {
    return (
      <ScrollView className="bg-background flex flex-1">
        <Image
          source={require(`../assets/images/Text.png`)}
          resizeMode="contain"
          className="self-center w-[88.42px] h-[22px] "
        />
        <Text className="text-black">Create new Password,</Text>
        <Text className="text-black">make it Stronger!</Text>
        <Image
          source={require(`../assets/images/Reset.png`)}
          resizeMode="contain"
          className="self-center w-[323px] h-[323px]"
        />
        <View className="bg-white w-full h-[563px] top-[72px] border rounded-t-[32px]">
          <Text className="text-black">
            Enter One Time Password
            <Text className="text-red-600">*</Text>
          </Text>
          <View className="bg-yellow-300 flex flex-row">
            <View className="border">
              <UserCircleIcon stroke="black"></UserCircleIcon>
            </View>
            <TextInput placeholder="XXXXXX"></TextInput>
          </View><Text className="text-black">
            Enter One Time Password
            <Text className="text-red-600">*</Text>
          </Text>
          <View className="bg-yellow-300 flex flex-row">
            <View className="border">
              <UserCircleIcon stroke="black"></UserCircleIcon>
            </View>
            <TextInput placeholder="XXXXXX"></TextInput>
          </View>
          <Text className="text-black">
            Password must be 
            <Text className="text-primary">verification code </Text>
            8 digit <Text className="text-black">long with combination of{` `}
            </Text>
          </Text>
          <Text className="text-black">
            alphanumeric values,
          </Text>
          <TouchableOpacity
            className="border"
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text className="text-black">Reset Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  
  export default Reset;
  
  const styles = StyleSheet.create({});
  
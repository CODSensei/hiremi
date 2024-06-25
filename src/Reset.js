import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  EyeIcon,
  EyeSlashIcon,
  UserCircleIcon,
} from 'react-native-heroicons/outline';

const Reset = ({navigation}) => {
  const [toggle, settoggle] = useState(true);
  const [toggle2, settoggle2] = useState(true);
  return (
    <KeyboardAvoidingView className="bg-white flex flex-1">
      <ImageBackground
        className="w-full h-[415px]"
        source={require(`../assets/images/Background.jpg`)}>
        <Image
          source={require(`../assets/images/Text.png`)}
          resizeMode="contain"
          className="self-center w-[88.42px] h-[22px] top-10"
        />
        <Text className="text-black font-Medium-medium text-center text-[22px] top-16">
          Create new Password,
        </Text>
        <Text className="text-black font-Regular-normal text-center text-[22px] top-16">
          make it Stronger !
        </Text>
        <Image
          source={require(`../assets/images/Reset.png`)}
          resizeMode="contain"
          className="self-center w-[300px] h-[300px] top-24"
        />
      </ImageBackground>
      <KeyboardAvoidingView className="bg-white w-full h-[565px] top-14 border rounded-t-[32px]">
        <Text className="text-black font-Regular-normal text-base text-start ml-8 mt-6">
          New Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row justify-between  mx-8 h-12 mt-2 border rounded border-Border">
          <View className="border-0.5 border-Border w-12 flex justify-center items-center">
            <UserCircleIcon stroke="#098CE3"></UserCircleIcon>
          </View>
          <TextInput
            className="pl-4 font-Regular font-normal text-base"
            placeholder="**********"
            autoCapitalize="false"
            autoComplete="false"
            autoCorrect={false}
            keyboardAppearance="default"
            secureTextEntry={toggle}></TextInput>
          <TouchableOpacity
            className="ml-[115px] border-0.5 rounded border-Border w-12 flex justify-center items-center"
            onPress={() => {
              settoggle(!toggle);
            }}>
            {toggle ? (
              <EyeSlashIcon color={'#098CE3'} />
            ) : (
              <EyeIcon color={'#098CE3'} />
            )}
          </TouchableOpacity>
        </View>

        <Text className="text-black font-Regular-normal text-base text-start ml-8 mt-4">
          Confirm New Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row justify-between  mx-8 h-12 mt-2 border rounded border-Border">
          <View className="border-0.5 border-Border w-12 flex justify-center items-center">
            <UserCircleIcon stroke="#098CE3"></UserCircleIcon>
          </View>
          <TextInput
            className="pl-4 font-Regular font-normal text-base"
            placeholder="**********"
            autoCapitalize="false"
            autoComplete="false"
            autoCorrect={false}
            keyboardAppearance="default"
            secureTextEntry={toggle2}></TextInput>
          <TouchableOpacity
            className="ml-[115px] border-0.5 rounded border-Border w-12 flex justify-center items-center"
            onPress={() => {
              settoggle2(!toggle2);
            }}>
            {toggle2 ? (
              <EyeSlashIcon color={'#098CE3'} />
            ) : (
              <EyeIcon color={'#098CE3'} />
            )}
          </TouchableOpacity>
        </View>
        <Text className="text-black font-Regular-normal text-center text-xs mt-3">
          Password must be{' '}
          <Text className="text-primary">8 digit{' '}</Text>
          <Text className="text-black font-Regular-normal">long with combination of{` `}</Text>
        </Text>
        <Text className="text-black font-Regular-normal text-center text-xs">alphanumeric values,</Text>
        <TouchableOpacity
          className="border border-Border mx-8 h-12 bg-Border rounded mt-8"
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text className="text-white text-center my-auto font-Regular font-normal text-base">Reset Password</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  );
};

export default Reset;

const styles = StyleSheet.create({});

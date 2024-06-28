import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
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
    <ScrollView className="bg-white flex flex-1">
      <ImageBackground
        className="w-full h-96"
        source={require(`../assets/images/Background.jpg`)}>
        <Image
          source={require(`../assets/images/Text.png`)}
          resizeMode="contain"
          className="self-center w-24 h-6 mt-10"
        />
        <Text className="text-black font-Medium text-center text-2xl mt-4">
          Create new Password,
        </Text>
        <Text className="text-black font-Regular text-center text-2xl mt-1">
          make it Stronger !
        </Text>
        <Image
          source={require(`../assets/images/Reset.png`)}
          resizeMode="contain"
          className="self-center w-80 h-80 mt-6"
        />
      </ImageBackground>
      <KeyboardAvoidingView className="bg-white w-full h-5/6 mt-24 border border-Border rounded-t-[32px]">
        <Text className="text-black font-Regular text-base text-start ml-8 mt-6">
          New Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row justify-between  mx-8 h-12 mt-1 border rounded border-Border">
          <View className="border-0.5 border-Border w-12 flex justify-center items-center">
            <UserCircleIcon stroke="#098CE3"></UserCircleIcon>
          </View>
          <TextInput
            className="pb-1 font-Regular text-base"
              placeholderTextColor={'#00000040'}
            placeholder="**********"
            autoCapitalize="false"
            autoComplete="false"
            autoCorrect={false}
            keyboardAppearance="default"
            secureTextEntry={toggle}></TextInput>
          <TouchableOpacity
            className="ml-28 border-0.5 rounded border-Border w-12 flex justify-center items-center"
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

        <Text className="text-black font-Regular text-base text-start ml-8 mt-4">
          Confirm New Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row justify-between  mx-8 h-12 mt-1 border rounded border-Border">
          <View className="border-0.5 border-Border w-12 flex justify-center items-center">
            <UserCircleIcon stroke="#098CE3"></UserCircleIcon>
          </View>
          <TextInput
            className="pb-1 font-Regular text-base"
              placeholderTextColor={'#00000040'}
            placeholder="**********"
            autoCapitalize="false"
            autoComplete="false"
            autoCorrect={false}
            keyboardAppearance="default"
            secureTextEntry={toggle2}></TextInput>
          <TouchableOpacity
            className="ml-28 border-0.5 rounded border-Border w-12 flex justify-center items-center"
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
        <Text className="text-black font-Regular text-center text-xs mt-3">
          Password must be{' '}
          <Text className="text-primary font-Regular">8 digit{' '}</Text>
          long with combination of{` `}
        </Text>
        <Text className="text-black font-Regular text-center text-xs">alphanumeric values,</Text>
        <TouchableOpacity
          className="border border-Border mx-8 h-12 bg-Border rounded mt-8"
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text className="text-white text-center my-auto font-Regular text-base">Reset Password</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Reset;

const styles = StyleSheet.create({});

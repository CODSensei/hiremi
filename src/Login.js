import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {LockClosedIcon, UserCircleIcon} from 'react-native-heroicons/outline';

const Login = ({navigation, tabs}) => {
  return (
    <>
      <ScrollView className="bg-background flex flex-1 ">
        <StatusBar hidden />
        <Image
          source={require(`../assets/images/Text.png`)}
          resizeMode="contain"
          className="self-center w-24 h-6 mt-10"
        />
        <Image
          source={require(`../assets/images/Login.png`)}
          resizeMode="contain"
          className="self-center w-52 h-52"
        />
        <Text className="font-Medium text-black text-2xl -mt-4 text-center">
          Let's sign you in,
        </Text>
        <Text className="font-Regular text-black text-2xl text-center -mt-1">
          We're waiting for you!
        </Text>

        <KeyboardAvoidingView className="bg-white w-full h-11/12 mt-10 flex-2 border border-Border rounded-t-[32px]">
          <Text className="text-black mt-4 font-Regular mx-8 text-base">
            Email Address
            <Text className="text-red-600">*</Text>
          </Text>
          <View className="flex flex-row mx-8 h-12 mt-1 border rounded border-Border">
            <View className="border-[0.5px] border-Border w-12 flex justify-center items-center">
              <UserCircleIcon stroke="#098CE3"></UserCircleIcon>
            </View>
            <TextInput
              className="w-10/12 pl-4 font-Regular text-base"
              placeholderTextColor={'#00000040'}
              placeholder="youremail@gmail.com"
              autoCorrect={false}
              keyboardType="email-address"
              keyboardAppearance="default"
              autoCapitalize="false"
              autoComplete="false"></TextInput>
          </View>

          <Text className="text-black mt-3 mx-8 font-Regular text-base">
            Password
            <Text className="text-red-600">*</Text>
          </Text>
          <View className="flex flex-row mx-8 h-12 mt-1 border rounded border-Border">
            <View className="border-[0.5px] border-Border w-12 flex justify-center items-center">
              <LockClosedIcon stroke="#098CE3"></LockClosedIcon>
            </View>
            <TextInput
              className="w-10/12 pl-4 pb-1 font-Regular text-base"
              placeholderTextColor={'#00000040'}
              placeholder="**********"
              autoCapitalize="false"
              autoComplete="false"
              autoCorrect={false}
              keyboardAppearance="default"
              secureTextEntry={true}></TextInput>
          </View>
          <Text
            className="text-Border mr-8 text-right mt-2 font-Regular text-sm "
            onPress={() => {
              navigation.navigate('Forget');
            }}>
            Forget Password?
          </Text>
          <TouchableOpacity className="border border-Border mx-8 h-12 bg-Border rounded mt-5">
            <Text
              onPress={() => {
                navigation.navigate('Home');
              }}
              className="text-white text-center my-auto font-Regular text-base">
              Login
            </Text>
          </TouchableOpacity>

          <Text className="text-black font-Regular mx-8 mt-3 text-[10px] text-center">
            By Clicking Login, you agree to Hire Me's{` `}
            <Text className="text-primary text-[10px] text-wrap font-Regular underline">
              Terms & Conditions
            </Text>
            <Text className="text-black">.</Text>
          </Text>

          <View className="flex flex-row justify-center items-center mt-8">
            <View className="bg-BlurHR w-[156px] h-0.5 ml-5 mr-1"></View>
            <Text className="text-black font-Regular text-sm mx-0.5">or</Text>
            <View className="bg-BlurHR w-[156px]  h-0.5 mr-5 ml-1"></View>
          </View>
          <TouchableOpacity className="border mt-8 mb-4 h-12 mx-8 rounded border-Border">
            <Text
              className="text-black my-auto font-Regular text-base text-center"
              onPress={() => {
                navigation.navigate('Register');
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});

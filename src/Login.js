import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {LockClosedIcon, UserCircleIcon} from 'react-native-heroicons/outline';

const Login = ({navigation}) => {
  return (
    <KeyboardAvoidingView className="bg-background flex flex-1 h-auto">
      <StatusBar hidden />
      <Image
        source={require(`../assets/images/Text.png`)}
        resizeMode="contain"
        className="self-center w-[88px] h-[21px] top-10"
      />
      <Image
        source={require(`../assets/images/Login.png`)}
        resizeMode="contain"
        className="self-center w-[210px] h-[205px] top-6"
      />
      <Text className="font-Medium text-black font-Medium-medium text-[22px] top-2 text-center ">
        Let's sign you in,
      </Text>
      <Text className="font-Regular text-black font-Regular-normal text-[22px] text-center mt-2">
        We're waiting for you!
      </Text>

      <KeyboardAvoidingView className="bg-white w-full h-[500px] top-11 border border-Border rounded-t-[32px]">
        <Text className="text-black mt-5 font-Regular ml-8 font-normal text-base">
          Email Address
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 mt-1 border rounded border-Border">
          <View className="border-[0.5px] border-Border w-12 flex justify-center items-center">
            <UserCircleIcon stroke="#098CE3"></UserCircleIcon>
          </View>

          {/* <View className="border-[0.5px] border-Border w-[276px] "> */}
          <TextInput
            className="pl-4 font-Regular font-normal text-base"
            placeholder="youremail@gmail.com"
            autoCorrect={false}
            keyboardType="email-address"
            keyboardAppearance="default"
            autoCapitalize="false"
            autoComplete="false"></TextInput>
          {/* </View> */}
        </View>

        <Text className="text-black mt-3 ml-8 font-Regular font-normal text-base">
          Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 mt-1 border rounded border-Border">
          <View className="border-[0.5px] border-Border w-12 flex justify-center items-center">
            <LockClosedIcon stroke="#098CE3"></LockClosedIcon>
          </View>
          {/* <View className="border-[0.5px] border-Border w-[276px] "> */}
          <TextInput
            className="pl-4 font-Regular-normal text-base"
            placeholder="**********"
            autoCapitalize="false"
            autoComplete="false"
            autoCorrect={false}
            keyboardAppearance="default"
            secureTextEntry={true}></TextInput>
        </View>
        {/* </View> */}
        <Text
          className="text-Border mr-8 text-right mt-3 font-normal font-Regular text-sm underline"
          onPress={() => {
            navigation.navigate('Forget');
          }}>
          Forget Password?
        </Text>
        <TouchableOpacity className="border border-Border mx-8 h-12 bg-Border rounded mt-8">
          <Text
            onPress={() => {
              navigation.navigate('Home');
            }}
            className="text-white text-center my-auto font-Regular font-normal text-base">
            Login
          </Text>
        </TouchableOpacity>

        <Text className="text-black mx-7 mt-4 text-xs text-center">
          By Clicking Login, you agree to Hire Me's{` `}
          <Text className="text-primary mx-8 text-xs text-nowrap">
            Terms & Conditions
          </Text>
          <Text className="text-black">.</Text>
        </Text>

        <View className="flex flex-row justify-center items-center mt-8">
          <View className="bg-BlurHR w-[156px] h-0.5 ml-5 mr-1"></View>
          <Text className="text-black font-Regular font-normal text-sm mx-0.5">
            or
          </Text>
          <View className="bg-BlurHR w-[156px]  h-0.5 mr-5 ml-1"></View>
        </View>
        <TouchableOpacity className="border mt-6 h-12 mx-8 rounded border-Border">
          <Text
            className="text-black my-auto font-Regular-normal text-base text-center"
            onPress={() => {
              navigation.navigate('Register');
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({});

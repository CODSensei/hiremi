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
import React from 'react';
import {ClockIcon, UserCircleIcon} from 'react-native-heroicons/outline';

const Verification = ({navigation}) => {
  return (
    <ScrollView className="bg-white flex flex-1 ">
      <ImageBackground
        className="w-full h-96"
        source={require(`../assets/images/Background.jpg`)}
        resizeMode="cover">
        <Image
          source={require(`../assets/images/Text.png`)}
          resizeMode="contain"
          className="self-center w-24 h-6 mt-10"
        />

        <Text className="text-black font-Medium text-center text-2xl mt-4">
          Verify you Email address
        </Text>
        <Text className="text-black font-Regular text-center text-2xl mt-1">
          Hey, have you Received!
        </Text>
        <Image
          source={require(`../assets/images/Otp.png`)}
          resizeMode="cover"
          className="self-center w-80 h-80 mt-6"
        />
      </ImageBackground>
      <KeyboardAvoidingView className="bg-white w-full h-5/6 mt-40 border border-Border rounded-t-[32px]">
        <Text className="text-black font-Regular text-base text-center mt-8">
          Enter One Time Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 mt-2 border rounded border-Border">
          <View className="border-[0.5px] border-Border w-12 flex justify-center items-center">
            <ClockIcon stroke="#098CE3"></ClockIcon>
          </View>
          <TextInput
            className="pb-1 w-10/12 pl-4 font-Regular text-base"
              placeholderTextColor={'#00000040'}
            placeholder="XXXXXX"
            autoCorrect={false}
            keyboardType="email-address"
            keyboardAppearance="default"
            autoCapitalize="false"
            autoComplete="false"></TextInput>
        </View>


        <Text className="text-black text-center mt-3 font-Regular text-xs">
          Please, Enter your{` `}
          <Text className="text-primary font-Regular">six digit{' '}</Text>
            code that you have received in{` `}
          </Text>
        <Text className="text-black text-center font-Regular text-xs mt-1">
          your mail box. <Text className="text-primary font-Regular underline text-xs">Resend OTP</Text>
        </Text>
        <TouchableOpacity
          className="border border-Border mx-8 h-12 bg-Border rounded mt-10"
          onPress={() => {
            navigation.navigate('Reset');
          }}>
          <Text className="text-white text-center my-auto font-Regular text-base">Confirm</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Verification;

const styles = StyleSheet.create({});

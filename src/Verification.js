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
import {UserCircleIcon} from 'react-native-heroicons/outline';

const Verification = ({navigation}) => {
  return (
    <ScrollView className="bg-white flex flex-1 ">
      <ImageBackground
        className="w-full h-[415px] "
        source={require(`../assets/images/Background.jpg`)}
        resizeMode="cover">
        <Image
          source={require(`../assets/images/Text.png`)}
          resizeMode="contain"
          className="self-center w-[88.42px] h-[22px] top-14"
        />

        <Text className="text-black font-Medium font-medium text-center text-[22px] top-20">
          Verify you Email address
        </Text>
        <Text className="text-black font-Regular font-normal text-center text-[22px] top-[82px]">
          Hey, have you Received!
        </Text>
        <Image
          source={require(`../assets/images/Otp.png`)}
          resizeMode="cover"
          className="self-center w-[323px] h-[323px] top-[108px]"
        />
      </ImageBackground>
      <KeyboardAvoidingView className="bg-white w-full h-[460px] top-40 border rounded-t-[32px]">
        <Text className="text-black font-Regular font-normal text-base text-center mt-8">
          Enter One Time Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 mt-2 border rounded border-Border">
          <View className="border-[0.5px] border-Border w-12 flex justify-center items-center">
            <UserCircleIcon stroke="#098CE3"></UserCircleIcon>
          </View>
          <TextInput
            className="pl-4 font-Regular font-normal text-base"
            placeholder="XXXXXX"
            autoCorrect={false}
            keyboardType="email-address"
            keyboardAppearance="default"
            autoCapitalize="false"
            autoComplete="false"></TextInput>
        </View>


        <Text className="text-black text-center mt-4 font-Regular font-normal text-xs">
          Please, Enter your{` `}
          <Text className="text-primary">six digit</Text>
          <Text className="text-black font-Regular font-normal text-xs">
            code that you have received in{` `}
          </Text>
        </Text>
        <Text className="text-black text-center font-Regular font-normal text-xs mt-1">
          your mail box. <Text className="text-primary font-Regular font-normal text-xs">Resend OTP</Text>
        </Text>
        <TouchableOpacity
          className="border border-Border mx-8 h-12 bg-Border rounded mt-9"
          onPress={() => {
            navigation.navigate('Reset');
          }}>
          <Text className="text-white text-center my-auto font-Regular font-normal text-base">Confirm</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Verification;

const styles = StyleSheet.create({});

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

const Forget = ({navigation}) => {
  return (
    <View className="bg-white flex flex-1 ">
      <ImageBackground
        className="w-full h-[415px]"
        source={require(`../assets/images/Background.jpg`)}
        resizeMode="cover">
        <Image
          source={require(`../assets/images/Text.png`)}
          resizeMode="contain"
          className="self-center w-[88.42px] h-[22px] top-10"
        />

        <Text className="text-black font-Medium-medium text-center text-[22px] top-16">
          Forget Your Password
        </Text>
        <Text className="text-black font-Regular-normal text-center text-[22px] top-16">
          No worries, it happens!
        </Text>
        <Image
          source={require(`../assets/images/Forget.png`)}
          resizeMode="cover"
          className="self-center w-[375px] h-[375px] top-20"
        />
      </ImageBackground>
      <KeyboardAvoidingView className="bg-white w-full h-[465px] top-28 border rounded-t-[32px]">
        <Text className="text-black font-Regular-normal text-base text-center mt-8">
          Enter Email Address
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 mt-3 border rounded border-Border">
          <View className="border-[0.5px] border-Border w-12 flex justify-center items-center">
            <UserCircleIcon stroke="#098CE3"></UserCircleIcon>
          </View>
          <TextInput
            className="pl-4 font-Regular font-normal text-base"
            placeholder="youremail@gmail.com"
            autoCorrect={false}
            keyboardType="email-address"
            keyboardAppearance="default"
            autoCapitalize="false"
            autoComplete="false"></TextInput>
        </View>

        <Text className="text-black text-center mt-5 font-Regular-normal text-xs">
          Enter your email address to receive a{' '}
          <Text className="text-primary font-Regular font-normal text-xs">
            verification code{' '}
          </Text>
          in
        </Text>
        <Text className="text-black text-center font-Regular font-normal text-xs mt-1">
          your mail box.
        </Text>

        <TouchableOpacity
          className="border border-Border mx-8 h-12 bg-Border rounded mt-12 "
          onPress={() => {
            navigation.navigate('Verification');
          }}>
          <Text className="text-white text-center my-auto font-Regular-normal text-base">
            Send OTP
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Forget;

const styles = StyleSheet.create({});

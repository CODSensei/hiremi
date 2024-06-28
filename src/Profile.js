import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  ArrowRightStartOnRectangleIcon,
  BellAlertIcon,
  CheckBadgeIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  ExclamationCircleIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from 'react-native-heroicons/outline';

const Profile = ({navigation}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <View className="bg-background flex flex-1">
      <View className="h-20 flex flex-row justify-between px-6 mt-10">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <ChevronLeftIcon color={'#1C1B1F'} size={32} />
        </TouchableOpacity>
        <Text className="text-black font-Semibold">Options</Text>
        <BellAlertIcon color={'#3D4652'} size={28} />
      </View>

      <View className="bg-white h-screen -mt-5 drop-shadow-sm rounded-t-[32px] border border-white flex items-center">
        <View className="bg-white self-center mt-6">
          <Image
            source={require('../assets/images/Profile.png')}
            resizeMode="auto"
            className="h-16 w-16 rounded-full"
          />
        </View>
        <Text className="text-black font-Medium text-lg text-center mt-4">
          Mr. Mark David Johnson
        </Text>
        <Text className="text-Sub font-Regular text-sm text-center">
          UID: 0000001
        </Text>
        <View className="bg-Verified w-20 h-6 mt-4 flex flex-row justify-center items-center rounded">
          <CheckBadgeIcon color={'#ffffff'} size={16} />
          <Text className="text-white font-Medium text-[10px] pl-0.5">
            Verified
          </Text>
        </View>
        <View className="bg-LBorder mt-8 w-11/12 h-11 flex justify-center ">
          <Text className="text-black font-Regular text-base  mx-8 my-auto text-start rounded-lg ">
            General Options
          </Text>
        </View>

        {clicked ? (
          <>
            <View className="bg-white w-11/12 pl-1 h-11 mt-3 flex flex-row items-center">
              <UserCircleIcon color={'#1C1B1F'} size={30} />
              <Text className="text-black ml-2 mr-28 font-Regular text-sm">
                Personal InFormation
              </Text>
              <TouchableOpacity onPress={() => setClicked(!clicked)}>
                <ChevronUpIcon color={'#1C1B1F'} size={20} />
              </TouchableOpacity>
            </View>
            <Text className="text-Border font-Medium text-sm self-start mx-4 mt-0.5">
              Father's Full Name
            </Text>
            <Text className="text-black font-Regular text-sm self-start mx-4 mt-2">
              Robert Dave
            </Text>
            <View className="w-11/12 mt-3 h-0.5  bg-Border"></View>
            <View className="flex flex-row w-11/12 mt-2 justify-between">
              <View className="flex ">
                <Text className="text-Border font-Medium text-sm">Gender</Text>
                <Text className="text-black font-Regular text-sm mt-1">
                  Male
                </Text>
              </View>
              <View className="flex ">
                <Text className="text-Border font-Medium text-sm">
                  Date of Birth
                </Text>
                <Text className="text-black font-Regular text-sm mt-1">
                  15/02/1998
                </Text>
              </View>
              <View className="flex ">
                <Text className="text-Border font-Medium text-sm">
                  Birth Place
                </Text>
                <Text className="text-black font-Regular text-sm mt-1">
                  Madhya Pradesh
                </Text>
              </View>
            </View>
            <Text className="text-Border font-Medium text-sm self-start mx-4 mt-0.5">
              Email Address
            </Text>
            <Text className="text-black font-Regular text-sm self-start mx-4 mt-1">
              David@gmial.com
            </Text>
            <View className="w-11/12 mt-3 h-0.5  bg-Border"></View>
            <Text className="text-Border font-Medium text-sm self-start mx-4 mt-1">
              Phone Number
            </Text>
            <Text className="text-black font-Regular text-sm self-start mx-4 mt-2">
              +91 9687561XX9{' '}
            </Text>
            <View className="w-11/12 mt-3 h-0.5  bg-Border"></View>
            <Text className="text-Border font-Medium text-sm self-start mx-4 mt-1">
              College Name
            </Text>
            <Text className="text-black font-Regular text-sm self-start mx-4 mt-2">
              Unknown Institute of Information Science & Techn...
            </Text>
            <View className="w-11/12 mt-3 h-0.5  bg-Border"></View>
            <View className="bg-Support mt-1 w-11/12 h-11 flex justify-center ">
              <Text className="text-black font-Regular text-base mx-8 my-auto text-start rounded-lg ">
                Support & More
              </Text>
            </View>
          </>
        ) : (
          <>
            <View className="bg-white w-11/12 pl-2 h-11 mt-3 flex flex-row items-center">
              <UserCircleIcon color={'#1C1B1F'} size={30} />
              <Text className="text-black ml-2 mr-28 font-Regular text-sm">
                Personal InFormation
              </Text>
              <TouchableOpacity onPress={() => setClicked(!clicked)}>
                <ChevronDownIcon color={'#1C1B1F'} size={20} />
              </TouchableOpacity>
            </View>
            <View className="bg-Support mt-0 w-11/12 h-11 flex justify-center ">
              <Text className="text-black font-Regular text-base  mx-8 my-auto text-start rounded-lg ">
                Support & More
              </Text>
            </View>
            <View className="bg-white w-11/12 pl-2 h-11 mt-2 flex flex-row items-center">
              <ExclamationCircleIcon color={'#1C1B1F'} size={30} />
              <Text className="text-black ml-2 mr-52 font-Regular text-sm">
                Security
              </Text>
              <ChevronDownIcon color={'#1C1B1F'} size={20} />
            </View>
            <View className="bg-white w-11/12 pl-2 h-11 flex flex-row items-center">
              <ShieldCheckIcon color={'#1C1B1F'} size={30} />
              <Text className="text-black ml-3 mr-40 pr-1 font-Regular text-sm">
                Privacy Policy
              </Text>
              <ChevronDownIcon color={'#1C1B1F'} size={20} />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
              className="border-Danger border h-8 mt-16 flex flex-row justify-center items-center rounded px-6">
              <ArrowRightStartOnRectangleIcon color={'#DC143C'} size={16} />
              <Text className="text-Danger font-Medium text-[10px] pl-0.5">
                Log Out
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

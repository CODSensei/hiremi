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
  ArrowLeftStartOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
  Bars3CenterLeftIcon,
  BellAlertIcon,
  CheckBadgeIcon,
  EyeIcon,
} from 'react-native-heroicons/outline';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';

const Home = ({navigation}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <ScrollView className="bg-background flex flex-1">
      {/* Header starts */}

      <View className="top-10 h-19 flex flex-row mx-7">
        <Image
          source={require(`../assets/images/Text.png`)}
          resizeMode="contain"
          className="self-start  w-[88.42px] h-[22px] "
        />
        <View className="left-44 pr-20  h-full flex flex-row">
          <BellAlertIcon color={'#3D4652'} size={28} />
        </View>
        <TouchableOpacity
          className="left-28 bottom-1  rotate-180"
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Bars3CenterLeftIcon color={'#3d4652'} size={32} />
        </TouchableOpacity>
      </View>

      {/* Header ends */}

      {/* Upper card starts */}

      <View className="h-44 top-5 mx-6 mt-8">
        <Text className="text-Border font-Regular text-sm">
          Hey, Good Morning
        </Text>
        {pressed ? (
          <>
            <View className="h-28 top-3 border rounded-lg border-Border flex justify-around">
              <View className=" h-16  flex flex-row ">
                <View className="w-20 flex items-center justify-center">
                  <Image
                    source={require('../assets/images/Profile.png')}
                    resizeMode="auto"
                    className="h-14 w-14  rounded-full "
                  />
                </View>
                <View className="w-52  flex justify-evenly flex-col">
                  <Text className="text-black font-Medium text-base ">
                    Mr. Mark David Johnson
                  </Text>
                  <Text className="text-['#00000080'] font-Regular text-sm">
                    UID: 0000001
                  </Text>
                </View>
                <View className="w-12 flex justify-center items-center">
                  <TouchableOpacity
                    onPress={() => {
                      setPressed(!pressed);
                    }}>
                    <FontAwesomeIcon
                      icon={faCaretUp}
                      color={'#098ce3'}
                      size={14}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex flex-row justify-between mx-3 mb-1">
                <View className="h-8 flex flex-row">
                  <TouchableOpacity 
                  onPress={() => {
                    navigation.navigate('Profile');
                  }}
                  className="bg-Border w-24 flex flex-row justify-center items-center rounded">
                    <EyeIcon color={'#ffffff'} size={16} />
                    <Text className="text-white font-Medium text-[10px] pl-0.5">
                      View Profile
                    </Text>
                  </TouchableOpacity>
                  <View className="bg-Verified ml-2 w-8 rounded flex justify-center items-center">
                    <CheckBadgeIcon stroke={'#ffffff'} />
                  </View>
                </View>
                <TouchableOpacity 
                onPress={() => {
                  navigation.navigate('Login');
                }}
                className="border-Border border flex flex-row justify-center items-center rounded px-4">
                  <ArrowRightStartOnRectangleIcon color={'#098ce3'} size={16} />
                  <Text className="text-Border font-Medium text-[10px] pl-0.5">
                    Log Out
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <>
            <View className="h-20  top-3 border-0 rounded-lg flex justify-center ">
              <View className=" h-16 top23 border rounded-lg border-Border flex flex-row ">
                <View className="w-20 flex items-center justify-center">
                  <Image
                    source={require('../assets/images/Profile.png')}
                    resizeMode="auto"
                    className="h-14 w-14  rounded-full "
                  />
                </View>
                <View className="w-52  flex justify-evenly flex-col">
                  <Text className="text-black font-Medium text-base ">
                    Mr. Mark David Johnson
                  </Text>
                  <Text className="text-['#00000080'] font-Regular text-sm">
                    UID: 0000001
                  </Text>
                </View>
                <View className="w-12 flex justify-center items-center">
                  <TouchableOpacity
                    onPress={() => {
                      setPressed(!pressed);
                    }}>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      color={'#098ce3'}
                      size={14}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        )}
      </View>

       {/* Upper card ends  */}

        <View className="bg-pink-400 h-16"></View>

    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});

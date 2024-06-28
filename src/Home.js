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
  Bars3CenterLeftIcon,
  BellIcon,
  CheckBadgeIcon,
  EyeIcon,
} from 'react-native-heroicons/outline';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';

const Home = ({navigation}) => {
  const [popen, setPopen] = useState(false);
  const [upper, setUpper] = useState(false);

  return (
    <View className="bg-background flex flex-1">
      {/* Header starts */}
      <View className="h-19 mt-10 flex flex-row">
        <Image
          source={require(`../assets/images/Text.png`)}
          resizeMode="contain"
          className="self-start mr-52 ml-4 w-20 h-6"
        />
        <BellIcon color={'#3D4652'} size={29} />
        <Bars3CenterLeftIcon
          rotation={180}
          color={'#3d4652'}
          size={32}
          style={{
            marginLeft: 14,
          }}
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
      </View>
      {/* header ends */}

      {/* Upper true */}

      {upper ? (
        <>
          <View className="ml-4 mt-3 hidden">
            <Text className="text-Border font-Regular text-sm">
              Hey, Good Morning!
            </Text>
            {/* mark davidputra Off */}
            {popen ? (
              <>
                <View className="bg-white w-11/12 border rounded-lg border-Border mt-2 h-28 flex items-center">
                  <View className="mt-2 flex flex-row">
                    <Image
                      source={require('../assets/images/Profile.png')}
                      resizeMode="contain"
                      className="h-14 ml-2"
                    />
                    <View className="flex ml-2 mr-7">
                      <Text className="text-black font-Medium text-lg">
                        Mr. Mark David Johnson
                      </Text>
                      <Text className="text-Sub font-Regular text-sm">
                        UID: 0000001
                      </Text>
                    </View>
                    <TouchableOpacity
                      className="self-center mr-3"
                      onPress={() => {
                        setPopen(!popen);
                      }}>
                      <FontAwesomeIcon
                        icon={faCaretUp}
                        color={'#098ce3'}
                        size={14}
                      />
                    </TouchableOpacity>
                  </View>
                  <View className="h-14 w-11/12 pb-3 flex flex-row items-center">
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Profile');
                      }}
                      className="bg-Border w-24 h-8 flex flex-row justify-center items-center rounded">
                      <EyeIcon color={'#ffffff'} size={16} />
                      <Text className="text-white font-Medium text-xs pl-0.5">
                        View Profile
                      </Text>
                    </TouchableOpacity>
                    <View className="bg-Verified ml-2 w-8 h-8 rounded flex justify-center items-center">
                      <CheckBadgeIcon stroke={'#ffffff'} />
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Login');
                      }}
                      className="border-Border border flex flex-row justify-center items-center rounded px-4 h-8 ml-20">
                      <ArrowRightStartOnRectangleIcon
                        color={'#098ce3'}
                        size={16}
                      />
                      <Text className="text-Border font-Medium text-xs pl-0.5">
                        Log Out
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : (
              <>
                <View className="bg-white w-11/12 border rounded-lg border-Border mt-2 h-16 flex flex-row items-center">
                  <Image
                    source={require('../assets/images/Profile.png')}
                    resizeMode="contain"
                    className="h-14 ml-2"
                  />
                  <View className="flex ml-2 mr-7">
                    <Text className="text-black font-Medium text-lg">
                      Mr. Mark David Johnson
                    </Text>
                    <Text className="text-Sub font-Regular text-sm">
                      UID: 0000001
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      className="self-center mr-3"
                      setPopen(!popen);
                    }}>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      color={'#098ce3'}
                      size={14}
                    />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </>
      ) : (
        <>
          <View className="ml-4 mt-3">
            <Text className="text-Border font-Regular text-sm">
              Hey, Good Morning!
            </Text>
            {/* mark davidputra Off */}
            {popen ? (
              <>
                <View className="bg-white w-11/12 border rounded-lg border-Border mt-2 h-28 flex items-center">
                  <View className="mt-2 flex flex-row">
                    <Image
                      source={require('../assets/images/Profile.png')}
                      resizeMode="contain"
                      className="h-14 ml-2"
                    />
                    <View className="flex ml-2 mr-8">
                      <Text className="text-black font-Medium text-lg">
                        Mr. Mark David Johnson
                      </Text>
                      <Text className="text-Sub font-Regular text-sm">
                        UID: 0000001
                      </Text>
                    </View>
                    <TouchableOpacity
                      className="self-center mr-2"
                      onPress={() => {
                        setPopen(!popen);
                      }}>
                      <FontAwesomeIcon
                        icon={faCaretUp}
                        color={'#098ce3'}
                        size={14}
                      />
                    </TouchableOpacity>
                  </View>
                  <View className="h-14 w-11/12 pb-3 flex flex-row items-center">
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Profile');
                      }}
                      className="bg-Border w-24 h-8 flex flex-row justify-center items-center rounded">
                      <EyeIcon color={'#ffffff'} size={16} />
                      <Text className="text-white font-Medium text-xs pl-0.5">
                        View Profile
                      </Text>
                    </TouchableOpacity>
                    <View className="bg-Verified ml-2 w-8 h-8 rounded flex justify-center items-center">
                      <CheckBadgeIcon stroke={'#ffffff'} />
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Login');
                      }}
                      className="border-Border border flex flex-row justify-center items-center rounded px-4 h-8 ml-20">
                      <ArrowRightStartOnRectangleIcon
                        color={'#098ce3'}
                        size={16}
                      />
                      <Text className="text-Border font-Medium text-xs pl-0.5">
                        Log Out
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : (
              <>
                <View className="bg-white w-11/12 border rounded-lg border-Border mt-2 h-16 flex flex-row items-center">
                  <Image
                    source={require('../assets/images/Profile.png')}
                    resizeMode="contain"
                    className="h-14 ml-2"
                  />
                  <View className="flex ml-2 mr-8">
                    <Text className="text-black font-Medium text-lg">
                      Mr. Mark David Johnson
                    </Text>
                    <Text className="text-Sub font-Regular text-sm">
                      UID: 0000001
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setPopen(!popen);
                    }}>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      color={'#098ce3'}
                      size={14}
                    />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </>
      )}

      {upper ? (
        <>
          <ScrollView>
            <View className="bg-white mt-5 h-screen rounded-t-[32px] border border-white flex flex-1 items-center drop-shadow-2xl">
              {/* Top notch */}
              <TouchableOpacity
                className="bg-Notch w-8 h-1 top-2 rounded-lg"
                onPress={() => {
                  setUpper(!upper);
                }}></TouchableOpacity>

              {/* Carousel starts */}
              <Image
                source={require('../assets/images/Carosoul.png')}
                resizeMode="contain"
                className="w-11/12 mt-2 self-center"
              />
              <View className="w-11/12 h-4 flex flex-row justify-center items-center">
                <TouchableOpacity className="bg-Slider border border-Slider w-2 h-2 rounded-full mr-0.5"></TouchableOpacity>
                <TouchableOpacity className="bg-Slider border border-Slider w-2 h-2 rounded-full mr-0.5"></TouchableOpacity>
                <TouchableOpacity className="bg-Border w-6 h-2 rounded-full mr-0.5"></TouchableOpacity>
                <TouchableOpacity className="bg-Slider border border-Slider w-2 h-2 rounded-full mr-0.5"></TouchableOpacity>
              </View>

              {/* Looking for jobs and Interships */}

              <View className="bg-LBorder w-11/12 h-11 rounded-lg mt-6 justify-center">
                <Text className="text-start ml-6 font-Regular text-black text-base">
                  Looking for Jobs & Interships
                </Text>
              </View>

              <View className="bg-white mt-4 w-11/12 h-28 flex flex-row justify-between">
                <Image
                  source={require('../assets/images/Internship.png')}
                  resizeMode="contain"
                  className="w-28"
                />

                <Image
                  source={require('../assets/images/Fresher.png')}
                  resizeMode="contain"
                  className="w-28"
                />

                <Image
                  source={require('../assets/images/Experienced.png')}
                  resizeMode="contain"
                  className="w-28"
                />
              </View>
              <View className="w-11/12 h-4 flex flex-row justify-between ">
                <Text className="text-black font-Regular text-xs text-center ml-6">
                  Internship
                </Text>
                <Text className="text-black font-Regular text-xs text-center ml-2">
                  Fresher Jobs
                </Text>
                <Text className="text-black font-Regular text-xs text-center mr-6">
                  Experienced
                </Text>
              </View>
              <Text className="text-black font-Regular text-xs left-28">
                Jobs
              </Text>

              {/* Courses and training */}

              <View className="bg-HR w-11/12 h-11 rounded-lg mt-6 justify-center">
                <Text className="text-start ml-6 font-Regular text-black text-base">
                  Courses, Training and More
                </Text>
              </View>

              <View className="bg-white mt-4 w-11/12 h-28 flex flex-row justify-between">
                <Image
                  source={require('../assets/images/Courses.png')}
                  resizeMode="contain"
                  className="w-28"
                />

                <Image
                  source={require('../assets/images/Corporate.png')}
                  resizeMode="contain"
                  className="w-28"
                />

                <Image
                  source={require('../assets/images/Mentorship.png')}
                  resizeMode="contain"
                  className="w-28"
                />
              </View>
              <View className="w-11/12 h-4 flex flex-row justify-between ">
                <Text className="text-black font-Regular text-xs text-center ml-8">
                  Courses
                </Text>
                <Text className="text-black font-Regular text-xs text-center ml-3">
                  Corporate
                </Text>
                <Text className="text-black font-Regular text-xs text-center mr-6">
                  Mentorship
                </Text>
              </View>
              <Text className="text-black font-Regular text-xs ">Training</Text>
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <>
            <View className="bg-white mt-3 h-screen rounded-t-[32px] border border-white flex flex-1 items-center drop-shadow-2xl">
              {/* Top notch */}
              <TouchableOpacity
                className="bg-Notch w-8 h-1 top-2 rounded-lg"
                onPress={() => {
                  setUpper(!upper);
                }}></TouchableOpacity>

              {/* Carousel starts */}
              <Image
                source={require('../assets/images/Carosoul.png')}
                resizeMode="contain"
                className="w-11/12 mt-2 self-center"
              />
              <View className="w-11/12 h-4 flex flex-row justify-center items-center">
                <TouchableOpacity className="bg-Slider border border-Slider w-2 h-2 rounded-full mr-0.5"></TouchableOpacity>
                <TouchableOpacity className="bg-Slider border border-Slider w-2 h-2 rounded-full mr-0.5"></TouchableOpacity>
                <TouchableOpacity className="bg-Border w-6 h-2 rounded-full mr-0.5"></TouchableOpacity>
                <TouchableOpacity className="bg-Slider border border-Slider w-2 h-2 rounded-full mr-0.5"></TouchableOpacity>
              </View>

              {/* Looking for jobs and Interships */}

              <View className="bg-LBorder w-11/12 h-11 rounded-lg mt-6 justify-center">
                <Text className="text-start ml-6 font-Regular text-black text-base">
                  Looking for Jobs & Interships
                </Text>
              </View>

              <View className="bg-white mt-4 w-11/12 h-28 flex flex-row justify-between">
                <Image
                  source={require('../assets/images/Internship.png')}
                  resizeMode="contain"
                  className="w-28"
                />

                <Image
                  source={require('../assets/images/Fresher.png')}
                  resizeMode="contain"
                  className="w-28"
                />

                <Image
                  source={require('../assets/images/Experienced.png')}
                  resizeMode="contain"
                  className="w-28"
                />
              </View>
              <View className="w-11/12 h-4 flex flex-row justify-between ">
                <Text className="text-black font-Regular text-xs text-center ml-6">
                  Internship
                </Text>
                <Text className="text-black font-Regular text-xs text-center ml-2">
                  Fresher Jobs
                </Text>
                <Text className="text-black font-Regular text-xs text-center mr-6">
                  Experienced
                </Text>
              </View>
              <Text className="text-black font-Regular text-xs left-28">
                Jobs
              </Text>

              {/* Courses and training */}

              <View className="bg-HR w-11/12 h-11 rounded-lg mt-6 justify-center">
                <Text className="text-start ml-6 font-Regular text-black text-base">
                  Courses, Training and More
                </Text>
              </View>

              <View className="bg-white mt-4 w-11/12 h-28 flex flex-row justify-between">
                <Image
                  source={require('../assets/images/Courses.png')}
                  resizeMode="contain"
                  className="w-28"
                />

                <Image
                  source={require('../assets/images/Corporate.png')}
                  resizeMode="contain"
                  className="w-28"
                />

                <Image
                  source={require('../assets/images/Mentorship.png')}
                  resizeMode="contain"
                  className="w-28"
                />
              </View>
              <View className="w-11/12 h-4 flex flex-row justify-between ">
                <Text className="text-black font-Regular text-xs text-center ml-8">
                  Courses
                </Text>
                <Text className="text-black font-Regular text-xs text-center ml-3">
                  Corporate
                </Text>
                <Text className="text-black font-Regular text-xs text-center mr-6">
                  Mentorship
                </Text>
              </View>
              <Text className="text-black font-Regular text-xs ">Training</Text>
            </View>
          </>
        </>
      )}

      {/* Mr Mark Davidson start */}

      {/* Mr Mark Davidson Off end */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

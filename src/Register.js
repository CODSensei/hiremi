import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {RadioGroup} from 'react-native-radio-buttons-group';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons/faCaretDown';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from 'react-native-heroicons/outline';

const Register = ({navigation}) => {
  const radiogroup_Options = useMemo(
    () => [
      {
        id: 1,
        label: (
          <Text className="text-black ml-2 text-base font-Regular mr-9">
            Male
          </Text>
        ),
        value: 0,
        size: 17,
        borderColor: '#d9d9d9',
        color: '#098CE3',
      },
      {
        id: 2,
        label: (
          <Text className="text-black text-base ml-2 font-Regular mr-9">
            Female
          </Text>
        ),
        value: 1,
        size: 17,
        borderColor: '#d9d9d9',
        color: '#098CE3',
      },
      {
        id: 3,
        label: (
          <Text className="text-black text-base ml-2 font-Regular">Other</Text>
        ),
        value: 2,
        size: 17,
        borderColor: '#d9d9d9',
        color: '#098CE3',
      },
    ],
    [],
  );

  const data = [
    {label: 'Select State ', value: '0'},
    {label: 'Item 1', value: '1'},
  ];
  const data2 = [
    {label: 'Select Branch ', value: '0'},
    {label: 'Item 1', value: '1'},
  ];
  const data3 = [
    {label: 'Select Course ', value: '0'},
    {label: 'Item 1', value: '1'},
  ];
  const data4 = [
    {label: 'Select Year ', value: '0'},
    {label: 'Item 1', value: '1'},
  ];

  const [selectedId, setSelectedId] = useState(0);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [Value, setValue] = useState(null);
  const [Value2, setValue2] = useState(null);
  const [Value3, setValue3] = useState(null);
  const [Value4, setValue4] = useState(null);
  const [toggle, settoggle] = useState(true);
  const [toggle2, settoggle2] = useState(true);
  return (
    <ScrollView className="bg-background flex flex-1">
      <Image
        source={require(`../assets/images/Text.png`)}
        resizeMode="contain"
        className="self-center w-[88.42px] h-[22px] top-10"
      />

      <Text className="text-black font-Medium text-center text-[22px] top-16">
        Register to get started,
      </Text>
      <Text className="text-black font-Regular text-center text-[22px] top-16">
        Start your journey with us.
      </Text>

      <KeyboardAvoidingView className="bg-white w-full h-[1980px] top-24 border border-Border rounded-t-[32px]">
        <Text className="text-black font-Semibold text-center mt-10 text-[22px]">
          Personal Information
        </Text>

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          Your Full Name
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 border rounded border-Border mt-2">
          <TextInput
            className="pl-4 pb-1  w-4/5 font-Regular text-base"
              placeholderTextColor={'#00000040'}
            placeholder="John Doe"
            placeholderStyle={styles.placeholderStyle}
            autoCapitalize="true"
            autoComplete="false"
            autoCorrect={false}
            keyboardAppearance="default"></TextInput>
        </View>

        <Text className="text-black font-Regular text-base text-start ml-8 mt-4">
          Father's Full Name
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 border rounded border-Border mt-2">
          <TextInput
            className="pl-4 pb-1 w-4/5 font-Regular text-base"
              placeholderTextColor={'#00000040'}
              placeholderStyle={styles.placeholderStyle}
            placeholder="Robert Dave"
            autoCapitalize="true"
            autoComplete="false"
            autoCorrect={false}
            keyboardAppearance="default"></TextInput>
        </View>

        <Text className="text-black font-Regular text-base text-start ml-8 mt-4 ">
          Gender <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex bg-[`#d9d9d9] flex-row mx-8 mt-2 justify-evenly">
          <RadioGroup
            layout="row"
            className="font-bold px-8 justify-around font-Regular text-black"
            horizontal={true}
            color="#098CE3"
            radioButtons={radiogroup_Options}
            onPress={setSelectedId}
            selectedId={selectedId}
          />
        </View>

        <Text className="text-black font-Regular text-base text-start ml-8 mt-4">
          Email Address
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 border rounded border-Border mt-2">
          <TextInput
            className="pl-4 pb-1 font-Regular w-4/5 text-base"
              placeholderTextColor={'#00000040'}
              placeholderStyle={styles.placeholderStyle}
            placeholder="youremail@gmail.com"
            autoCapitalize="false"
            autoComplete="false"
            autoCorrect={false}
            keyboardAppearance="default"></TextInput>
        </View>

        <Text className="text-black font-Regular text-base text-start ml-8 mt-4">
          Date of Birth
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row justify-between  mx-8 h-12 mt-2 border rounded border-Border">
          <View className="border-0.5 border-Border w-12 flex justify-center items-center">
            <FontAwesomeIcon
              icon={faCalendarDays}
              color={'#098CE3'}
              size={22}></FontAwesomeIcon>
          </View>
          <TextInput
            className="pl-3 mr-[92px] w-32 pb-1  font-Regular text-base"
              placeholderTextColor={'#00000040'}
            placeholder="DD/MM/YYYY"
            placeholderStyle={styles.placeholderStyle}
            ></TextInput>
          <>
            <Button
              className="bg-[`#d9d9d9`] border-Border w-12 flex rounded justify-center items-center"
              onPress={() => setOpen(true)}>
              <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />

              <FontAwesomeIcon
                icon={faCaretDown}
                color={'#1C1B1FBF'}
                size={14}
              />
            </Button>
          </>
        </View>

        <Text className="text-black font-Semibold text-center mt-10 text-[22px]">
          Contact Information
        </Text>

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          Phone Number
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 border rounded border-Border mt-2">
          <TextInput
            className="pl-4 pb-1 w-4/5font-Regular text-base"
              placeholderTextColor={'#00000040'}
            placeholderStyle={styles.placeholderStyle}
            placeholder="+91"
            keyboardAppearance="default"
            maxLength={10}
            keyboardType="phone-pad"
            autoComplete="false"></TextInput>
        </View>

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          Whatsapp Number
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 border rounded border-Border mt-2">
          <TextInput
            className="pl-4 pb-1 w-4/5 font-Regular  text-base"
              placeholderTextColor={'#00000040'}
            placeholderStyle={styles.placeholderStyle}
            placeholder="+91"
            keyboardAppearance="default"
            maxLength={10}
            keyboardType="phone-pad"
            autoComplete="false"></TextInput>
        </View>

        <Text className="text-black font-Semibold text-center mt-10 text-[22px]">
          Educational Information
        </Text>

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          College Name
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 border rounded border-Border mt-2">
          <TextInput
            className="pl-4 font-Regular pb-1 w-4/5 text-base"
              placeholderTextColor={'#00000040'}
            placeholderStyle={styles.placeholderStyle}
            placeholder="College Name Here"
            autoCapitalize="true"
            autoComplete="false"
            autoCorrect={false}
            keyboardAppearance="default"></TextInput>
        </View>

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          College's State
          <Text className="text-red-600">*</Text>
        </Text>
        <Dropdown
          className="h-12 mx-8 px-4 border rounded border-Border mt-2"
              placeholderTextColor={'#00000040'}
          placeholderStyle={styles.placeholderStyle}
          labelField="label"
          iconColor="#1C1B1FBF"
          search={true}
          data={data}
          valueField="Value"
          searchPlaceholder="Search..."
          value={Value}
          maxHeight={300}
          onChange={item => {
            setValue(item.Value);
          }}
          renderRightIcon={() => (
            <FontAwesomeIcon icon={faCaretDown} color={'#1C1B1FBF'} size={14} />
          )}
        />

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          Branch
          <Text className="text-red-600">*</Text>
        </Text>
        <Dropdown
          className="h-12 mx-8 px-4 border rounded border-Border mt-2"
              placeholderTextColor={'#00000040'}
          placeholderStyle={styles.placeholderStyle}
          search={true}
          data={data2}
          labelField="label"
          valueField="Value2"
          searchPlaceholder="Search..."
          value={Value2}
          maxHeight={300}
          onChange={item2 => {
            setValue2(item2.Value2);
          }}
          iconColor="#1C1B1FBF"
          renderRightIcon={() => (
            <FontAwesomeIcon icon={faCaretDown} color={'#1C1B1FBF'} size={14} />
          )}
        />

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          Degree
          <Text className="text-red-600">*</Text>
        </Text>
        <Dropdown
          className="h-12 mx-8 px-4 border rounded border-Border mt-2"
              placeholderTextColor={'#00000040'}
          placeholderStyle={styles.placeholderStyle}
          search={true}
          data={data3}
          labelField="label"
          valueField="Value3"
          searchPlaceholder="Search..."
          value={Value3}
          maxHeight={300}
          onChange={item3 => {
            setValue3(item3.Value3);
          }}
          iconColor="#1C1B1FBF"
          renderRightIcon={() => (
            <FontAwesomeIcon icon={faCaretDown} color={'#1C1B1FBF'} size={14} />
          )}
        />

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          Passout Year
          <Text className="text-red-600">*</Text>
        </Text>
        <Dropdown
          className="h-12 mx-8 px-4 border rounded border-Border mt-2"
              placeholderTextColor={'#00000040'}
          placeholderStyle={styles.placeholderStyle}
          search={true}
          data={data4}
          labelField="label"
          valueField="Value4"
          searchPlaceholder="Search..."
          value={Value4}
          maxHeight={300}
          onChange={item4 => {
            setValue4(item4.Value4);
          }}
          iconColor="#1C1B1FBF"
          renderRightIcon={() => (
            <FontAwesomeIcon icon={faCaretDown} color={'#1C1B1FBF'} size={14} />
          )}
        />

        <Text className="text-black font-Semibold text-center mt-10 text-[22px]">
          Let's Create Password
        </Text>
        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row justify-between  mx-8 h-12 mt-2 border rounded border-Border">
          <View className="border-0.5 border-Border w-12 flex justify-center items-center">
            <LockClosedIcon stroke="#098CE3"></LockClosedIcon>
          </View>
          <TextInput
            className="pl-4 font-Regular pb-1  text-base"
              placeholderTextColor={'#00000040'}
            placeholderStyle={styles.placeholderStyle}
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

        <Text className="text-black font-Regular text-base text-start ml-8 mt-6">
          Confirm New Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row justify-between  mx-8 h-12 mt-2 border rounded border-Border">
          <View className="border-0.5 border-Border w-12 flex justify-center items-center">
            <LockClosedIcon stroke="#098CE3"></LockClosedIcon>
          </View>
          <TextInput
            className="pl-4 font-Regular pb-1 text-base"
              placeholderTextColor={'#00000040'}
            placeholderStyle={styles.placeholderStyle}
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

        <TouchableOpacity
          className="border border-Border mx-8 h-12 bg-Border rounded mt-8"
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text className="text-white text-center my-auto font-Regular font-normal text-base">
            Reset Password
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 16,
    color: '#00000040',
    fontFamily: 'Poppins-Regular',
  },
});

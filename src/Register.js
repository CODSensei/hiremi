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
  UserCircleIcon,
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

  const data = [{label: 'Item 1', value: '1'},{label: 'Item 2', value: '2'}];
  const data2 = [{label: 'Item 1', value: '1'},{label: 'Item 2', value: '2'}];
  const data3 = [{label: 'Item 1', value: '1'},{label: 'Item 2', value: '2'}];
  const data4 = [{label: 'Item 1', value: '1'},{label: 'Item 2', value: '2'}];

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

      <Text className="text-black font-Medium-medium text-center text-[22px] top-16">
        Register to get started,
      </Text>
      <Text className="text-black font-Regular-normal text-center text-[22px] top-16">
        Start your journey with us.
      </Text>

      <KeyboardAvoidingView className="bg-white w-full h-[1895px] top-24 border border-Border rounded-t-[32px]">
        <Text className="text-black font-SemiBold text-center mt-10 text-[22px]">
          Personal Information
        </Text>

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          Your Full Name
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 border rounded border-Border mt-2">
          <TextInput
            className="pl-4 font-Regular font-normal text-base"
            placeholder="John Doe"
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
            className="pl-4 font-Regular font-normal text-base"
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
            className="font-bold px-8 justify-around text-black"
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
            className="pl-4 font-Regular font-normal text-base"
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
            className="pl-2 mr-28 w-auto font-Regular font-normal text-base"
            placeholder="DD/MM/YYYY"></TextInput>
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
                size={12}
              />
            </Button>
          </>
        </View>

        <Text className="text-black font-SemiBold text-center mt-10 text-[22px]">
          Contact Information
        </Text>

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          Phone Number
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 border rounded border-Border mt-2">
          <TextInput
            className="pl-4 font-Regular font-normal text-base"
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
            className="pl-4 font-Regular font-normal text-base"
            placeholder="+91"
            keyboardAppearance="default"
            maxLength={10}
            keyboardType="phone-pad"
            autoComplete="false"></TextInput>
        </View>

        <Text className="text-black font-SemiBold text-center mt-10 text-[22px]">
          Educational Information
        </Text>

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          College Name
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row mx-8 h-12 border rounded border-Border mt-2">
          <TextInput
            className="pl-4 font-Regular font-normal text-base"
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
          placeholderStyle={styles.placeholderStyle}
          placeholder="Select State"
          search={true}
          labelField="label"
          valueField="Value"
          searchPlaceholder="Search..."
          value={Value}
          maxHeight={300}
          onChange={item => {
            setValue(item.Value);
          }}
        />

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          Branch
          <Text className="text-red-600">*</Text>
        </Text>
        <Dropdown
          className="h-12 mx-8 px-4 border rounded border-Border mt-2"
          placeholderStyle={styles.placeholderStyle}
          placeholder="Select Branch"
          search={true}
          labelField="label"
          valueField="Value2"
          searchPlaceholder="Search..."
          value={Value2}
          maxHeight={300}
          onChange={item2 => {
            setValue2(item2.Value2);
          }}
        />

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          Degree
          <Text className="text-red-600">*</Text>
        </Text>
        <Dropdown
          className="h-12 mx-8 px-4 border rounded border-Border mt-2"
          placeholderStyle={styles.placeholderStyle}
          placeholder="Select Course"
          search={true}
          labelField="label"
          valueField="Value3"
          searchPlaceholder="Search..."
          value={Value3}
          maxHeight={300}
          onChange={item3 => {
            setValue3(item3.Value3);
          }}
        />

        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          Passout Year
          <Text className="text-red-600">*</Text>
        </Text>
        <Dropdown
          className="h-12 mx-8 px-4 border rounded border-Border mt-2"
          placeholderStyle={styles.placeholderStyle}
          placeholder="Select Year"
          search={true}
          labelField="label"
          valueField="Value4"
          searchPlaceholder="Search..."
          value={Value4}
          maxHeight={300}
          onChange={item4 => {
            setValue4(item4.Value4);
          }}
        />

        <Text className="text-black font-SemiBold text-center mt-10 text-[22px]">
          Let's Create Password
        </Text>
        <Text className="text-black font-Regular text-base text-start ml-8 mt-8">
          Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row justify-between  mx-8 h-12 mt-2 border rounded border-Border">
          <View className="border-0.5 border-Border w-12 flex justify-center items-center">
            <UserCircleIcon stroke="#098CE3"></UserCircleIcon>
          </View>
          <TextInput
            className="pl-4 font-Regular font-normal text-base"
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

        <Text className="text-black font-Regular-normal text-base text-start ml-8 mt-4">
          Confirm New Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="flex flex-row justify-between  mx-8 h-12 mt-2 border rounded border-Border">
          <View className="border-0.5 border-Border w-12 flex justify-center items-center">
            <UserCircleIcon stroke="#098CE3"></UserCircleIcon>
          </View>
          <TextInput
            className="pl-4 font-Regular font-normal text-base"
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 16,
  },
});

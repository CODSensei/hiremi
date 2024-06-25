
  

        <Text className="text-black">Educational Information</Text>
        <Text className="text-black">
          College Name
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="College Name Here"></TextInput>
        </View>
        <Text className="text-black">
          College's State
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="Select State"></TextInput>
        </View>
        <Text className="text-black">
          Branch
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="Select Branch"></TextInput>
        </View>
        <Text className="text-black">
          Degree
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="Select Course"></TextInput>
        </View>
        <Text className="text-black">
          Passout Year
          <Text className="text-red-600">*</Text>
        </Text>

        <View className="bg-yellow-300 flex flex-row">
          <TextInput placeholder="Select Year"></TextInput>
        </View>

        <Text className="text-black">Let's Creater Password</Text>

        <Text className="text-black">
          Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="bg-yellow-300 flex flex-row">
          <View className="border">
            <UserCircleIcon stroke="black"></UserCircleIcon>
          </View>
          <TextInput placeholder="**********"></TextInput>
        </View>
        <Text className="text-black">
          Confirm Password
          <Text className="text-red-600">*</Text>
        </Text>
        <View className="bg-yellow-300 flex flex-row">
          <View className="border">
            <UserCircleIcon stroke="black"></UserCircleIcon>
          </View>
          <TextInput placeholder="**********"></TextInput>
        </View>

        <TouchableOpacity className="border">
          <Text
            className="text-black"
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Register Now
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});

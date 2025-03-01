import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { ScrollView, Image, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 *  contentContainerClassName
 *
 *  Essa propriedade aplica uma classe CSS ao container interno que envolve
 *  o conteúdo do ScrollView. O conteúdo do ScrollView é envolvido por um
 *  container (internamente), e o contentContainerClassName permite estilizar
 *  esse container, que é onde o conteúdo rolará.
 */

const SignIn = () => {
  const handleLogin = () => {};

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        <View className="px-10 -mt-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome do Real State
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer to {"\n"}{" "}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to RealState with Google
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-primary-300 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-white ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

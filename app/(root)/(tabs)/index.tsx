import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-3xl my-10 font-rubik">Welcome</Text>
      <Link className="text-2xl font-rubik-light" href="/sign-in">
        Sign In
      </Link>
      <Link className="text-2xl font-rubik-medium" href="/explore">
        Explore
      </Link>
      <Link className="text-2xl font-rubik" href="/profile">
        Profile
      </Link>
      <Link className="text-2xl" href="/properties/1">
        Properties
      </Link>
    </View>
  );
}

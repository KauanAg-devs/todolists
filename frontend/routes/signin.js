import { Text, TouchableHighlight, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Signin(params) {
    const navigation = useNavigation()

    return (
        <View>
                <TouchableHighlight onPress={()=> navigation.navigate('home')}>
                    <Text>
                      ir para o home
                    </Text>
                </TouchableHighlight>
        </View>
    )
}
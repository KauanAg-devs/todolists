import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";

export function Signin(params) {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>

                <TextInput style={styles.TextInput} placeholder="Name"/>
                <TextInput style={styles.TextInput} placeholder="Password" keyboardType="visible-password"/>
                <TouchableHighlight style={styles.TextInput} onPress={()=> navigation.navigate('home')}>
                    <Text>
                      ir para o home
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.TextInput} onPress={()=> navigation.navigate('login')}>
                    <Text>
                      já tens uma conta?
                    </Text>
                </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    TextInput: {
        width: '15vw',
        height: '8vh',
        backgroundColor: 'blue',
        marginTop: '10px',
        borderRadius: '20px',
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    }
})
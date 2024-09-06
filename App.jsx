import { Stylesheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={Stylesheet.conteiner}>
            <Text>Hello word from react native dev!</Text>
            statusBar style="auto"/


            <welcome name="Nikky" />
            <welcome name="Nikky" />
        </View>
    );
}

const styles = Stylesheet.Create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignIteams: "center",
        justifycontent: "center",
    },
});




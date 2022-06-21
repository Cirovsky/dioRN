import React from "react"
import 
{ 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Pressable,
    Linking
} from "react-native"

const urlGithub = "https://github.com/Cirovsky"

export default () => {
    const handlePressGoToGithub = async () => {
        await Linking.openURL(urlGithub)
     }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colorGithub} barStyle={"light-content"} />
        <View style={styles.content}>
            <Image 
            accessibilityLabel="Ciro Monteiro fundo amarelo"
            style={styles.avatar} 
            source={{uri: imgProfile}}
            />
            <Text accessibilityLabel="Ciro Monteiro" style={[styles.defaultText,styles.name]}>Ciro Monteiro</Text>
            <Text accessibilityLabel="nickname Cirovsky" style={[styles.defaultText,styles.nickname]}>Cirovsky</Text>
            <Text accessibilityLabel="descrição: Software Developer" style={[styles.defaultText, styles.description]}>
                Software Developer. Ilustrator.
            </Text>
            <Pressable onPress={handlePressGoToGithub}>
                <View style={styles.button}>
                    <Text style={styles.label}>
                        Open Github
                    </Text>
                </View>
            </Pressable>
        </View>
        </SafeAreaView>
    )
}


const colorGithub = "#010409"
const imgProfile = 'https://avatars.githubusercontent.com/u/84918342?v=4'

const styles = StyleSheet.create({
    container:{
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: "center"
    },
    content:{
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 2
    },
    defaultText:{
        color: 'white'
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    nickname:{
        color: '#AAA',
        fontSize: 16,
    },
    description:{
        paddingTop: 10,
        fontSize: 16,
        paddingBottom: 10
    },
    button:{
        backgroundColor: '#AAA',
        color: 'black',
        borderRadius: 10,
        padding: 20
    },
    label:{
        fontSize: 16,
        fontWeight: 'bold',
    }
})
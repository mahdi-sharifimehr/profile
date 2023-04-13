import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, View, ScrollView, Linking, Image } from 'react-native';
import colors from '../constants/Colors';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Button from '../components/Button';

function SignIn() {

    const savedImage = useSelector(state => state.user.image);
    const savedName = useSelector(state => state.user.name);
    const savedEmail = useSelector(state => state.user.email);
    const savedWebsite = useSelector(state => state.user.website);

    return (
        <SafeAreaView style={styles.body}>
            {/* Header */}
            <Header
                title={'Hello, ' + savedName}
                subtitle={'Your super-awesome portfolio has been successfully submitted! The preview below is what the community will see!'}
            />
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Avatar */}
                <View
                    style={styles.avatarBody}
                >
                    {savedImage ?
                        <Image
                            style={styles.image}
                            resizeMode='contain'
                            source={{
                                uri: savedImage,
                            }}
                        />
                        :
                        null
                    }
                </View>
                {/* Info */}
                <View
                    style={styles.infoBody}
                >
                    <TouchableOpacity
                        onPress={() => { Linking.openURL(savedWebsite.startsWith('http') ? savedWebsite : 'http://' + savedWebsite) }}
                    >
                        <Text style={styles.websiteText} >
                            {savedWebsite}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text} >
                        {savedName}
                    </Text>
                    <Text style={styles.text} >
                        {savedEmail}
                    </Text>
                </View>
            </ScrollView>
            {/* SignIn Button */}
            <Button
                title={'SignIn'}
                onPress={() => null}
            />
        </SafeAreaView>
    )
};

export default SignIn;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    scroll: {
        width: '100%',
    },
    scrollContent: {
        alignItems: 'center',
    },
    avatarBody: {
        marginTop: 20,
    },
    image: {
        width: 180,
        height: 240,
        borderRadius: 15,
    },
    infoBody: {
        width: '90%',
        alignItems: 'center',
        marginTop: 20,
    },
    websiteText: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.Blue,
        marginTop: 10,
        textDecorationLine: 'underline'
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.Gray_2,
        marginTop: 10,
    }
})
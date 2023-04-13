import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, PermissionsAndroid } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../constants/Colors';
import { ImageAction } from '../redux/slices/user';

function AvatarPicker() {

    const dispatch = useDispatch();

    const saveImage = (image) => dispatch(ImageAction(image));
    const savedImage = useSelector(state => state.user.image);

    const options = {
        mirrorImage: false,
        maxWidth: 500,
        maxHeight: 500,
        saveToPhotos: false,
        mediaType: 'photo',
        includeExtra: false
    };

    const onPress = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'App Camera Permission',
                    message: 'App needs access to your camera ',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );

            if (
                granted === PermissionsAndroid.RESULTS.GRANTED ||
                Platform.OS == 'ios'
            ) {
                launchCamera(options, async response => {
                    saveImage(response.assets[0].uri)
                });
            }
        } else {
            launchCamera(options, async response => {
                saveImage(response.assets[0].uri)
            })
        }
    }

    return (
        <View
            style={styles.body}
        >
            <TouchableOpacity
                style={styles.touchable}
                onPress={() => onPress()}
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
                    <Text style={styles.text} >
                        {'Tap to add avatar'}
                    </Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default AvatarPicker;

const styles = StyleSheet.create({
    body: {
        marginTop: 20,
    },
    touchable: {
        width: 180,
        height: 240,
        backgroundColor: colors.Gray_4,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    image: {
        width: 180,
        height: 240,
        borderRadius: 15,
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.Gray_3,
        textAlign: 'center',
    }
})
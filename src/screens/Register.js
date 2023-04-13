import React from 'react';
import { SafeAreaView, StyleSheet, View, } from 'react-native';
import colors from '../constants/Colors';
import { EmailAction, ImageAction, NameAction, PasswordAction, WebsiteAction } from '../redux/slices/user';
import { useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Header from '../components/Header';
import AvatarPicker from '../components/AvatarPicker';
import { TextInput } from 'react-native-paper';
import Button from '../components/Button';

function Register({ navigation }) {

    const dispatch = useDispatch();

    const [image, setImage] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [website, setWebsite] = React.useState('');

    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);

    const saveImage = (image) => dispatch(ImageAction(image));
    const saveName = (name) => dispatch(NameAction(name));
    const saveEmail = (email) => dispatch(EmailAction(email));
    const savePassword = (password) => dispatch(PasswordAction(password));
    const saveWebsite = (website) => dispatch(WebsiteAction(website));

    const checkEmail = () => {
        if (email.length < 6)
            setEmailError(true)
        else
            setEmailError(false)
    }

    const checkPassword = () => {
        if (password.length < 3)
            setPasswordError(true)
        else
            setPasswordError(false)
    }

    const onPress = () => {

        checkEmail();
        checkPassword();

        if (email.length >= 6 && password.length >= 3) {
            saveName(name);
            saveEmail(email);
            savePassword(password);
            saveWebsite(website);
            navigation.navigate('SignIn');
        }
    }

    return (
        <SafeAreaView style={styles.body}>
            {/* Header */}
            <Header
                title={'Profile Creation'}
                subtitle={'Use the form below to submit your portfolio.\nAn email and password are required.'}
            />
            <KeyboardAwareScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps={'handled'}
            >
                {/* Avatar */}
                <AvatarPicker
                    image={image}
                    setImage={setImage}
                />
                {/* Form */}
                <View
                    style={styles.formBody}
                >
                    <TextInput
                        style={styles.textInput}
                        label={'First Name'}
                        mode='outlined'
                        outlineColor={colors.Gray_1}
                        activeOutlineColor={colors.Gray_2}
                        placeholderTextColor={colors.Gray_3}
                        onChangeText={setName}
                        theme={styles.textInputTheme}
                    />
                    <TextInput
                        style={styles.textInput}
                        label={'Email Address'}
                        mode='outlined'
                        outlineColor={colors.Gray_1}
                        activeOutlineColor={colors.Gray_2}
                        placeholderTextColor={colors.Gray_3}
                        onChangeText={(value) => {
                            setEmail(value);
                            checkEmail();
                        }}
                        keyboardType={'email-address'}
                        error={emailError}
                        theme={styles.textInputTheme}
                    />
                    <TextInput
                        style={styles.textInput}
                        label={'Password'}
                        mode='outlined'
                        outlineColor={colors.Gray_1}
                        activeOutlineColor={colors.Gray_2}
                        placeholderTextColor={colors.Gray_3}
                        onChangeText={(value) => {
                            setPassword(value);
                            checkPassword();
                        }}
                        secureTextEntry
                        error={passwordError}
                        theme={styles.textInputTheme}
                    />
                    <TextInput
                        style={styles.textInput}
                        label={'Website'}
                        mode='outlined'
                        outlineColor={colors.Gray_1}
                        activeOutlineColor={colors.Gray_2}
                        placeholderTextColor={colors.Gray_3}
                        onChangeText={setWebsite}
                        theme={styles.textInputTheme}
                    />
                </View>
            </KeyboardAwareScrollView>
            {/* Submit Button */}
            <Button
                title={'Submit'}
                onPress={onPress}
            />
        </SafeAreaView>
    )
};

export default Register;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    scroll: {
        width: '100%',
        marginBottom: 110
    },
    scrollContent: {
        alignItems: 'center',
        paddingBottom: 100,
    },
    formBody: {
        width: '90%',
    },
    textInput: {
        height: 65,
        fontSize: 18,
        fontWeight: '600',
        backgroundColor: 'white',
        marginTop: 10,
    },
    textInputTheme: {
        colors: {
            text: colors.Gray_3,
            placeholder: colors.Gray_3
        },
        roundness: 15,
    }
})
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/Colors';

function Button({ title, onPress }) {

    return (
        <TouchableOpacity
            style={styles.body}
            onPress={() => {
                onPress();
            }}
        >
            <LinearGradient
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[colors.Gradient_1, colors.Gradient_2, colors.Gradient_3]}
            >
                <Text style={styles.text} >
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    body: {
        position: 'absolute',
        bottom: 40,
        width: '90%',
        height: 65,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient: {
        width: '100%',
        height: 65,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white'
    }
})
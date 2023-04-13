import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/Colors';

function Header({ title, subtitle }) {

    return (
        <View style={styles.body} >
            <Text style={styles.title} >
                {title}
            </Text>
            <Text style={styles.subtitle} >
                {subtitle}
            </Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    body: {
        width: '90%',
        paddingVertical: 10
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        color: colors.Gray_2
    },
    subtitle: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.Gray_1,
        marginTop: 10,
    }
})
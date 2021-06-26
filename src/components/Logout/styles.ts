import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 174,
        backgroundColor: theme.colors.secondary85,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
    },
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
    },
    title: {
        fontSize: 24,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        marginTop: 29,
        marginBottom: 29,
    },
    play: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.primary,
    },
    content: {
        flexDirection: 'row',
    },
    buttonNo: {
        width: 160,
        height: 56,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        borderWidth: 1,
        borderColor: theme.colors.secondary30,
        borderRadius: 8,
        marginRight: 8,
    },
    buttonYes: {
        width: 160,
        height: 56,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        backgroundColor: theme.colors.primary,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        borderRadius: 8,
    },
})
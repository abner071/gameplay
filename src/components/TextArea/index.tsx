import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { Background } from '../../components/Background';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function TextArea({...rest}: TextInputProps){

    return (
        <TextInput 
            style={styles.container}
            {...rest}
        />
    )
}
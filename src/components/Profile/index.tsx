import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { RectButton } from 'react-native-gesture-handler';

import { Logout } from '../Logout';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile(){
    const [isVisible, setIsVisible] = useState(false);

    const { user, signOut } = useAuth();

    function handleCloseModal(){
        setIsVisible(false);
    }

    function handleSignOut(){
        signOut();
    }
    
    return (
        <View style={styles.container}>

            <RectButton onPress={() => setIsVisible(true)}>
                <Avatar urlImage={user.avatar}/>    
            </RectButton>

            
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>

            <Logout 
                singOut={handleSignOut} 
                closeModal={handleCloseModal}
                visible={isVisible}     
            />
        </View>
    );
}
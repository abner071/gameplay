import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Text, Modal, ModalProps } from 'react-native';

import { styles } from './styles';

type Props = ModalProps & {
    singOut: () => void;
    closeModal: () => void;
}

export function Logout({singOut, closeModal, ...rest}: Props){

    return (
        <Modal 
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Deseja sair do Game
                        <Text style={styles.play}>Play</Text>
                        ?
                    </Text>

                    <View style={styles.content}>
                        <RectButton>
                            <Text onPress={closeModal} style={styles.buttonNo}>Não</Text>
                        </RectButton>

                        <RectButton>
                            <Text onPress={singOut} style={styles.buttonYes}>Sim</Text>
                        </RectButton>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
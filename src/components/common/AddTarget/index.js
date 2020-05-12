import React from 'react';
import {Button} from 'react-native';

export default function AddTargetBtn({event}) {
    return(
        <Button
        title='+'
        onPress={event}
        />
    )
}
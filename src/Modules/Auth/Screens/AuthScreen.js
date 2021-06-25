import React from 'react';
import AuthScreenUI from './AuthScreenUI';
import { Alert } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInRequest, signUpRequest } from '../Redux/UserRedux';
import { isValidEmail } from '../Utils/AuthValidations';
import { texts, useLocalization } from '../../Localization';

const AuthScreen = props => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');

    const loc = useLocalization();
    const dispatch = useDispatch();

    const _onPress_SignUp = () => {

        if (email.length === 0 || password.length === 0 || name.length === 0) {
            Alert.alert(loc.t(texts.alert),loc.t(texts.alert1));
        }
        else if (!isValidEmail(email)) {
            Alert.alert(loc.t(texts.alert),loc.t(texts.alert2));
        }
        else {
            dispatch(signUpRequest(email, password, name));
        }
    }

    const _onPress_SignIn = () => {
        if (email.length === 0 || password.length === 0) {
            Alert.alert(loc.t(texts.alert),loc.t(texts.alert1));
        }
        else {
            dispatch(signInRequest(email, password))
        }
    }

    return (
        <AuthScreenUI
            emailValue={email}
            passwordValue={password}
            passwordConfirmValue={passwordConfirm}
            nameValue={name}
            onChangeText_Email={setEmail}
            onChangeText_Password={setPassword}
            onChangeText_PasswordConfirm={setPasswordConfirm}
            onChangeText_Name={setName}
            onPress_SignUp={_onPress_SignUp}
            onPress_SignIn={_onPress_SignIn}
        />
    );
}

export default AuthScreen;
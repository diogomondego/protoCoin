import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {
  Platform,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { Container, Content, HeaderLogo } from './styles';

import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import colors from '../../utils/colors';

interface SignInFormData {
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      setLoading(true);
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().email().required().trim(),
          password: Yup.string().min(6).required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        navigation.navigate('Dashboard')
      } catch (err: any) {
        setLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          if(errors.email){
            Toast.show({
              type: 'error',
              text1: 'Favor verifique seu Email',
            }); 
          }else if(errors.password){
            Toast.show({
              type: 'error',
              text1: 'Favor verifique sua Senha',
            }); 
          }
        } else {
          Toast.show({
            type: 'cancel',
            text1: err.response.data.message,
          });
        }
      }
    },
    [],
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <Container>
          <Content>
            <HeaderLogo>
              <Logo />
            </HeaderLogo>

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                label="E-mail"
                name="email"
                returnKeyType="next"
                inputMaskType="normal"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
                icon='user'
              />

              <Input
                ref={passwordInputRef}
                secureTextEntry={true}
                label="Senha"
                name="password"
                returnKeyType="send"
                inputMaskType="normal"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
                icon='lock'
              />

              {loading ? 
                <ActivityIndicator size="large" color={colors.secondary} />
                :
                <Button
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}
                  icon='arrow-right'
                  title='ENTRAR'
                />
              }
            </Form>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LogIn;

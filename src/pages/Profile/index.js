import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import {
  Container,
  Title,
  Form,
  FormInput,
  Separator,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const emailRef = useRef();
  const oldPassswordRef = useRef();
  const passswordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setConfirmPassword('');
    setPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Meu Perfil</Title>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
            onSubmitEditing={() => oldPassswordRef.current.focus()}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha atual"
            value={oldPassword}
            onChangeText={setOldPassword}
            ref={oldPassswordRef}
            onSubmitEditing={() => passswordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua nova secreta"
            value={password}
            onChangeText={setPassword}
            ref={passswordRef}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação de senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            ref={confirmPasswordRef}
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair do GoBarber</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};

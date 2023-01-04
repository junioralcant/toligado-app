import { useState } from 'react';

import { Button, Input } from '@presentation/components';
import girl from '@presentation/assets/images/girl.png';
import logo from '@presentation/assets/images/logorocha.png';

import {
  BoxButton,
  BoxGirl,
  Container,
  Form,
  Girl,
  BoxLogo,
  Logo,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function Login() {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  const navigator = useNavigation();

  function teste() {
    navigator.navigate('login');
  }

  return (
    <Container>
      <BoxGirl>
        <Girl source={girl} />
      </BoxGirl>

      <Form>
        <Input
          isFocused={isFocused}
          label="CPF"
          placeholder="Informe seu CPF"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />

        <BoxButton>
          <Button title="LOGIN" />
        </BoxButton>
      </Form>

      <BoxLogo>
        <Logo source={logo} />
      </BoxLogo>
    </Container>
  );
}

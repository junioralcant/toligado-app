import { useState } from 'react';

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
import { Input } from '@presentation/components/Input';
import { Button } from '@presentation/components/Button';

export function Login() {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container>
      <BoxGirl>
        <Girl source={girl} />
      </BoxGirl>

      <Form>
        <Input
          isFocused={isFocused}
          label="Informe seu CPF"
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

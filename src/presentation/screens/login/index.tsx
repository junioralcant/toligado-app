import { useState } from 'react';

import girl from '@presentation/assets/images/girl.png';
import logo from '@presentation/assets/images/logorocha.png';

import {
  BoxButton,
  BoxGirl,
  Button,
  Container,
  Form,
  Girl,
  TextButton,
  BoxLogo,
  Logo,
} from './styles';
import { Input } from '@presentation/components/Input';

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
          <Button>
            <TextButton>LOGIN</TextButton>
          </Button>
        </BoxButton>
      </Form>

      <BoxLogo>
        <Logo source={logo} />
      </BoxLogo>
    </Container>
  );
}

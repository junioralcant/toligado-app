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

export function Login() {
  return (
    <Container>
      <BoxGirl>
        <Girl source={girl} />
      </BoxGirl>

      <Form>
        <Input
          label="CPF"
          placeholder="Informe seu CPF"
          keyboardType="numeric"
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

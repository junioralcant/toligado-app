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
import { ContextForm } from '@presentation/context/form';
import { useState } from 'react';

export function Login() {
  const [state, setState] = useState({
    cpf: '',
  });

  return (
    <Container>
      <BoxGirl>
        <Girl source={girl} />
      </BoxGirl>
      <ContextForm.Provider value={{ state, setState }}>
        <Form>
          <Input
            label="CPF"
            placeholder="Informe seu CPF"
            keyboardType="numeric"
            name="cpf"
          />

          <BoxButton>
            <Button title="LOGIN" />
          </BoxButton>
        </Form>
      </ContextForm.Provider>

      <BoxLogo>
        <Logo source={logo} />
      </BoxLogo>
    </Container>
  );
}

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
import { useEffect, useState } from 'react';
import { IValidation } from '@presentation/repositories/validation';
import { Loading } from '@presentation/components/Loading';

type Props = {
  validation: IValidation;
};

export function Login({ validation }: Props) {
  const [state, setState] = useState({
    cpf: '',
    errorMessage: '',
    isLoading: false,
  });

  useEffect(() => {
    const error = validation.validate({ cpf: state.cpf });
    setState({ ...state, errorMessage: error });
  }, [state.cpf]);

  function handleSubmit(): void {
    setState({ ...state, isLoading: true });
  }

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

          {state.isLoading ? (
            <Loading />
          ) : (
            <BoxButton>
              <Button title="LOGIN" onPress={handleSubmit} />
            </BoxButton>
          )}
        </Form>
      </ContextForm.Provider>

      <BoxLogo>
        <Logo source={logo} />
      </BoxLogo>
    </Container>
  );
}

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
import { IAuthentication } from '@domain/usecases';
import { Text } from 'react-native';
import { Error } from '@presentation/components/Error';

type Props = {
  validation: IValidation;
  authentication: IAuthentication;
};

export function Login({ validation, authentication }: Props) {
  const [state, setState] = useState({
    cpf: '',
    errorMessage: '',
    isLoading: false,
    errorResponse: '',
  });

  useEffect(() => {
    const error = validation.validate({ cpf: state.cpf });
    setState({ ...state, errorMessage: error });
  }, [state.cpf]);

  async function handleSubmit(): Promise<void> {
    try {
      setState({ ...state, isLoading: true });
      await authentication.auth({ cpf: state.cpf });
    } catch (error: any) {
      setState({ ...state, errorResponse: error.message, isLoading: false });
    }
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
        <Error />
      </ContextForm.Provider>

      <BoxLogo>
        <Logo source={logo} />
      </BoxLogo>
    </Container>
  );
}

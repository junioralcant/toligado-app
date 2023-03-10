import { useEffect, useState } from 'react';
import { Button, Input } from '@presentation/components';
import girl from '@presentation/assets/images/girl.png';
import logo from '@presentation/assets/images/logorocha.png';
import { ContextForm } from '@presentation/context/form';
import { IValidation } from '@presentation/repositories/validation';
import { Loading } from '@presentation/components/Loading';
import { IAuthentication } from '@domain/usecases';
import { Error } from '@presentation/components/Error';
import { MaskInputType } from '@presentation/utils/input-masks';

import {
  BoxButton,
  BoxGirl,
  Container,
  Form,
  Girl,
  BoxLogo,
  Logo,
  BoxLoading,
} from './styles';
import { useAccount } from '@presentation/hooks/use-token';

type Props = {
  validation: IValidation;
  authentication: IAuthentication;
};

export function Login({ validation, authentication }: Props) {
  const { setCurrentAccount } = useAccount();

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
      const response = await authentication.auth({ cpf: state.cpf });
      setCurrentAccount(response);
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
            maxLength={14}
            maskType={MaskInputType.cpf}
          />

          {state.isLoading ? (
            <BoxLoading>
              <Loading />
            </BoxLoading>
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

import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import girl from '@presentation/assets/images/girl.png';
import logo from '@presentation/assets/images/logorocha.png';

import {
  BoxButton,
  BoxGirl,
  Button,
  Container,
  Form,
  Input,
  InputText,
  Label,
  Girl,
  TextButton,
  BoxLogo,
  Logo,
} from './styles';

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
        <KeyboardAvoidingView behavior="padding">
          <Input>
            <Label>CPF</Label>
            <InputText
              isFocused={isFocused}
              placeholder="Infome seu CPF"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </Input>
        </KeyboardAvoidingView>

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

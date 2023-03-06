import { AntDesign } from '@expo/vector-icons';
import { Button, Input } from '@presentation/components';
import { ContextForm } from '@presentation/context/form';
import theme from '@presentation/styles/theme';

import {
  BoxButton,
  BoxInput,
  Container,
  Form,
  SelectPhoto,
  SelectText,
  Title,
} from './styles';

export function RecordCapture() {
  return (
    <Container>
      <Title>Registrar</Title>
      <ContextForm.Provider value={{ state: {}, setState: {} }}>
        <Form>
          <SelectPhoto>
            <SelectText>Foto</SelectText>
            <AntDesign name="camera" size={20} color={theme.colors.title} />
          </SelectPhoto>

          <BoxInput>
            <Input
              label="Local"
              placeholder="Informe o Local"
              keyboardType="numeric"
              name="place"
            />
          </BoxInput>

          <BoxInput>
            <Input
              label="Descrição"
              placeholder="Informe a Descrição"
              keyboardType="numeric"
              name="description"
            />
          </BoxInput>
        </Form>

        <BoxButton>
          <Button title="Enviar" />
        </BoxButton>
      </ContextForm.Provider>
    </Container>
  );
}

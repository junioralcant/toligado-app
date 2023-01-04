import { KeyboardAvoidingView, TextInputProps } from 'react-native';
import { BoxInput, InputText, Label } from './styles';

type Props = TextInputProps & {
  isFocused: boolean;
  label: string;
};

export function Input({ isFocused, label, ...rest }: Props) {
  return (
    <>
      <KeyboardAvoidingView behavior="padding">
        <BoxInput>
          <Label>{label}</Label>
          <InputText {...rest} isFocused={isFocused} />
        </BoxInput>
      </KeyboardAvoidingView>
    </>
  );
}

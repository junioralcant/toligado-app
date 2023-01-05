import { useState } from 'react';
import { KeyboardAvoidingView, TextInputProps } from 'react-native';
import { BoxInput, InputText, Label } from './styles';

type Props = TextInputProps & {
  label: string;
};

export function Input({ label, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <>
      <KeyboardAvoidingView behavior="padding">
        <BoxInput>
          <Label>{label}</Label>
          <InputText
            {...rest}
            isFocused={isFocused}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </BoxInput>
      </KeyboardAvoidingView>
    </>
  );
}

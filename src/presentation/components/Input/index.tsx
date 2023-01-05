import { ContextForm } from '@presentation/context/form';
import { useContext, useState } from 'react';
import {
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputProps,
} from 'react-native';
import { BoxInput, InputText, Label } from './styles';

type Props = TextInputProps & {
  label: string;
  name: string;
};

export function Input({ label, name, ...rest }: Props) {
  const { state, setState } = useContext(ContextForm);
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus(): void {
    setIsFocused(true);
  }

  function handleInputBlur(): void {
    setIsFocused(false);
  }

  function handleChange(e: any): void {
    setState({
      ...state,
      [name]: e,
    });
  }

  return (
    <>
      <KeyboardAvoidingView behavior="padding">
        <BoxInput>
          <Label>{label}</Label>
          <InputText
            {...rest}
            testID={name}
            isFocused={isFocused}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChangeText={handleChange}
          />
        </BoxInput>
      </KeyboardAvoidingView>
    </>
  );
}

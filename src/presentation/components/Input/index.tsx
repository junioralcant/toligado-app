import { useContext, useState } from 'react';
import { KeyboardAvoidingView, TextInputProps } from 'react-native';
import { ContextForm } from '@presentation/context/form';
import { maskCPF, MaskInputType } from '@presentation/utils/input-masks';
import { BoxInput, InputText, Label } from './styles';

type Props = TextInputProps & {
  label: string;
  name: string;
  maskType?: MaskInputType;
};

export function Input({ label, name, maskType, ...rest }: Props) {
  const { state, setState } = useContext(ContextForm);
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus(): void {
    setIsFocused(true);
  }

  function handleInputBlur(): void {
    setIsFocused(false);
  }

  function handleChange(e: string): void {
    let value = e;

    if (maskType === MaskInputType.cpf) {
      value = maskCPF(e);
    }

    setState({
      ...state,
      [name]: value,
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
            value={state[name]}
            onChangeText={handleChange}
          />
        </BoxInput>
      </KeyboardAvoidingView>
    </>
  );
}

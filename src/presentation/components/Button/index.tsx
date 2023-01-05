import { useContext } from 'react';
import { BoxButton, TextButton } from './styles';
import { ContextForm } from '@presentation/context/form';
import { ButtonProps } from 'react-native';

type Props = ButtonProps & {
  title: string;
};

export function Button({ title }: Props) {
  const { state } = useContext(ContextForm);

  return (
    <BoxButton testID={title} disabled={state.errorMessage ? true : false}>
      <TextButton>{title}</TextButton>
    </BoxButton>
  );
}

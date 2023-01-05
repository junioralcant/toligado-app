import { useContext } from 'react';
import { BoxButton, TextButton } from './styles';
import { ContextForm } from '@presentation/context/form';

type Props = {
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

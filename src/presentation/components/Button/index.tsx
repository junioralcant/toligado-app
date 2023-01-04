import { BoxButton, TextButton } from './styles';

type Props = {
  title: string;
};

export function Button({ title }: Props) {
  return (
    <BoxButton disabled>
      <TextButton>{title}</TextButton>
    </BoxButton>
  );
}

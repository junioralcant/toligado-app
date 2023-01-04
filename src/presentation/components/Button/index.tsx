import { BoxButton, TextButton } from './styles';

type Props = {
  title: string;
};

export function Button({ title }: Props) {
  return (
    <BoxButton>
      <TextButton>{title}</TextButton>
    </BoxButton>
  );
}

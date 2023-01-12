import { Ionicons, AntDesign } from '@expo/vector-icons';
import theme from '@presentation/styles/theme';
import { Text } from 'react-native';
import { BoxButtons, Button, Buttons, ButtonText, Container } from './styles';

export function Home() {
  return (
    <Container>
      <BoxButtons>
        <Buttons>
          <Button>
            <Text>
              <Ionicons
                name="camera-outline"
                size={34}
                color={theme.colors.text}
              />
            </Text>
            <ButtonText>REGISTAR PERIGO</ButtonText>
          </Button>
          <Button>
            <Ionicons
              name="warning-outline"
              size={34}
              color={theme.colors.text}
            />
            <ButtonText>PERIGO REGISTRADO</ButtonText>
          </Button>
        </Buttons>

        <Buttons>
          <Button>
            <Ionicons
              name="happy-outline"
              size={34}
              color={theme.colors.text}
            />
            <ButtonText>SOBRE O APP</ButtonText>
          </Button>
          <Button>
            <Ionicons
              name="calendar-outline"
              size={34}
              color={theme.colors.text}
            />
            <ButtonText>Nº DA SORTE</ButtonText>
          </Button>
        </Buttons>
      </BoxButtons>
    </Container>
  );
}

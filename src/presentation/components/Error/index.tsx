import { ContextForm } from '@presentation/context/form';
import { useContext } from 'react';
import { Text, View } from 'react-native';

export function Error() {
  const { state } = useContext(ContextForm);

  return (
    <View>
      {state.errorResponse && <Text testID="error">{state.errorResponse}</Text>}
    </View>
  );
}

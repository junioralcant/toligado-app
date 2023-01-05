import theme from '@presentation/styles/theme';
import { ActivityIndicator, View } from 'react-native';

export function Loading() {
  return (
    <View testID="loading">
      <ActivityIndicator color={theme.colors.background_primary} />
    </View>
  );
}

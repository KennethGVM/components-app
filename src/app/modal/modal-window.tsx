import ThemedButton from '@/presentation/components/shared/ThemedButton';
import ThemedText from '@/presentation/components/shared/ThemedText';
import ThemedView from '@/presentation/components/shared/ThemedView';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView
      className="justify-center items-center flex-1"
      bgColor="#A52182"
    >
      <ThemedText>Modal</ThemedText>

      <ThemedButton
        className="my-4"
        onPress={() => router.push('/modal/modal-window-2')}
      >
        Otro modal
      </ThemedButton>
      <ThemedButton onPress={() => router.dismiss()}>Cerrar</ThemedButton>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ThemedView>
  );
};

export default ModalScreen;

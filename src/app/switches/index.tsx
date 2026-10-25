import ThemedCard from '@/presentation/components/shared/ThemedCard';
import ThemedSwitch from '@/presentation/components/shared/ThemedSwitch';
import ThemedView from '@/presentation/components/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: true,
    isHappy: true,
  });

  return (
    <ThemedView margin className="mt-2">
      <ThemedCard>
        {/* <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={state.isActive ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setState({ ...state, isActive: value })}
          value={state.isActive}
        /> */}
        <ThemedSwitch
          text="Activo"
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className="mb-4"
        />
        <ThemedSwitch
          text="Hambriento"
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className="mb-4"
        />
        <ThemedSwitch
          text="Contento"
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className="mb-4"
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;

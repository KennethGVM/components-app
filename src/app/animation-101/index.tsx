import { useAnimation } from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/components/shared/ThemedButton';
import ThemedView from '@/presentation/components/shared/ThemedView';
import { Animated, Easing } from 'react-native';

const Animation101Screen = () => {
  const {
    animatedTop,
    animatedOpacity,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();
  return (
    <ThemedView margin className="flex-1 items-center justify-center">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      ></Animated.View>

      <ThemedButton
        className="my-5"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({ easing: Easing.bounce, duration: 700 });
        }}
      >
        FadeIn
      </ThemedButton>
      <ThemedButton className="my-5" onPress={() => fadeOut({})}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;

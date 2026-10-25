import { useState } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
  const [animatedOpacity] = useState(() => new Animated.Value(0));
  const [animatedTop] = useState(() => new Animated.Value(0));

  const fadeIn = ({
    duration = 300,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing,
    }).start(callback);
  };

  const fadeOut = ({
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing,
    }).start(callback);
  };

  const startMovingTopPosition = ({
    initalPosition = -100,
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    animatedTop.setValue(initalPosition);

    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      // easing: Easing.elastic(1),
      easing: easing,
    }).start(callback);
  };

  return {
    animatedTop,
    animatedOpacity,

    //Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};

import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

const CircularProgressBar = ({ progress, radius, strokeWidth, fillColor, unfilledColor }) => {
  const circumference = 2 * Math.PI * radius;
  const progressValue = (progress / 100) * circumference;

  return (
    <View>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={unfilledColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={fillColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progressValue}
          strokeLinecap="round"
          fill="transparent"
        />
      </Svg>
      <Text style={{ textAlign: 'center' }}>{progress}%</Text>
    </View>
  );
};

export default CircularProgressBar;

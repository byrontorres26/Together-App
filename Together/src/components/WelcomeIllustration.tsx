// src/components/WelcomeIllustration.tsx
import Svg, { Path, Circle, Text as SvgText } from 'react-native-svg';

type Props = { ink: string; soft: string; blue: string; red: string };

export function WelcomeIllustration({ ink, soft, blue, red }: Props) {
  return (
    <Svg width="100%" height={210} viewBox="0 0 334 210">
      <Path d="M44 168 C 110 40, 230 20, 290 52" fill="none"
        stroke={ink} strokeWidth={2} strokeDasharray="3 9" strokeLinecap="round" />
      <Circle cx={44} cy={168} r={9} fill={blue} />
      <Circle cx={290} cy={52} r={9} fill={red} />
      <Path d="M0 0 L26 8 L0 16 L5 8 Z" fill={ink}
        transform="translate(150 62) rotate(8)" />
      <SvgText x={44} y={198} textAnchor="middle" fontFamily="DMMono_400Regular"
        fontSize={12} letterSpacing={1.5} fill={soft}>TÚ</SvgText>
      <SvgText x={290} y={34} textAnchor="middle" fontFamily="DMMono_400Regular"
        fontSize={12} letterSpacing={1.5} fill={soft}>TU PAREJA</SvgText>
    </Svg>
  );
}
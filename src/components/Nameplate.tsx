import { Fragment, FC } from 'react';
import { Color, Vector3 } from 'three';
import { Text } from '@react-three/drei';


type TNameplateProps = {
  position: Vector3;
  width?: number;
  height?: number;
  color?: Color;
  title?: string;
  artist?: string;
}

export const Nameplate: FC<TNameplateProps> = (props) => {

  const { position, width = 1.25, height = 0.5, title, color = 0xFAEBD7 } = props;

  return <Fragment>
    <mesh position={position}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial color={color} />
      <Text
        position-z={0}
        scale={[0.2, 0.2, 0.2]}
        fontSize={0.8}
        color='black'
        anchorX='center'
        anchorY='middle'
        font='https://fonts.gstatic.com/s/philosopher/v9/vEFV2_5QCwIS4_Dhez5jcWBuT0s.woff'
      >
        {title}
      </Text>
    </mesh>
  </Fragment>
};
import { SpotLight } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { Fragment, FC } from "react";
import { TextureLoader } from "three";
import { TArtItemProps } from "../types";

export const ArtItem: FC<TArtItemProps> = (props) => {

  const { path, position } = props;
  const viewport = useThree((state) => state.viewport);
  const { height: viewHeight } = viewport;

  const map = useLoader(TextureLoader, path);

  return <Fragment>
    <SpotLight
      position={[position[0] - 2.5, 2.5, 1]}
      penumbra={1}
      angle={0.5}
      attenuation={1}
      anglePower={5}
      intensity={1}
      distance={10}
      castShadow
      color={0xffffff}
    />
    <mesh
      castShadow
      position={[position[0], position[1], 0]}
    >
      <boxGeometry
        attach="geometry"
        args={[3, viewHeight / 2, 0.05]}
      />
      <meshLambertMaterial
        attach="material"
        map={map}
      />
    </mesh>
  </Fragment>
};
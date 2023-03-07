import { useThree } from "@react-three/fiber";
import { Html, Scroll, ScrollControls } from '@react-three/drei';
import { FC, Fragment, Suspense, useMemo } from "react";
import { TGalleryWallProps } from "../types";
import { ArtItem } from "./ArtItem";
import { Nameplate } from "./Nameplate";
import { Vector3 } from "three";

export const GalleryWall: FC<TGalleryWallProps> = (props) => {

  const { backgroundColor, artList, gap } = props;

  const imageWidth = 5;

  const galleryLength = useMemo(() => {
    return (gap + imageWidth) * (artList.length + 1);
  }, [artList, gap]);

  const viewport = useThree((state) => state.viewport);
  const { width: viewWidth, height: viewHeight } = viewport;

  return (
    <Fragment>
      {/* background wall */}
      <mesh
        position={[0, 0, -0.08]}
        receiveShadow
      >
        <planeGeometry args={[galleryLength / 2, viewHeight * 3]} />
        <meshStandardMaterial color={backgroundColor} />
      </mesh>

      <Suspense
        fallback={
          <Html style={{
            fontSize: '4rem',
            whiteSpace: 'nowrap',
            color: 'white'
          }}
            center
          >
            Loading...
          </Html>
        }
      >
        <ScrollControls
          horizontal
          pages={galleryLength / viewWidth + 0.3}
          distance={1}
          damping={2}
        >
          <Scroll>
            {/* art display */}
            {
              artList.map((item, index) => {
                
                return (
                  <group key={index}>
                    <ArtItem
                      index={index}
                      key={item.title}
                      position={[(index) * (imageWidth + gap), 1]}
                      {...item}
                    />
                    <Nameplate
                      key={index}
                      position={new Vector3((index) * (imageWidth + gap), -1.5, 0.01)}
                      title={item.title}
                      artist={item.artist}
                    />
                  </group>
                )
              })
            }

            {/* light */}
            {/* <spotLight position={[10, 10, 20]} angle={0.05} penumbra={1} /> */}
            <ambientLight intensity={0.4} color={0xffffff} />
          </Scroll>
        </ScrollControls>
      </Suspense>
    </Fragment>
  );
}



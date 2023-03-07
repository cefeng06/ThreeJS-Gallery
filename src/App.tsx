import { Canvas } from '@react-three/fiber';
import { GalleryWall } from './components/GalleryWall'
import EXHIBITION_LIST from './config';

function App() {
  return (
    <div id="canvas-container">
      <Canvas 
        shadows
        flat
        linear
      >
        <GalleryWall 
          artList={EXHIBITION_LIST}
          backgroundColor={0x000000}
          gap={0.5}
        />
      </Canvas>
    </div>
  );
}

export default App;

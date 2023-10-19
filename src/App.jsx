import { Loader, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { Leaderboard } from "./components/Leaderboard";

function App() {
  return (
    <>
      <Loader />
      <Leaderboard />
      <Canvas
        shadows
        camera={{ position: [0, 30, 0], fov: 30, near: 2 }}
        dpr={[1, 1.5]} // optimization to avoid bad performances on mobile
      >
        <color attach="background" args={["#242424"]} />
        <SoftShadows size={42} />
        <Suspense>
          <Physics>
            <Experience />
          </Physics>
        </Suspense>
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={1} intensity={1.5} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;

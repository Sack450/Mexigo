import { Environment, useGLTF } from "@react-three/drei/native";
import { Canvas } from "@react-three/fiber/native";
import React, { Suspense } from "react";
import { View } from "react-native";

// La ruta que ya habíamos corregido
const modelAsset = require("../../assets/neco-arc.glb");

function Model() {
  const { scene } = useGLTF(modelAsset);

  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

export default function NecoAvatar() {
  return (
    <View style={{ height: 300, width: "100%" }}>
      <Canvas>
        {/* EL FIX ESTÁ AQUÍ: Cambiamos el <Text> por null */}
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Model />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </View>
  );
}

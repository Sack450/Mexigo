const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Le decimos a la app que acepte archivos de modelos 3D
config.resolver.assetExts.push("glb", "gltf", "obj", "mtl");

module.exports = config;

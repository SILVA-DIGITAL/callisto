const Lights = () => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight
      castShadow
      position={(10, 90, 0)}
      intensity={0}
      shadowMapWidth={1024}
      shadowMapHeight={1024}
      shadowCameraFar={50}
      shadowCameraLeft={-10}
      shadowCameraRight={10}
      shadowCameraTop={10}
      shadowCameraBottom={-10}
    />
    <pointLight position={[10, 50, 50]} intensity={1} />
  </>
)

export default Lights

const Ground: React.FC = () => {
  return (
    <mesh rotation-x={Math.PI * -0.5} receiveShadow>
      <planeBufferGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={"#8a3030"} />
      //'#458145'
    </mesh>
  );
};

export default Ground;
import { BaseEdge, getStraightPath } from '@xyflow/react';
 
export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  console.log(id)
 
  return (
    <>
      <BaseEdge id={id} path={edgePath} />
    </>
  );
}
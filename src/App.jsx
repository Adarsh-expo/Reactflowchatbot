



import React, { useCallback, useEffect, useMemo } from 'react';
import { ChatbotoptionsNode, Chatbottemplateoptions } from './components/Chatbotoptions';
import Optionclick from './components/Optionclick';
import Yesnoclickoptions from './components/Yesnoclickoption';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import 'remixicon/fonts/remixicon.css'
import CustomEdge from './components/Customedge'

const edgeTypes = {
  'custom-edge': CustomEdge,
};

export default function App() {
  

  const initialEdges = [];

  // Define initial nodes
  const initialNodes = [
    { id: '1', type: 'nodeoptions', position: { x: 0, y: 0 }, data: { label: '1'} },
    { id: '2', type: 'templateoptions', position: { x: 0, y: 400 }, data: { label: '2' } },
    { id: '3', type: 'optionclickoptions', position: { x: 900, y: 100 }, data: { label: '3' } },
    { id: '4', type: 'yesnooptions', position: { x: 600, y: 400 }, data: { label: '4' } },
    { id: '5', type: 'yesnooptions', position: { x: 1200, y: 400 }, data: { label: '5' } }
  ];


  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);


  const addnode = useCallback((value)=> {
    

    setNodes((prevNodes) => {
      const newnodeId = `${prevNodes.length + 1}`; 
    const positionnode = { x: Math.random() * 2000, y: Math.random() * 550 };

    const newnode = {
        id: "new_node-"+newnodeId,
        type: value, 
        position: positionnode,
        data: { label: `new-node-${newnodeId}` },
    };

    return [...prevNodes, newnode];});
  }, [nodes, setNodes]);

const deletenode=useCallback((id)=>{
  const newnodes=nodes.filter((ele)=>ele.id!==id)
  setNodes(newnodes)


},[nodes])

  const nodeTypes = useMemo(() => ({
    nodeoptions:  (props) => <ChatbotoptionsNode {...props} addnode={addnode} />,
    templateoptions: (props)=><Chatbottemplateoptions {...props} addnode={addnode}/>,
    optionclickoptions:(props)=><Optionclick {...props} deletenode={deletenode} />,
    yesnooptions:(props)=> <Yesnoclickoptions {...props} deletenode={deletenode} />
  }), []);


  
  // Define function to handle new connections between nodes
  const onConnect = useCallback(
    (connection) => {
      console.log("check")
      const edge = { ...connection, type: 'custom-edge' }; 
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges],
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

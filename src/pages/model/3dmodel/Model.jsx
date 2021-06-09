import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from '../../../assets/model/untitled.gltf';

const Model = () => {
	const gltf = useLoader(GLTFLoader, `${model}`);

	return (
		<primitive object={gltf.scene} scale={0.07} />
	);
};

export default Model;

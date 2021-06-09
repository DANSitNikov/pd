import React, {Suspense} from 'react';
import { Environment, Html, OrbitControls, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import hdr from '../hdr/boiler_room_1k.hdr';

function Loader() {
	const { progress } = useProgress();
	return <Html center>{progress} % loaded</Html>;
}

const CanvasModel = () => {
	const Model = React.lazy(() => import('../3dmodel/Model'));

	return (
		<Canvas>
      <Suspense fallback={<Loader />}>
				<Model />
        <OrbitControls />
        <Environment
					preset="sunset"
					background={false}
				/>
      </Suspense>
    </Canvas>
	)
};

export default CanvasModel;

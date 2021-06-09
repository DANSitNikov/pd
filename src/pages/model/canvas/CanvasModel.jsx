import React, {Suspense} from 'react';
import { Environment, Html, OrbitControls, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import sborka from '../../../assets/model/sborka.gltf';
import sharnir from '../../../assets/model/sharnir.gltf';
import priomnik from '../../../assets/model/priomnik.gltf';

function Loader() {
	const { progress } = useProgress();
	return <Html center>{progress} % loaded</Html>;
}

const CanvasModel = (props) => {
	const { activeModel } = props;
	const Model = React.lazy(() => import('../3dmodel/Model'));

	return (
		<>
			{
				1 === activeModel
				&& (
					<Canvas>
						<Suspense fallback={<Loader />}>
							<Model model={sborka}/>
							<OrbitControls />
							<Environment
								preset="sunset"
								background={false}
							/>
						</Suspense>
					</Canvas>
				)
			}
			{
				2 === activeModel
				&& (
					<Canvas>
						<Suspense fallback={<Loader />}>
							<Model model={sharnir}/>
							<OrbitControls />
							<Environment
								preset="sunset"
								background={false}
							/>
						</Suspense>
					</Canvas>
				)
			}
			{
				3 === activeModel
				&& (
					<Canvas>
						<Suspense fallback={<Loader />}>
							<Model model={priomnik}/>
							<OrbitControls />
							<Environment
								preset="sunset"
								background={false}
							/>
						</Suspense>
					</Canvas>
				)
			}
		</>
	)
};

export default CanvasModel;

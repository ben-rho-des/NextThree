import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components'
import * as THREE from 'three';
// import * as meshline from 'threejs-meshline';
import { Canvas, useFrame, useLoader, useThree, useUpdate } from 'react-three-fiber';

import CameraControls from './controls'
import { fragmentShader, vertexShader, pointVertexShader, pointFragmentShader } from './vertexShader';

// import { useSpring, animated } from '@react-spring/three'

const start = Date.now();

const LeBlob = ( props ) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    const shader = useRef()
    const pointShader = useRef()

    const {
        includePoints = false,
        rotateSpeed = 0.09,
        speed= 0.4,
        size= 0.5,
        decay= .20,
        displace= 0.40,
        complex= 0.45,
        waves= 13,
        eqcolor= 30.0,
        rcolor= 1,
        gcolor= 90,
        bcolor= 30,
    } = props;

    // const [eventStream, setEvent] = useState(props.event);
    const eventStream = props.event
  
    const options = 
    // useMemo(
    //     () => (
          {
            speed,
            size,
            pointscale: .0,
            decay,
            displace,
            complex,
            waves,
            eqcolor,
            rcolor,
            gcolor,
            bcolor,
            rotateSpeed
        }
    //     ),
    //     []
    // );

    const uniforms = useMemo(
      () => ({
          time: {
            type: "f",
            value: (options.speed / 1000) * (start)
          },
          pointscale: {
            type: "f",
            value: options.pointscale
          },
          decay: {
            type: "f",
            value: options.decay
          },
          size: {
            type: "f",
            value: options.size
          },
          displace: {
            type: "f",
            value: options.displace
          },
          complex: {
            type: "f",
            value: options.complex
          },
          waves: {
            type: "f",
            value: options.waves
          },
          eqcolor: {
            type: "f",
            value: options.eqcolor
          },
          rcolor: {
            type: "f",
            value: options.rcolor
          },
          gcolor: {
            type: "f",
            value: options.gcolor
          },
          bcolor: {
            type: "f",
            value: options.bcolor
          }
      }),
      []
    );

    const [active, setActive] = useState(false);

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        // mesh.current.rotation.x = mesh.current.rotation.y += options.rotateSpeed;
        shader.current.uniforms.time.value = (options.speed / 1000) * (Date.now() - start);
        if (includePoints) {
            pointShader.current.uniforms.time.value = (options.speed / 1000) * (Date.now() - start);
        }
        // if (active) {
        //   shader.current.uniforms.complex.value = 10;
        //   shader.current.uniforms.eqcolor.value = 2;
        // } else {
        //   shader.current.uniforms.complex.value = options.complex
        //   shader.current.uniforms.eqcolor.value = options.eqcolor
        // }

        // mesh.current.material.uniforms.waves.value = mesh.current.material.uniforms.waves.value + 0.01;
        // mesh.current.material.uniforms.bcolor.value = mesh.current.material.uniforms.bcolor.value + 0.01;
        // mesh.current.material.uniforms.eqcolor.value = mesh.current.material.uniforms.eqcolor.value + 0.01;
        // mesh.current.material.uniforms.complex.value = mesh.current.material.uniforms.complex.value + 0.01;
        // mesh.current.material.uniforms.decay.value = mesh.current.material.uniforms.decay.value + 0.01;
        
        // if (eventStream !== null) {
        //   const ev = eventStream.split("-");
        //   if (ev[2] === "ACTIVE") {
        //     if (ev[0] === "ROTATE") {
        //       const coord = ev[1].toLowerCase();
        //       mesh.current.rotation[coord] = mesh.current.rotation[coord] += options.rotateSpeed;
        //     }

        //     if (ev[0] === "SCALE") {
        //       console.log("SCALE !!!", mesh.current)
        //       const direction = ev[1].toLowerCase();
        //       const modifier = direction === "up" ? 0.01 : -0.01;
        //       const curScale = mesh.current.scale.x;

        //       const nextScale = curScale + modifier;

        //       const cappedNextScale = nextScale < 0.3 ? 0.3 : (nextScale > 1.8 ? 1.8 : nextScale);
              
        //       mesh.current.scale.x = cappedNextScale;
        //       mesh.current.scale.y = cappedNextScale;
        //       mesh.current.scale.z = cappedNextScale;
        //     }
        //   }
        // }
    })

    return (
    <group>
        {includePoints && (
            <points>
                <icosahedronBufferGeometry attach="geometry" args={[16, 6]} />
                <shaderMaterial ref={pointShader} attach="material" uniforms={uniforms} fragmentShader={pointFragmentShader} vertexShader={vertexShader} />
            </points>
        )}
        <mesh 
              // onClick={e => setActive(!active)}
              ref={mesh}
              {...props}
            >
            <icosahedronBufferGeometry  attach="geometry" args={[2, 6]} />
            <shaderMaterial ref={shader} attach="material" side={THREE.DoubleSide} uniforms={uniforms} fragmentShader={fragmentShader} vertexShader={vertexShader} />
        </mesh>
    </group>
    )
}

export const Blob = ({event}) => {
    const theme = useMemo(
        () => ({
            bgGradFrom: '#E0E5EC',
            bgGradTo: '#FFFFFF',
        }),
        []
    );

    function Camera(props) {
      const ref = useRef()
      const { size, setDefaultCamera } = useThree();
      
      // Make the camera known to the system
      useEffect(() => void setDefaultCamera(ref.current), [])
      // Update it every frame
      // useFrame(() => ref.current.updateMatrixWorld());

      return <perspectiveCamera ref={ref}
          fov="35"
          aspect={size.width / size.height}
          // radius={(size.width + size.height) / 4}
          near={1}
          far={1000} 
          // onUpdate={self => self.updateProjectionMatrix()}
          position={[0, 0, 26]} 
          {...props}
          />
    }

    return (
      <>
        <Canvas shadowMap>
            <Camera />
            <Suspense fallback={null}>
                {/* <LeBlob /> */}
                {/* <LeBlob
                    includePoints={false}
                    rotateSpeed={0.09}

                    size={0.35}
                    rcolor={10}
                    gcolor={20}
                    bcolor={60}
                    /> */}
                    {/* <LeBlob
                      includePoints={true}
                      // rotateSpeed={0.09}
                      size={0.31}
                      rcolor={.45}
                      gcolor={2}
                      bcolor={.8}
                      decay={.3}
                      complex={0.3}
                      displace={1}
                      waves={4}
                      eqcolor={3}
                      event={event}
                      /> */}
                      {/* fire : ncs*/}
                      {/* <LeBlob
                        includePoints={false}
                        // rotateSpeed={0.09}
                        size={0.3}
                        rcolor={30}
                        gcolor={32.21}
                        bcolor={3.3}
                        decay={.32}
                        complex={0.4}
                        displace={1.3}
                        waves={8}
                        eqcolor={12.1}

                        event={event}
                      /> */} 
                      {/* fire : ncs*/}
                      <LeBlob
                        includePoints={false}
                        // rotateSpeed={0.09}
                        size={0.3}
                        rcolor={30}
                        gcolor={32.21}
                        bcolor={3.3}
                        decay={.42}
                        complex={0.4}
                        displace={0.3}
                        waves={9}
                        eqcolor={12.1}

                        event={event}
                      />
                  {/* <LeBlob
                    includePoints={false}
                    // rotateSpeed={0.09}
                    size={0.35}
                    rcolor={10}
                    gcolor={20}
                    bcolor={60}
                    decay={4}
                    speed={0.1}
                    /> */}
            </Suspense>

            <CameraControls
                autoRotate
                enablePan={false}
                enableZoom={false}
                enableDamping
                dampingFactor={0.5}
                rotateSpeed={1}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </Canvas>
      </>
    );
}
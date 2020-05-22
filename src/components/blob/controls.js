import React, { useRef } from 'react'
import { useThree, useRender, extend, useFrame } from 'react-three-fiber'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })
const CameraControls = props => {
  const { gl, camera } = useThree()
  const ref = useRef()
  // useFrame(() => ref.current.update())
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
}

export default CameraControls
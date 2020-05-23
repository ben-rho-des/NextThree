import React, { useEffect, useRef } from 'react'
import { useThree, useRender, extend, useFrame } from 'react-three-fiber'


const Camera = props => {
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

export default Camera
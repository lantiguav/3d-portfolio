import { Html, useProgress } from '@react-three/drei'

const Loader = ({ prefix = '', marginLeft = 0 }) => {
  const { progress } = useProgress()
  return (
    <Html>
      <span className='canvas-load'></span>
      <p
        style={{
          fontSize: 16,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
          minWidth: 230,
          marginLeft: marginLeft
        }}>
        {prefix}{progress.toFixed(0)}%
      </p>
    </Html>
  )
}

export default Loader

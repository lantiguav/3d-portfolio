import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const Heading = ({
  heading,
  subheading,
  className = 'mb-4',
  variants = textVariant(),
}) => {
  return (
    <motion.div variants={variants} className={className}>
      <p className={styles.sectionSubText}>{subheading}</p>
      <h2 className={styles.sectionHeadText}>{heading}</h2>
    </motion.div>
  )
}

export default Heading

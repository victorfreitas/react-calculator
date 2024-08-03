import PropTypes from 'prop-types'

import styles from './style.module.css'

function Title({ text = 'Calculator' }) {
  return (
    <h1 className={styles.title} data-testid="title">
      {text}
    </h1>
  )
}

Title.propTypes = {
  text: PropTypes.string
}

export default Title

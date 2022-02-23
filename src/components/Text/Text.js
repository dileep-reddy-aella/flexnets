import React, {forwardRef} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Text = forwardRef(({
  fontSize,
  fontWeight,
  color,
  as,
  children
}, ref) => {

  const classes = {
    fontSize: `text-${fontSize}}`,
    fontWeight: `font-${fontWeight}`,
    color: `text-${color}`
  }

  const component = as
  return (
    <component 
      ref={ref}
      className={classNames(classes.fontSize, classes.fontWeight, classes.color)}
    >
      {children}
    </component>
  )
})

Text.defaultProps = {
  fontSize: 'base',
  fontWeight: 'medium',
  color: 'inherit',
  as: 'p'
}

Text.propTypes = {
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.node
}

export default Text

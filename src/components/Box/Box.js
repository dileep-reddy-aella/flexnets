import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const boxStyles = {
  color: `bg-${color}`,
  bordered: `border border-${border}`
}

const Box = React.forwardRef(({
  children,
  color,
  border,
  variant,
}) => {
  return (
    <div className={classNames(
      'box-border m-0 min-w-0',
      boxStyles[color],
      border && boxStyles[bordered],
      variant
    )}>
      {children}
    </div>
  )
})

Box.defaultProps = {
  variant: '',
  color: 'inherit',
  border: null
}

Box.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string
}

export default Box;

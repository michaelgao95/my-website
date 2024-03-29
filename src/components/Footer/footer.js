import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({footerClass}) => (
  <div className={`defaultFooter ${footerClass}`}>
  </div>
)
Footer.propTypes = {
  footerClass: PropTypes.string,
}
export default Footer

import PropTypes from 'prop-types'

export const Coordinate = (x,y) => ({
    xCor  : x,
    yCor  : y
})

Coordinate.propTypes = {
  xCor : PropTypes.number.isRequired,
  yCor : PropTypes.number.isRequired
}

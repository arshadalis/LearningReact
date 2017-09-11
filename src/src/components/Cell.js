import '../stylesheets/styles.css'
import PropTypes from 'prop-types'



export const Cell = ({index,x,y,rover}) => (
      <div id={index} className='cell' x={x} y={y}>
          ({x},{y})
            <div>
              {rover}            
            </div>
      </div>
)

Cell.propTypes = {
  index : PropTypes.string,
  x : PropTypes.number.isRequired,
  y : PropTypes.number.isRequired,
  rover : PropTypes.element
}

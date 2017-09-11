import {Direction}  from './Direction'
import PropTypes from 'prop-types'

export class Rover{
  constructor(x,y,facing,navigation){
    this.x=x;
    this.y=y;
    this.navigation=navigation;
    this.facing=facing;
    this.className='rover '+facing;
  }

  move = () => {
    const [currMove,...restMoves]=this.navigation
    if(!currMove) return this

    const {x,y,facing} = Direction[this.facing][currMove](this.x,this.y,this.facing)
    return new Rover(x,y,facing,restMoves)
  }

}

Rover.propTypes = {
  x : PropTypes.number.isRequired,
  y : PropTypes.number.isRequired,
  navigation : PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired
}

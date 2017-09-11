import {Cell} from './Cell'
import {Rover} from './Rover'
import {getRange} from '../Utils.js'
import RoverIcon from 'react-icons/lib/md/android'
import PropTypes from 'prop-types'

export const Plateau = ({rightMostCord,rover,startNavigation}) =>  (
    <div>
    <table className='plateu'>
      <tbody>
          { createPlateu(rightMostCord,rover) }
      </tbody>
    </table>
        {(rover.navigation.length===0)? <h1>Rover reached destination cell ({rover.x},{rover.y})</h1> :
            <h1>Rovers next moves : {rover.navigation}</h1> }

      <button onClick={startNavigation}>Start Navigation</button>
  </div>
  )


const createPlateu = ({xCor,yCor},rover) =>(
    getRange(yCor+1).reverse().map(currY =>
        <tr key={currY}>
            { getRange(xCor+1).map(currX => <td key={currX}>{ getCell(currX, currY,rover) }</td> ) }
        </tr>)
      )

const getCell = (x,y,rover) =>  (
  ( x===rover.x && y===rover.y) ? getCellWithRover(x,y,rover) :
    getEmptyCell(x,y)
  )

const getCellWithRover = (x,y,rover) => ( <Cell index={'' + x + y} x={x} y={y} rover={<RoverIcon className={rover.className}/>}/> )

const getEmptyCell = (x,y) => ( <Cell key={'' + x + y} x={x} y={y} /> )

Plateau.propTypes = {
  rightMostCord : PropTypes.object.isRequired,
  rover : PropTypes.instanceOf(Rover).isRequired,
  startNavigation : PropTypes.func.isRequired
}

// import { Component } from 'react'
// import { Rover } from './Rover'
//
// export class AddRoverForm extends Component {
//   constructor(props){
//     super(props)
//   }
//
//   addRover = (event) => {
//     event.preventDefault()
//     this.props.onAddRover({
//         x : parseInt(this.refs.posX.value),
//         y : parseInt(this.refs.posY.value),
//         facing : this.refs.facing.value,
//         navInput : this.refs.navigation.value
//     })
//   }
//
//   setPlateu = (event) => {
//     event.preventDefault()
//     this.props.onSetPlateu({
//         x : parseInt(this.refs.xCoordinate.value),
//         y : parseInt(this.refs.yCoordinate.value)
//     })
//   }
//
//   render = () => (
//     <div id='forms'>
//         <header className='header'>Set Plateau and Add Rover</header>
//         {this.renderSetPlateuForm()}
//         {this.renderAddRoverForm()}
//     </div>
//   )
//
//   renderSetPlateuForm = () => (
//     <form onSubmit={this.setPlateu} className='setPlateuForm' id='setPlateuForm'>
//       <label htmlFor='setPlateuForm' className='title'>Set Plateau</label>
//       <label htmlFor='xCoordinate' className='label'>X Coordinate</label>
//       <input id='xCoordinate' type='number' min="0" required defaultValue={5} ref='xCoordinate'/>
//
//       <label htmlFor='yCoordinate' className='label'>Y Coordinate</label>
//       <input id='yCoordinate' type='number' min="0" required defaultValue={5} ref='yCoordinate'/>
//
//       <input type='submit' value='Submit'/>
//       <input type='reset' value='Reset'/>
//
//     </form>
//   )
//
//   renderAddRoverForm = () => (
//     <form onSubmit={this.addRover} className='addRoverForm' id='addRoverForm'>
//       <label htmlFor='addRoverForm' className='title'>Add Rover</label>
//       <label htmlFor='posX' className='label'>X Coordinate</label>
//       <input id='posX' type='number' min="0" defaultValue={0} required ref='posX'/>
//
//       <label htmlFor='posY' className='label'>Y Coordinate</label>
//       <input id='posY' type='number' min="0" defaultValue={0} required ref='posY'/>
//
//       <label htmlFor='facing' className='label'>facing</label>
//       <input id='facing' type='text' pattern='[NSEW]' defaultValue='N' required ref='facing'/>
//
//       <label htmlFor='navigation' className='label'>Navigation Input</label>
//       <input id='navigation' type='text' pattern='[LRM]*' ref='navigation' defaultValue='M' required/>
//
//       <input type='submit' value='Submit'/>
//       <input type='reset' value='Reset'/>
//
//     </form>
//   )
//
// }

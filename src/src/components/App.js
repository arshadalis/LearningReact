import { Component }  from 'react'
import { Plateau } from './Plateau'
import { Rover }  from './Rover'
import { Coordinate } from './Coordinate'
import { RenderForms } from './RenderForms'
import '../stylesheets/styles.css'
import PropTypes from 'prop-types'



export class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      rightMostCord : props.rightMostCord,
      rover         : props.rover,
      showForms     : props.showForms,
      shouldNavigate: props.shouldNavigate
    }
  }

  getFormdata = ({formData}) => {
    const {plateau,rover} = formData
    const {location:{x},location:{y},facing,navigation} = rover

    this.setState({
      rightMostCord  : Coordinate(plateau.x,plateau.y),
      rover          : new Rover(x,y,facing,navigation),
      showForms      : false
    })
  }

    startNavigation = () => {
        this.setState( {shouldNavigate    :   true} )
  }

  shouldComponentUpdate = (nextProps,nextState) => {

        const {rightMostCord,rover} = nextState
        const { x, y } = rover
        const { xCor:plateuX,yCor:plateuY } = rightMostCord
        const isExceeding=this.exceedsPlateuBounderies(x,y,plateuX,plateuY)
        return !isExceeding
    }

    render = () => {

        return (
            <div className='app'>
                <Plateau rightMostCord={this.state.rightMostCord} rover={this.state.rover} startNavigation={this.startNavigation}/>
                {(this.state.showForms) ? <RenderForms onSubmit={this.getFormdata} /> : null}

            </div>
        )}

  componentDidUpdate = () => {

      if(this.state.shouldNavigate) {
          this.setState({
              rover : this.state.rover.move(),
              shouldNavigate    : !(this.state.rover.navigation.length===0)
          })
      }
  }

  exceedsPlateuBounderies = (x,y,plateuX,plateuY) => {
    if((x > plateuX || x < 0 || y > plateuY || y < 0)){
      alert('exceeding plateu bounderies.')
      return true;
    }
    else return false;
  }

  wait= (ms) => {
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
            end = new Date().getTime();
        }
  }

}

App.defaultProps ={
  rightMostCord : Coordinate(0,0),
  rover : new Rover(0,0,'North','M'),
  showForms : true,
  shouldNavigate : false
}

App.propTypes = {
  rightMostCord : PropTypes.object.isRequired,
  rover : PropTypes.instanceOf(Rover).isRequired,
  showForms : PropTypes.bool.isRequired,
  shouldNavigate : PropTypes.bool.isRequired
}

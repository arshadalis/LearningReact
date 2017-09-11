import Plateau from '../../src/components/Plateau'
import {App} from '../../components/App'
import {React} from 'react'
import renderer from "react-test-renderer"
import {Rover} from "../../src/components/Rover"
import App from "../../src/components/App"

describe('Plateu test',() => {

  it('it should test rendering plateu',()=>{
      const plateu=renderer.create(
          <Plateau rightMostCord={{xCor: 0, yCor: 0}} rover={new Rover(0, 0, 'North', 'M')} onNavigate={() => {}} />
      );
      const component=plateu.toJSON();
      expect(component).toMatchSnapshot();
  });

  it('it should test App component', ()=> {
     const app=renderer.create(
         <App rightMostCord={{xCor:0,yCor:0}} rover={new Rover(0, 0, 'North', 'M')}/>
     );
     const component=app.toJSON();
     expect(component).toMatchSnapShot();
  });


});

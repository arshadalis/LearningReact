import { matchExactString } from '../Utils.js'


export const formSchema = {
  title : 'Set Plateau and Rover',
  type  : 'object',
  properties  : {
    plateau : {
      title:  'Set Right most coordinates of Plateau',
      type  : 'object',
      required  : ["x","y"],
      properties  : {
        x : {type : 'integer',minimum : '0',default : 4},
        y : {type : 'integer',minimum : '0',default : 4}
      }
    },
    rover : {
      title : 'Add rover information',
      type  : 'object',
      required  : ["location","facing","navigation"],
      properties : {
        location : {
          type : 'object',
          required  : ["x","y"],
          properties : {
          x : {type : 'integer',minimum : '0',default : 0},
          y : {type : 'integer',minimum : '0',default : 0}
        }
      },
        facing : {type:'string', title:'Facing',enum:['North','East','South','West'],default : 'North'},
        navigation : {
          type:'string',
          title:'Navigation Input',
          description : 'Allowed inputs : MLR',
          default : 'M'
        }
      }
    }
  }
}

export const uiFormSchema={
  'ui:options':{
    inline : true
  },
  plateau : {
    x : {
      'ui:widget' : 'updown'
    },
    y : {
      'ui:widget' : 'updown'
    }
  },
  rover  : {
    location  : {
      x : {
        'ui:widget' : 'updown'
      },
      y : {
        'ui:widget' : 'updown'
      }
    },
    facing : {
      'ui:widget':'select'
    },
    navigation : {
      'ui:widget' : (props) => {
        return (
          <input type="text"
            value={props.value}
            required={props.required}
            onChange={(event) => {
                (matchExactString('[LRM]*',event.target.value) ? props.onChange(event.target.value) : event.target.value='' )
              }
            } />
        )
      }
    }
  }

}

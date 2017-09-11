import Form from 'react-jsonschema-form'
import { formSchema,uiFormSchema } from '../schema/FormSchema'


export const RenderForms = (props) => (
  <Form schema={formSchema} uiSchema={uiFormSchema} onSubmit={props.onSubmit}/>
)

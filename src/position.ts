import { Form } from "./form"
import { formType } from "./form"

export interface Position {
  role: string
  department?: string
  start?: Date
  stop?: Date
}

export interface PositionForm {
  form: Record<string, Form>
}
const defaultConfig: PositionForm = {
  form: {
    role: {
      label: "role",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "role",
    },
    department: {
      label: "department",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "department",
    },
    start: {
      label: "start",
      component: "DatePicker",
      type: formType.Primitive,

      rules: {
        required: true,
        date: true,
      },
      meta: "start",
    },
    stop: {
      label: "stop",
      component: "DatePicker",
      type: formType.Primitive,

      rules: {
        required: true,
        date: true,
      },
      meta: "stop",
    },
  },
}

export default defaultConfig

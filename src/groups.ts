import { Form } from "./form"
import { Vintage } from "./vintage"
import { FormType } from "./form"

export interface Groups {
  team?: boolean
  sab?: boolean
  board?: boolean
  fellows?: boolean
  sponsor?: boolean
  vintage?: Vintage[]
}

export interface GroupsForm {
  form: Record<string, Form>
}

const defaultConfig: GroupsForm = {
  form: {
    team: {
      label: "team",
      component: "BooleanCheckbox",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      meta: "team",
    },
    sab: {
      label: "sab",
      component: "BooleanCheckbox",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      meta: "sab",
    },
    board: {
      label: "board",
      component: "BooleanCheckbox",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      meta: "board",
    },
    fellows: {
      label: "fellows",
      component: "BooleanCheckbox",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      meta: "fellow",
    },
    sponsor: {
      label: "sponsor",
      component: "BooleanCheckbox",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      meta: "sponsor",
    },
    vintage: {
      label: "vintage",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      meta: "vintage",
    },
  },
}

export default defaultConfig

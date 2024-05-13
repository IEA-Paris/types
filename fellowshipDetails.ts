import { Form } from "./form";

export interface FellowshipDetails {
  type: string; //en groupe, durée courte ou longue, etc.
  fundingPeriod: string; // Dates et détails temporels
  profile: string; // profile, CV, disciplines, expérience, origine
  tasks: string; // obligations type conférences, publications, attendance -seminaire, bureau
  location: string; // texte court sur l’emplacement IEA avec lien vers page dédiée
  funding: string; // texte sur la bourse, minimal
  housing: string; // texte court sur logement avec lien page dédiée CIUP
  meals: string; // texte court repas, forfait, annulations…
  applicationMaterials: string; // liste des éléments à fournir
  selectionProcess: string; // Dates, arbitrages, etc.
  researchSupport: string; // cf les moyens de la recherche
}

interface FellowshipDetailsForm {
  form: Record<string, Form>;
}
const configDefault: FellowshipDetailsForm = {
  form: {
    type: {
      label: "type",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "type", // item type on schema.org
    },
    fundingPeriod: {
      label: "fundingPeriod",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "fundingPeriod", // item type on schema.org
    },
    profile: {
      label: "profile",
      component: "Checkbox",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "profile", // item type on schema.org
    },
    tasks: {
      label: "tasks",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "tasks", // item type on schema.org
    },
    location: {
      label: "location",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "location", // item type on schema.org
    },
    funding: {
      label: "funding",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "funding", // item type on schema.org
    },

    housing: {
      label: "housing",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "housing",
    },
    meals: {
      label: "meals",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "meals",
    },
    applicationMaterials: {
      label: "applicationMaterials",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "applicationMaterials",
    },
    selectionProcess: {
      label: "selectionProcess",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "selectionProcess",
    },
    researchSupport: {
      label: "researchSupport",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "researchSupport",
    },
  },
};

export default configDefault;

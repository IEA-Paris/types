import { Affiliation } from "./affiliations"
import { Image } from "./image"
import { Socials } from "./socials"
import { Position } from "./position"
import { Consent } from "./consent"
import { Groups } from "./groups"
import { Disciplines } from "./disciplines"
import { Video } from "./video"
import Model from "./model"
import { RelatedProject } from "./relatedProject"
import { RelatedEvent } from "./relatedEvents"
import { RelatedPublications } from "./relatedPublications"
import { RelatedNews } from "./relatedNews"

export interface People {
  firstname: string
  lastname: string
  affiliations?: [{ affiliation: Affiliation; positions: [Position] }]
  image?: Image
  socials?: Socials
  biography?: string
  consent: Consent
  groups: Groups
  lang: string
  disciplines?: Disciplines[]
  relatedProject?: RelatedProject[] | string[]
  relatedEvents?: RelatedEvent[] | string[]
  relatedPublications?: RelatedPublications[] | string[]
  relatedNews?: RelatedNews[] | string[]
  video?: Video[]
}

const defaultConfig: Model = {
  source: "gql",
  type: "", // 'directory' | 'file'
  path: "", // path to the folder where the content is stored
  list: {
    create: true, // allow to create new items
    perPage: {
      options: [9, 12, 16],
      default: 9,
    },
    filters: {
      categories: {
        type: "Select",
        rules: {},
        label: "category",
        items: [],
      },
      vintage: {
        type: "Select",
        rules: {},
        label: "vintage",
        items: [],
        visibility: {
          default: false, // same as hidden = true
          switchIf: [{ categories: "fellows" }], // array of conditions to switch the visibility, each condition will be assessed as a boolean
          disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
      },
      program: {
        type: "Select",
        rules: {},
        label: "program",
        items: [],
        visibility: {
          default: false, // same as hidden = true
          switchIf: [{ categories: "fellows" }], // array of conditions to switch the visibility, each condition will be assessed as a boolean
          disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
      },
      discipline: {
        type: "Select",
        rules: {},
        label: "discipline",
        items: [],
        visibility: {
          default: false, // same as hidden = true
          switchIf: [{ categories: "fellows" }], // array of conditions to switch the visibility, each condition will be assessed as a boolean
          disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
      },
      member: {
        type: "Select",
        rules: {},
        label: "member",
        items: [],
        visibility: {
          default: false, // same as hidden = true
          switchIf: [{ categories: "fellows" }], // array of conditions to switch the visibility, each condition will be assessed as a boolean
          disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
      },
    },
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: ["lastname", 1],
        default: true,
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: ["lastname", -1],
      },
    },
    views: {
      rows: {
        icon: "view-list",
        default: true,
      },
      dense: {
        name: "dense",
        icon: "land-rows-horizontal",
      },
      expanded: {
        name: "expanded",
        icon: "arrow-expand-vertical",
      },
    },
  },
  form: {
    firstname: {
      label: "firstname",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "firstname", // item type on schema.org
    },
    lastname: {
      label: "lastname",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "lastname", // item type on schema.org
    },
    affiliations: {
      label: "affiliations",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: false,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "affiliations",
    },
    image: {
      label: "image",
      component: "ObjectContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: false,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "image",
    },
    socials: {
      label: "socials",
      component: "ObjectContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "socials",
    },
    disciplines: {
      label: "disciplines",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "disciplines",
    },
    video: {
      label: "video",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "video",
    },
    biography: {
      label: "biography",
      component: "TextArea",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 2000,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "biography",
    },
    relatedProject: {
      label: "relatedProject",
      component: "DocumentPicker",
      type: 4, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 1,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "relatedProject",
    },
    relatedPublications: {
      label: "relatedPublications",
      component: "DocumentPicker",
      type: 4, //
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
      meta: "relatedPublications",
    },
    relatedEvents: {
      label: "relatedEvent",
      component: "DocumentPicker",
      type: 4, //
      default: "",
      description: "",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "event",
    },
    relatedNews: {
      label: "relatedNews",
      component: "DocumentPicker",
      type: 4, //
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
      meta: "relatedNews",
    },
    consent: {
      label: "consent",
      component: "ObjectContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "consent",
    },
    groups: {
      label: "groups",
      component: "ObjectContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "groups",
    },
    lang: {
      label: "lang",
      component: "ListAutoComplete",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "lang",
    },
  },
}

export default defaultConfig

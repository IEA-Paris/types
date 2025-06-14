import { Image } from "./image"
import { Affiliation } from "./affiliations"
import { File } from "./files"
import { Video } from "./video"
import Model from "./model"
import { Related } from "./related"
import { Tag } from "./tags"
import { mapEnum } from "../lib/utils"
import { eventCategories } from "./events"
import { Disciplines } from "./disciplines"
import { FormType } from "./form"
export interface Publications {
  name: string
  subtitle?: string
  description?: string
  summary?: string
  url?: URL
  affiliations?: Affiliation[]
  related?: Related[]
  gallery?: Image[]
  image?: Image
  video?: Video
  tags?: Tag[]
  disciplines?: Disciplines[]
  files?: File[]
  color?: string
  date?: Date
  type: publicationType
  eventCategories: eventCategories
}

export enum publicationType {
  ARTICLE,
  CONFERENCE_PAPER,
  BOOK,
  BOOK_CHAPTER,
  THESIS,
  REPORT,
  SOFTWARE,
  DATA,
  VIDEO,
  AUDIO,
  PODCAST,
}
const defaultConfig: Model = {
  source: "md",
  type: "", // 'directory' | 'file'
  path: "", // path to the folder where the content is stored
  list: {
    perPage: {
      options: [9, 12, 16],
      default: 9,
    },
    create: true, // allow to create new items
    filters: {
      affiliations: {
        type: "Select",
        items: [],
        multiple: true,
      },
      tags: {
        type: "Select",
        multiple: true,
      },
      disciplines: {
        type: "AutoComplete",
        items: [],
        multiple: true,
      },
      type: {
        type: "Select",
        items: mapEnum(publicationType),
        multiple: true,
      },
      eventCategories: {
        type: "Select",
        items: mapEnum(eventCategories),
        multiple: true,
      },
    },
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: ["name", 1],
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: ["name", -1],
      },
      dateasc: {
        // by date from most recent to oldest
        icon: "sort-calendar-descending",
        text: "by-date-most-recent-first",
        value: ["date", -1],
        default: true,
      },
      datedesc: {
        // by date from oldest to most recent
        icon: "sort-calendar-ascending",
        text: "by-date-oldest-first",
        value: ["date", 1],
      },
    },
    views: {
      rows: {
        icon: "view-list",
        default: true,
      },
      expanded: {
        name: "expanded",
        icon: "arrow-expand-vertical",
      },
    },
  },
  form: {
    name: {
      label: "name",
      component: "TextField",
      type: FormType.PRIMITIVE, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      i18n: true,
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "name", // item type on schema.org
    },
    subtitle: {
      label: "subtitle",
      component: "TextArea",
      type: FormType.PRIMITIVE, // 0 = primitive, 1 = object, 2 = array, 3 = template
      i18n: true,
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "subtitle", // item type on schema.org
    },
    description: {
      label: "description",
      component: "TextArea",
      type: FormType.PRIMITIVE, // 0 = primitive, 1 = object, 2 = array, 3 = template
      i18n: true,
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 2000,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "description", // item type on schema.org
    },
    summary: {
      label: "summary",
      component: "TextArea",
      type: FormType.PRIMITIVE, // 0 = primitive, 1 = object, 2 = array, 3 = template
      i18n: true,
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 2000,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "summary", // item type on schema.org
    },
    url: {
      label: "url",
      component: "TextField",
      type: FormType.PRIMITIVE, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      rules: {
        required: true,
        url: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "url", // item type on schema.org
    },
    affiliations: {
      label: "affiliations",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      meta: "affiliations",
    },
    eventCategories: {
      label: "eventCategories",
      component: "ListSelect",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "eventCategories",
    },
    type: {
      label: "type",
      component: "ListSelect",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "type",
    },
    related: {
      label: "related",
      component: "ObjectContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "related",
    },
    disciplines: {
      label: "disciplines",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "disciplines",
    },
    image: {
      label: "image",
      component: "ObjectContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "image",
    },
    gallery: {
      label: "gallery",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      meta: "gallery",
    },
    video: {
      label: "video",
      component: "ObjectContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      meta: "video",
    },
    tags: {
      label: "tags",
      component: "ListAutoComplete",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "tags",
    },
    files: {
      label: "files",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      meta: "files",
    },
    color: {
      label: "color",
      component: "TextColorPicker",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        color: true,
      },
      meta: "color",
    },
    date: {
      label: "date",
      component: "DatePicker",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "date",
    },
    featured: {
      label: "featured",
      component: "DatePicker",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "featured",
    },
  },
}
export default defaultConfig

import Model from "./model"
import { FormType } from "./form"

export interface Video {
  url: URL
  alt?: string
  caption?: string
  copyright?: string
  license?: string
  licenseUrl?: string
  backgroundColor?: string
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
      year: {
        type: "Select",
      },
    },
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: ["article_title", 1],
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: ["article_title", -1],
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
      tiles: {
        name: "tiles",
        icon: "view-quilt",
      },
      grid: {
        name: "grid",
        icon: "view-day",
      },
    },
  },
  form: {
    url: {
      type: FormType.PRIMITIVE,
      component: "TextField",
      label: "url",
      default: "",
      description: "The url where the image is fetched from",
      rules: {
        required: true,
        url: true,
        max: 2048,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "url", // item type on schema.org
    },
    alt: {
      label: "alt",
      type: FormType.PRIMITIVE,
      component: "TextField",
      default: "",
      description: "Displayed if the image cannot be loaded",
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "alt", // item type on schema.org
    },
    caption: {
      label: "caption",
      type: FormType.PRIMITIVE,
      component: "TextField",
      default: "",
      description: "",
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "caption", // item type on schema.org
    },
    copyright: {
      label: "copyright",
      type: FormType.PRIMITIVE,
      component: "TextField",
      default: "Free of rights",
      description: "Owner of the image copyright",
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "copyright", // item type on schema.org
    },
    licence: {
      label: "licence",
      type: FormType.PRIMITIVE,
      component: "TextField", // TODO change for an autocomplete
      default: null,
      description: "The licence of the video",
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "licence", // item type on schema.org
    },
    licenseUrl: {
      label: "licenseUrl",
      type: FormType.PRIMITIVE,
      component: "TextField", // TODO change for an autocomplete
      default: null,
      description: "The caption of the video",
      rules: {
        required: true,
        url: true,
      },
      visibility: {
        default: false, // "default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "licenseUrl", // item type on schema.org
    },
    backgroundColor: {
      label: "backgroundColor",
      type: FormType.PRIMITIVE,
      component: "TextColorPicker", // TODO change for an autocomplete
      default: null,
      description: "",
      rules: {
        required: true,
        color: true,
      },
      visibility: {
        default: false, // "default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "backgroundColor", // item type on schema.org
    },
  },
}

export default defaultConfig

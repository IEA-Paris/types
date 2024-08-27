import fs from "fs"
import path from "path"
import { ModuleType } from "./lib/generate"
import Model from "./src/model"
import { Sort, Views } from "./src/list"
import { Form } from "./src/form"
import defaultConfigAction from "./src/action"
import defaultConfigAffliation from "./src/affiliations"
import defautConfigApp from "./src/app"
import defaultConfigArticle from "./src/article"
import defaultConfigConsent, { ConsentForm } from "./src/consent"
import defaultConfigDisciplines from "./src/disciplines"
import defaultConfigDiscussants from "./src/discussants"
import defaultConfigEvents from "./src/events"
import defaultConfigRelatedPeople from "./src/relatedPeople"
import defaultConfigEventSlot, { EventSlotForm } from "./src/eventSlot"
import defaultConfigFellow from "./src/fellow"
import defaultConfigFellowship from "./src/fellowship"
import defaultConfigFellowshipDetails, {
  FellowshipDetailsForm,
} from "./src/fellowshipDetails"
import defaultConfigFiles from "./src/files"
import defaultConfigGroup, { GroupsForm } from "./src/groups"
import defaultConfigImage from "./src/image"
import defaultConfigLocation, { LocationForm } from "./src/location"
import defaultConfigMailing from "./src/mailing"
import defaultConfigMember from "./src/member"
import defaultConfigNews from "./src/news"
import defaultConfigOrganizers from "./src/organizers"
import defaultConfigPartner from "./src/partner"
import defaultConfigPeople from "./src/people"
import defaultConfigPosition, { PositionForm } from "./src/position"
import defaultConfigProject from "./src/project"
import defaultConfigRelatedEvents from "./src/relatedEvents"
import defaultConfigRelatedNews from "./src/relatedNews"
import defaultConfigRelatedProject from "./src/relatedProject"
import defaultConfigSocials, { SocialsForm } from "./src/socials"
import defaultConfigSpeakers from "./src/speakers"
import defaultConfigSponsor from "./src/sponsor"
import defaultConfigTags from "./src/tags"
import defaultConfigVideo from "./src/video"
import defaultConfigVintage from "./src/vintage"

type ConfigValue =
  | Model
  | ConsentForm
  | EventSlotForm
  | FellowshipDetailsForm
  | GroupsForm
  | LocationForm
  | PositionForm
  | SocialsForm

const configData: Record<string, ConfigValue> = {
  action: defaultConfigAction,
  affiliations: defaultConfigAffliation,
  app: defautConfigApp,
  article: defaultConfigArticle,
  consent: defaultConfigConsent,
  disciplines: defaultConfigDisciplines,
  discussants: defaultConfigDiscussants,
  events: defaultConfigEvents,
  eventSlot: defaultConfigEventSlot,
  fellow: defaultConfigFellow,
  fellowship: defaultConfigFellowship,
  fellowshipDetails: defaultConfigFellowshipDetails,
  files: defaultConfigFiles,
  groups: defaultConfigGroup,
  image: defaultConfigImage,
  location: defaultConfigLocation,
  mailing: defaultConfigMailing,
  member: defaultConfigMember,
  news: defaultConfigNews,
  organizers: defaultConfigOrganizers,
  partner: defaultConfigPartner,
  people: defaultConfigPeople,
  position: defaultConfigPosition,
  project: defaultConfigProject,
  relatedEvents: defaultConfigRelatedEvents,
  relatedNews: defaultConfigRelatedNews,
  relatedProject: defaultConfigRelatedProject,
  socials: defaultConfigSocials,
  speakers: defaultConfigSpeakers,
  sponsor: defaultConfigSponsor,
  tags: defaultConfigTags,
  video: defaultConfigVideo,
  vintage: defaultConfigVintage,
  relatedPeople: defaultConfigRelatedPeople,
}

const distDir = path.resolve("./dist")

const getJsonFiles = (directory: string): string[] => {
  return fs
    .readdirSync(directory)
    .filter((file) => path.extname(file) === ".json")
    .map((file) => path.join(directory, file))
}

const jsonFiles = getJsonFiles(distDir)

const modulesState: Record<string, any> = {}

const readJsonFile = (filePath: string): any => {
  try {
    const data = fs.readFileSync(filePath, "utf8")
    return JSON.parse(data)
  } catch (err) {
    console.error(`Error reading file ${filePath}:`, err)
  }
}

jsonFiles.forEach((filePath) => {
  const content = readJsonFile(filePath)
  if (content) {
    const fileName = path.basename(filePath, ".json")
    modulesState[fileName] = content
  }
})

export { configData }
export type { Form, Sort, Views, ConfigValue, Model, ModuleType }
export { modulesState }

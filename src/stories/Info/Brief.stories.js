import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/theme";
import Brief, { Album } from "../../components/Info/Brief";
import BlankPage from "../BlankPage";

export const speciesList = [
  {
    ID: 1,
    CommonName: "Brumby",
    AcademicalName: "Equus caballus",
    Category: "Animal",
    ImageURL:
      "https://firebasestorage.googleapis.com/v0/b/invasiveanimal-g4.appspot.com/o/brumby.jpg?alt=media&token=8cd50259-ac4d-47cb-9d38-5913ce5af757",
    BriefIntroduction:
      "The feral horse, Equus caballus, is morphologically similar to the domestic horse, standing an average of 1 - 1.6 m high at the shoulder and weighing 350 - 450 kg. General appearance is variable, including coat colour that ranges from black, brown, tan and white to white with patches of orange or brown. Coat hairs are short and fine, tail is relatively short and there is hair present on the forehead (forelock) and along the neck (mane). The average lifespan of E. caballus is 25 - 30 years. (Csurhes et al. 2009)",
    Distribution:
      "Due to the domestication of Equus caballus, and its widespread distribution following domestication, the natural geographic range is typically considered the distribution in the Late Glacial period, 9,500-15,000 years ago. During this time, horses were widespread. Wild horse populations existed in the northern tip of Africa adjacent to the Tyrrhenian and Mediterranean Seas, across Europe excluding the most northern regions where the Scandinavian countries currently exist, and as far east in the Palearctic region as China and Mongolia. They extended throughout the northern Palearctic, across Beringia into the Yukon, and as far south in North America as Mexico, as far east as the Mississippi River, and as far west as the Pacific Ocean coastline. It is believed that the wild horses in North America went extinct 8,000 to 10,000 years ago. Domestic horses were then introduced into North America upon European colonization.(Bennett and Hoffmann, 1999)",
    Habitat:
      "Horses are adaptable and occupy a wide variety of habitats under domestication. Preferred habitats are cool, temperate grasslands, steppes, and savannahs, but they also occupy semi-deserts, swamps, marshes, and woodlands.(Bennett and Hoffmann, 1999)",
    PhysicalDescription:
      "Horses are ungulates with an unguligrade foot posture, single-digit oval-shaped hooves, long tails, short hair, long slender legs, muscular and deep torso build, long thick necks, and large elongated heads. The mane is a region of coarse hairs, which extends along the dorsal side of the neck in both domestic and wild species. However, wild horses have a mane with short hairs that remain upright while domestic horses have longer mane hairs that do not remain upright. A mid-dorsal stripe, a dark stripe that extends from the mane to the tail, is sometimes present, especially in wild types. The teeth are specialized for grazing, with hypsodont cheekteeth. The dental formula is 3/3, 0-1/0-1, 3-4/3-4, and 3/3. Newborn horses have curly hairs and a finer mane than adults before molting and growing their winter coat. Winter coats start developing in September and October, are fully grown by December. They start shedding in the summer over a period of 56 days for adults or 75 days for newborns. Winter coats are typically thicker and the top of the tail usually develops a region of short hairs, forming a tuft. (Bennett and Hoffmann, 1999; Hansen, 1976)/nDomestication of horses has led to wide variation in the characteristics of breeds of horses. Coats vary in color, from white to black and including reds, browns, and yellows, as well as a wide variety of patterns, such as spots and pinto patterns. Size can vary depending on the breed and its intended use, but can range from 227 to 900 kg in mass and 0.9 to 1.7 meters in height, with potential outliers. Leg length, head length, body-build, fur color, metabolism, etc, varies across breeds of domestic horses. Despite the great variation in physical features within horses, they can generally be distinguished from other equids, by having longer manes and tails and generally a lack of zebra-type stripes. (Bennett and Hoffmann, 1999; Ensminger, 1969)",
    FoodHabits:
      "Primarily folivores by nature, horses primarily graze on true grasses. Domestic horses are often fed various amounts of grains, including oats, barley, corn, wheat, flax, soybeans, alfalfa, clover, Timothy hay, and Johnson grass. In addition to this diet, they may also be provided vitamin and mineral supplements. Feral horses eat a similar diet, including Russian thistle, dropseed grasses, mesquite, prairie junegrass, green sprangletop, and saltbush, and likely varies depending on location and season.(Bennett and Hoffmann, 1999; Ensminger, 1969; Hansen, 1976)",
    Impact:
      "Equus caballus is a grazer, feeding on approximately 2–2.5% of its bodyweight in plant matter per day. This grazing, along with trampling, contributes to decreases in native plant biodiversity, and can also fracture saturated turf. This can lead to increased opportunity for weed estabishment, soil erosion and water ponding. Soil compaction can be another issue. Changes in community composition related to feral horse populations have been observed for fish, birds, small mammels, reptiles, crabs and ants. Feral horses compete with livestock for resources, can damage fences and water bodies and can foul water sources through fecal contamination. They can also harbour exotic diseases, such as equine influenza, and may introduce and spread weeds via seed present in fecal matter, manes and tails. (Csurhes et al. 2009; Department of the Environment and Heritage 2004; Nimmo & Miller 2007).",
    Control:
      "Control methods include fertility control, capturing excess animals and offering adoption, shooting - both ground shooting and aerial via helicopters, trapping, and mustering. (Csurhes et al. 2009; Department of the Environment and Heritage, Australia 2004; Nimmo & Miller 2007)."
  },
  {
    ID: 2,
    CommonName: "Cane Toad",
    AcademicalName: "Rhinella marina",
    Category: "Animal",
    ImageURL:
      "https://firebasestorage.googleapis.com/v0/b/invasiveanimal-g4.appspot.com/o/cane_toad.jpg?alt=media&token=5e874125-6a4e-4e42-ba0d-f9a0512c0788",
    BriefIntroduction:
      "Females of this large bodied species can attain snout-vent lengths of over 225 mm, though most adults range from 85 to 150 mm. Adult males are yellowish-brown in color, with the yellow being most pronounced along the sides and the throat. Females and immature males have irregular brown blotches on their dorsal surface. The skin of both sexes is covered by irregularly scattered warts. In sexually active males these warts bear horny spicules. The parotoids are relatively large and often triangular and swollen in appearance. Cranial ridges are well developed. The tympanum is distinct, and the interorbital is concave. The webbing is poorly developed. The nuptial pads in the males are dark on the first 3 fingers",
    Distribution:
      "The natural range of Rhinella marina is from the Rio Grande Valley of Texas south to the Central Amazon and southeastern Peru. This toad has been introduced into the Caribbean Islands, South Florida (Key West and Stock islands, Tampa Bay, Hillsborough, Dade and Broward counties), the Hawaiian islands, and Australia's east coast (East Queensland and Coastal New South Wales). Rhinella marina has been called one of the 100 worst invasive species worldwide by the Invasive CommonName Specialist Group.(Aguirre and Poss, 1999; Cameron, 2002; Invasive CommonName Specialist Group, 2005)",
    Habitat:
      "Rhinella marina is a tropical species that prefers forested areas with semi-permanent water nearby (Cogger 1983).",
    PhysicalDescription:
      "Rhinella marina has a grey olive brown dorsal skin with many warts ending in dark brown caps. The ventral skin tends to be a whitish yellow with dark brown speckles or mottles and is granular. Rhinella marina possesses huge paratoid glands stretching from the anterior side of the tympanum to halfway down the back. A high bony ridge meets at the snout between the nostrils. Rhinella marina, like other nocturnal species, has horizontal pupils. Rhinella marina can reach a maximum length of 238 millimeters, although generally is approximately 150 to 175 millimeters. (Cogger, 1983)",
    FoodHabits:
      "Rhinella marina forages primarily nocturnally in mature forests and roadways. It feeds on ants, beetles, and earwigs in southern Florida, but has been found with dragonflies, grasshoppers, truebugs, crustaceans, gastropods, plant matter and even dog and cat food in their stomachs (Krakauer 1968).",
    Impact:
      "This toad is considered the most widely-introduced amphibian species in the world. People have tried to use it to control insects such as the greybacked cane beetle, Lepidoderma albohirtum which threatened sugar cane production. However, there is no evidence that it has controlled any pest in Australia and it is now considered a pest species itself in its introduced range of Australia and on Pacific and Caribbean Islands. It preys on and outcompetes native amphibians and also causes predator declines, since these predators have no natural immunity to the bufotoxin it secretes. (Bureau of Rural Sciences 1998, Aguirre and Poss 1999).",
    Control:
      "Preventative measures: The main controls on the spread of cane toads in southern Australia are quarantine checks and public awareness and response. One publicity campaign on the north coast of New South Wales resulted in 100 people collecting more than 900 cane toads./nPhysical: Cane toads can be excluded from garden ponds and dams by a 50cm high barrier, such as a thick hedge or a wire mesh fence. Toads may be killed humanely by putting them inside a plastic bag or container and placing them in a freezer (Brandt and Mazzotti, 1990)./n/nBiological: In 1994, the CSIRO Division of Wildlife and Ecology (Australia) was assessing the pathogenicity and specificity of viruses against cane toads. Scientists at the CSIRO Animal Health Laboratory in Victoria have been searching for biological controls of cane toads and in 2001 they began investigating gene technology as a mechanism of control. Environment Australia have launched a project for the development of a cane toad biological control. The aim is to develop a self disseminating viral vector to disrupt the development of the toad. Scientists at the University of Adelaide (Australia) have isolated a sex pheromone in a native Australian frog; they hope that a similar pheromone will be found in cane toads that could be used to disrupt the breeding cycle. These are long term solutions./nScientists at Sydney University have identified a parasitic worm that attacks the cane toads' lungs, stunting their growth and, in most cases, killing them. They believe the parasite has the potential to reduce toad populations dramatically."
  }
];

const labels = [
  { description: "react" },
  { description: "router" },
  { description: "toy" },
  { description: "ecmascript" }
];

storiesOf("Brief", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/species/brumby"]} initalIndex={1}>
      {story()}
    </MemoryRouter>
  ))
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add("Album", () => <Album species={speciesList[0]} />)
  .add("No species", () => (
    <BlankPage>
      <Brief species={[]} labels={labels} />
    </BlankPage>
  ))
  .add("One species", () => (
    <BlankPage>
      <Brief species={speciesList.slice(0,1)} />
    </BlankPage>
  ))
  .add("Two species", () => (
    <BlankPage>
      <Brief species={speciesList.slice(0,2)} />
    </BlankPage>
  ))

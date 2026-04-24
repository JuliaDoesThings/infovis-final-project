import { bin } from "d3-array";

/**********************/
/*       Colors       */
/**********************/
const slateGray = "#305252";
const gray = "#606464";
const white = "#faffff";
const womenColor = "#826C7F";
const menColor = "#FA7E61";

const asianColor = "#6be8a5";
const nativeColor = "#6bd3e8";
const whiteColor = "#886be8";
const blackColor = "#31347d";

/*************************************************/
/*  Make the bins generator accessible globally  */
/*************************************************/
export const binGenerator = bin()
  .value(d => d.total_speakers);


/***********************/
/*       Filters       */
/***********************/
export const filters = [
  { id: "all", label: "All", isActive: true },
  { id: "White", label: "White", isActive: false },
  { id: "Black", label: "Black", isActive: false },
  { id: "American Indian/Alaska Native/Hawaiian", label: "Native", isActive: false},
  { id: "Asian/Pacific Islander", label: "Asian", isActive: false}
];

export const tempFilters = [
  { id: "all", label: "All", isActive: true },
  { id: "Romance", label: "Romance", isActive: false },
  { id: "Sinitic", label: "Sinitic", isActive: false },
  { id: "Indo-Aryan", label: "Indo-Aryan", isActive: false},
  { id: "Semiticr", label: "Semitic", isActive: false}
];
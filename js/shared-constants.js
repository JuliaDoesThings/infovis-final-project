import { bin } from "d3-array";
import { treemap, treemapResquarify } from "d3-hierarchy";

///numbers
export const width = 850;
export const height = 600;


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

export const treemapLayoutGenerator = treemap()
    .size(([width, height]))
    .tile(treemapResquarify)
    .paddingInner(1)
    .paddingOuter(1)
    .round(true);


/***********************/
/*       Filters       */
/***********************/
export const filters = [
  { id: "all", label: "All", isActive: true },
  { id: "White", label: "White", isActive: false },
  { id: "Black", label: "Black", isActive: false },
  { id: "American Indian_Alaska Native/Hawaiian", label: "Native", isActive: false},
  { id: "Asian_Pacific Islander", label: "Asian", isActive: false}
];

export const tempFilters = [
  { id: "All", label: "All", isActive: true },
  { id: "Romance", label: "Romance", isActive: false },
  { id: "Sinitic", label: "Sinitic", isActive: false },
  { id: "Indo-Aryan", label: "Indo-Aryan", isActive: false},
  { id: "Semiticr", label: "Semitic", isActive: false}
];
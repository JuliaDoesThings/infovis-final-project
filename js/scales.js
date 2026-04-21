import { scaleRadial, scaleOrdinal, scaleLinear } from "d3-scale";
import { programs } from "./helper";


//colorScale
export const colorScale = scaleOrdinal()
  .domain(programs.map(h => h.program))
  .range(programs.map(h => h.color));
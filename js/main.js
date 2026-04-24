import { loadTestData, loadJSONData, loadRealData } from "./load-data.js";
import { CSVToHierarchy, JSONToHierarchy } from "./hierarchy.js";
import { drawCirclePack } from "./circle-pack.js";
import { drawTreemap } from "./treemap.js";
import { populateFilters } from "./interactions.js";

// Load and format the hierarchical data
const flatData = loadTestData();
const [root, descendants, leaves] = CSVToHierarchy(flatData);

const jsonData = loadJSONData();
const [jroot, jdescendants, jleaves] = JSONToHierarchy(jsonData)
//drawCirclePack (jroot, jdescendants, jleaves);
//drawTreemap(jroot, jleaves);

populateFilters(flatData);

// Draw the circle pack
drawCirclePack(root, descendants, leaves);

// Draw the treemap
drawTreemap(root, leaves);
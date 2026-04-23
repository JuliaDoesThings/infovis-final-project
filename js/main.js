import { loadData, loadJSONData } from "./load-data";
import { JSONToHierarchy, CSVToHierarchy } from "./hierarchy.js";

const flatData = loadData();
const [root, descendants, leaves] = CSVToHierarchy(flatData);




//const testData = loadJSONData();
//console.log("testing json", testData);
//const [root, descendants, leaves] = JSONToHierarchy(testData);



//console.log("test root", root);
//console.log("descendants", descendants)
//console.log("leaves", leaves)

/*

const flatData = loadCSVData();
const [root, descendants, leaves] = CSVToHierarchy(flatData);

const jsonData = loadJSONData();
const [root_j, descendants_j, leaves_j] = JSONToHierarchy(jsonData);
*/

/*
const preppedData = loadData();
console.log("loaded and formatted", preppedData);
const jsonData = JSON.stringify(preppedData)
const [root, descendants, leaves] = JSONToHierarchy(jsonData);
console.log("root", root, "descendants", descendants, "leaves", leaves)
*/
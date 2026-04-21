import { select } from "d3-selection";
import { tree, treemap } from "d3-hierarchy";

//todo: build treemap
//add interactivity - sort data, 
    //filter by school level

export const drawTreeMap = (root, leaves) => {

    const width = 1000;
    const height = 1000;

    //generator
    const treeGenerator = treemap()
        .size([height, width]);
    treeGenerator(root);

    //set up SVG



    //create the nodes


    //append a rect to each node, use layout generator



    //append labels

}
import { select } from "d3-selection";
import { tree, treemap } from "d3-hierarchy";
import { colorScale } from "./scales";

//todo: build treemap
//add interactivity - sort data, 
    //filter by school level

export const drawTreeMap = (root, leaves) => {

    const width = 800;
    const height = 600;

    //generator
    const treeGenerator = treemap()
        .size((height, width))
        .round(true);
    treeGenerator(root);

    //set up SVG
    const svg = select("#treeMap")
        .append("svg")
            .attr("viewbox", `0 0 ${width} ${height}`)

    //create the nodes
    const branchNodes = svg
        .selectAll(".leaf-node")
        .data(leaves)
        .join("g")
            .attr("class", "node-container")
            .attr("transform", d => `translate(${d.x0}, ${d.y0})`);

    console.log("leaves", leaves)
    //append a rect to each node, use layout generator   
    branchNodes 
        .append("rect")
         .attr("class", "treemap-node")
               .attr("x", 0)
               .attr("y", 0)
               .attr("width", d => d.x1 - d.x0)
               .attr("height", d => d.y1 - d.y0)
               .attr("rx", 3)
               .attr("ry", 3)
               .attr("fill", d => colorScale(d.parent.data.parent));

    //append labels

}
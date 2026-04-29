import { treemap, treemapResquarify, stratify } from "d3-hierarchy";
import { select, selectAll } from "d3-selection";
import { colorScale } from "./scales";
import { width, height, treemapLayoutGenerator, filters, tempFilters, binGenerator } from "./shared-constants";
import { scaleLinear } from "d3-scale";
import { easeLinear } from "d3-ease";
import { transition } from "d3-transition";
import { CSVToHierarchy } from "./hierarchy";
import { csvFormat } from "d3-dsv";

let all_root = null;
let all_leaves = null;

export const drawTreemap = (root, leaves) => {
  console.log("all_root", all_root);
  console.log("attempting draw");

  // Compute the layout
  treemapLayoutGenerator(root);
  //console.log("root", root)
  //console.log("generated", treemapLayoutGenerator(root))

  // Append svg container
  const svg = select(".tree-svg")
    //.append("svg")
    //  .attr("class", "tree-svg")
    //  .attr("viewBox", `0 0 ${width} ${height}`);

  // Append a group for each leaf
  const nodes = svg
    .selectAll(".node-container")
    .data(leaves)
    .join("g")
      .attr("class", "node-container")
      .attr("transform", d => `translate(${d.x0}, ${d.y0})`);

  // Append a rectangle for each leaf 
  nodes 
    .append("rect")
      .attr("class", "treemap-node")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", d => d.x1 - d.x0)
      .attr("height", d => d.y1 - d.y0)
      .attr("rx", 3)
      .attr("ry", 3)
      .attr("fill", d => colorScale(d.parent.data.parent));

  // Append a label for each leaf
  nodes 
    .append("text")
      .attr("class", d => `treemap-label treemap-label-${d.id.replaceAll(" ", "-").replaceAll("'", "")}`)
      .attr("x", 5)
      .attr("y", 15)
      .attr("fill", "white")
      .style("font-size", "12px")
      .style("font-weight", 500)
      .text(d => d.id);

  // Hide the labels that are larger than their parent
  selectAll(".treemap-label")
    .style("opacity", d => {
      const textElement = document.querySelector(`.treemap-label-${d.id.replaceAll(" ", "-").replaceAll("'", "")}`);
      const textWidth = textElement.getBBox().width;
      return ((d.y1 - d.y0) >= 25) && ((d.x1 - d.x0) >= textWidth + 10) ? 1 : 0;
    });

};

//create and populate filters
export const testingPopulateFilters = (data) => {

const filterTemplates = tempFilters;
const filterButtons = select("#filters");
const rects = binGenerator(data);
//const treeGenerator = treemapLayoutGenerator(data);

/*const treemapLayoutGenerator = treemap()
    .size(([width, height]))
    .tile(treemapResquarify)
    .paddingInner(1)
    .paddingOuter(1)
    .round(true);
*/
filterButtons                                     
    .selectAll(".filter")                                          
    .data(filterTemplates)                                                
    .join("button")                                             
    .attr("class", d => `filter ${d.isActive ? "active" : ""}`)
    .text(d => d.label)

    .on("click", (e, d) => {
      const svg = select(".tree-svg") //confirmed - all selected properly
      const leaves = svg.selectAll(".treemap-node")

      console.log("leaves", leaves);
      //svg.selectAll(".treemap-node")
      //  .attr("fill", "#6be8a5");
      console.log("DOM event", e);
      console.log("Attached datum", d);
      if (d.id == "All") 
      {
        console.log("All attempt");
        drawTreemap(all_root, all_leaves);
      }
      if (!d.isActive) {
        filters.forEach(filter => {                                          
            filter.isActive = d.id === filter.id ? true : false;                                                   
        });

        filterButtons.selectAll(".filter")
            .classed("active", filter => filter.id === d.id ? true : false); 
      
        const target = svg.select(".tree-svg")
        //console.log("target", target)
        target.remove();
        
        svg
        .selectAll(".filter")
          .classed("active", filter => filter.id === d.id ? true : false);

        updateTreemap(d.id, data); 
        
        }
        
     
      
    });                                    

};

const updateTreemap = (selectedFilter, data) => { //lol this doesnt match the book, which uses filterId isntead of selectedFilter
  console.log("selectedFilter", selectedFilter)

  //test hardcoding for a moment - this runs into the same issue. exercise in futility.
  /*
  if (selectedFilter == "Romance") {
    const romance_data = require("../data/romance_data.csv");
    console.log("romance_data", romance_data);

    // Format numbers
    romance_data.forEach(d => {
      d.total_speakers = +d.total_speakers;
      d.native_speakers = +d.native_speakers;
    });

    const [new_root, new_descendants, new_leaves] = CSVToHierarchy(romance_data);
    console.log("new_root", new_root);
    console.log("new_leaves", new_leaves);
    drawTreemap(new_root, new_leaves);
  }
  */
  if (selectedFilter == "All") 
  {
    drawTreemap(all_root, all_leaves)
  }
  else 
  {
    let newData = [];

    newData.push({
      "child": `${selectedFilter}`,
      "parent": "",
      "native_speakers": 0,
      "total_speakers" : 0
    })

    data.forEach(row => {
      if (row.parent == selectedFilter) 
        {
          newData.push(row)
        }
      //console.log(row.parent)
    });
    console.log("newData", newData);

    // Update the treemap here
    const updatedData = selectedFilter === "all" ? data                                                       
      : data.filter(respondent => respondent.parent                 
          === selectedFilter);                  //filter the data to make sure respodent gender matches selected filter            
    
    //convert the data into a proper csv file, then run! //Does Not fix, at best gets same error. effort in futility
    /*const csvFiltered = csvFormat(newData);
    console.log(csvFiltered);
    */

    const [new_root, new_descendants, new_leaves] = CSVToHierarchy(newData);
    console.log("new_root", new_root);
    console.log("new_leaves", new_leaves);
    drawTreemap(new_root, new_leaves)
      }
  
  //attempting here, break it down to find error
  /*
  const hierarchyGenerator = stratify()
    .id(d => d.child)
    .parentId(d => d.parent);
  const newRoot = hierarchyGenerator(newData)

  console.log("root", newRoot);
  const newLeaves = newRoot.leaves()
  console.log("newLeaves", newLeaves);
  */
  //console.log("updatedData", updatedData)
  /*const bins = binGenerator(updatedData);          
  const xScale = scaleLinear();
  const yScale = scaleLinear();
      
  //struggle to adapt to treemap
  const treemapRects = selectAll("#treemap rect")
  
  treemapRects                               
    .data(bins)                                           
    .transition()
      .duration(500)
      .attr("y", d => yScale(d.length))
      .attr("height", d => innerHeight - yScale(d.length));    
      */
};


export const populateTestFilters = (data) => {

  // Create the filters here
  const filters = select("#filters")

  filters                                 
    .selectAll(".filter")                                          
    .data(filters)                                                
    .join("button")                                              
      .attr("class", d => `filter ${d.isActive ? "active" : ""}`)   //if isActive, add class active                                      
      .text(d => d.label)  
      .on("click", (e, d) => {
        console.log("DOM event", e);
        //console.log("Attached datum", d);

        if (!d.isActive) {                              //if not isActive                       
          filters.forEach(filter => {                                          
            filter.isActive = d.id === filter.id ? true : false;                                                   
          });                                                                 
        
          filters.selectAll(".filter")                                              
            .classed("active", filter => filter.id === d.id ? true : false); //use classed to swap around active class                                 

          updateHistogram(d.id, data);                                    
        }
      });
}

export const setAll = (root, leaves) => 
{
  all_root = root;
  all_leaves = leaves;
}
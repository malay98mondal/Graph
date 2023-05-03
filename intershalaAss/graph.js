
function plotGraph() {
    let input = document.getElementById("input").value;
    let max = document.getElementById("max").value;
    
    if (input < max) {
      alert("Input value cannot be greater than Max value");
      return;
    }
  
    let graph = document.getElementById("graph");
    let percentage = ( input/max) * 100;
  
    // Bar Graph
  //  graph.innerHTML = `<div class="bar" style="height: ${percentage}%"></div>`;
   
  
    // Pie Chart
    
    graph.innerHTML = `
      <div class="pie">
        <div class="slice" style="transform: rotate(${percentage * 3.6}deg)"></div>
      </div>
    `;
  
    // Gradient Bar Graph
    // graph.innerHTML = `
    //   <div class="bar gradient" style="height: ${percentage}%"></div>
    // `;
  }
  
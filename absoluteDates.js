setTimeout(function(){
    let nodes = document.querySelectorAll("time");
    nodes.forEach(function(node){
      node.style.backgroundColor = 'red';
    });
  }, 1000);
function applyGitlabAbsoluteDates() {
    let nodes = document.querySelectorAll("time");
    nodes.forEach(function(node){
      var datetime = node.getAttribute('datetime');
      var date = new Date(datetime);
      var newDateString = date.toLocaleDateString("de-DE", {day: '2-digit', month: '2-digit', year: 'numeric', minute:'2-digit', hour: '2-digit'});
	  node.textContent = newDateString + " Uhr";
    });
}

setTimeout(function(){
    applyGitlabAbsoluteDates();
}, 1000);

// select the target node
var target = document.querySelector('.content-wrapper');
 
// create an observer instance
var observer = new MutationObserver(function(mutations) {
    var isChildList = false;
    mutations.forEach(function(mutation) {
        isChildList = isChildList || (mutation.type == "childList")
    });
    if (isChildList) {
        applyGitlabAbsoluteDates();
    }
});
 
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true, subtree: true}
 
// pass in the target node, as well as the observer options
observer.observe(target, config);

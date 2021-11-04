const root = figma.currentPage.selection['0'];
console.log("Root nha >>>>>", root);
function Main() {
    // gen layout
    // gen properties
}
function GenLayout(root) {
    root.children.forEach(child => {
        console.log(child);
        if (IsHasChildren(child)) {
            GenLayout(child);
        }
    });
}
function IsHasChildren(node) {
    if (node && node.children) {
        return true;
    }
    return false;
}
function GenProperties() {
}

import * as fs from "file-system";

const root = figma.currentPage.selection['0']

console.log("Root nha >>>>>", root);

function Main() {

  // gen layout

  // gen properties
  const PATH = "D:\Hoa"
  WriteToFile(PATH, "<div></div>");

}

function GenLayout(root: any) {
  root.children.forEach(child => {

    console.log(child);

    if (IsHasChildren(child)) {

      GenHTML(child)

      GenCSS(child)

      GenTS(child)

    }

  });
}
function IsHasChildren(node: any) {

  if (node && node.children) {
    return true;
  }
  return false;
}


function GenHTML(el) {
  //1. identify what kind of element
  IdentifyElement(el);
  //2. locate position
  LocatePosition(el);
  //3. write open html tag

  //4.write attribute

  //5. write content

  //6. write the close html


}

function GenCSS(el): string {
  //1. gen unique class (BEM - Block Element Modifiers). ex: login_button-blue
  //2. gen position atrributes (height, width, padding, margin, ...)
  //3. gen color (background-color, color)
  //4. gen custom style (font-size, bold, italic,)
  let result = "";
  return result;
}

function GenTS(el): string {
  //1.  identify type of element
  //2. gen default handle for each element
  let result = "";
  return result;
}

function IdentifyElement(el): string {
  //1. get template html for each type of element
  switch (el) {
    case IsDiv(el):
      return "div";
    case IsBtn(el):
      return "button"
    case IsDropdown(el):
      return "select";
    default:
      return "div";
  }
}

function LocatePosition(el) {
  throw new Error("Function not implemented.");
}

function IsDiv(el: string) {
  if (el === "div" || el === "main" || el === "section") return true;
  return false;
}

function IsBtn(el: any) {
  throw new Error("Function not implemented.");
}

function IsDropdown(el) {
  throw new Error("Function not implemented.");
}



const content = 'Some content!'

function WriteToFile(path: string, data: string) {
  fs.writeFile(path, data, { flag: 'a+' }, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })




  // fs.appendFile('file.log', content, err => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //   //done!
  // })


}


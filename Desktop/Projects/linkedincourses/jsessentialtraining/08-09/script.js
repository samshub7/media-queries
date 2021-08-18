/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

  const fan = {
    name: 'Sams fan',
    color: 'black',
    size: 'small',
    fanOff: false,
    image: ' "../../assets/images/frog.svg"',
    toggleFan: function(fanStatus) {
        this.fanOff= fanStatus;
    },
};

const createArticle = (fan) => {
  let newArticle = document.createElement("article");
  newArticle.innerHTML = content;
  newArticle.prepend(addFigure(fan));
  return newArticle;
};

 const addFigure = (dataObj) => {
  let newFigure = document.createElement("figure");
  let newImg = document.createElement("img");
  newImg.setAttribute("src", dataObj.image);
  newImg.setAttribute("alt", "");
  let newDesc = document.createElement("figcaption");
  newDesc.innerText = dataObj.description;
  newFigure.append(newImg, newDesc);
   newArticle.prepend(addFigure(fan));
  return newFigure;
};

const addFan = (currentFan) => {
 let newArticle = document.createElement('article');
 newArticle.innerHTML = content `
<h1 class="fan__name">${currentFan.name}</h1>
    <ul class="fan__features">
      <li class="fan__color">Color:<span> ${currentFan.color}l</span></li>
      <li class="fan__size">Fan size:<span> ${currentFan.size}</span></li>
      <li class="fan__status">Fan off:<span> ${currentFan.fanOff ? true : false}</span></li>
    </ul>  
 `;
 newArticle.prepend(addFigure(fan));
  return newArticle;
};

const main = document.querySelector('main');
 newArticle.prepend(addFigure(fan));
main.append(addFan(fan));
document.querySelector("main").append(createArticle(fan));
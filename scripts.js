/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the title array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


//creating array of object literals
const tvShows = [ 
{title: "Fresh Prince of Bel Air",
 imgURL:"https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg",
 bulletPoints:[
  "NBC",
  "Sitcom",
  "Release: September 10, 1990 – May 20, 1996",
 ],
 link:"https://en.wikipedia.org/wiki/The_Fresh_Prince_of_Bel-Air"

},

{title: "Curb Your Enthusiasm",
  imgURL:  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg",
  bulletPoints:[
  "HBO",
  "Sitcom",
  "Release: October 15, 2000 - April 7, 2024",
  ],
  link:"https://en.wikipedia.org/wiki/Curb_Your_Enthusiasm"
 
 },

 {title: "East Los High",
  imgURL:"https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg",
  bulletPoints:[
  "Hulu",
  "Teen Drama",
  "Release: June 3, 2013 – December 1, 2017",
   ],
  link:"https://en.wikipedia.org/wiki/East_Los_High",
 
 },

 {title: "9-1-1",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/9-1-1_intertitle.png/220px-9-1-1_intertitle.png",
  bulletPoints:[
  "FOX",
  "Procedural drama",
  "Release: January 3, 2018 – May 15, 2023",
   ],
  link:"https://en.wikipedia.org/wiki/9-1-1_(TV_series)",
 
 },

 {title: "Arrested Development",
  imgURL:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Arrested_Development.svg",
  bulletPoints:[
  "FOX",
  "Sitcom",
  "Release: November 2, 2003 – February 10, 2006",
   ],
  link:"https://en.wikipedia.org/wiki/Arrested_Development",
 
 },

 {title: "Auction Hunters",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/d/dc/AuctionHunterstitlecard.jpg",
  bulletPoints:[
  "FOX",
  "Sitcom",
  "Release: November 2, 2003 – February 10, 2006",
   ],
  link:"https://en.wikipedia.org/wiki/Auction_Hunters",
 
 },


 {title: "CHiPs",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/d/de/CHiPs_title_screen.jpg",
  bulletPoints:[
  "NBC",
  "Crime Drama",
  "Release: 	September 15, 1977 – May 1, 1983"
   ],
  link:"https://en.wikipedia.org/wiki/CHiPs",
 
 },

 {title: "Law & Order: LA",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/e/ea/Law_%26_Order_LA_Title_Card.jpg",
  bulletPoints:[
  "NBC",
  "Legal Drama",
  "Release: September 29, 2010 – July 11, 2011"
   ],
  link:"https://en.wikipedia.org/wiki/Law_%26_Order:_LA",
 
 },

 {title: "Top Chef",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/e/e0/Top_Chef_logo.png",
  bulletPoints:[
  "NBC",
  "Cooking show",
  "Release: March 8, 2006 – present"
   ],
  link:"https://en.wikipedia.org/wiki/Top_Chef",
 
 },

 {title: "NFL Rush Zone",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/1/1a/NFL_Rush_Zone_logo.jpg",
  bulletPoints:[
  "NFL Netowork",
  "Sports",
  "Release: September 6, 2010 – October 22, 2014"
   ],
  link:"https://en.wikipedia.org/wiki/NFL_Rush_Zone",
 
 },

 {title: "The Proud Family",
  imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/The_Proud_Family_logo.svg/1280px-The_Proud_Family_logo.svg.png",
  bulletPoints:[
  "Disney Channel",
  "Animated Sitcom",
  "Release: 	September 15, 2001 –August 19, 2005"
   ],
  link:"https://en.wikipedia.org/wiki/The_Proud_Family",
 
 },

 {title: "Robot Chicken",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/9/9b/Robot_Chicken_Logo.png",
  bulletPoints:[
  "Adult Swim",
  "Adult Animation",
  "Release:	February 20, 2005 – present"
   ],
  link:"https://en.wikipedia.org/wiki/The_Proud_Family",
 
 },

 {title: "The Ruff Ruffman Show",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/1/16/The_Ruff_Ruffman_Show_Logo.png",
  bulletPoints:[
  "PBSKids.org",
  "Children's television series",
  "Release:	September 28 –October 21, 2017"
   ],
  link:"https://en.wikipedia.org/wiki/The_Ruff_Ruffman_Show",
 
 },

 
 {title: "Regular Show",
  imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Regular_Show_Logo.svg/1280px-Regular_Show_Logo.svg.png",
  bulletPoints:[
  "Cartoon Network",
  "Action-adventure",
  "Release:	September 6, 2010 – January 16, 2017"
   ],
  link:"https://en.wikipedia.org/wiki/Regular_Show",
 
 },

 {title: "Rugrats",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/6/66/Rugrats_logo.png",
  bulletPoints:[
  "Nickelodeon",
  "Slice of Life",
  "Release:		August 11, 1991 – August 1, 2004"
   ],
  link:"https://en.wikipedia.org/wiki/Rugrats",
 
 },

 {title: "We Bare Bears",
  imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/We_Bare_Bears_wordmark.svg/1280px-We_Bare_Bears_wordmark.svg.png",
  bulletPoints:[
  "Cartoon Network",
  "Slice of Life",
  "Release:	July 27, 2015 – May 27, 2019"
   ],
  link:"https://en.wikipedia.org/wiki/We_Bare_Bears",
 
 },

 {title: "Wheel of Fortune",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Wheel_of_Fortune_logo_with_color_wheel.svg/1280px-Wheel_of_Fortune_logo_with_color_wheel.svg.png",
  bulletPoints:[
  "ABC",
  "Game show",
  "Release:	January 7, 2021 – present"
   ],
  link:"https://en.wikipedia.org/wiki/Wheel_of_Fortune_(American_game_show)",
 
 },


 {title: "Where's Waldo? (2019 TV series)",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/9/95/Wheres_Waldo_2019.jpg",
  bulletPoints:[
  "	Universal Kids/Peacock",
  "Children's adventure",
  "Release:	July 20, 2019 – July 3, 2021"
   ],
  link:"https://en.wikipedia.org/wiki/Where%27s_Waldo%3F_(2019_TV_series)",
 
 },

 {title: "Dr. Phil (talk show)",
  imgURL:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Dr._Phil.png",
  bulletPoints:[
  "CBS",
  "Talk Show",
  "Release:	September 16, 2002 –May 25, 2023"
   ],
  link:"https://en.wikipedia.org/wiki/Dr._Phil_(talk_show)",
 
 },

 {title: "American Idol",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/5/51/American_Idol_ABC_logo.png",
  bulletPoints:[
  "ABC",
  "Reality competition",
  "Release:		March 11, 2018 – present"
   ],
  link:"https://en.wikipedia.org/wiki/American_Idol",
 
 },


]


let cardsToShow = 3;
// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.scrollTop = cardContainer.scrollHeight;
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < cardsToShow && i < tvShows.length; i++) {
    let show = tvShows[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, show);
    cardContainer.appendChild(nextCard);
  }
}

                          
function editCardContent(card, show) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = show.title;

  const cardImage = card.querySelector("img");
  cardImage.src = show.imgURL;
  cardImage.alt = `${show.title} Poster`;

  const ul = card.querySelector("ul");
  ul.innerHTML = ""; // clear old list items

  // Add each bullet point as a <li>
  show.bulletPoints.forEach(point => {
    const li = document.createElement("li");
    li.textContent = point;
    ul.appendChild(li);
  });

  if (show.link) {
    const link = document.createElement("a");
    link.href = show.link;
    link.target = "_blank";
    link.textContent = "More info.";
    card.appendChild(link);
  }
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  //console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function showLess() {
  if (cardsToShow > 0) {
    cardsToShow -= 1; 
    showCards();     
  } 
}

function removeLastCard() {
  tvShows.splice(cardsToShow - 1,1);
  cardsToShow -= 1;
  showCards();
}

function showMoreCards() {

  // if (cardsToShow < 0) {
  //   cardsToShow = 3;
  // } else {

  //   cardsToShow += 3;
  // }

  // if (cardsToShow > tvShows.length) {
  //   cardsToShow = tvShows.length;
  // }

  //another method
  tvShows.slice(cardsToShow, cardsToShow+=cardsToShow);
  //console.log("Show More Button is pressed");
  showCards();
  
 
}

function alphabetize() {
    tvShows.sort((a, b) => a.title.localeCompare(b.title));
    showCards();

  }

//getting user inputs
function addShows() {
  const title = prompt("Enter the show title:");
  const img = prompt("Enter the image URL:");
  const bp1 = prompt("Enter bullet point 1:");
  const bp2 = prompt("Enter bullet point 2:");
  const bp3 = prompt("Enter bullet point 3:");
  const wikiLink = prompt("Enter the wikilink");

  const newShow = {
    title: title,
    imgURL: img,
    bulletPoints: [bp1, bp2, bp3],
    link: wikiLink
  };

  tvShows.push(newShow);
  showCards();
}

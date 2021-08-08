/*   STEP 1   */
export const leagueID = "728116681330794496"; // your league ID
export const leagueName = "[foot]BALL IS LIFE!"; // your league name
export const dues = 75; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper

/*   STEP 2   */
export const homepageText = `
  <p>Yes.. her name was Mindy..</p>
  <sub>[ regular studio lights go low, as red mood lighting rises ]</sub>
  <p>I met her at Wendy’s.. with the pick-up line, “Hey, Mindy. You’re name kinda rhymes with this place.” Immediately, she wanted to get it on in the bathroom. But I got too much class for that. So we climbed up on a roof.. I pulled down my underpants seductively.. I pointed to my peepee.. and I said, “Do stuff to this.”</p>
  <p>Then, a couple of security guards climbed up and told us to beat it. I decided to get coy. I said, “Why don’t you beat this?” That’s when one of them tasered my nads. I have to admit, I kinda leaned into it.</p>
  <p>When I felt that electric charge go through my private particulars, I thought, “Me likee.” Then, things got pretty awesome. It was me, Mindy, two security guards, in a romantic four-way on a roof of a Wendy’s, and, oh, it was a killer. It’s a week later, and I still smell like a single cheese with no onions.. and Aquavelva. Oh, yeah!</p>
  <sub>[ moans orgasmically and leans over to Lawrence and Paula, who cower away in fear ]</sub>
  <sub>[ regular studio lights return ]</sub>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#2-add-managers
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "James Watts",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Little Rock",
    "bio": "Lorem ipsum...",
    "photo": "/managers/james.jpg", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "mia", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/jay.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 3, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Jay Calhoun",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Little Rock",
    "bio": "Lorem ipsum...",
    "photo": "/managers/jay.png", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "dal", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 1, // manager array number within this array, or null to link back to all managers page
      image: "/managers/james.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 6898, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Sucking",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Noah Hallet",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Little Rock",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg", // done
    "fantasyStart": 2020, // when did the manager start playing fantasy football
    "favoriteTeam": "dal", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 2, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 2, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Jon Cook",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Nashville",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 2, // manager array number within this array, or null to link back to all managers page
      image: "/managers/jay.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Steven Smith",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Little Rock",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg", // done
    "fantasyStart": 2016, // when did the manager start playing fantasy football
    "favoriteTeam": "dal", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 2, // manager array number within this array, or null to link back to all managers page
      image: "/managers/jay.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "The Jacobs",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Little Rock",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 2, // manager array number within this array, or null to link back to all managers page
      image: "/managers/jay.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "John Coates",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Jonesboro",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg", // done
    "fantasyStart": 2021, // when did the manager start playing fantasy football
    "favoriteTeam": "dal", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 2, // manager array number within this array, or null to link back to all managers page
      image: "/managers/jay.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  // {
  //   "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //   "name": "Your Name",
  //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //   "location": "Brooklyn", // (optional)
  //   "bio": "Lorem ipsum...",
  //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //   "rival": {
  //     name: "Rival", // Can be anything (usually your rival's name)
  //     link: 6, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //   },
  //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //   "philosophy": "Your fantasy team's philosophy",
  //   "tradingScale": 10, // 1 - 10
  //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  // },
  // {
  //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //   "name": "Your Name",
  //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //   "location": "Brooklyn", // (optional)
  //   "bio": "Lorem ipsum...",
  //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //   "rival": {
  //     name: "Rival", // Can be anything (usually your rival's name)
  //     link: 6, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //   },
  //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //   "philosophy": "Your fantasy team's philosophy",
  //   "tradingScale": 10, // 1 - 10
  //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  // },
  // {
  //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  //   "name": "Your Name",
  //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  //   "location": "Brooklyn", // (optional)
  //   "bio": "Lorem ipsum...",
  //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
  //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //   "rival": {
  //     name: "Rival", // Can be anything (usually your rival's name)
  //     link: 6, // manager array number within this array, or null to link back to all managers page
  //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //   },
  //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //   "philosophy": "Your fantasy team's philosophy",
  //   "tradingScale": 10, // 1 - 10
  //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  // },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
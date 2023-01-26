//*Contar ovejas

for (let index = 0; index < 9; index++) {
  console.log("estoy intentando dormir contando ovejas");
  for (let j = 9; j < 10; j++) {}
}
console.log("Ya me he dormido");

//*Creando cartas de Characters.
const swCharacters = {
  info: {
    totalCharacters: 714,
    page: 1,
    limit: 10,
    next: "/characters?page=2&limit=10",
    prev: null,
  },
  characters: [
    {
      _id: "6373b9847d52cbf2f752d9a9",
      name: "2BR-NTB",
      description:
        "Loyal to Norath Kev, the droid 2BR-NTB has a distinct green-and-red paint scheme and sensors attuned to impending danger.",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/2br-ntb-main_081ce1aa.jpeg",
      type: "character",
      __v: 0,
      createdAt: "2022-11-15T16:08:36.375Z",
      updatedAt: "2022-11-15T16:08:36.375Z",
    },
    {
      _id: "6373b9847d52cbf2f752d9aa",
      name: "4-LOM",
      description:
        "A rusty droid with insectile features, 4-LOM was originally a protocol droid, but logic glitches allowed him to escape his programming and become a bounty hunter. That proved a perfect occupation for the cold, calculating mechanical.",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/curve_4lom_a7640432.jpeg",
      type: "character",
      __v: 0,
      createdAt: "2022-11-15T16:08:36.376Z",
      updatedAt: "2022-11-15T16:08:36.376Z",
    },
    {
      _id: "6373b9847d52cbf2f752d9ab",
      name: "4D-M1N",
      description:
        "When Captain Doza needs guests escorted into Doza Tower or messages relayed to citizens of the Colossus platform, he calls upon his loyal droid 4D-M1N to act as liaison, rarely leaving the gleaming corridors surrounding his private office and living quarters. ",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/resistance-db-4d-m1n-main-image_2a163064.jpeg",
      type: "character",
      __v: 0,
      createdAt: "2022-11-15T16:08:36.376Z",
      updatedAt: "2022-11-15T16:08:36.376Z",
    },
    {
      _id: "6373b9847d52cbf2f752d9ac",
      name: "5-L",
      description:
        "A mouse droid serving aboard a First Order Star Destroyer, 5-L is briefly reprogrammed to serve Tam Ryvora on a covert mission to return to her friends aboard the Colossus.",
      image: "https://lumiere-a.akamaihd.net/v1/images/5-l-main_c6302f4f.jpeg",
      type: "character",
      __v: 0,
      createdAt: "2022-11-15T16:08:36.376Z",
      updatedAt: "2022-11-15T16:08:36.376Z",
    },
    {
      _id: "6373b9847d52cbf2f752d9ad",
      name: "8D8",
      description:
        "A lanky smelter droid, during the time of the Empire 8D8 assisted EV-9D9 in terrorizing Jabba the Hutt's droid operatives. But after the fall of the Empire, under Boba Fett's employ 8D8 was reassigned to assist with strategy and diplomacy.",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/astromech-jabba-s-palace-main_cdc9691a.jpeg",
      type: "character",
      __v: 0,
      createdAt: "2022-11-15T16:08:36.376Z",
      updatedAt: "2022-11-15T16:08:36.376Z",
    },
    {
      _id: "6373b9847d52cbf2f752d9ae",
      name: "AAYLA SECURA",
      description:
        "With an athletic build, an exotic beauty, and blue skin, Aayla Secura stood out among the many faces of the Jedi ranks. A cunning warrior and Jedi Knight during the rise of the Clone Wars, Aayla fought alongside Clone Commander Bly on many exotic battlefields. Having mastered the emotional detachment necessary in the Jedi Order, she always tried to pass on what she had learned to others. Aayla was killed, along with many other Jedi Generals, when her troops turned on her in reaction to Supreme Chancellor Palpatine’s broadcast of Order 66.    ",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/databank_aaylasecura_01_169_39a65af2.jpeg",
      type: "character",
      __v: 0,
      createdAt: "2022-11-15T16:08:36.376Z",
      updatedAt: "2022-11-15T16:08:36.376Z",
    },
    {
      _id: "6373b9847d52cbf2f752d9af",
      name: "ADI GALLIA",
      description:
        "Jedi Master Adi Gallia was a member of the Order's High Council during the Clone Wars. She and the other members of that ruling body would convene in a temple high above the Coruscant landscape, deciding important matters of the Jedi. Stern and focused, she would remark upon the more outrageous tactics carried out by Anakin Skywalker or Obi-Wan Kenobi in the course of the war, but would rarely condemn their effective actions. Though not as brash as Anakin, Adi Gallia was known to be an aggressive warrior who had no problem bringing the fight to the enemy.",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/databank_adigallia_169_8b798f27.jpeg",
      type: "character",
      __v: 0,
      createdAt: "2022-11-15T16:08:36.376Z",
      updatedAt: "2022-11-15T16:08:36.376Z",
    },
    {
      _id: "6373b9847d52cbf2f752d9b0",
      name: "ADMIRAL ACKBAR",
      description:
        "A veteran commander, Ackbar led the defense of his homeworld, Mon Cala, during the Clone Wars and then masterminded the rebel attack on the second Death Star at the Battle of Endor. Ackbar realized the rebels had been drawn into a trap at Endor, but adjusted, with his fleet buying valuable time for the attack to succeed. After the Battle of Endor, Ackbar became a Grand Admiral in the New Republic, winning many victories including the pivotal Battle of Jakku. He retired to Mon Cala, but was coaxed back into service with the Resistance by Leia Organa.",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/databank_ackbar_01_169_55137220.jpeg",
      type: "character",
      __v: 0,
      createdAt: "2022-11-15T16:08:36.376Z",
      updatedAt: "2022-11-15T16:08:36.376Z",
    },
    {
      _id: "6373b9847d52cbf2f752d9b1",
      name: "ADMIRAL COBURN",
      description:
        "With a stern face, steely glare and unmistakable command presence, Admiral Coburn served at the side of General Plo Koon during the Clone Wars. The taciturn fleet officer measured his words precisely, offering clear commands in a clipped accent. Coburn's rigid military discipline served him well in executing some of the more daring missions under Jedi leadership. He commanded  a four-cruiser task force into the thick of a Separatist fleet cordon over Lola Sayu to facilitate the rescue of a strike team that invaded the Citadel installation. Coburn also led a Jedi light cruiser in extracting prisoners from the Zygerrian slave processing facility on Kadavo, steering the vessel dangerously close to the facility.",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/databank_admiralcoburn_01_169_8db29cff.jpeg",
      type: "character",
      __v: 0,
      createdAt: "2022-11-15T16:08:36.376Z",
      updatedAt: "2022-11-15T16:08:36.376Z",
    },
    {
      _id: "6373b9847d52cbf2f752d9b2",
      name: "ADMIRAL GARRICK VERSIO",
      description:
        "An accomplished naval officer who brought his home world of Vardos under Imperial control, Garrick Versio was reassigned and promoted to Admiral following the destruction of the Death Star over Yavin 4. Garrick formed Inferno Squad to ensure nothing of the sort would happen again. Loyalty to the Empire is Admiral Versio’s first priority.",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/admiral-versio_b06dd6c5.jpeg",
      type: "character",
      __v: 0,
      createdAt: "2022-11-15T16:08:36.376Z",
      updatedAt: "2022-11-15T16:08:36.376Z",
    },
  ],
};

const container = document.querySelector("#container");
console.log(container);

const printInDocument = (list) => {
  for (const item of list) {
    container.innerHTML += `
    <div class='card'>
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <img src =${item.image} alt=${item.name} />
    </div>
    `;
  }
};
const mapCharacters = () => {
  const res = swCharacters.characters.map((character) => ({
    name: character.name,
    description: character.description,
    image: character.image,
  }));

  printInDocument(res);
};

console.log(mapCharacters());

mapCharacters();

//* calcular media de los sonidos
let totalCount = 0;
for (const user of users) {
  for (const key in user.FavouriteSounds) {
    totalCount += user.favouritesSounds[key].volume;
  }
}

const mediaVolums = totalCount / users.length;
console.log(mediaVolums);

//*Strings con numeros y letras.
const list = ["gato", 4, 65, "Galleta", "Mesa", 2];

let count = 0;
for (const item of list) {
  if (typeof item === "string") {
    count += item.length;
  } else if (typeof item === "number") {
    count += item;
  }
}
console.log(count);

//*Hacemos un huevo frito.
//*1.Compramos aceite, huevos y sal.
//*2. calentamos el aceite
//*3. echamos el huevo por tiempo.
//*4. servimos el huevo.

function fryEgg() {
  console.log("Cracking egg into pan...");
  setTimeout(() => {
    console.log("Egg is sizzling...");
    setTimeout(() => {
      console.log("Flipping egg...");
      setTimeout(() => {
        console.log("Egg is cooked to perfection!");
      }, 5000);
    }, 10000);
  }, 5000);
}

fryEgg();



//*Hacemos un huevo frito.
//*1.Compramos aceite, huevos y sal. 
//*2. calentamos el aceite 
//*3. echamos el huevo por tiempo. 
//*4. servimos el huevo.


function fryEgg() {
  console.log("Cracking egg into pan...");
  setTimeout(() => {
    console.log("Egg is sizzling...");
    setTimeout(() => {
      console.log("Flipping egg...");
      setTimeout(() => {
        console.log("Egg is cooked to perfection!");
      }, 5000);
    }, 10000);
  }, 5000);
}

fryEgg();



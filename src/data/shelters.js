// src/data/shelters.js

const shelters = [
    {
      id: 1,
      name: "Centro de Recolha Oficial de Animais do Município de Oeiras (CROAMO)",
      city: "Oeiras",
      address: "Av. Diogo Lopes de Sequeira 21, Porto Salvo",
      about: "CROAMO, operated by the Municipality of Oeiras, is a government-run facility that rescues, rehabilitates, and rehomes animals in the local area. It offers services such as adoption, fostering, and sterilization, with an emphasis on humane treatment and responsible pet ownership.",
      numDogs: 269,
      numCats: 122,
      volunteering: ["Walks", "Adoption"],
      image: require('../images/croamo.jpg')
    },
    {
      id: 2,
      name: "Centro de Apoio Animal (CAA)",
      city: "Oeiras",
      address: "Jardim, 2780-000, Oeiras",
      about: "Located in the Jardim Municipal de Oeiras, CAA focuses on managing and supporting street animals, particularly through its REDA program, which handles collection, sterilization, and returning animals to monitored colonies. CAA promotes responsible care and adoption for pets within the community.",
      numDogs: 217,
      numCats: 97,
      volunteering: ["Walks", "Playtime", "Adoption"],
      image: require('../images/pexels-plato-terentev-3804555-9810761.jpg')
    },
    {
      id: 3,
      name: "SOS Animal",
      city: "Lisbon",
      address: "Rua Manuel Marques, 46, Lisbon",
      about: "Based in Lisbon, SOS Animal works both as a shelter and an advocacy organization, providing rescue and veterinary care, and organizing campaigns to prevent animal cruelty. Its mission includes educating the public on animal rights and promoting the adoption of abandoned animals.",
      numDogs: 189,
      numCats: 64,
      volunteering: ["Walks", "Temporary Adoption"],
      image: require('../images/pexels-plato-terentev-3804555-9810765.jpg')
    },
    {
      id: 4,
      name: "Pata Vermelha",
      city: "Cascais",
      address: "Rua da Várzea, Cascais",
      about: "Operating primarily in Cascais, Pata Vermelha is a volunteer-driven organization that offers temporary foster care and medical assistance for abandoned dogs and cats. They facilitate adoptions and focus on raising awareness about animal welfare issues in Portugal.",
      numDogs: 176,
      numCats: 35,
      volunteering: ["Playtime", "Temporary and Full-Time Adoption"],
      image: require('../images/pexels-sims1217-12195409.jpg')
    },
    {
      id: 5,
      name: "APA Torres Vedras",
      city: "Torres Vedras",
      address: "R. da Cooperativa Agrícola, 6, Torres Vedras, Lisbon",
      about: "The Associação de Proteção aos Animais (APA) in Torres Vedras rescues and shelters stray animals, with a focus on rehoming and offering community services like low-cost spaying and neutering. APA also advocates for animal rights and provides education on responsible pet ownership.",
      numDogs: 245,
      numCats: 175,
      volunteering: ["Walks", "Adoption"],
      image: require('../images/pexels-sims1217-12195423.jpg')
    },
    {
      id: 6,
      name: "Bianca Associação",
      city: "Sesimbra",
      address: "Pinhal do Cabedal - Rotunda, Sesimbra",
      about: "Bianca Associação in Sesimbra operates as a no-kill shelter that rescues and cares for abandoned animals, primarily dogs and cats. The shelter focuses on rehoming animals domestically and internationally and provides medical care, especially for those with special needs.",
      numDogs: 273,
      numCats: 79,
      volunteering: ["Walks", "Adoption"],
      image: require('../images/pexels-sims1217-12195429.jpg')
    },
    {
      id: 7,
      name: "Animal Rescue Algarve (ARA)",
      city: "Loulé",
      address: "Cabanita, 8100-331 Loulé",
      about: "ARA, located in Loulé, offers a sanctuary for abused and abandoned animals. The shelter has extensive facilities, including areas for training and rehabilitation, and collaborates with international organizations to find homes for the animals. ARA prioritizes animal well-being and is committed to responsible adoption practices.",
      numDogs: 123,
      numCats: 72,
      volunteering: ["Walks", "Playtime"],
      image: require('../images/pexels-sims1217-12195433.jpg')
    },
    {
      id: 8,
      name: "Santa Barbara Animal Help (SBAH)",
      city: "Algarve",
      address: "Santa Bárbara de Nexe 7, 8005-497, Faro, Algarve",
      about: "SBAH, in the Algarve, focuses on providing shelter and medical assistance to homeless animals. Run mainly by volunteers, the organization offers adoptions and has community programs aimed at educating residents about animal welfare and preventing abandonment.",
      numDogs: 186,
      numCats: 89,
      volunteering: ["Walks", "Playtime", "Adoption"],
      image: require('../images/pexels-sims1217-16465570.jpg')
    },
    {
      id: 9,
      name: "Kausa Animal",
      city: "Lisbon",
      address: "Lisbon",
      about: "Kausa Animal, based in Lisbon, is dedicated to rescuing stray animals and providing foster care. They work with local authorities and communities to promote adoption and responsible pet ownership.",
      numDogs: 140,
      numCats: 52,
      volunteering: ["Walks", "Adoption"],
      image: require('../images/pexels-sims1217-16465583.jpg')
    },
    {
      id: 10,
      name: "Associação Agir pelos Animais",
      city: "Lisbon",
      address: "Lisbon",
      about: "Associação Agir pelos Animais is a Lisbon-based shelter that focuses on rescuing stray dogs and cats, providing them with medical care and a safe environment. Their mission is to promote the welfare of animals and reduce abandonment.",
      numDogs: 100,
      numCats: 60,
      volunteering: ["Walks", "Adoption"],
      image: require('../images/pexels-sims1217-16465605.jpg')
    }
  ];
  
  export default shelters;
  
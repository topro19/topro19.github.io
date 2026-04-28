/* ─────────────────────────────────────────────
   GAMERS PARADISE — SHARED DATA & CART HELPERS
   Loaded by: index.html, games.html, product.html
   ───────────────────────────────────────────── */

window.ALL_GAMES = [
  {id:0,  steamId:1091500, name:"Cyberpunk 2077",         genre:"Open World RPG",   pf:"pc",   price:29.99, old:59.99, disc:50, rating:4.8, votes:"12K", badge:"hot",  isNew:false, dev:"CD Projekt Red",      pub:"CD Projekt",           rel:"December 10, 2020", lang:"20+ Supported"},
  {id:1,  steamId:1245620, name:"Elden Ring",             genre:"Action RPG",       pf:"ps",   price:34.99, old:59.99, disc:41, rating:4.9, votes:"28K", badge:"disc", isNew:false, dev:"FromSoftware",        pub:"Bandai Namco",         rel:"February 25, 2022", lang:"15+ Supported"},
  {id:2,  steamId:1174180, name:"Red Dead Redemption 2",  genre:"Open World",       pf:"pc",   price:29.99, old:59.99, disc:50, rating:4.9, votes:"18K", badge:"hot",  isNew:false, dev:"Rockstar Games",      pub:"Rockstar Games",       rel:"October 26, 2018",  lang:"12+ Supported"},
  {id:3,  steamId:1240440, name:"Halo Infinite",          genre:"FPS",              pf:"xbox", price:19.99, old:59.99, disc:66, rating:4.5, votes:"8K",  badge:"disc", isNew:false, dev:"343 Industries",      pub:"Xbox Game Studios",    rel:"December 8, 2021",  lang:"18+ Supported"},
  {id:4,  steamId:1593500, name:"God of War",             genre:"Action Adventure", pf:"ps",   price:39.99, old:49.99, disc:20, rating:4.9, votes:"22K", badge:"hot",  isNew:false, dev:"Santa Monica Studio", pub:"Sony Interactive",     rel:"April 20, 2018",    lang:"24+ Supported"},
  {id:5,  steamId:1086940, name:"Baldur's Gate 3",        genre:"RPG",              pf:"pc",   price:44.99, old:59.99, disc:25, rating:4.9, votes:"35K", badge:"hot",  isNew:true,  dev:"Larian Studios",      pub:"Larian Studios",       rel:"August 3, 2023",    lang:"10+ Supported"},
  {id:6,  steamId:814380,  name:"Sekiro",                 genre:"Action",           pf:"pc",   price:34.99, old:59.99, disc:41, rating:4.8, votes:"15K", badge:"disc", isNew:false, dev:"FromSoftware",        pub:"Activision",           rel:"March 22, 2019",    lang:"14+ Supported"},
  {id:7,  steamId:1551360, name:"Forza Horizon 5",        genre:"Racing",           pf:"xbox", price:29.99, old:59.99, disc:50, rating:4.7, votes:"10K", badge:"disc", isNew:false, dev:"Playground Games",    pub:"Xbox Game Studios",    rel:"November 9, 2021",  lang:"22+ Supported"},
  {id:8,  steamId:1621690, name:"Hogwarts Legacy",        genre:"Action RPG",       pf:"pc",   price:39.99, old:59.99, disc:33, rating:4.6, votes:"20K", badge:"",     isNew:false, dev:"Avalanche Software",  pub:"Warner Bros. Games",   rel:"February 10, 2023", lang:"15+ Supported"},
  {id:9,  steamId:1817070, name:"Starfield",              genre:"Open World RPG",   pf:"xbox", price:34.99, old:69.99, disc:50, rating:4.2, votes:"14K", badge:"disc", isNew:false, dev:"Bethesda Game Studios", pub:"Bethesda Softworks", rel:"September 6, 2023", lang:"12+ Supported"},
  {id:10, steamId:1245620, name:"Demon's Souls",          genre:"Action RPG",       pf:"ps",   price:29.99, old:69.99, disc:57, rating:4.7, votes:"9K",  badge:"disc", isNew:false, dev:"Bluepoint Games",     pub:"Sony Interactive",     rel:"November 12, 2020", lang:"10+ Supported"},
  {id:11, steamId:1091500, name:"The Witcher 3",          genre:"Open World RPG",   pf:"pc",   price:14.99, old:39.99, disc:62, rating:4.9, votes:"40K", badge:"disc", isNew:false, dev:"CD Projekt Red",      pub:"CD Projekt",           rel:"May 19, 2015",      lang:"15+ Supported"},
  {id:12, steamId:1593500, name:"Spider-Man Miles Morales", genre:"Action",         pf:"ps",   price:34.99, old:49.99, disc:30, rating:4.8, votes:"17K", badge:"",     isNew:true,  dev:"Insomniac Games",     pub:"Sony Interactive",     rel:"November 12, 2020", lang:"18+ Supported"},
  {id:13, steamId:1240440, name:"Gears 5",                genre:"FPS",              pf:"xbox", price:14.99, old:49.99, disc:70, rating:4.4, votes:"7K",  badge:"disc", isNew:false, dev:"The Coalition",       pub:"Xbox Game Studios",    rel:"September 10, 2019",lang:"13+ Supported"},
  {id:14, steamId:1551360, name:"Fortnite Pack",          genre:"Action",           pf:"xbox", price:9.99,  old:19.99, disc:50, rating:4.1, votes:"5K",  badge:"",     isNew:false, dev:"Epic Games",          pub:"Epic Games",           rel:"July 25, 2017",     lang:"35+ Supported"},
  {id:15, steamId:814380,  name:"Dark Souls III",         genre:"Action RPG",       pf:"pc",   price:19.99, old:59.99, disc:66, rating:4.8, votes:"25K", badge:"disc", isNew:false, dev:"FromSoftware",        pub:"Bandai Namco",         rel:"April 12, 2016",    lang:"14+ Supported"},
  {id:16, steamId:1086940, name:"Resident Evil Village",  genre:"Horror",           pf:"ps",   price:24.99, old:59.99, disc:58, rating:4.7, votes:"11K", badge:"disc", isNew:false, dev:"Capcom",              pub:"Capcom",               rel:"May 7, 2021",       lang:"15+ Supported"},
  {id:17, steamId:1174180, name:"GTA V Premium",          genre:"Open World",       pf:"pc",   price:14.99, old:29.99, disc:50, rating:4.6, votes:"50K", badge:"hot",  isNew:false, dev:"Rockstar Games",      pub:"Rockstar Games",       rel:"September 17, 2013",lang:"12+ Supported"},
  {id:18, steamId:1621690, name:"FIFA 24",                genre:"Sports",           pf:"ps",   price:34.99, old:69.99, disc:50, rating:4.0, votes:"6K",  badge:"disc", isNew:false, dev:"EA Sports",           pub:"Electronic Arts",      rel:"September 29, 2023",lang:"19+ Supported"},
  {id:19, steamId:1817070, name:"Age of Empires IV",      genre:"Strategy",         pf:"pc",   price:24.99, old:49.99, disc:50, rating:4.5, votes:"8K",  badge:"",     isNew:true,  dev:"Relic Entertainment", pub:"Xbox Game Studios",    rel:"October 28, 2021",  lang:"15+ Supported"}
];

/* Per-game richer descriptions (fallback for any game without specific entry) */
window.GAME_DESCRIPTIONS = {
  "Cyberpunk 2077":            "Step into the dark future of Night City — a megalopolis of obsession and cyber-enhancement. Play as V, a mercenary outlaw chasing a one-of-a-kind implant that holds the key to immortality. An open world action RPG with rich narrative and hundreds of hours of content.",
  "Elden Ring":                "A vast fantasy realm crafted by Hidetaka Miyazaki and George R. R. Martin. Explore the Lands Between, master deep combat, and shape your own legend in one of the most acclaimed open worlds ever made.",
  "Red Dead Redemption 2":     "America, 1899. Outlaw Arthur Morgan and the Van der Linde gang are on the run. A breathtaking open-world epic from Rockstar Games, packed with story, exploration and online multiplayer.",
  "Halo Infinite":             "The Master Chief returns in the most ambitious Halo ever. Battle through a sprawling open Zeta Halo ring with grappleshot, all-new weapons and a free-to-play multiplayer experience.",
  "God of War":                "Kratos lives as an outsider in the realm of Norse Gods and monsters. Embark on a deeply personal journey with his son Atreus through a stunning Norse mythology-fuelled adventure.",
  "Baldur's Gate 3":           "Gather your party and return to the Forgotten Realms in a tale of fellowship, betrayal, sacrifice, survival, and the lure of absolute power. A 5e D&D party-based RPG by Larian Studios.",
  "Sekiro":                    "Carve your own clever path to vengeance as the One-Armed Wolf in late 1500s Sengoku Japan. Brutal combat, stealth, and exploration in a dark world from FromSoftware.",
  "Forza Horizon 5":           "Your ultimate Horizon adventure awaits! Explore the vibrant and ever-evolving open-world landscapes of Mexico with limitless, fun driving action in hundreds of the world's greatest cars.",
  "Hogwarts Legacy":           "An immersive open-world RPG set in the world introduced in the Harry Potter books. Live the unwritten — explore Hogwarts, master spells, brew potions, and uncover ancient magic.",
  "Starfield":                 "Bethesda's first new universe in 25 years. Create any character you want and explore with unparalleled freedom as you embark on an epic journey across 1,000 planets.",
  "Demon's Souls":             "From the dark fantasy minds of FromSoftware and Bluepoint Games comes a remake of the PlayStation classic — rebuilt from the ground up and masterfully enhanced.",
  "The Witcher 3":             "As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy in this living, breathing fantasy world.",
  "Spider-Man Miles Morales":  "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man in this standalone Marvel adventure.",
  "Gears 5":                   "From one of the most acclaimed games of 2019 comes Gears 5 — five thrilling modes, the deepest Gears campaign yet and visceral, weighty combat.",
  "Fortnite Pack":             "Drop into the battle royale phenomenon. This pack unlocks exclusive cosmetics, V-Bucks and a Battle Pass headstart for one of gaming's biggest live experiences.",
  "Dark Souls III":            "As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments. The acclaimed action RPG saga concludes.",
  "Resident Evil Village":     "Set a few years after the horrifying events in the critically acclaimed Resident Evil 7 biohazard, the all-new storyline begins with Ethan Winters and his wife living in peace — until unspeakable horrors arrive.",
  "GTA V Premium":             "Includes the complete GTAV story experience, free access to GTA Online and the Criminal Enterprise Starter Pack — the fastest way to jumpstart your criminal empire.",
  "FIFA 24":                   "Experience the most authentic football game ever, with 19,000+ players, 700+ teams, and 30+ leagues. Includes new HyperMotionV gameplay and Ultimate Team.",
  "Age of Empires IV":         "One of the most beloved real-time strategy games returns with a modern feel. Lead, build, and manage your civilization across centuries of warfare, diplomacy and discovery."
};

/* ─── HELPERS ─── */
window.GP = (function(){
  const PLATFORM_LABEL = {pc:'PC (Steam)', ps:'PlayStation 5', xbox:'Xbox Series X'};
  const ACTIVATION = {pc:'Steam / GOG', ps:'PlayStation Store', xbox:'Microsoft Store'};

  function steamImg(steamId){
    return `https://cdn.cloudflare.steamstatic.com/steam/apps/${steamId}/header.jpg`;
  }

  function findGame(id){
    const n = parseInt(id, 10);
    if(Number.isNaN(n)) return null;
    return window.ALL_GAMES.find(g => g.id === n) || null;
  }

  function gameUrl(id){
    return `product.html?id=${id}`;
  }

  /* Build prices for each platform from the base price */
  function pricesFor(g){
    const base = g.price;
    return {
      pc:   { num: base,       label: '$' + base.toFixed(2) },
      ps:   { num: +(base + 5).toFixed(2),               label: '$' + (base + 5).toFixed(2) },
      xbox: { num: +(Math.max(4.99, base - 5)).toFixed(2), label: '$' + (Math.max(4.99, base - 5)).toFixed(2) }
    };
  }

  function descriptionFor(g){
    return window.GAME_DESCRIPTIONS[g.name]
      || `Dive into ${g.name} — a top-rated ${g.genre.toLowerCase()} experience available for instant digital delivery. Verified key, secure checkout, and full access from the moment your purchase clears.`;
  }

  /* ─── CART (sessionStorage) ─── */
  function getCart(){
    try { return JSON.parse(sessionStorage.getItem('gp_cart') || '[]'); }
    catch { return []; }
  }
  function saveCart(c){ sessionStorage.setItem('gp_cart', JSON.stringify(c)); }
  function cartCount(){ return getCart().reduce((a,i) => a + (i.qty||1), 0); }

  function addToCart(item){
    const cart = getCart();
    const existing = cart.find(i => i.id === item.id);
    if(existing){ existing.qty += (item.qty || 1); }
    else { cart.push(Object.assign({qty:1}, item)); }
    saveCart(cart);
    updateNavCount();
  }

  function updateNavCount(){
    const n = cartCount();
    document.querySelectorAll('[data-cart-count]').forEach(el => { el.textContent = n; });
  }

  /* Pick N related games — same genre first, then fallback to random */
  function relatedGames(currentId, n){
    const cur = findGame(currentId);
    if(!cur) return window.ALL_GAMES.slice(0, n);
    const sameGenre = window.ALL_GAMES.filter(g => g.id !== cur.id && g.genre === cur.genre);
    const others    = window.ALL_GAMES.filter(g => g.id !== cur.id && g.genre !== cur.genre);
    return [...sameGenre, ...others].slice(0, n);
  }

  return {
    PLATFORM_LABEL, ACTIVATION,
    steamImg, findGame, gameUrl, pricesFor, descriptionFor,
    getCart, saveCart, cartCount, addToCart, updateNavCount,
    relatedGames
  };
})();

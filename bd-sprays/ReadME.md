Generic.NPCS[#Generic.NPCS + 1] = {
  id = "ped_purchase_sprays",
  name = "Weed Plants",
  pedType = 4,
  model = "s_m_y_dealer_01",
  networked = false,
  distance = 50.0,
  position = {
    coords = vector3(-297.7799, -1332.548, 31.295957 -1.0),
    heading = 312.35809,
    random = false
  },
  appearance = nil,
  settings = {
      { mode = "invincible", active = true },
      { mode = "ignore", active = true },
      { mode = "freeze", active = true }
  },
  flags = {
      ['isNPC'] = true
  }
}

-- Add this to your [bd-npcs] / [shared] / [sh_npcs.lua]

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isNPC' },
    data = {
        {
            id = "ped_purchase_sprays",
            label = 'Purchase Gang Spray ($5k)',
            icon = "spray-can",
            event = "bd-sprays:openPurchaseMenu",
            parameters = "weed"
        },
        {
            id = "ped_purchase_sprays1",
            label = 'Purchase Scrubbing Cloth ($50k)',
            icon = "brush",
            event = "bd-sprays:buyScrubbingCloth",
            parameters = "weed"
        }
    },
    options = {
        distance = { radius = 2.5 },
        npcIds = {"ped_purchase_sprays"}
    }
}

-- Add this to your [bd-interact] / [entries] / [cl_npcs.lua]

itemList['spraycan'] = {
  _name: 'spraycan',
  fullyDegrades: false,
  decayrate: 3.0,
  displayname: 'Spray Can',
  price: 500,
  weight: 2,
  nonStack: true,
  model: '',
  craft: [[
    { itemid: 'plastic', amount: 50 },
    { itemid: 'aluminium', amount: 100 },
  ]],
  image: 'spraycan.png',
  information: 'Art.',
};

itemList['scrubbingcloth'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'Scrubbing Cloth',
  craft: [[]],
  price: 1,
  weight: 2.0,
  nonStack: false,
  model: '',
  image: 'np_scrubbing_cloth.png',
  information: 'Used for scrubbing art.',
};

-- Add this to your [bd-inventory] / [shared_list.js]
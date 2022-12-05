local CLOTHES = {
  
	isOpen = false,
	SavedArmor = 0,
	SavedHealth = 0,
	CurrentMenu = "none",
	CurrentTats = {},
	NewPlayer = false,
  
	CustomCam = false,
	CurrentCam = 0,
  
	Cameras = false,
  
	oldPed = false,
	Inside = false,
  
	Callback = false,
  
	facialWear = {
	  [1] = { ["Prop"] = -1, ["Texture"] = -1 },
	  [2] = { ["Prop"] = -1, ["Texture"] = -1 },
	  [3] = { ["Prop"] = -1, ["Texture"] = -1 },
	  [4] = { ["Prop"] = -1, ["Palette"] = -1, ["Texture"] = -1 },
	  [5] = { ["Prop"] = -1, ["Palette"] = -1, ["Texture"] = -1 },
	  [6] = { ["Prop"] = -1, ["Palette"] = -1, ["Texture"] = -1 }, 
	},
  
	ClothingShops = {
  
	  { coords = vec3(1690.80, 4827.61, 42.05), radius = 5.0, heading = 158.74 },
	  { coords = vector3(1690.60, 4827.52, 42.05) },
	  { coords = vector3(-709.73, -152.64, 37.40) },
	  { coords = vector3(-1194.57, -772.30, 17.32) },
	  { coords = vector3(423.14, -800.89, 29.48) },
	  { coords = vector3(-162.658,-303.397,39.733) },
	  { coords = vector3(77.70, -1398.46, 29.36) },	
	  { coords = vector3(-826.27, -1078.36, 11.32) },
	  { coords = vector3(-1450.711,-236.83,49.809) },
	  { coords = vector3(7.57, 6518.06, 31.87) },
	  { coords = vector3(616.84, 2759.50, 42.09) },
	  { coords = vector3(1191.39, 2707.89, 38.21) },
	  { coords = vector3(-3171.14, 1048.13, 20.85) },
	  { coords = vector3(-1103.84, 2705.46, 19.10) },
	  { coords = vector3(124.77, -219.23, 54.55) },
	  { coords = vector3(738.44, 601.02, 133.31) },
	  { coords = vector3(689.46, 586.01, 130.45) },
	  { coords = vector3(461.98, -998.77, 30.68) },
	  { coords = vector3(300.67, -597.30, 43.28) },
	  { coords = vector3(-586.5784, -1049.902, 22.343612) },
	},
  
   
  
	BarberShops = {
	  {coords = vector3(327.85, -568.06, 43.28), blip = false}, -- Pillbox Surgery
	  {coords = vector3(1932.07, 3729.67, 32.84)},
	  {coords = vector3(-278.2, 6228.36, 31.69)},
	  {coords = vector3(1212.0, -472.77, 66.2)},
	  {coords = vector3(-33.22, -152.64, 57.07)},
	  {coords = vector3(136.72, -1708.27, 29.28)},
	  {coords = vector3(-815.18, -184.55, 37.55)},
	  {coords = vector3(-1283.3, -1117.33, 6.99)},
	  {coords = vector3(-1563.84, -565.35, 108.55), blip = false},
	  {coords = vector3(-128.29, -628.75, 168.91), blip = false},
	  {coords = vector3(953.18, 31.23, 74.88), blip = false}, -- Casino
	  {coords = vector3(979.85, 77.93, 116.16), blip = false}, -- Casino Penthouse
	  {coords = vector3(952.63, 17.02, 117.35), blip = false},
	  {coords = vector3(-537.732422, -190.205322, 47.422779), blip = false}, -- DOJ
	  {coords = vector3(-575.1097, -922.7687, 32.52471), blip = false}, -- Weazel
	  {coords = vector3(1771.52, 2585.97, 45.73), blip = false} -- Boilingbrook
	},
  
	TattoosShops = {
	  {coords = vector3(1322.95, -1652.28, 52.26)},
	  {coords = vector3(-1153.69, -1425.69, 4.95)},
	  {coords = vector3(322.35, 180.86, 103.57)},
	  {coords = vector3(-3170.16, 1075.42, 20.82)},
	  {coords = vector3(1864.63, 3747.73, 33.02)},
	  {coords = vector3(-293.72, 6200.03, 31.47)},
	  {coords = vector3(1743.912, 2479.255, 45.75932), blip = false} -- Cell block
	},
	
	TattoosList = {
	  ["mpbusiness_overlays"] = {
		{"MP_Buis_M_Neck_000","MP_Buis_F_Neck_000"},
		"MP_Buis_M_Neck_001",
		"MP_Buis_M_Neck_002",
		"MP_Buis_M_Neck_003",
		"MP_Buis_M_LeftArm_000",
		"MP_Buis_M_LeftArm_001",
		"MP_Buis_M_RightArm_000",
		"MP_Buis_M_RightArm_001",
		"MP_Buis_M_Stomach_000",
		"MP_Buis_M_Chest_000",
		"MP_Buis_M_Chest_001",
		"MP_Buis_M_Back_000",
		"MP_Buis_F_Chest_000",
		"MP_Buis_F_Chest_001",
		"MP_Buis_F_Chest_002",
		"MP_Buis_F_Stom_000",
		"MP_Buis_F_Stom_001",
		"MP_Buis_F_Stom_002",
		"MP_Buis_F_Back_000",
		"MP_Buis_F_Back_001",
		"MP_Buis_F_Neck_000",
		"MP_Buis_F_Neck_001",
		"MP_Buis_F_RArm_000",
		"MP_Buis_F_LArm_000",
		"MP_Buis_F_LLeg_000",
		"MP_Buis_F_RLeg_000",
	  },
  
	  ["mpchristmas2017_overlays"] = {
		"MP_Christmas2017_Tattoo_000_M",
		"MP_Christmas2017_Tattoo_001_M",
		"MP_Christmas2017_Tattoo_002_M",
		"MP_Christmas2017_Tattoo_003_M",
		"MP_Christmas2017_Tattoo_004_M",
		"MP_Christmas2017_Tattoo_005_M",
		"MP_Christmas2017_Tattoo_006_M",
		"MP_Christmas2017_Tattoo_007_M",
		"MP_Christmas2017_Tattoo_008_M",
		"MP_Christmas2017_Tattoo_009_M",
		"MP_Christmas2017_Tattoo_010_M",
		"MP_Christmas2017_Tattoo_011_M",
		"MP_Christmas2017_Tattoo_012_M",
		"MP_Christmas2017_Tattoo_013_M",
		"MP_Christmas2017_Tattoo_014_M",
		"MP_Christmas2017_Tattoo_015_M",
		"MP_Christmas2017_Tattoo_016_M",
		"MP_Christmas2017_Tattoo_017_M",
		"MP_Christmas2017_Tattoo_018_M",
		"MP_Christmas2017_Tattoo_019_M",
		"MP_Christmas2017_Tattoo_020_M",
		"MP_Christmas2017_Tattoo_021_M",
		"MP_Christmas2017_Tattoo_022_M",
		"MP_Christmas2017_Tattoo_023_M",
		"MP_Christmas2017_Tattoo_024_M",
		"MP_Christmas2017_Tattoo_025_M",
		"MP_Christmas2017_Tattoo_026_M",
		"MP_Christmas2017_Tattoo_027_M",
		"MP_Christmas2017_Tattoo_028_M",
		"MP_Christmas2017_Tattoo_029_M",
	  },
  
	  ["mpchristmas2018_overlays"] = {
		"MP_Christmas2018_Tat_000_M",
	  },
  
	  ["mpluxe2_overlays"] = {
		"MP_LUXE_TAT_002_M",
		"MP_LUXE_TAT_005_M",
		"MP_LUXE_TAT_010_M",
		"MP_LUXE_TAT_011_M",
		"MP_LUXE_TAT_012_M",
		"MP_LUXE_TAT_016_M",
		"MP_LUXE_TAT_017_M",
		"MP_LUXE_TAT_018_M",
		"MP_LUXE_TAT_022_M",
		"MP_LUXE_TAT_023_M",
		"MP_LUXE_TAT_025_M",
		"MP_LUXE_TAT_026_M",
		"MP_LUXE_TAT_027_M",
		"MP_LUXE_TAT_028_M",
		"MP_LUXE_TAT_029_M",
		"MP_LUXE_TAT_030_M",
		"MP_LUXE_TAT_031_M",
	  },
  
	  ["mpluxe_overlays"] = {
		"MP_LUXE_TAT_000_M",
		"MP_LUXE_TAT_001_M",
		"MP_LUXE_TAT_003_M",
		"MP_LUXE_TAT_004_M",
		"MP_LUXE_TAT_006_M",
		"MP_LUXE_TAT_007_M",
		"MP_LUXE_TAT_008_M",
		"MP_LUXE_TAT_009_M",
		"MP_LUXE_TAT_013_M",
		"MP_LUXE_TAT_014_M",
		"MP_LUXE_TAT_015_M",
		"MP_LUXE_TAT_019_M",
		"MP_LUXE_TAT_020_M",
		"MP_LUXE_TAT_021_M",
		"MP_LUXE_TAT_024_M",
	  },
  
	  ["mpsmuggler_overlays"] = {
		"MP_Smuggler_Tattoo_001_M",
		"MP_Smuggler_Tattoo_002_M",
		"MP_Smuggler_Tattoo_003_M",
		"MP_Smuggler_Tattoo_004_M",
		"MP_Smuggler_Tattoo_005_M",
		"MP_Smuggler_Tattoo_006_M",
		"MP_Smuggler_Tattoo_007_M",
		"MP_Smuggler_Tattoo_008_M",
		"MP_Smuggler_Tattoo_009_M",
		"MP_Smuggler_Tattoo_010_M",
		"MP_Smuggler_Tattoo_011_M",
		"MP_Smuggler_Tattoo_012_M",
		"MP_Smuggler_Tattoo_013_M",
		"MP_Smuggler_Tattoo_014_M",
		"MP_Smuggler_Tattoo_015_M",
		"MP_Smuggler_Tattoo_016_M",
		"MP_Smuggler_Tattoo_017_M",
		"MP_Smuggler_Tattoo_018_M",
		"MP_Smuggler_Tattoo_019_M",
		"MP_Smuggler_Tattoo_020_M",
		"MP_Smuggler_Tattoo_021_M",
		"MP_Smuggler_Tattoo_022_M",
		"MP_Smuggler_Tattoo_023_M",
		"MP_Smuggler_Tattoo_024_M",
		"MP_Smuggler_Tattoo_025_M",
	  },
  
	  ["mpstunt_overlays"] = {
		"MP_MP_Stunt_Tat_000_M",
		"MP_MP_Stunt_Tat_001_M",
		"MP_MP_Stunt_Tat_002_M",
		"MP_MP_Stunt_Tat_003_M",
		"MP_MP_Stunt_Tat_004_M",
		"MP_MP_Stunt_Tat_005_M",
		"MP_MP_Stunt_Tat_006_M",
		"MP_MP_Stunt_Tat_007_M",
		"MP_MP_Stunt_Tat_008_M",
		"MP_MP_Stunt_Tat_009_M",
		"MP_MP_Stunt_Tat_010_M",
		"MP_MP_Stunt_Tat_011_M",
		"MP_MP_Stunt_Tat_012_M",
		"MP_MP_Stunt_Tat_013_M",
		"MP_MP_Stunt_Tat_014_M",
		"MP_MP_Stunt_Tat_015_M",
		"MP_MP_Stunt_Tat_016_M",
		"MP_MP_Stunt_Tat_017_M",
		"MP_MP_Stunt_Tat_018_M",
		"MP_MP_Stunt_Tat_019_M",
		"MP_MP_Stunt_Tat_020_M",
		"MP_MP_Stunt_Tat_021_M",
		"MP_MP_Stunt_Tat_022_M",
		"MP_MP_Stunt_Tat_023_M",
		"MP_MP_Stunt_Tat_024_M",
		"MP_MP_Stunt_Tat_025_M",
		"MP_MP_Stunt_Tat_026_M",
		"MP_MP_Stunt_Tat_027_M",
		"MP_MP_Stunt_Tat_028_M",
		"MP_MP_Stunt_Tat_029_M",
		"MP_MP_Stunt_Tat_030_M",
		"MP_MP_Stunt_Tat_031_M",
		"MP_MP_Stunt_Tat_032_M",
		"MP_MP_Stunt_Tat_033_M",
		"MP_MP_Stunt_Tat_034_M",
		"MP_MP_Stunt_Tat_035_M",
		"MP_MP_Stunt_Tat_036_M",
		"MP_MP_Stunt_Tat_037_M",
		"MP_MP_Stunt_Tat_038_M",
		"MP_MP_Stunt_Tat_039_M",
		"MP_MP_Stunt_Tat_040_M",
		"MP_MP_Stunt_Tat_041_M",
		"MP_MP_Stunt_Tat_042_M",
		"MP_MP_Stunt_Tat_043_M",
		"MP_MP_Stunt_Tat_044_M",
		"MP_MP_Stunt_Tat_045_M",
		"MP_MP_Stunt_Tat_046_M",
		"MP_MP_Stunt_Tat_047_M",
		"MP_MP_Stunt_Tat_048_M",
		"MP_MP_Stunt_Tat_049_M",
	  },
  
	  ["multiplayer_overlays"] = {
		"FM_Tat_Award_M_000",
		"FM_Tat_Award_M_001",
		"FM_Tat_Award_M_002",
		"FM_Tat_Award_M_003",
		"FM_Tat_Award_M_004",
		"FM_Tat_Award_M_005",
		"FM_Tat_Award_M_006",
		"FM_Tat_Award_M_007",
		"FM_Tat_Award_M_008",
		"FM_Tat_Award_M_009",
		"FM_Tat_Award_M_010",
		"FM_Tat_Award_M_011",
		"FM_Tat_Award_M_012",
		"FM_Tat_Award_M_013",
		"FM_Tat_Award_M_014",
		"FM_Tat_Award_M_015",
		"FM_Tat_Award_M_016",
		"FM_Tat_Award_M_017",
		"FM_Tat_Award_M_018",
		"FM_Tat_Award_M_019",
		"FM_Tat_M_000",
		"FM_Tat_M_001",
		"FM_Tat_M_002",
		"FM_Tat_M_003",
		"FM_Tat_M_004",
		"FM_Tat_M_005",
		"FM_Tat_M_006",
		"FM_Tat_M_007",
		"FM_Tat_M_008",
		"FM_Tat_M_009",
		"FM_Tat_M_010",
		"FM_Tat_M_011",
		"FM_Tat_M_012",
		"FM_Tat_M_013",
		"FM_Tat_M_014",
		"FM_Tat_M_015",
		"FM_Tat_M_016",
		"FM_Tat_M_017",
		"FM_Tat_M_018",
		"FM_Tat_M_019",
		"FM_Tat_M_011",
		"FM_Tat_M_012",
		"FM_Tat_M_013",
		"FM_Tat_M_014",
		"FM_Tat_M_015",
		"FM_Tat_M_016",
		"FM_Tat_M_017",
		"FM_Tat_M_018",
		"FM_Tat_M_020",
		"FM_Tat_M_021",
		"FM_Tat_M_022",
		"FM_Tat_M_023",
		"FM_Tat_M_024",
		"FM_Tat_M_025",
		"FM_Tat_M_026",
		"FM_Tat_M_027",
		"FM_Tat_M_028",
		"FM_Tat_M_029",
		"FM_Tat_M_030",
		"FM_Tat_M_031",
		"FM_Tat_M_032",
		"FM_Tat_M_033",
		"FM_Tat_M_034",
		"FM_Tat_M_035",
		"FM_Tat_M_036",
		"FM_Tat_M_037",
		"FM_Tat_M_038",
		"FM_Tat_M_039",
		"FM_Tat_M_040",
		"FM_Tat_M_041",
		"FM_Tat_M_042",
		"FM_Tat_M_043",
		"FM_Tat_M_044",
		"FM_Tat_M_045",
		"FM_Tat_M_046",
		"FM_Tat_M_047",
	  },
  
	  ["mphipster_overlays"] = {
		"FM_Hip_M_Tat_000",
		"FM_Hip_M_Tat_001",
		"FM_Hip_M_Tat_002",
		"FM_Hip_M_Tat_003",
		"FM_Hip_M_Tat_004",
		"FM_Hip_M_Tat_005",
		"FM_Hip_M_Tat_006",
		"FM_Hip_M_Tat_007",
		"FM_Hip_M_Tat_008",
		"FM_Hip_M_Tat_009",
		"FM_Hip_M_Tat_010",
		"FM_Hip_M_Tat_011",
		"FM_Hip_M_Tat_012",
		"FM_Hip_M_Tat_013",
		"FM_Hip_M_Tat_014",
		"FM_Hip_M_Tat_015",
		"FM_Hip_M_Tat_016",
		"FM_Hip_M_Tat_017",
		"FM_Hip_M_Tat_018",
		"FM_Hip_M_Tat_019",
		"FM_Hip_M_Tat_020",
		"FM_Hip_M_Tat_021",
		"FM_Hip_M_Tat_022",
		"FM_Hip_M_Tat_023",
		"FM_Hip_M_Tat_024",
		"FM_Hip_M_Tat_025",
		"FM_Hip_M_Tat_026",
		"FM_Hip_M_Tat_027",
		"FM_Hip_M_Tat_028",
		"FM_Hip_M_Tat_029",
		"FM_Hip_M_Tat_030",
		"FM_Hip_M_Tat_031",
		"FM_Hip_M_Tat_032",
		"FM_Hip_M_Tat_033",
		"FM_Hip_M_Tat_034",
		"FM_Hip_M_Tat_035",
		"FM_Hip_M_Tat_036",
		"FM_Hip_M_Tat_037",
		"FM_Hip_M_Tat_038",
		"FM_Hip_M_Tat_039",
		"FM_Hip_M_Tat_040",
		"FM_Hip_M_Tat_041",
		"FM_Hip_M_Tat_042",
		"FM_Hip_M_Tat_043",
		"FM_Hip_M_Tat_044",
		"FM_Hip_M_Tat_045",
		"FM_Hip_M_Tat_046",
		"FM_Hip_M_Tat_047",
		"FM_Hip_M_Tat_048",
	  },
  
	  ["mpbiker_overlays"] = {
		"MP_MP_Biker_Tat_000_M",
		"MP_MP_Biker_Tat_001_M",
		"MP_MP_Biker_Tat_002_M",
		"MP_MP_Biker_Tat_003_M",
		"MP_MP_Biker_Tat_004_M",
		"MP_MP_Biker_Tat_005_M",
		"MP_MP_Biker_Tat_006_M",
		"MP_MP_Biker_Tat_007_M",
		"MP_MP_Biker_Tat_008_M",
		"MP_MP_Biker_Tat_009_M",
		"MP_MP_Biker_Tat_010_M",
		"MP_MP_Biker_Tat_011_M",
		"MP_MP_Biker_Tat_012_M",
		"MP_MP_Biker_Tat_013_M",
		"MP_MP_Biker_Tat_014_M",
		"MP_MP_Biker_Tat_015_M",
		"MP_MP_Biker_Tat_016_M",
		"MP_MP_Biker_Tat_017_M",
		"MP_MP_Biker_Tat_018_M",
		"MP_MP_Biker_Tat_019_M",
		"MP_MP_Biker_Tat_020_M",
		"MP_MP_Biker_Tat_021_M",
		"MP_MP_Biker_Tat_022_M",
		"MP_MP_Biker_Tat_023_M",
		"MP_MP_Biker_Tat_024_M",
		"MP_MP_Biker_Tat_025_M",
		"MP_MP_Biker_Tat_026_M",
		"MP_MP_Biker_Tat_027_M",
		"MP_MP_Biker_Tat_028_M",
		"MP_MP_Biker_Tat_029_M",
		"MP_MP_Biker_Tat_030_M",
		"MP_MP_Biker_Tat_031_M",
		"MP_MP_Biker_Tat_032_M",
		"MP_MP_Biker_Tat_033_M",
		"MP_MP_Biker_Tat_034_M",
		"MP_MP_Biker_Tat_035_M",
		"MP_MP_Biker_Tat_036_M",
		"MP_MP_Biker_Tat_037_M",
		"MP_MP_Biker_Tat_038_M",
		"MP_MP_Biker_Tat_039_M",
		"MP_MP_Biker_Tat_040_M",
		"MP_MP_Biker_Tat_041_M",
		"MP_MP_Biker_Tat_042_M",
		"MP_MP_Biker_Tat_043_M",
		"MP_MP_Biker_Tat_044_M",
		"MP_MP_Biker_Tat_045_M",
		"MP_MP_Biker_Tat_046_M",
		"MP_MP_Biker_Tat_047_M",
		"MP_MP_Biker_Tat_048_M",
		"MP_MP_Biker_Tat_049_M",
		"MP_MP_Biker_Tat_050_M",
		"MP_MP_Biker_Tat_051_M",
		"MP_MP_Biker_Tat_052_M",
		"MP_MP_Biker_Tat_053_M",
		"MP_MP_Biker_Tat_054_M",
		"MP_MP_Biker_Tat_055_M",
		"MP_MP_Biker_Tat_056_M",
		"MP_MP_Biker_Tat_057_M",
		"MP_MP_Biker_Tat_058_M",
		"MP_MP_Biker_Tat_059_M",
		"MP_MP_Biker_Tat_060_M",
	  },
  
	  ["mpairraces_overlays"] = {
		"MP_Airraces_Tattoo_000_M",
		"MP_Airraces_Tattoo_001_M",
		"MP_Airraces_Tattoo_002_M",
		"MP_Airraces_Tattoo_003_M",
		"MP_Airraces_Tattoo_004_M",
		"MP_Airraces_Tattoo_005_M",
		"MP_Airraces_Tattoo_006_M",
		"MP_Airraces_Tattoo_007_M",
	  },
  
	  ["mpbeach_overlays"] = {
		"MP_Bea_M_Back_000",
		"MP_Bea_M_Chest_000",
		"MP_Bea_M_Chest_001",
		"MP_Bea_M_Head_000",
		"MP_Bea_M_Head_001",
		"MP_Bea_M_Head_002",
		"MP_Bea_M_Lleg_000",
		"MP_Bea_M_Rleg_000",
		"MP_Bea_M_RArm_000",
		"MP_Bea_M_Head_000",
		"MP_Bea_M_LArm_000",
		"MP_Bea_M_LArm_001",
		"MP_Bea_M_Neck_000",
		"MP_Bea_M_Neck_001",
		"MP_Bea_M_RArm_001",
		"MP_Bea_M_Stom_000",
		"MP_Bea_M_Stom_001",
	  },
  
	  ["mpchristmas2_overlays"] = {
		"MP_Xmas2_M_Tat_000",
		"MP_Xmas2_M_Tat_001",
		"MP_Xmas2_M_Tat_003",
		"MP_Xmas2_M_Tat_004",
		"MP_Xmas2_M_Tat_005",
		"MP_Xmas2_M_Tat_006",
		"MP_Xmas2_M_Tat_007",
		"MP_Xmas2_M_Tat_008",
		"MP_Xmas2_M_Tat_009",
		"MP_Xmas2_M_Tat_010",
		"MP_Xmas2_M_Tat_011",
		"MP_Xmas2_M_Tat_012",
		"MP_Xmas2_M_Tat_013",
		"MP_Xmas2_M_Tat_014",
		"MP_Xmas2_M_Tat_015",
		"MP_Xmas2_M_Tat_016",
		"MP_Xmas2_M_Tat_017",
		"MP_Xmas2_M_Tat_018",
		"MP_Xmas2_M_Tat_019",
		"MP_Xmas2_M_Tat_022",
		"MP_Xmas2_M_Tat_023",
		"MP_Xmas2_M_Tat_024",
		"MP_Xmas2_M_Tat_025",
		"MP_Xmas2_M_Tat_026",
		"MP_Xmas2_M_Tat_027",
		"MP_Xmas2_M_Tat_028",
		"MP_Xmas2_M_Tat_029",
	  },
  
	  ["mpgunrunning_overlays"] = {
		"MP_Gunrunning_Tattoo_000_M",
		"MP_Gunrunning_Tattoo_001_M",
		"MP_Gunrunning_Tattoo_002_M",
		"MP_Gunrunning_Tattoo_003_M",
		"MP_Gunrunning_Tattoo_004_M",
		"MP_Gunrunning_Tattoo_005_M",
		"MP_Gunrunning_Tattoo_006_M",
		"MP_Gunrunning_Tattoo_007_M",
		"MP_Gunrunning_Tattoo_008_M",
		"MP_Gunrunning_Tattoo_009_M",
		"MP_Gunrunning_Tattoo_010_M",
		"MP_Gunrunning_Tattoo_011_M",
		"MP_Gunrunning_Tattoo_012_M",
		"MP_Gunrunning_Tattoo_013_M",
		"MP_Gunrunning_Tattoo_014_M",
		"MP_Gunrunning_Tattoo_015_M",
		"MP_Gunrunning_Tattoo_016_M",
		"MP_Gunrunning_Tattoo_017_M",
		"MP_Gunrunning_Tattoo_018_M",
		"MP_Gunrunning_Tattoo_019_M",
		"MP_Gunrunning_Tattoo_020_M",
		"MP_Gunrunning_Tattoo_021_M",
		"MP_Gunrunning_Tattoo_022_M",
		"MP_Gunrunning_Tattoo_023_M",
		"MP_Gunrunning_Tattoo_024_M",
		"MP_Gunrunning_Tattoo_025_M",
		"MP_Gunrunning_Tattoo_026_M",
		"MP_Gunrunning_Tattoo_027_M",
		"MP_Gunrunning_Tattoo_028_M",
		"MP_Gunrunning_Tattoo_029_M",
		"MP_Gunrunning_Tattoo_030_M",
	  },
  
	  ["mpimportexport_overlays"] = {
		"MP_MP_ImportExport_Tat_000_M",
		"MP_MP_ImportExport_Tat_001_M",
		"MP_MP_ImportExport_Tat_002_M",
		"MP_MP_ImportExport_Tat_003_M",
		"MP_MP_ImportExport_Tat_004_M",
		"MP_MP_ImportExport_Tat_005_M",
		"MP_MP_ImportExport_Tat_006_M",
		"MP_MP_ImportExport_Tat_007_M",
		"MP_MP_ImportExport_Tat_008_M",
		"MP_MP_ImportExport_Tat_009_M",
		"MP_MP_ImportExport_Tat_010_M",
		"MP_MP_ImportExport_Tat_011_M",
	  },
  
	  ["mplowrider2_overlays"] = {
		"MP_LR_Tat_000_M",
		"MP_LR_Tat_003_M",
		"MP_LR_Tat_006_M",
		"MP_LR_Tat_008_M",
		"MP_LR_Tat_011_M",
		"MP_LR_Tat_012_M",
		"MP_LR_Tat_016_M",
		"MP_LR_Tat_018_M",
		"MP_LR_Tat_019_M",
		"MP_LR_Tat_022_M",
		"MP_LR_Tat_028_M",
		"MP_LR_Tat_029_M",
		"MP_LR_Tat_030_M",
		"MP_LR_Tat_031_M",
		"MP_LR_Tat_032_M",
		"MP_LR_Tat_035_M",
	  },
  
	  ["mplowrider_overlays"] = {
		"MP_LR_Tat_001_M",
		"MP_LR_Tat_002_M",
		"MP_LR_Tat_004_M",
		"MP_LR_Tat_005_M",
		"MP_LR_Tat_007_M",
		"MP_LR_Tat_009_M",
		"MP_LR_Tat_010_M",
		"MP_LR_Tat_013_M",
		"MP_LR_Tat_014_M",
		"MP_LR_Tat_015_M",
		"MP_LR_Tat_017_M",
		"MP_LR_Tat_020_M",
		"MP_LR_Tat_021_M",
		"MP_LR_Tat_023_M",
		"MP_LR_Tat_026_M",
		"MP_LR_Tat_027_M",
		"MP_LR_Tat_033_M",
	  },
  
	  ['mpheist3_overlays'] = {
		'mpHeist3_Tat_000_M',
		'mpHeist3_Tat_023_M'
	  }
	},
  
	TattooCats = {
	  {"ZONE_TORSO", 0},
	  {"ZONE_HEAD", 0},
	  {"ZONE_LEFT_ARM", 0},
	  {"ZONE_RIGHT_ARM", 0},
	  {"ZONE_LEFT_LEG", 0},
	  {"ZONE_RIGHT_LEG", 0},
	  {"ZONE_UNKNOWN", 0},
	  {"ZONE_NONE", 0},
	},
  
	fr_skins = {
	  'mp_f_freemode_01',
	  'a_f_m_beach_01',
	  'a_f_m_bevhills_01',
	  'a_f_m_bevhills_02',
	  'a_f_m_bodybuild_01',
	  'a_f_m_business_02',
	  'a_f_m_downtown_01',
	  'a_f_m_eastsa_01',
	  'a_f_m_eastsa_02',
	  'a_f_m_fatbla_01',
	  'a_f_m_fatcult_01',
	  'a_f_m_fatwhite_01',
	  'a_f_m_ktown_01',
	  'a_f_m_ktown_02',
	  'a_f_m_prolhost_01',
	  'a_f_m_salton_01',
	  'a_f_m_skidrow_01',
	  'a_f_m_soucentmc_01',
	  'a_f_m_soucent_01',
	  'a_f_m_soucent_02',
	  'a_f_m_tourist_01',
	  'a_f_m_trampbeac_01',
	  'a_f_m_tramp_01',
	  'a_f_o_genstreet_01',
	  'a_f_o_indian_01',
	  'a_f_o_ktown_01',
	  'a_f_o_salton_01',
	  'a_f_o_soucent_01',
	  'a_f_o_soucent_02',
	  'a_f_y_beach_01',
	  'a_f_y_bevhills_01',
	  'a_f_y_bevhills_02',
	  'a_f_y_bevhills_03',
	  'a_f_y_bevhills_04',
	  'a_f_y_business_01',
	  'a_f_y_business_02',
	  'a_f_y_business_03',
	  'a_f_y_business_04',
	  'a_f_y_eastsa_01',
	  'a_f_y_eastsa_02',
	  'a_f_y_eastsa_03',
	  'a_f_y_epsilon_01',
	  'a_f_y_fitness_01',
	  'a_f_y_fitness_02',
	  'a_f_y_genhot_01',
	  'a_f_y_golfer_01',
	  'a_f_y_hiker_01',
	  'a_f_y_hipster_01',
	  'a_f_y_hipster_02',
	  'a_f_y_hipster_03',
	  'a_f_y_hipster_04',
	  'a_f_y_indian_01',
	  'a_f_y_juggalo_01',
	  'a_f_y_runner_01',
	  'a_f_y_rurmeth_01',
	  'a_f_y_scdressy_01',
	  'a_f_y_skater_01',
	  'a_f_y_soucent_01',
	  'a_f_y_soucent_02',
	  'a_f_y_soucent_03',
	  'a_f_y_tennis_01',
	  'a_f_y_tourist_01',
	  'a_f_y_tourist_02',
	  'a_f_y_vinewood_01',
	  'a_f_y_vinewood_02',
	  'a_f_y_vinewood_03',
	  'a_f_y_vinewood_04',
	  'a_f_y_yoga_01',
	  'g_f_y_ballas_01',
	  'g_f_y_families_01',
	  'g_f_y_lost_01',
	  'g_f_y_vagos_01',
	  'mp_f_deadhooker',
	  'mp_f_misty_01',
	  'mp_s_m_armoured_01',
	  's_f_m_fembarber',
	  's_f_m_maid_01',
	  's_f_m_shop_high',
	  's_f_m_sweatshop_01',
	  's_f_y_airhostess_01',
	  's_f_y_bartender_01',
	  's_f_y_baywatch_01',
	  's_f_y_cop_01',
	  's_f_y_factory_01',
	  's_f_y_hooker_01',
	  's_f_y_hooker_02',
	  's_f_y_hooker_03',
	  's_f_y_migrant_01',
	  's_f_y_movprem_01',
	  'ig_kerrymcintosh',
	  'ig_janet',
	  'ig_jewelass',
	  'ig_magenta',
	  'ig_marnie',
	  'ig_patricia',
	  'ig_screen_writer',
	  'ig_tanisha',
	  'ig_tonya',
	  'u_f_m_corpse_01',
	  'u_f_m_miranda',
	  'u_f_m_promourn_01',
	  'u_f_o_moviestar',
	  'u_f_o_prolhost_01',
	  'u_f_y_bikerchic',
	  'u_f_y_comjane',
	  'u_f_y_corpse_01',
	  'u_f_y_corpse_02',
	  'u_f_y_hotposh_01',
	  'u_f_y_jewelass_01',
	  'u_f_y_mistress',
	  'u_f_y_poppymich',
	  'u_f_y_princess',
	  'u_f_y_spyactress',
	  'ig_amandatownley',
	  'ig_ashley',
	  'ig_andreas',
	  'ig_ballasog',
	  'ig_maryannn',
	  'ig_maude',
	  'ig_michelle',
	  'ig_mrs_thornhill',
	  'ig_natalia',
	  's_f_y_scrubs_01',
	  's_f_y_sheriff_01',
	  's_f_y_shop_low',
	  's_f_y_shop_mid',
	  'ig_mrsphillips',
	  'ig_mrs_thornhill',
	  'ig_molly',
	  'ig_natalia',
	  's_f_y_sweatshop_01',
	  'ig_paige',
	  'a_f_y_femaleagent',
	  'a_f_y_hippie_01',
	  'A_F_Y_ClubCust_04',
	  'A_F_Y_StudioParty_01',
	  'A_F_Y_StudioParty_02',
	  'IG_Entourage_A',
	  'IG_Entourage_B',
	  'IG_Imani',
	  'IG_ISLDJ_04_D_01',
	  'IG_Jackie',
	  'IG_Kaylee',
	  'IG_SoundEng_00',
	  'S_F_M_StudioAssist_01',
	  'S_F_Y_BeachBarStaff_01',
	  'S_F_Y_ClubBar_02',
	  'a_m_o_acult_02',
	},
  
	frm_skins = {
	  'mp_m_freemode_01',
	  'player_one',
	  'player_two',
	  'player_zero',
	  'ig_trafficwarden',
	  'hc_driver',
	  'hc_gunman',
	  'hc_hacker',
	  'ig_paige',
	  'ig_abigail',
	  'ig_bankman',
	  'ig_barry',
	  'ig_bestmen',
	  'ig_beverly',
	  'ig_brad',
	  'ig_bride',
	  'ig_car3guy1',
	  'ig_car3guy2',
	  'ig_casey',
	  'ig_chef',
	  'ig_chengsr',
	  'ig_chrisformage',
	  'ig_clay',
	  'ig_claypain',
	  'ig_cletus',
	  'ig_dale',
	  'ig_davenorton',
	  'ig_denise',
	  'ig_devin',
	  'ig_dom',
	  'ig_dreyfuss',
	  'ig_drfriedlander',
	  'ig_fabien',
	  'ig_fbisuit_01',
	  'ig_floyd',
	  'ig_groom',
	  'ig_hao',
	  'ig_hunter',
	  'csb_prolsec',
	  'ig_jay_norris',
	  'ig_jimmyboston',
	  'ig_jimmydisanto',
	  'ig_joeminuteman',
	  'ig_johnnyklebitz',
	  'ig_josef',
	  'ig_josh',
	  'ig_lamardavis',
	  'ig_lazlow',
	  'ig_lestercrest',
	  'ig_lifeinvad_01',
	  'ig_lifeinvad_02',
	  'ig_manuel',
	  'ig_milton',
	  'ig_mrk',
	  'ig_nervousron',
	  'ig_nigel',
	  'ig_old_man1a',
	  'ig_old_man2',
	  'ig_oneil',
	  'ig_ortega',
	  'ig_paper',
	  'ig_priest',
	  'ig_prolsec_02',
	  'ig_ramp_gang',
	  'ig_ramp_hic',
	  'ig_ramp_hipster',
	  'ig_ramp_mex',
	  'ig_roccopelosi',
	  'ig_russiandrunk',
	  'ig_siemonyetarian',
	  'ig_solomon',
	  'ig_stevehains',
	  'ig_stretch',
	  'ig_talina',
	  'ig_taocheng',
	  'ig_taostranslator',
	  'ig_tenniscoach',
	  'ig_terry',
	  'ig_tomepsilon',
	  'ig_tylerdix',
	  'ig_wade',
	  'ig_zimbor',
	  's_m_m_paramedic_01',
	  'a_m_m_afriamer_01',
	  'a_m_m_beach_01',
	  'a_m_m_beach_02',
	  'a_m_m_bevhills_01',
	  'a_m_m_bevhills_02',
	  'a_m_m_business_01',
	  'a_m_m_eastsa_01',
	  'a_m_m_eastsa_02',
	  'a_m_m_farmer_01',
	  'a_m_m_fatlatin_01',
	  'a_m_m_genfat_01',
	  'a_m_m_genfat_02',
	  'a_m_m_golfer_01',
	  'a_m_m_hasjew_01',
	  'a_m_m_hillbilly_01',
	  'a_m_m_hillbilly_02',
	  'a_m_m_indian_01',
	  'a_m_m_ktown_01',
	  'a_m_m_malibu_01',
	  'a_m_m_mexcntry_01',
	  'a_m_m_mexlabor_01',
	  'a_m_m_og_boss_01',
	  'a_m_m_paparazzi_01',
	  'a_m_m_polynesian_01',
	  'a_m_m_prolhost_01',
	  'a_m_m_rurmeth_01',
	  'a_m_m_salton_01',
	  'a_m_m_salton_02',
	  'a_m_m_salton_03',
	  'a_m_m_salton_04',
	  'a_m_m_skater_01',
	  'a_m_m_skidrow_01',
	  'a_m_m_socenlat_01',
	  'a_m_m_soucent_01',
	  'a_m_m_soucent_02',
	  'a_m_m_soucent_03',
	  'a_m_m_soucent_04',
	  'a_m_m_stlat_02',
	  'a_m_m_tennis_01',
	  'a_m_m_tourist_01',
	  'a_m_m_trampbeac_01',
	  'a_m_m_tramp_01',
	  'a_m_m_tranvest_01',
	  'a_m_m_tranvest_02',
	  'a_m_o_beach_01',
	  'a_m_o_genstreet_01',
	  'a_m_o_ktown_01',
	  'a_m_o_salton_01',
	  'a_m_o_soucent_01',
	  'a_m_o_soucent_02',
	  'a_m_o_soucent_03',
	  'a_m_o_tramp_01',
	  'a_m_y_beachvesp_01',
	  'a_m_y_beachvesp_02',
	  'a_m_y_beach_01',
	  'a_m_y_beach_02',
	  'a_m_y_beach_03',
	  'a_m_y_bevhills_01',
	  'a_m_y_bevhills_02',
	  'a_m_y_breakdance_01',
	  'a_m_y_busicas_01',
	  'a_m_y_business_01',
	  'a_m_y_business_02',
	  'a_m_y_business_03',
	  'a_m_y_cyclist_01',
	  'a_m_y_dhill_01',
	  'a_m_y_downtown_01',
	  'a_m_y_eastsa_01',
	  'a_m_y_eastsa_02',
	  'a_m_y_epsilon_01',
	  'a_m_y_epsilon_02',
	  'a_m_y_gay_01',
	  'a_m_y_gay_02',
	  'a_m_y_genstreet_01',
	  'a_m_y_genstreet_02',
	  'a_m_y_golfer_01',
	  'a_m_y_hasjew_01',
	  'a_m_y_hiker_01',
	  'a_m_y_hipster_01',
	  'a_m_y_hipster_02',
	  'a_m_y_hipster_03',
	  'a_m_y_indian_01',
	  'a_m_y_jetski_01',
	  'a_m_y_juggalo_01',
	  'a_m_y_ktown_01',
	  'a_m_y_ktown_02',
	  'a_m_y_latino_01',
	  'a_m_y_methhead_01',
	  'a_m_y_mexthug_01',
	  'a_m_y_motox_01',
	  'a_m_y_motox_02',
	  'a_m_y_musclbeac_01',
	  'a_m_y_musclbeac_02',
	  'a_m_y_polynesian_01',
	  'a_m_y_roadcyc_01',
	  'a_m_y_runner_01',
	  'a_m_y_runner_02',
	  'a_m_y_salton_01',
	  'a_m_y_skater_01',
	  'a_m_y_skater_02',
	  'a_m_y_soucent_01',
	  'a_m_y_soucent_02',
	  'a_m_y_soucent_03',
	  'a_m_y_soucent_04',
	  'a_m_y_stbla_01',
	  'a_m_y_stbla_02',
	  'a_m_y_stlat_01',
	  'a_m_y_stwhi_01',
	  'a_m_y_stwhi_02',
	  'a_m_y_sunbathe_01',
	  'a_m_y_surfer_01',
	  'a_m_y_vindouche_01',
	  'a_m_y_vinewood_01',
	  'a_m_y_vinewood_02',
	  'a_m_y_vinewood_03',
	  'a_m_y_vinewood_04',
	  'a_m_y_yoga_01',
	  'g_m_m_armboss_01',
	  'g_m_m_armgoon_01',
	  'g_m_m_armlieut_01',
	  'g_m_m_chemwork_01',
	  'g_m_m_chiboss_01',
	  'g_m_m_chicold_01',
	  'g_m_m_chigoon_01',
	  'g_m_m_chigoon_02',
	  'g_m_m_korboss_01',
	  'g_m_m_mexboss_01',
	  'g_m_m_mexboss_02',
	  'g_m_y_armgoon_02',
	  'g_m_y_azteca_01',
	  'g_m_y_ballaeast_01',
	  'g_m_y_ballaorig_01',
	  'g_m_y_ballasout_01',
	  'g_m_y_famca_01',
	  'g_m_y_famdnf_01',
	  'g_m_y_famfor_01',
	  'g_m_y_korean_01',
	  'g_m_y_korean_02',
	  'g_m_y_korlieut_01',
	  'g_m_y_lost_01',
	  'g_m_y_lost_02',
	  'g_m_y_lost_03',
	  'g_m_y_mexgang_01',
	  'g_m_y_mexgoon_01',
	  'g_m_y_mexgoon_02',
	  'g_m_y_mexgoon_03',
	  'g_m_y_pologoon_01',
	  'g_m_y_pologoon_02',
	  'g_m_y_salvaboss_01',
	  'g_m_y_salvagoon_01',
	  'g_m_y_salvagoon_02',
	  'g_m_y_salvagoon_03',
	  'g_m_y_strpunk_01',
	  'g_m_y_strpunk_02',
	  'mp_m_claude_01',
	  'mp_m_exarmy_01',
	  'mp_m_shopkeep_01',
	  's_m_m_ammucountry',
	  's_m_m_autoshop_01',
	  's_m_m_autoshop_02',
	  's_m_m_bouncer_01',
	  's_m_m_chemsec_01',
	  's_m_m_cntrybar_01',
	  's_m_m_dockwork_01',
	  's_m_m_doctor_01',
	  's_m_m_fiboffice_01',
	  's_m_m_fiboffice_02',
	  's_m_m_gaffer_01',
	  's_m_m_gardener_01',
	  's_m_m_gentransport',
	  's_m_m_hairdress_01',
	  's_m_m_highsec_01',
	  's_m_m_highsec_02',
	  's_m_m_janitor',
	  's_m_m_lathandy_01',
	  's_m_m_lifeinvad_01',
	  's_m_m_linecook',
	  's_m_m_lsmetro_01',
	  's_m_m_mariachi_01',
	  's_m_m_marine_01',
	  's_m_m_marine_02',
	  's_m_m_migrant_01',
	  's_m_m_movprem_01',
	  's_m_m_movspace_01',
	  's_m_m_pilot_01',
	  's_m_m_pilot_02',
	  's_m_m_postal_01',
	  's_m_m_postal_02',
	  's_m_m_scientist_01',
	  's_m_m_security_01',
	  's_m_m_strperf_01',
	  's_m_m_strpreach_01',
	  's_m_m_strvend_01',
	  's_m_m_trucker_01',
	  's_m_m_ups_01',
	  's_m_m_ups_02',
	  's_m_o_busker_01',
	  's_m_y_airworker',
	  's_m_y_ammucity_01',
	  's_m_y_armymech_01',
	  's_m_y_autopsy_01',
	  's_m_y_barman_01',
	  's_m_y_baywatch_01',
	  's_m_y_blackops_01',
	  's_m_y_blackops_02',
	  's_m_y_busboy_01',
	  's_m_y_chef_01',
	  's_m_y_clown_01',
	  's_m_y_construct_01',
	  's_m_y_construct_02',
	  's_m_y_cop_01',
	  's_m_y_dealer_01',
	  's_m_y_devinsec_01',
	  's_m_y_dockwork_01',
	  's_m_y_doorman_01',
	  's_m_y_dwservice_01',
	  's_m_y_dwservice_02',
	  's_m_y_factory_01',
	  's_m_y_garbage',
	  's_m_y_grip_01',
	  's_m_y_marine_01',
	  's_m_y_marine_02',
	  's_m_y_marine_03',
	  's_m_y_mime',
	  's_m_y_pestcont_01',
	  's_m_y_pilot_01',
	  's_m_y_prisoner_01',
	  's_m_y_robber_01',
	  's_m_y_shop_mask',
	  's_m_y_strvend_01',
	  's_m_y_uscg_01',
	  's_m_y_valet_01',
	  's_m_y_waiter_01',
	  's_m_y_winclean_01',
	  's_m_y_xmech_01',
	  's_m_y_xmech_02',
	  'u_m_m_aldinapoli',
	  'u_m_m_bankman',
	  'u_m_m_bikehire_01',
	  'u_m_m_fibarchitect',
	  'u_m_m_filmdirector',
	  'u_m_m_glenstank_01',
	  'u_m_m_griff_01',
	  'u_m_m_jesus_01',
	  'u_m_m_jewelsec_01',
	  'u_m_m_jewelthief',
	  'u_m_m_markfost',
	  'u_m_m_partytarget',
	  'u_m_m_prolsec_01',
	  'u_m_m_promourn_01',
	  'u_m_m_rivalpap',
	  'u_m_m_spyactor',
	  'u_m_m_willyfist',
	  'u_m_o_finguru_01',
	  'u_m_o_taphillbilly',
	  'u_m_o_tramp_01',
	  'u_m_y_abner',
	  'u_m_y_antonb',
	  'u_m_y_babyd',
	  'u_m_y_baygor',
	  'u_m_y_burgerdrug_01',
	  'u_m_y_chip',
	  'u_m_y_cyclist_01',
	  'u_m_y_fibmugger_01',
	  'u_m_y_guido_01',
	  'u_m_y_gunvend_01',
	  'u_m_y_imporage',
	  'u_m_y_mani',
	  'u_m_y_militarybum',
	  'u_m_y_paparazzi',
	  'u_m_y_party_01',
	  'u_m_y_pogo_01',
	  'u_m_y_prisoner_01',
	  'u_m_y_proldriver_01',
	  'u_m_y_sbike',
	  'u_m_y_staggrm_01',
	  'u_m_y_tattoo_01',
	  'u_m_y_zombie_01',
	  'u_m_y_hippie_01',
	  'a_m_y_hippy_01',
	  'a_m_y_stbla_m',
	  'ig_terry_m',
	  'a_m_m_ktown_m',
	  'a_m_y_skater_m',
	  'u_m_y_coop',
	  'ig_car3guy1_m',
	  'tony',
	  'g_m_m_chigoon_02_m',
	  'g_m_y_famfor_01_m',
	  'ig_trafficwarden_m',
	  'g_m_m_chiboss_01_m',
	  'ig_flakey',
	  'mp_m_avongoon',
	  'A_M_O_Beach_02',
	  'A_M_Y_ClubCust_04',
	  'A_M_Y_StudioParty_01',
	  'CSB_JIO',
	  'CSB_JuanStrickler',
	  'CSB_MJO_02',
	  'CSB_Vagos_Leader',
	  'CSB_Vernon',
	  'IG_Ballas_Leader',
	  'IG_Billionaire',
	  'IG_EnglishDave_02',
	  'IG_Golfer_A',
	  'IG_Gustavo',
	  'IG_HelmsmanPavel',
	  'IG_Johnny_Guns',
	  'IG_MiguelMadrazo',
	  'IG_OldRichGuy',
	  'IG_Pilot',
	  'IG_Security_A',
	  'IG_Vincent_3',
	  'S_M_M_DrugProcess_01',
	  'S_M_M_HighSec_04',
	  'S_M_M_HighSec_05',
	  'S_M_M_StudioSouEng_02',
	  'S_M_M_StudioProd_01',
	  'CSB_Musician_00',
	},
  
	drawable_names = {
	  "face", 
	  "masks", 
	  "hair", 
	  "torsos", 
	  "legs", 
	  "bags", 
	  "shoes", 
	  "neck", 
	  "shirts", 
	  "vest", 
	  "decals", 
	  "jackets"
	},
  
	prop_names = {
	  "hats", 
	  "glasses", 
	  "earrings", 
	  "mouth", 
	  "lhand", 
	  "rhand", 
	  "watches", 
	  "braclets"
	},
  
	head_overlays = {"Blemishes","FacialHair","Eyebrows","Ageing","Makeup","Blush","Complexion","SunDamage","Lipstick","MolesFreckles","ChestHair","BodyBlemishes","AddBodyBlemishes","eyecolor"},
	face_features = {"Nose_Width","Nose_Peak_Hight","Nose_Peak_Lenght","Nose_Bone_High","Nose_Peak_Lowering","Nose_Bone_Twist","EyeBrown_High","EyeBrown_Forward","Cheeks_Bone_High","Cheeks_Bone_Width","Cheeks_Width","Eyes_Openning","Lips_Thickness","Jaw_Bone_Width","Jaw_Bone_Back_Lenght","Cheek_Bone_Lowering","Cheek_Bone_Lenght","Cheek_Bone_Width","Cheek_Hole","Neck_Thikness"},
	
	tatCategory = {},
	tattooHashListM = {},
	tattooHashListF = {},
  
	InsideClothing = function(self)
  
	  if not self.Inside then return false end;
  
	  if self.Inside.type ~= 'clothing' then 
		return false 
	  end
	  
	  local jobInfo = self.Inside.info.job
	  if not jobInfo then
		return true
	  end

	  local myJob = exports['isPed']:isPed('myjob')
  
	  if type(jobInfo) == 'table' then
		for i=1, #jobInfo do
		  if jobInfo[i] == myJob.name then
			isAllowed = true
			break
		  end
		end
	  else
		return myJob.name == jobInfo
	  end
  
	  return isAllowed
  
	end,
  
	InsideBarber = function(self)
  
	  if not self.Inside then return false end;
	  if self.Inside.type ~= 'barber' then return false end;
	  
	  local jobInfo = self.Inside.info.job
	  if not jobInfo then
		return true
	  end
  
	  local myJob = exports['isPed']:isPed('myjob')
    
	  if type(jobInfo) == 'table' then
		for i=1, #jobInfo do
		  if jobInfo[i] == myJob.name then
			isAllowed = true
			break
		  end
		end
	  else
		return myJob.name == jobInfo
	  end
  
	  return isAllowed
  
	end,
  
	InsideTattoo = function(self)
  
	  if not self.Inside then return false end;
	  if self.Inside.type ~= 'tattoo' then return false end;
	  
	  local jobInfo = self.Inside.info.job
	  if not jobInfo then
		return true
	  end
  
	  local myJob = exports['isPed']:isPed('myjob')
    
	  if type(jobInfo) == 'table' then
		for i=1, #jobInfo do
		  if jobInfo[i] == myJob.name then
			isAllowed = true
			break
		  end
		end
	  else
		return myJob.name == jobInfo
	  end
  
	  return isAllowed
  
	end,

	OpenMenu = function(self)
  
	  if self.isOpen then return end;
	  if not self.Inside then return end;
  
	  local jobInfo = self.Inside.info.job
	  if not jobInfo then self:ToggleNui(true, self.Inside.type) return end;
  
	  local myJob = exports['isPed']:isPed('myjob')
    
	  local isAllowed = false;
	  
	  if type(jobInfo) == 'table' then
  
		for i=1, #jobInfo do
		  if jobInfo[i] == myJob.name then
			isAllowed = true
			break
		  end
		end
  
	  else
  
		local myJob = exports['isPed']:isPed('myjob')

		isAllowed = myJob == jobInfo
  
	  end
  
	  if not isAllowed then return end;
	  self:ToggleNui(true, self.Inside.type)
  
	end,
  
	CreatedCustomZones = {},
  
	RemoveZone = function(self, name)
  
	  self.CreatedCustomZones[name]:destroy()
  
	end,
  
	CreateZone = function(self, name, position, height, width)
  
	  self.CreatedCustomZones[name] = BoxZone:Create(position, height, width, {
		name=name,
		offset={0.0, 0.0, 0.0},
		scale={1.0, 1.0, 1.0},
		debugPoly=false,
		heading=position.w or 0.0,
		minZ = position.z - 2.0,
		maxZ = position.z + 2.0,
		destroy = true
	  })
	  
	  self.CreatedCustomZones[name]:onPointInOut(PolyZone.getPlayerPosition, function(isPointInside, point)
		if isPointInside then
  
		  self.Inside = {
			type = "clothing",
			info = {}
		  }
  
		  exports['bd-interface']:showInteraction('[M] Open Menu')
		  
		  Citizen.CreateThread(function()
			while self.Inside do
				Citizen.Wait(5)
				if IsControlJustReleased(0, 244) then
					TriggerEvent('bd-hud:EnableHud', false)
					TriggerEvent('bd-clothing:openMenu')
					exports['bd-interface']:hideInteraction()
				end
			end
		end)
		    
		elseif self.Inside then
		  
			exports['bd-interface']:hideInteraction()
			self.Inside = false
  
		end
	  end)
  
	end,
  
	init = function(self)
	  self.tatCategory = self:GetTatCategs()
	  self.tattooHashListM = self:CreateHashList("M")
	  self.tattooHashListF = self:CreateHashList("F")
  
	  for i=1, #self.ClothingShops do
  
		local shop = self.ClothingShops[i]
		local shopPos = shop['coords']
  
			  if not (shop['blip'] == false) then
  
				--   exports['np-build']:createBlip({
				-- 	  resource = GetCurrentResourceName(),
				-- 	  group = "Clothing",
				-- 	  coords = shopPos,
				-- 	  sprite = 73,
				-- 	  scale = 0.7,
				-- 	  color = 81,
				-- 	  shortrange = true,
				-- 	  text = 'Clothing Store'
				--   })
			  end
  
		--if shop.radius then
  
		  BoxZone:Create(shopPos, shop.radius or 5.0, shop.radius or 5.0, {
			name="ClothingShop-"..i,
			offset={0.0, 0.0, 0.0},
			scale={1.0, 1.0, 1.0},
			debugPoly=false,
			heading=shop.heading or 0.0,
			minZ = shopPos.z - 2.0,
			maxZ = shopPos.z + 2.0
		  }):onPointInOut(PolyZone.getPlayerPosition, function(isPointInside, point)
			if isPointInside then
  
			  self.Inside = {
				type = "clothing",
				info = shop
			  }
  
			exports['bd-interface']:showInteraction('[M] To buy clothes')
			pIsInClothingZone = 1

			Citizen.CreateThread(function()
				while self.Inside do
					Citizen.Wait(5)
					if IsControlJustReleased(0, 244) then
						TriggerEvent('bd-hud:EnableHud', false)
						TriggerEvent('bd-clothing:openMenu')
						exports['bd-interface']:hideInteraction()
					end
				end
			end)

			elseif self.Inside then
			  
			exports['bd-interface']:hideInteraction()
			pIsInClothingZone = 0
			self.Inside = false
  
			end
		  end)
  
		--end
  
		  end
  
	  for i=1, #self.BarberShops do
  
		local shop = self.BarberShops[i]
		local shopPos = shop['coords']
		
			  if not (shop['blip'] == false) then
  
				--   exports['np-build']:createBlip({
				-- 	  resource = GetCurrentResourceName(),
				-- 	  group = "Barber",
				-- 	  coords = shopPos,
				-- 	  sprite = 71,
				-- 	  scale = 0.7,
				-- 	  color = 51,
				-- 	  shortrange = true,
				-- 	  text = 'Barber Shop'
				--   })
  
			  end
  
		--if shop.radius then
  
		  BoxZone:Create(shopPos, shop.radius or 5.0, shop.radius or 5.0, {
			name="BarberShop",
			offset={0.0, 0.0, 0.0},
			scale={1.0, 1.0, 1.0},
			debugPoly=false,
			heading=shop.heading or 0.0,
			minZ = shopPos.z - 2.0,
			maxZ = shopPos.z + 2.0
		  }):onPointInOut(PolyZone.getPlayerPosition, function(isPointInside, point)
			if isPointInside then
  
			  self.Inside = {
				type = "barber",
				info = shop
			  }
  
			exports['bd-interface']:showInteraction('[M] To actually get some bitches')
  
			Citizen.CreateThread(function()
				while self.Inside do
					Citizen.Wait(5)
					if IsControlJustReleased(0, 244) then
						TriggerEvent('bd-hud:EnableHud', false)
						TriggerEvent('bd-clothing:openMenu')
						exports['bd-interface']:hideInteraction()
					end
				end
			end)

			elseif self.Inside then
			  
				exports['bd-interface']:hideInteraction()
				self.Inside = false
  
			end
		  end)
  
		--end
  
		  end
  
	  for i=1, #self.TattoosShops do
  
		local shop = self.TattoosShops[i]
		local shopPos = shop['coords']
  
			  if not (shop['blip'] == false) then
  
				--   exports['np-build']:createBlip({
				-- 	  resource = GetCurrentResourceName(),
				-- 	  group = "Tattoo",
				-- 	  coords = shopPos,
				-- 	  sprite = 75,
				-- 	  scale = 0.7,
				-- 	  color = 1,
				-- 	  shortrange = true,
				-- 	  text = 'Tattoo Shop'
				--   })
  
			  end
  
		--if shop.radius then
  
		  BoxZone:Create(shopPos, shop.radius or 5.0, shop.radius or 5.0, {
			name="TattooShop",
			offset={0.0, 0.0, 0.0},
			scale={1.0, 1.0, 1.0},
			debugPoly=false,
			heading=shop.heading or 0.0,
			minZ = shopPos.z - 2.0,
			maxZ = shopPos.z + 2.0
		  }):onPointInOut(PolyZone.getPlayerPosition, function(isPointInside, point)
			if isPointInside then
  
			  self.Inside = {
				type = "tattoo",
				info = shop
			  }
  
			exports['bd-interface']:showInteraction('[M] Get tattoos')

			Citizen.CreateThread(function()
				while self.Inside do
					Citizen.Wait(5)
					if IsControlJustReleased(0, 244) then
						TriggerEvent('bd-hud:EnableHud', false)
						TriggerEvent('bd-clothing:openMenu')
						exports['bd-interface']:hideInteraction()
					end
				end
			end)

			elseif self.Inside then
			  
				exports['bd-interface']:hideInteraction()
				self.Inside = false
  
			end
		  end)
  
		--end
  
		  end
  
	  TriggerEvent('chat:addSuggestion', '/g1', "Glasses on")
	  TriggerEvent('chat:addSuggestion', '/g0', "Glasses off")
	  TriggerEvent('chat:addSuggestion', '/e1', "Earpiece on")
	  TriggerEvent('chat:addSuggestion', '/e0', "Earpiece off")
	  TriggerEvent('chat:addSuggestion', '/m1', "Mask on")
	  TriggerEvent('chat:addSuggestion', '/m0', "Mask off")
	  TriggerEvent('chat:addSuggestion', '/t1', "Torso on")
	  TriggerEvent('chat:addSuggestion', '/t0', "Torso off")
	  TriggerEvent('chat:addSuggestion', '/h1', "Hat on")
	  TriggerEvent('chat:addSuggestion', '/h0', "Hat off")
  
	end,
  
	WhichListBitch = function(self)
	  local plyModel = GetEntityModel( PlayerPedId() )
	  for k,v in pairs(self.fr_skins) do
		if plyModel == GetHashKey(v) then
		  return self.tattooHashListF
		end
	  end
	  return self.tattooHashListM
	end,
  
	AddZoneIDToTattoos = function(self)
	  local tempTattoos = {}
	  for key in pairs(self.TattoosList) do
		for i = 1, #self.TattoosList[key] do
		  if tempTattoos[key] == nil then tempTattoos[key] = {} end
		  tempTattoos[key][i] = {
			self.TattoosList[key][i], self.TattooCats[GetPedDecorationZoneFromHashes(key, GetHashKey(self.TattoosList[key][i]) ) + 1 ][1]
		  }
		end
	  end
	  self.TattoosList = tempTattoos
	end,
  
	CreateHashList = function(self, gender)
  
	  local tempHashList = {}
  
	  local count = 10;
  
	  for hashGroup, tattoos in pairs(self.TattoosList) do
  
		for i=1, #tattoos do
		  
		  local tattoo = tattoos[i]
		  local tattooName, tattooCategory = tattoo[1], tattoo[2]
  
		  if type(tattooName) == 'table' then
			if gender:lower() == "F" then
						  tattooName = tattooName[2]
					  else
						  tattooName = tattooName[1]
					  end
		  end
  
		  if not tempHashList[tattooCategory] then tempHashList[tattooCategory] = {} end;
  
		  table.insert( tempHashList[tattooCategory], { 
			[1] = GetHashKey(tattooName), 
			[2] = GetHashKey(hashGroup), 
			[3] = #tempHashList[tattooCategory] + 1
		  })
  
		end
  
	  end
  
	  return tempHashList
  
  
	  --[[local tempTattooHashList = {}
	  for key, blaldrjrj in pairs(self.TattoosList) do
		for i = 1, #self.TattoosList[key] do
		  local categ = self.TattoosList[key][i][2]
		  if tempTattooHashList[categ] == nil then tempTattooHashList[categ] = {} end
				  local idfk = self.TattoosList[key][i][1]
				  if type(self.TattoosList[key][i][1]) == "table" then
					  if gender == "F" then
						  idfk = self.TattoosList[key][i][1][2]
					  else
						  idfk = self.TattoosList[key][i][1][1]
					  end
				  end
		  table.insert( tempTattooHashList[categ], { 
			[1] = GetHashKey(idfk), 
			[2] = GetHashKey(key), 
			[3] = i 
		  })
		end
	  end
	  return tempTattooHashList]]
	end,
  
	GetTatCategs = function(self)
	  for key in pairs(self.TattoosList) do
		for i = 1, #self.TattoosList[key] do
			local zone = GetPedDecorationZoneFromHashes( key, GetHashKey(self.TattoosList[key][i][1]) )
			self.TattooCats[zone+1] = {self.TattooCats[zone+1][1], self.TattooCats[zone+1][2]+1}
		end
	  end
	  return self.TattooCats
	end,
  
	GetSkin = function(self)
	  local entModel = GetEntityModel(PlayerPedId())
	  for i = 1, #self.frm_skins do if GetHashKey(self.frm_skins[i]) == entModel then return {name="skin_male", value=i} end end
	  for i = 1, #self.fr_skins do if GetHashKey(self.fr_skins[i]) == entModel then return {name="skin_female", value=i} end end
	  return false
	end,
	
	IsPedMale = function(self)
  
	  local skinInfo = self:GetSkin()
	  if not skinInfo then return true end;
  
	  return skinInfo.name == 'skin_male'
  
	end,
  
	GetDrawables = function(self)
	  local drawables = {}
	  local plyPed = PlayerPedId()
	  local model = GetEntityModel(plyPed)
	  local mpPed = false
	  if (model == `mp_f_freemode_01` or model == `mp_m_freemode_01`) then mpPed = true end
	  for i = 0, #self.drawable_names-1 do
		if mpPed and self.drawable_names[i+1] == "shirts" and GetPedDrawableVariation(plyPed, i) == -1 then SetPedComponentVariation(plyPed, i, 15, 0, 2) end
		drawables[i] = {self.drawable_names[i+1], GetPedDrawableVariation(plyPed, i)}
	  end
	  return drawables
	end,
  
	GetProps = function(self)
	  local props = {}
	  local plyPed = PlayerPedId()
	  for i = 0, #self.prop_names-1 do props[i] = {self.prop_names[i+1], GetPedPropIndex(plyPed, i)} end
	  return props
	end,
  
	GetDrawTextures = function(self)
	  local textures = {}
	  local plyPed = PlayerPedId()
	  for i = 0, #self.drawable_names-1 do table.insert(textures, {self.drawable_names[i+1], GetPedTextureVariation(plyPed, i)}) end
	  return textures
	end,
  
	GetPropTextures = function(self)
	  local textures = {}
	  local plyPed = PlayerPedId()
	  for i = 0, #self.prop_names-1 do table.insert(textures, {self.prop_names[i+1], GetPedPropTextureIndex(plyPed, i)}) end
	  return textures
	end,
  
	GetDrawablesTotal = function(self)
	  local drawables = {}
	  local plyPed = PlayerPedId()
	  for i = 0, #self.drawable_names - 1 do drawables[i] = {self.drawable_names[i+1], GetNumberOfPedDrawableVariations(plyPed, i)} end
	  return drawables
	end,
  
	GetPropDrawablesTotal = function(self)
	  local props = {}
	  local plyPed = PlayerPedId()
	  for i = 0, #self.prop_names - 1 do props[i] = {self.prop_names[i+1], GetNumberOfPedPropDrawableVariations(plyPed, i)} end
	  return props
	end,
  
	GetTextureTotals = function(self)
  
	  local values = {}
  
	  local draw, props = self:GetDrawables(), self:GetProps()
  
	  local plyPed = PlayerPedId()
  
	  for idx = 0, #draw-1 do
		local name = draw[idx][1]
		local value = draw[idx][2]
		values[name] = GetNumberOfPedTextureVariations(plyPed, idx, value)
	  end
	
	  for idx = 0, #props-1 do
		local name = props[idx][1]
		local value = props[idx][2]
		values[name] = GetNumberOfPedPropTextureVariations(plyPed, idx, value)
	  end
  
	  return values
  
	end,
  
	SetClothing = function(self, drawables, props, drawTextures, propTextures, sentPed)
	  
	  local plyPed = sentPed == nil and PlayerPedId() or sentPed
  
	  for i = 1, #self.drawable_names do
		if drawables == nil or drawables[0] == nil then
		  if self.drawable_names[i] == "shirts" and drawables[tostring(i-1)][2] == -1 then
			SetPedComponentVariation(plyPed, i-1, 15, 0, 2)
		  else
			  SetPedComponentVariation(plyPed, i-1, drawables[tostring(i-1)][2], drawTextures[i][2], 2)
		  end
		else
		  if self.drawable_names[i] == "shirts" and drawables[i-1][2] == -1 then
			SetPedComponentVariation(plyPed, i-1, 15, 0, 2)
		  else
			SetPedComponentVariation(plyPed, i-1, drawables[i-1][2], drawTextures[i][2], 2)
		  end
		end
	  end
  
	  for i = 1, #self.prop_names do
		local propZ = (drawables[0] == nil and props[tostring(i-1)][2] or props[i-1][2])
		ClearPedProp(plyPed, i-1)
		SetPedPropIndex(plyPed, i-1, propZ, propTextures[i][2], true)
	  end
  
	  return true
  
	end,
  
	GetSkinTotal = function(self)
	  return { #self.frm_skins, #self.fr_skins }
	end,
  
	toggleClothing = {},
  
	has_value = function(self, tab, val)
	  for index = 1, #tab do
			  if tab[index] == val then return index-1 end
	  end
	  return -1
	end,
  
	ToggleProps = function(self, data)
	  
	  local name = data["name"]
	  local plyPed = PlayerPedId()
  
	  selectedValue = self:has_value(self.drawable_names, name)
	  
	  if selectedValue > -1 then
  
		if (self.toggleClothing[name] ~= nil) then
		  SetPedComponentVariation(plyPed, tonumber(selectedValue), tonumber(self.toggleClothing[name][1]), tonumber(self.toggleClothing[name][2]), 2)
				  self.toggleClothing[name] = nil
		else
		  self.toggleClothing[name] = { GetPedDrawableVariation(plyPed, tonumber(selectedValue)), GetPedTextureVariation(plyPed, tonumber(selectedValue))	}
		  local value = -1
		  if name == "shirts" or name == "torsos" then
			value = 15
			if name == "shirts" and GetEntityModel(PlayerPedId()) == `mp_f_freemode_01` then
			  value = -1
			end
		  end
		  if name == "legs" then
			  value = 14
		  end
		  SetPedComponentVariation(plyPed, tonumber(selectedValue), value, 0, 2)
		end
  
	  else
  
	selectedValue = self:has_value(self.prop_names, name)
		if (selectedValue > -1) then
		  if (self.toggleClothing[name] ~= nil) then
			  SetPedPropIndex(plyPed, tonumber(selectedValue), tonumber(self.toggleClothing[name][1]), tonumber(self.toggleClothing[name][2]), true)
			  self.toggleClothing[name] = nil
		  else
			self.toggleClothing[name] = { GetPedPropIndex(plyPed, tonumber(selectedValue)), GetPedPropTextureIndex(plyPed, tonumber(selectedValue)) }
			  ClearPedProp(plyPed, tonumber(selectedValue))
		  end
		end
	  end
	end,
  
	SaveToggleProps = function(self)
	  local plyPed = PlayerPedId()
	  for k in pairs(self.toggleClothing) do
			local name  = k
			selectedValue = self:has_value(self.drawable_names, name)
			if (selectedValue > -1) then
				SetPedComponentVariation(plyPed, tonumber(selectedValue), tonumber(self.toggleClothing[name][1]), tonumber(self.toggleClothing[name][2]), 2)
				self.toggleClothing[name] = nil
			else
				selectedValue = self:has_value(self.prop_names, name)
				if (selectedValue > -1) then
					SetPedPropIndex(plyPed, tonumber(selectedValue), tonumber(self.toggleClothing[name][1]), tonumber(self.toggleClothing[name][2]), true)
					self.toggleClothing[name] = nil
				end
			end
	  	end
	end,
  
	SetSkin = function(self, model, setDefault)
  
	  local plyPed = PlayerPedId()
	  SetEntityInvincible(plyPed,true)
  
	  if IsModelInCdimage(model) and IsModelValid(model) then
  
		RequestModel(model)
			  while not HasModelLoaded(model) do Wait(0) end
  
		SetPlayerModel(PlayerId(), model)
			  SetModelAsNoLongerNeeded(model)
  
		plyPed = PlayerPedId()
  
		FreezePedCameraRotation(plyPed, true)
  
		if self.savedArmor ~= 0 then 
		  SetPedArmour(plyPed, self.savedArmor) 
		  self.savedArmor = 0 
		end
  
			  if self.SavedHealth and self.SavedHealth > 0 then 
		  SetEntityHealth(plyPed, self.SavedHealth)
		  SetPedCanLosePropsOnDamage(plyPed, false, 0)
		  self.SavedHealth = 0
		else
		  SetEntityHealth(plyPed, 200)
		end
  
		SetEntityMaxHealth(plyPed, model == `s_m_y_prismuscl_01` and 400 or 200)
		SetWeaponDamageModifier(`WEAPON_UNARMED`, model == `s_m_y_prismuscl_01` and 0.70 or 0.35)      
  
		TriggerEvent('imp-scripts:setwalk')
  
		if setDefault and model then
		  if (model ~= `mp_f_freemode_01` and model ~= `mp_m_freemode_01`) then
			SetPedRandomComponentVariation(plyPed, true)
		  else
			SetPedHeadBlendData(plyPed, 0, 0, 0, 15, 0, 0, 0, 1.0, 0, false)
			SetPedComponentVariation(plyPed, 11, 0, 11, 0)
			SetPedComponentVariation(plyPed, 8, 0, 1, 0)
			SetPedComponentVariation(plyPed, 6, 1, 2, 0)
			SetPedHeadOverlayColor(plyPed, 1, 1, 0, 0)
			SetPedHeadOverlayColor(plyPed, 2, 1, 0, 0)
			SetPedHeadOverlayColor(plyPed, 4, 2, 0, 0)
			SetPedHeadOverlayColor(plyPed, 5, 2, 0, 0)
			SetPedHeadOverlayColor(plyPed, 8, 2, 0, 0)
			SetPedHeadOverlayColor(plyPed, 10, 1, 0, 0)
			SetPedHeadOverlay(plyPed, 1, 0, 0.0)
			SetPedHairColor(plyPed, 1, 1)
		  end
		end
	  end
  
	  SetEntityInvincible(PlayerPedId(),false)
	  return true
  
	end,
  
	SetPedHeadBlend = function(self, data)
  
	  local plyPed = PlayerPedId()
	  if data then 
  
		local skinFirst = tonumber(data['skinFirst'])
		if skinFirst <= -1 or skinFirst >= 46 then
		  skinFirst = 0
		end
		local skinSecond = tonumber(data['skinSecond'])
		if skinSecond <= -1 or skinSecond >= 46 then
		  skinSecond = 0
		end
		local skinThird = tonumber(data['skinThird'])
		if skinThird <= -1 or skinThird >= 46 then
			skinThird = 0
		end
  
		SetPedHeadBlendData(plyPed, tonumber(data['shapeFirst']), tonumber(data['shapeSecond']), tonumber(data['shapeThird']), skinFirst, skinSecond, skinThird, tonumber(data['shapeMix']), tonumber(data['skinMix']), tonumber(data['thirdMix']), false)
  
	  end
  
	end,
  
	SetPedFeatures = function(self, data)
  
	  local plyPed = PlayerPedId()
  
	  if not data then
		self:SetSkin( GetEntityModel(plyPed), true )
		return
	  end
  
	  local head = data.headBlend
	  local haircolor = data.hairColor
	  local skinFirst = tonumber(head['skinFirst'])
  
	  if skinFirst <= -1 or skinFirst >= 46 then
		skinFirst = 0
	  end
  
	  local skinSecond = tonumber(head['skinSecond'])
	  if skinSecond <= -1 or skinSecond >= 46 then
		  skinSecond = 0
	  end
  
	  local skinThird = tonumber(head['skinThird'])
	  if skinThird <= -1 or skinThird >= 46 then
		skinThird = 0
	  end
  
	  SetPedHeadBlendData(plyPed, tonumber(head['shapeFirst']), tonumber(head['shapeSecond']), tonumber(head['shapeThird']), skinFirst, skinSecond, skinThird, tonumber(head['shapeMix']), tonumber(head['skinMix']), tonumber(head['thirdMix']), false)
	  self:SetHeadStructure(data.headStructure)
	  SetPedHairColor(plyPed, tonumber(haircolor[1]), tonumber(haircolor[2]))
	  self:SetHeadOverlayData(data.headOverlay)
  
	end,
  
	SetHeadOverlayData = function(self, data, sentPed)
  
	  local plyPed = not sentPed and PlayerPedId() or sentPed
	  if json.encode(data) ~= "[]" then
		
		for i = 1, #self.head_overlays do
		  if data[i] then
			if data[i].name == "eyecolor" then
			  SetPedEyeColor(plyPed, tonumber(data[i].val))
			else
			  SetPedHeadOverlay(plyPed,  i-1, tonumber(data[i].overlayValue),  tonumber(data[i].overlayOpacity))
			end
		  end
		end
  
		SetPedHeadOverlayColor(plyPed, 0, 0, tonumber(data[1].firstColour), tonumber(data[1].secondColour))
		SetPedHeadOverlayColor(plyPed, 1, 1, tonumber(data[2].firstColour), tonumber(data[2].secondColour))
		SetPedHeadOverlayColor(plyPed, 2, 1, tonumber(data[3].firstColour), tonumber(data[3].secondColour))
		SetPedHeadOverlayColor(plyPed, 3, 0, tonumber(data[4].firstColour), tonumber(data[4].secondColour))
		SetPedHeadOverlayColor(plyPed, 4, 2, tonumber(data[5].firstColour), tonumber(data[5].secondColour))
		SetPedHeadOverlayColor(plyPed, 5, 2, tonumber(data[6].firstColour), tonumber(data[6].secondColour))
		SetPedHeadOverlayColor(plyPed, 6, 0, tonumber(data[7].firstColour), tonumber(data[7].secondColour))
		SetPedHeadOverlayColor(plyPed, 7, 0, tonumber(data[8].firstColour), tonumber(data[8].secondColour))
		SetPedHeadOverlayColor(plyPed, 8, 2, tonumber(data[9].firstColour), tonumber(data[9].secondColour))
		SetPedHeadOverlayColor(plyPed, 9, 0, tonumber(data[10].firstColour), tonumber(data[10].secondColour))
		SetPedHeadOverlayColor(plyPed, 10, 1, tonumber(data[11].firstColour), tonumber(data[11].secondColour))
		SetPedHeadOverlayColor(plyPed, 11, 0, tonumber(data[12].firstColour), tonumber(data[12].secondColour))
  
	  end
  
	end,
  
  
	LoadPed = function(self, data)
  
	  self:SetSkin(data.model, true)
	  Wait(200)
  
	  self:SetClothing(data.drawables, data.props, data.drawtextures, data.proptextures)
	  Wait(200)
  
	  self:SaveHairColor({
		firstColour = tonumber(data.hairColor[1]),
		secondColour = tonumber(data.hairColor[2])
	  })
  
	  Wait(200)
  
	  self:SetPedHeadBlend(data.headBlend)
	  Wait(200)
  
	  self:SetHeadStructure(data.headStructure)
	  Wait(200)
  
	  self:SetHeadOverlayData(data.headOverlay)
	  Wait(200)
  
	  TriggerServerEvent("bd-clothing:retrieve_tats")
  
	  return true
  
	end,
  
	GetPedHeadBlendData = function()
	  
	  local plyPed = PlayerPedId()
  
	  local blob = string.rep("\0\0\0\0\0\0\0\0", 6 + 3 + 1)
	  if not Citizen.InvokeNative(0x2746BD9D88C5C5D0, plyPed, blob, true) then return nil end
  
	  local retval = {
		shapeFirst = string.unpack("<i4", blob, 1),
		shapeSecond = string.unpack("<i4", blob, 9),
		shapeThird = string.unpack("<i4", blob, 17),
		skinFirst = string.unpack("<i4", blob, 25),
		skinSecond = string.unpack("<i4", blob, 33),
		skinThird = string.unpack("<i4", blob, 41),
		shapeMix = string.unpack("<f", blob, 49),
		skinMix = string.unpack("<f", blob, 57),
		thirdMix = string.unpack("<f", blob, 65),
		hasParent = string.unpack("b", blob, 73) ~= 0,
	  }
	
	  return retval
  
	end,
  
	GetHeadOverlayData = function(self)
  
	  local plyPed = PlayerPedId()
  
	  local headData = {}
	  for i = 1, #self.head_overlays do
		if self.head_overlays[i] == "eyecolor" then
		  headData[i] = {}
		  headData[i].name = "eyecolor"
		  headData[i].val = GetPedEyeColor(plyPed)
		else
		  local retval, overlayValue, colourType, firstColour, secondColour, overlayOpacity = GetPedHeadOverlayData(plyPed, i-1)
		  if retval then
			headData[i] = {}
			headData[i].name = self.head_overlays[i]
			headData[i].overlayValue = overlayValue
			headData[i].colourType = colourType
			headData[i].firstColour = firstColour
			headData[i].secondColour = secondColour
			headData[i].overlayOpacity = overlayOpacity
		  end
		end
	  end
	  
	  return headData
  
	end,
  
	GetCurrentPed = function(self)
  
	  local plyPed = PlayerPedId()
  
	  return {
		model = GetEntityModel(plyPed),
		hairColor = self:GetPedHair(),
		eyecolor = GetPedEyeColor(plyPed),
		headBlend = self:GetPedHeadBlendData(),
		headOverlay = self:GetHeadOverlayData(),
		headStructure = self:GetHeadStructure(),
		drawables = self:GetDrawables(),
		props = self:GetProps(),
		drawtextures = self:GetDrawTextures(),
		proptextures = self:GetPropTextures(),
	  }
  
	end,
  
	PlayerModel = function(self, data)
  
		local skins = nil
  
	  if (data['name'] == 'skin_male') then 
		skins = self.frm_skins
	  else 
		skins = self.fr_skins 
	  end
  
	  local skin = skins[tonumber(data['value'])]
  
	  self:SetSkin(GetHashKey(skin), true)
  
	end,
  
	UpdateClothes = function(self, data)
  
	  local plyPed = PlayerPedId()
	  self.toggleClothing[data["name"]] = nil
  
	  selectedValue = self:has_value(self.drawable_names, data["name"])
  
	  if (selectedValue > -1) then
  
		SetPedComponentVariation(plyPed, tonumber(selectedValue), tonumber(data["value"]), tonumber(data["texture"]), 2)
		return { GetNumberOfPedTextureVariations(plyPed, tonumber(selectedValue), tonumber(data["value"])) }
	  
	  else
  
		selectedValue = self:has_value(self.prop_names, data["name"])
			  if (tonumber(data["value"]) == -1) then
				  ClearPedProp(plyPed, tonumber(selectedValue))
			  else
				  SetPedPropIndex( plyPed, tonumber(selectedValue), tonumber(data["value"]), tonumber(data["texture"]), true)
			  end
  
		return { GetNumberOfPedPropTextureVariations(plyPed, tonumber(selectedValue), tonumber(data["value"])) }
  
	  end
  
	end,
  
	GetHeadOverlayTotals = function(self)
	  local totals = {}
	  for i = 1, #self.head_overlays do
		if self.head_overlays[i] ~= "eyecolor" then
		  totals[self.head_overlays[i]] = GetNumHeadOverlayValues(i-1)
		end
	  end
	  return totals
	end,
  
	GetPedHair = function(self)
  
	  local plyPed = PlayerPedId()
  
	  return {
		[1] = GetPedHairColor(plyPed),
		[2] = GetPedHairHighlightColor(plyPed)
	  }
  
	end,
  
	GetHeadStructureData = function(self)
  
	  local plyPed = PlayerPedId()
	  local structure = {}
	  for i = 1, #self.face_features do
		structure[self.face_features[i]] = GetPedFaceFeature(plyPed, i-1)
	  end
	  return structure
  
	end,
  
	GetHeadStructure = function(self, data)
  
	  local plyPed = PlayerPedId()
	  local structure = {}
	  for i = 1, #self.face_features do
		structure[i] = GetPedFaceFeature(plyPed, i-1)
	  end
	  return structure
  
	end,
  
	SetHeadStructure = function(self, data, sentPed)
  
	  local plyPed = not sentPed and PlayerPedId() or sentPed
  
	  for i = 1, #self.face_features do
		SetPedFaceFeature(plyPed, i-1, data[i])
	  end
  
	end,
  
	GetTats = function(self)
  
	  local tempTats = {}
	  if not self.CurrentTats then return {} end
  
	  local tattooHashList = self:WhichListBitch()
	  if not tattooHashList then return end;
  
	  for i = 1, #self.CurrentTats do
		if self.CurrentTats[i] and self.CurrentTats[i][2] then
		  for key in pairs(tattooHashList) do
			for j = 1, #tattooHashList[key] do
			  if tattooHashList[key][j][1] == self.CurrentTats[i][2] then
				tempTats[key] = j
			  end
			end
		  end
		end
	  end
  
	  return tempTats
  
	end,
  
	GetTatCategory = function (self, tat, tattooHashList)
  
	  for category, v in pairs(tattooHashList) do
  
		for id=1, #v do
		  local tattoo = v[id]
		  if tattoo[1] == tat[2] and tattoo[2] == tat[1] then
			return category, tattoo[3]
		  end
		end
  
	  end
  
	end,
  
	GetUiTats = function(self)
  
	  local tempTats = {}
	  if not self.CurrentTats then return tempTats end
  
	  local tattooHashList = self:WhichListBitch()
  
	  for i = 1, #self.CurrentTats do
  
		local category, id = self:GetTatCategory(self.CurrentTats[i], tattooHashList)
		if not tempTats[category] then tempTats[category] = {} end;
  
		table.insert(tempTats[category], {
		  number = id,
		  key = i
		})
		
	  end
	  
	  return tempTats
  
	end,
  
	SetTats = function(self, data, sentPed)
  
	  local plyPed = not sentPed and PlayerPedId() or sentPed
  
	  ClearPedDecorationsLeaveScars(plyPed)
  
	  if self.CurrentTats then
  
		for k,v in pairs(self.CurrentTats) do
		  AddPedDecorationFromHashes(plyPed, v[1], v[2])
		end
  
	  end
  
	end,
  
	RefreshUI = function(self, type)
  
	  local plyPed = PlayerPedId()
	  self.savedArmor, self.SavedHealth = GetPedArmour(plyPed), GetEntityHealth(plyPed) 
  
	  if type then 
		self.CurrentMenu = type 
	  end
  
	  SendReactMessage("totalData", {
		drawTotal = self:GetDrawablesTotal(),
		propDrawTotal = self:GetPropDrawablesTotal(),
		textureTotal = self:GetTextureTotals(),
		headoverlayTotal = self:GetHeadOverlayTotals(),
		skinTotal = self:GetSkinTotal()
	  })
  
	  if self.CurrentMenu:lower() == "barber" then
  
		SendReactMessage("barberData", {
		  headBlend = self:GetPedHeadBlendData(),
		  headOverlay = self:GetHeadOverlayData(),
		  headStructure = self:GetHeadStructureData(),
		  hairColor = self:GetPedHair()
		})
  
	  end
  
	  SendReactMessage("clothingData", {
		drawables = self:GetDrawables(),
		props = self:GetProps(),
		drawtextures = self:GetDrawTextures(),
		proptextures = self:GetPropTextures(),
		skin = self:GetSkin()
	  })
  
  
	  if self.CurrentMenu:lower() == "tattoo" then
  
		SendReactMessage("tattooData", {
		  tatCategory = self.tatCategory,
		  tats = self:GetUiTats()
		})
  
	  end
  
	end,
  
	SaveHeadblend = function(self, data)
  
	  local skinFirst = tonumber(data['skinFirst'])
	  if skinFirst <= -1 or skinFirst >= 46 then
		skinFirst = 0
	  end
	  local skinSecond = tonumber(data['skinSecond'])
	  if skinSecond <= -1 or skinSecond >= 46 then
		  skinSecond = 0
	  end
	  local skinThird = tonumber(data['skinThird'])
	  if skinThird <= -1 or skinThird >= 46 then
		  skinThird = 0
	  end
  
	  local plyPed = PlayerPedId()
  
	  SetPedHeadBlendData(plyPed,
	  tonumber(data.shapeFirst),
	  tonumber(data.shapeSecond),
	  tonumber(data.shapeThird),
	  skinFirst,
	  skinSecond,
	  skinThird,
	  tonumber(data.shapeMix / 100),
	  tonumber(data.skinMix / 100),
	  tonumber(data.thirdMix / 100), false)
  
	  return 'ok'
  
	end,
  
	SaveHairColor = function(self, data)
  
	  local plyPed = PlayerPedId()
  
	  if not data['secondColour'] then 
		data['secondColour'] = GetPedHairHighlightColor(plyPed)
	  elseif not data['firstColour'] then
		data['firstColour'] = GetPedHairColor(plyPed) 
	  end
  
	  SetPedHairColor(plyPed, tonumber(data['firstColour']), tonumber(data['secondColour']))
	
	  return 'ok'
  
	end,
  
	SaveEyeColor = function(self, data)
	  SetPedEyeColor(PlayerPedId(), data['firstColour'])
	  return 'ok'
	end,
  
	SaveFaceFeatures = function(self, data)
  
	  local plyPed = PlayerPedId()
  
	  local index = self:has_value(self.face_features, data["name"])
	  if (index <= -1) then return 'allright' end
	  local scale = tonumber(data["scale"]) / 100
	  SetPedFaceFeature(plyPed, index, scale)
  
	  return 'ok'
  
	end,
  
	SaveHeadOverlay = function(self, data)
	  
	  local plyPed = PlayerPedId()
	  local index = self:has_value(self.head_overlays, data["name"])
  
	  SetPedHeadOverlay(plyPed, index, tonumber(data["value"]), tonumber(data["opacity"]) / 100)
  
	  return 'ok'
  
	end,
  
	SaveHeadOverlayColor = function(self, data)
  
	  local plyPed = PlayerPedId()
	  local index = self:has_value(self.head_overlays, data["name"])
  
	  local success, overlayValue, colourType, firstColour, secondColour, overlayOpacity = GetPedHeadOverlayData(plyPed, index)
  
	  local sColor = tonumber(data['secondColour'])
	  local pColor = tonumber(data['firstColour'])
  
	  if (sColor == nil) then 
		sColor = secondColour
	  elseif (pColor == nil) then
		pColor = firstColour
	  end
  
	  SetPedHeadOverlayColor(plyPed, index, colourType, pColor, sColor)
  
	  return 'ok'
  
	end,
	
	CameraTypes = {
	  [1] = 'head',
	  [2] = 'torso',
	  [3] = 'leg'
	},
  
	CameraTypesO = {
	  ['head'] = 1,
	  ['torso'] = 2,
	  ['leg'] = 3
	},
  
	Cooldown = false,
  
	SwitchCam = function(self, name)
  
	  if not self.Cameras then return end;
	  if self.Cooldown then return end;
  
	  local targetCamNumber = self.CameraTypesO[name]
	  if not targetCamNumber then return end;
  
	  local currentCamNumber = self.CurrentCam
	  if not currentCamNumber then return end;
  
	  self.CurrentCam = targetCamNumber
  
	  self.Cooldown = true;
	  CreateThread(function()
		Wait(500)
		self.Cooldown = false;
		return
	  end)
  
	  SetCamActiveWithInterp(self.Cameras[targetCamNumber], self.Cameras[currentCamNumber], 500, true, true)
  
	end,
  
	CreateAllCameras = function(self, toggle)
	  
	  if not toggle then 
		RenderScriptCams(false, false, 1, true, true)
		DestroyAllCams(true)
		self.Cameras = false;
		FreezeEntityPosition(PlayerPedId(), false)
		return true
	  end;
  
	  if self.Cameras then 
		return false
	  end;
  
	  self.Cameras = {}
  
	  local plyPed = PlayerPedId()
  
	  FreezeEntityPosition(plyPed, true)
  
	  Wait(100)
  
	  for i=1, #self.CameraTypes do
  
		local bonepos = false
		local name = self.CameraTypes[i]
  
		if name == "head" then
		  bonepos = GetPedBoneCoords(plyPed, 31086)
		  bonepos = vector3(bonepos.x - 0.2, bonepos.y + 0.5, bonepos.z + 0.1)
		elseif name == "torso" then
		  bonepos = GetPedBoneCoords(plyPed, 11816)
		  bonepos = vector3(bonepos.x - 0.2, bonepos.y + 1.0, bonepos.z + 0.3)  
		elseif name == "leg" then
		  bonepos = GetPedBoneCoords(plyPed, 46078)
		  bonepos = vector3(bonepos.x - 0.1, bonepos.y + 0.8, bonepos.z - 0.1)
		end
  
		SetEntityHeading(plyPed, 0.0)
		
		self.Cameras[i] = CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", bonepos, 0.0, -0.0, 180.0, 80.0, false, 2)
  
	  end
  
	  self.CurrentCam = 2;
	  SetCamActive(self.Cameras[self.CurrentCam], true)
	  RenderScriptCams(true, true, 500, true, true)
  
	  return true
  
	end,
  
	TogRotation = function(self)
  
	  local pedRot = GetEntityHeading(PlayerPedId())+90 % 360
	  SetEntityHeading(PlayerPedId(), math.floor(pedRot / 90) * 90.0)
	  
	end,
  
	HandleNew = function(self)
  
	  if not self.NewPlayer then return end;
	  self.CurrentMenu = "barber"
  
	  SendReactMessage('setIsNew', self.NewPlayer)
	  self:ToggleNui(true, self.CurrentMenu)
  
	end,
  
	Save = function(self, save)
	  TriggerEvent('bd-hud:EnableHud', true)
	  
	  if save then
    
		local data = self:GetCurrentPed()
		local regmodels = false
		TriggerServerEvent("bd-clothing:insert_character_current", data)
  
		if data.model == `mp_f_freemode_01` or data.model == `mp_m_freemode_01` then
			TriggerServerEvent("bd-clothing:insert_character_face", data)
			TriggerServerEvent("bd-clothing:set_tats", self.CurrentTats)
			regmodels = true
		end
	  else
		self:LoadPed(self.oldPed)
	  end
  
	  self:HandleNew()
  
	end,
  
	SwitchMenu = function(self, menu)
	  self:ToggleNui(true, menu)
	end,
  
	ToggleNui = function(self, open, menu, save, updateStatus)
  
	  local plyPed = PlayerPedId()
  
	  self.isOpen, self.CurrentMenu = open, menu or "none"
	  
	  SetNuiFocus(self.isOpen, self.isOpen)
	  --exports['bd-hud']:toggleNui(not self.isOpen))
	  
	  if self:CreateAllCameras(self.isOpen) then Wait(200) end
  
	  SendReactMessage('setMenu', self.CurrentMenu)
	  SendReactMessage('setVisible', self.isOpen)
  
	  SetPedCanHeadIk(plyPed, not self.isOpen)
  
	  local canHandleNewPlayer = updateStatus and self.NewPlayer
  
	  if canHandleNewPlayer then
		self.NewPlayer = false;
		SendReactMessage('setIsNew', false)
		--TriggerServerEvent('np-build:updateBucket', 0)
		DoScreenFadeOut(500)
	  end
  
	  if not self.isOpen then
		self.CurrentMenu = "none"
		self:SaveToggleProps()
  
		if GetPedMaxHealth(plyPed) ~= 200 then
		  SetPedMaxHealth(plyPed, 200)
		end
  
		SetPedArmour(plyPed, self.SavedArmor)
		SetEntityHealth(plyPed, self.SavedHealth)
		SetPedCanLosePropsOnDamage(plyPed, false, 0)
  
		self.SavedArmor = 0
		self.SavedHealth = 0
  
		self:Save(save)
  
	  elseif self.isOpen then
  
		self.oldPed = self:GetCurrentPed()
  
		exports['bd-interface']:hideInteraction()

		self.Callback = true;
  
		ClearPedDecorationsLeaveScars(PlayerPedId())
		TriggerServerEvent("bd-clothing:retrieve_tats")
  
		while self.Callback do Wait(0) end;			
  
		self:RefreshUI()
		self.SavedArmor = GetPedArmour(plyPed)
		self.SavedHealth =  GetEntityHealth(plyPed)
  
		if self.CurrentMenu == 'tattoo' then
		  self:ToggleProps({ name = 'masks'})
		  self:ToggleProps({ name = 'torsos'})
		  self:ToggleProps({ name = 'legs'})
		  self:ToggleProps({ name = 'bags'})
		  self:ToggleProps({ name = 'shoes'})
		  self:ToggleProps({ name = 'shirts'})
		  self:ToggleProps({ name = 'vest'})
		  self:ToggleProps({ name = 'jackets'})
		end
  
	  end
  
	  if canHandleNewPlayer then
		TriggerEvent('bd-spawn:justCreated')
  	  end
  
  
  
	end,
  
	FirstSpawn = function(self, armor, stress, thirst, hunger)
  
	  local plyPed = PlayerPedId()
  
	  SetCanAttackFriendly(plyPed, true, false)
	  NetworkSetFriendlyFireOption(true)
	  SetPlayerInvincible(plyPed, false)
  
	  SetPedArmour(plyPed, armor or 0)
  
	  LocalPlayer.state:set('stressLevel', stress or 0, true)
	  LocalPlayer.state:set('thirstLevel', (thirst and thirst > 10) and thirst or 5000, true)
	  LocalPlayer.state:set('hungerLevel', (hunger and hunger > 0) and hunger or 5000, true)
  
	end,
  
	SetDefault = function(self, isFirstSpawn, armor, stress, thirst, hunger)
  
	  local plyPed = PlayerPedId()
  
	  DoScreenFadeOut(500)
  
	  local LocalPlayer = exports["bd-base"]:getModule("LocalPlayer")
	  local gender = LocalPlayer:getCurrentCharacter().gender
	  
	  if gender ~= 0 then
		  SetSkin(`mp_f_freemode_01`, true)
	  else
		  SetSkin(`mp_m_freemode_01`, true)
	  end
  
  
	  while IsScreenFadingOut() do Wait(0) end;
  
	  DestroyAllCams(true)
	  RenderScriptCams(false, true, 1, true, true)
  
	  SetEntityCoords(PlayerPedId(), -3965.88, 2014.55, 501.6)
		  
	  self.NewPlayer = true
	  
	  TriggerServerEvent('bd-infinity:updateBucket', PlayerPedId() + 1)
  
	  Wait(500)
  
	  DoScreenFadeIn(250)
  
	  while IsScreenFadingIn() do Wait(0) end;
  
	  Wait(100)
  
	  self:HandleNew()
	  
  
	  SetNewWaypoint(-270.9944, -957.8395)
	  self:FirstSpawn(armor, stress, thirst, hunger)
  
	end,
  
	SetClothes = function(self, data, doesExist, isFirstSpawn, armor, stress, thirst, hunger)  
	  local plyPed = PlayerPedId()
  
	  local model = data.model and tonumber(data.model) or false;
  
	  if (not model and not DoesExist) or not IsModelInCdimage(model) or not IsModelValid(model) then
		self:SetDefault(isFirstSpawn, armor, stress, thirst, hunger)
		return
	  end
  
	  if not model and alreadyExist then
		self:SetSkin(`mp_m_freemode_01`, true) -- I think?
		return
	  end
	  
	  self:SetSkin(model, false)
	  Wait(100)
  
	  self:SetClothing(data.drawables, data.props, data.drawtextures, data.proptextures)
	  Wait(100)
  
	  TriggerEvent("facewear:update")
	  TriggerServerEvent("bd-clothing:fromclient:get_character_face", model)
	  TriggerServerEvent("bd-clothing:retrieve_tats")
  
	  if isFirstSpawn then
		self:FirstSpawn(armor, stress, thirst, hunger)
		return
	  end
  
	  SetPedCanLosePropsOnDamage(PlayerPedId(), false, 0)  
	end,
  
	Wardrobes = {
	  [`v_res_tre_wardrobe`] = true,
	  [-1600421347] = true,
	},
  
	CustomSkinAllowlist = {
	  ['a_c_shepherd'] = { job = 'doc', grade = 10},
	  -- ['a_c_husky'] = { job = 'doc', grade = 10},
	  ['ig_orleans'] = 2297,
	  ['a_c_hen'] = 3170,
	  ['a_c_cat_01'] = {
		3769,
		4526
	  },
	  ['mp_m_avongoon'] = 1843,
	  ['a_c_pug'] = 7839,
	  ['a_c_husky'] = {
		4146,
		8098,
		12982
	  },
	  ['a_c_rat'] = 12323,
	  ['u_m_y_juggernaut_01'] = 5269,
	  ['a_c_hen'] = 6314,
	  ['s_m_y_prismuscl_01'] = 9378,
	  ['riebs'] = 12173,
	  ['carmelo'] = 11899,
	},
  
	Raycast = function(self, dist)
  
	  local plyPed = PlayerPedId()
	  local plyPos = GetEntityCoords(plyPed)
  
	  local entityWorld = GetOffsetFromEntityInWorldCoords(plyPed, 0.0, dist, 0.0)
	  local ray = StartShapeTestRay(plyPos, entityWorld, -1, plyPed, 1)
  
	  local a, b, c, d, ent = GetShapeTestResult(ray)
	  return { a = a, b = b, HitPosition = c, HitCoords = d, HitEntity = ent }
  
	end,
  
	IsThisAnAnimalAndCanIAnimate = function(self)
  
	  -- This function will return false if they are an animal.
	  -- So basically the "canIAnimate" part is true.
  
	  if(GetPedType(PlayerPedId()) == 28) then
		return false
	  else
		return true
	  end
	  
	end,
  
	SetModelOC = function(self, model)
	  if not IsModelInCdimage(model) and not IsModelValid(model) then return end;
  
	  local plyPed = PlayerPedId()
  
	  self.SavedArmor = GetPedArmour( plyPed )
	  self.SavedHealth = GetEntityHealth( plyPed )
  
	  RequestModel(model)
	  while not HasModelLoaded(model) do Wait(0) end
  
	  local newPed = PlayerPedId()
  
	  SetPlayerModel( PlayerId(), model )
	  SetPedArmour( newPed, self.SavedArmor )
  
	  SetEntityHealth( newPed, self.SavedHealth )
	  SetPedMaxHealth(newPed, model == `s_m_y_prismuscl_01` and 400 or 200)
	  SetPedCanLosePropsOnDamage(newPed, false, 0)
  
	  SetWeaponDamageModifier(`WEAPON_UNARMED`, model == `s_m_y_prismuscl_01` and 0.70 or 0.35)    
  
	  SetModelAsNoLongerNeeded(model)
  
	  self.SavedArmor = 0
	  self.SavedHealth = 0
  
	end,
  
	CustomPed = function(self, sentType)
  
	  if not sentType then 
		--exports['bd-notifications']:SendAlert('error', 'You did not specify a ped.', 5000)
		TriggerEvent('DoLongHudText', 'You did not specify a ped.', 2)
		return 
	  end
  
	  local canPass = false;
  
	  if self.Inside then
		if self.Inside.type == 'clothing' or self.Inside.type == 'barber' then
		  canPass = true;
		else
		  local Raycast = Raycast(2.0)
		  if Raycast['HitEntity'] ~= 0 then
			if Wardrobes[GetEntityModel(Raycast['HitEntity'])] then
			  canPass = true
			end		
		  end
		end
	  end
  
	  if canPass then
		local plyCid = exports['isPed']:isPed('cid')

		local Info = self.CustomSkinAllowlist[sentType]
		if not Info then 
			TriggerEvent('DoLongHudText', 'This custom ped does not exist.', 2)
		  	--exports['bd-notifications']:SendAlert('error', 'This custom ped does not exist.', 5000)
		  return 
		end
		
		if type(Info) == 'table' then
		  if Info['job'] then
			local job = exports['isPed']:isPed('myjob')
			if Info['job'] == job['name'] then 
			  self.SetModelOC(self, sentType) 
			else
				TriggerEvent('DoLongHudText', 'You lack permission to use this ped.', 2)
			  	--exports['bd-notifications']:SendAlert('error', 'You lack permission to use this ped.', 5000)
			end
		  else
			local plyCid = exports['isPed']:isPed('cid')
			for i,j in pairs(Info) do
			  local cid = Info[i]
			  if cid == plyCid then
				self.SetModelOC(self, sentType)
				return
			  end
			end
			TriggerEvent('DoLongHudText', 'You lack permission to use this ped.', 2)
			--exports['bd-notifications']:SendAlert('error', 'You lack permission to use this ped.', 5000)
		  end
		elseif Info == plyCid then
		  self.SetModelOC(self, sentType)
		else
			TriggerEvent('DoLongHudText', 'You lack permission to use this ped.', 2)
		  	--exports['bd-notifications']:SendAlert('error', 'You lack permission to use this ped.', 5000)
		end
  
	  else
		TriggerEvent('DoLongHudText', 'Not near a valid wardrobe.', 2)
		--exports['bd-notifications']:SendAlert('error', 'Not near a valid wardrobe!', 5000)
  
	  end
  
	end,
  
	LoadAnimDict = function(self, dict)
	  RequestAnimDict(dict)
		while not HasAnimDictLoaded(dict) do Wait(0) end
	end,
  
	FacewearAdjust = function(self, faceType, remove)
  
	  local PropIndex = 0
	  local AnimSet = "mp_masks@on_foot"
	  local AnimationOn = "put_on_mask"
	  local AnimationOff = "put_on_mask"
  
	  self.facialWear[6]["Prop"] = GetPedDrawableVariation(PlayerPedId(), 0)
	  self.facialWear[6]["Palette"] = GetPedPaletteVariation(PlayerPedId(), 0)
	  self.facialWear[6]["Texture"] = GetPedTextureVariation(PlayerPedId(), 0)
  
	  for i = 0, 3 do
		if GetPedPropIndex(PlayerPedId(), i) ~= -1 then
		  self.facialWear[i+1]["Prop"] = GetPedPropIndex(PlayerPedId(), i)
		end
		if GetPedPropTextureIndex(PlayerPedId(), i) ~= -1 then
		  self.facialWear[i+1]["Texture"] = GetPedPropTextureIndex(PlayerPedId(), i)
		end
	  end
  
	  if GetPedDrawableVariation(PlayerPedId(), 1) ~= -1 then
		self.facialWear[4]["Prop"] = GetPedDrawableVariation(PlayerPedId(), 1)
		self.facialWear[4]["Palette"] = GetPedPaletteVariation(PlayerPedId(), 1)
		self.facialWear[4]["Texture"] = GetPedTextureVariation(PlayerPedId(), 1)
	  end
  
	  if GetPedDrawableVariation(PlayerPedId(), 11) ~= -1 then
		self.facialWear[5]["Prop"] = GetPedDrawableVariation(PlayerPedId(), 11)
		self.facialWear[5]["Palette"] = GetPedPaletteVariation(PlayerPedId(), 11)
		self.facialWear[5]["Texture"] = GetPedTextureVariation(PlayerPedId(), 11)
	  end
  
	  if faceType == 1 then
		PropIndex = 0
	  elseif faceType == 2 then
		PropIndex = 1
		AnimSet, AnimationOn, AnimationOff = "clothingspecs", "take_off", "take_off"
	  elseif faceType == 3 then
		PropIndex = 2
	  elseif faceType == 4 then
		PropIndex = 1
		if remove then AnimSet, AnimationOn, AnimationOff = "missfbi4", "takeoff_mask", "takeoff_mask" end
	  elseif faceType == 5 then
		PropIndex = 11
		AnimSet, AnimationOn, AnimationOff = "oddjobs@basejump@ig_15", "puton_parachute", "puton_parachute"
	  end
  
	  self:LoadAnimDict(AnimSet)
  
	  if faceType == 5 then
		if remove then
		  SetPedComponentVariation(PlayerPedId(), 3, 2, self.facialWear[6]["Texture"], self.facialWear[6]["Palette"])
		end
	  end
	  if remove then
		TaskPlayAnim( PlayerPedId(), AnimSet, AnimationOff, 4.0, 3.0, -1, 49, 1.0, 0, 0, 0 )
		Citizen.Wait(500)
		if faceType ~= 5 then
		  if faceType == 4 then
			SetPedComponentVariation(PlayerPedId(), PropIndex, -1, -1, -1)
		  else
			if faceType ~= 2 then
			  ClearPedProp(PlayerPedId(), tonumber(PropIndex))
			end
		  end
		end
	  else
		TaskPlayAnim( PlayerPedId(), AnimSet, AnimationOn, 4.0, 3.0, -1, 49, 1.0, 0, 0, 0 )
		Citizen.Wait(500)
		if faceType ~= 5 and faceType ~= 2 then
		  if faceType == 4 then
			SetPedComponentVariation(PlayerPedId(), PropIndex, self.facialWear[faceType]["Prop"], self.facialWear[faceType]["Texture"], self.facialWear[faceType]["Palette"])
		  else
			SetPedPropIndex( PlayerPedId(), tonumber(PropIndex), tonumber(self.facialWear[PropIndex+1]["Prop"]), tonumber(self.facialWear[PropIndex+1]["Texture"]), false)
		  end
		end
	  end
	  if faceType == 5 then
		if not remove then
		  SetPedComponentVariation(PlayerPedId(), 3, 1, self.facialWear[6]["Texture"], self.facialWear[6]["Palette"])
		  SetPedComponentVariation(PlayerPedId(), PropIndex, self.facialWear[faceType]["Prop"], self.facialWear[faceType]["Texture"], self.facialWear[faceType]["Palette"])
		else
		  SetPedComponentVariation(PlayerPedId(), PropIndex, -1, -1, -1)
		end
		Citizen.Wait(1800)
	  end
	  if faceType == 2 then
		Citizen.Wait(600)
		if remove then
		  ClearPedProp(PlayerPedId(), tonumber(PropIndex))
		end
  
		if not remove then
		  Citizen.Wait(140)
		  SetPedPropIndex( PlayerPedId(), tonumber(PropIndex), tonumber(self.facialWear[PropIndex+1]["Prop"]), tonumber(self.facialWear[PropIndex+1]["Texture"]), false)
		end
	  end
	  if faceType == 4 and remove then
		Citizen.Wait(1200)
	  end
	  ClearPedTasks(PlayerPedId())
  
	end,
  
	FacewearUpdate = function(self, sentPed)
  
	  local ped = not sentPed and PlayerPedId() or sentPed
  
	  for i = 0, 3 do
		if GetPedPropIndex(ped, i) ~= -1 then
		  self.facialWear[i+1]["Prop"] = GetPedPropIndex(ped, i)
		end
		if GetPedPropTextureIndex(ped, i) ~= -1 then
		  self.facialWear[i+1]["Texture"] = GetPedPropTextureIndex(ped, i)
		end
	  end
  
	  if GetPedDrawableVariation(ped, 1) ~= -1 then
		self.facialWear[4]["Prop"] = GetPedDrawableVariation(ped, 1)
		self.facialWear[4]["Palette"] = GetPedPaletteVariation(ped, 1)
		self.facialWear[4]["Texture"] = GetPedTextureVariation(ped, 1)
	  end
  
	  if GetPedDrawableVariation(ped, 11) ~= -1 then
		self.facialWear[5]["Prop"] = GetPedDrawableVariation(ped, 11)
		self.facialWear[5]["Palette"] = GetPedPaletteVariation(ped, 11)
		self.facialWear[5]["Texture"] = GetPedTextureVariation(ped, 11)
	  end
  
	end,
  
	--[[
	  if name == "head" then
		bonepos = GetPedBoneCoords(plyPed, 31086)
			  bonepos = vector3(bonepos.x - 0.1, bonepos.y + 0.4, bonepos.z + 0.05)
	  elseif name == "torso" then
		bonepos = GetPedBoneCoords(plyPed, 11816)
			  bonepos = vector3(bonepos.x - 0.4, bonepos.y + 2.2, bonepos.z + 0.2)
	  elseif name == "leg" then
		bonepos = GetPedBoneCoords(plyPed, 46078)
			  bonepos = vector3(bonepos.x - 0.1, bonepos.y + 1, bonepos.z)
	  end
	]]
  
	ManageCamera = function(self, type)
  
	  local currCam = self.CurrentCam
  
  
	  if type == 1 then
  
		currCam = currCam - 1
		if currCam <= 0 then currCam = 3 end
  
	  elseif type == 2 then
  
		currCam = currCam + 1
		if currCam >= 4 then currCam = 1 end
  
	  end
  
	  self:SwitchCam(self.CameraTypes[currCam])
  
	end,
  
	SetTattoos = function(self, data)
	  self.CurrentTats = data
	  self.Callback = false;
	end,
	
	EditTattoo = function(self, data)
  
	  local plyPed = PlayerPedId()
  
	  local name = data.name
	  local key = data.key
	  local oldValue = data.oldValue
	  local newValue = data.newValue
  
	  local tattooHashList = self:WhichListBitch()
  
	  local found = false;
  
	  local tattoos = tattooHashList[name]
	  
	  for i=1, #tattooHashList[name] do
		local tattoo = tattooHashList[name][i]
		if tattoo[3] == newValue then
		  if not self.CurrentTats[key] then print("Unable to find current tattoo", key) end
		  self.CurrentTats[key] = {tattoo[2], tattoo[1], tattoo[3]}
		  found = true;
		  break
		end
	  end
  
	  if not found then
		print("Tattoo not found :(")
		for k,v in pairs(data) do
		  print(k, json.encode(v))
		end
	  end
  
	  ClearPedDecorationsLeaveScars(plyPed)
  
	  if self.CurrentTats then
		for k,v in pairs(self.CurrentTats) do
		  AddPedDecorationFromHashes(plyPed, v[1], v[2])
		end
	  end
  
	end,
  
	RemoveTattoo = function(self, data)
  
	  local plyPed = PlayerPedId()
	  local key = data.key;
  
	  table.remove(self.CurrentTats, key)
	  ClearPedDecorationsLeaveScars(plyPed)
  
	  if self.CurrentTats then
		for k,v in pairs(self.CurrentTats) do
		  AddPedDecorationFromHashes(plyPed, v[1], v[2])
		end
	  end
  
	end,
  
	AddTat = function(self, data)
	  local tattoo = self:WhichListBitch()[data.name][1]
	  table.insert(self.CurrentTats, { tattoo[2], tattoo[1] })
  
	  local plyPed = PlayerPedId()
  
	  ClearPedDecorationsLeaveScars(plyPed)
  
	  if self.CurrentTats then
		for k,v in pairs(self.CurrentTats) do
		  AddPedDecorationFromHashes(plyPed, v[1], v[2])
		end
	  end
  
	  return #self.CurrentTats
  
	end,
  
  }
  
  CLOTHES:AddZoneIDToTattoos()
  CLOTHES:init()
  
  RegisterNUICallback('updateclothes', function(data, cb)
	local val = CLOTHES:UpdateClothes(data)
	if val then
	  cb(val)
	  return
	end
	cb("ok")
  end)
  
  RegisterNUICallback('setped', function(data, cb)
	  CLOTHES:PlayerModel(data)
	  CLOTHES:RefreshUI()
	  cb('ok')
  end)
  
  RegisterNUICallback('resetped', function(data, cb)
	  CLOTHES:LoadPed(CLOTHES.oldPed)
	  cb('ok')
  end)
  
  RegisterNUICallback('saveheadblend', function(data, cb)
	cb(CLOTHES:SaveHeadblend(data))
  end)
  
  RegisterNUICallback('savehaircolor', function(data, cb)
	cb(CLOTHES:SaveHairColor(data))
  end)
  
  RegisterNUICallback('saveeyecolor', function(data, cb)
	cb(CLOTHES:SaveEyeColor(data))
  end)
  
  RegisterNUICallback('savefacefeatures', function(data, cb)
	cb(CLOTHES:SaveFaceFeatures(data))
  end)
  
  RegisterNUICallback('saveheadoverlay', function(data, cb)
	cb(CLOTHES:SaveHeadOverlay(data))
  end)
  
  RegisterNUICallback('saveheadoverlaycolor', function(data, cb)
	cb(CLOTHES:SaveHeadOverlayColor(data))
  end)
  
  RegisterNUICallback('escape', function(data, cb)
  
	if data then
	  CLOTHES:ToggleNui(data.toggle, "", data.save, data.forceNotNewPlayer or false)
	end
   
	cb("ok")
  end)
  
  RegisterNUICallback('save', function(save, cb)
	CLOTHES:Save(false, "", save)
	cb("ok")
  end)
  
  RegisterNUICallback('switchMenu', function(newMenu, cb)
	CLOTHES:SwitchMenu(newMenu)
	cb("ok")
  end)
  
  
  RegisterNUICallback('hideFrame', function(cb)
	CLOTHES:ToggleNui(false, "", false)
	cb("ok")
  end)
  
  RegisterNUICallback('toggleclothes', function(data, cb)
	  CLOTHES:ToggleProps(data)
	  cb('ok')
  end)
  
  RegisterNUICallback('AddTat', function(data, cb)
	  cb(CLOTHES:AddTat(data))
  end)
  
  RegisterNUICallback('removetattoo', function(data, cb)
	  CLOTHES:RemoveTattoo(data)
	  cb('ok')
  end)
  
  RegisterNUICallback('moveLeft', function(data, cb)
	SetEntityHeading(PlayerPedId(), GetEntityHeading(PlayerPedId()) - 10.0)
	cb("ok")
  end)
  
  RegisterNUICallback('moveRight', function(data, cb)
	SetEntityHeading(PlayerPedId(), GetEntityHeading(PlayerPedId()) + 10.0)
	cb("ok")
  end)
  
  RegisterNUICallback('arrowUp', function(data, cb)
	CLOTHES:ManageCamera(1)
	cb('ok')
  end)
  
  RegisterNUICallback('arrowDown', function(data, cb)
	CLOTHES:ManageCamera(2)
	cb('ok')
  end)
  
  RegisterNUICallback('edittattoo', function(data, cb)
	CLOTHES:EditTattoo(data)
	cb('ok')
  end)
  
  RegisterNetEvent("bd-clothing:setclothes", function(...)
	CLOTHES:SetClothes(...)
  end)

  RegisterNetEvent("bd-clothing:settattoos", function(playerTattoosList)
	CLOTHES:SetTattoos(playerTattoosList)
	CLOTHES:SetTats(CLOTHES:GetTats()) 
  end)
  
  RegisterNetEvent('bd-clothing:setpedfeatures', function(data)
	CLOTHES:SetPedFeatures(data)
  end)
  
  RegisterNetEvent('bd-clothing:outfits', function(pAction, pId, pName)
  
	  if pAction == 1 then 
	  TriggerServerEvent("bd-clothing:set_outfit", pId, pName, CLOTHES:GetCurrentPed()) -- Update/Add
	  elseif pAction == 2 then 
	  TriggerServerEvent("bd-clothing:remove_outfit", pId) -- Delete
	  elseif pAction == 3 then 
	  TriggerEvent('imp-sounds:PlayOnOne','Clothes1', 0.6) 
	  TriggerServerEvent("bd-clothing:get_outfit", pId) -- Set
	  elseif pAction == 4 then 
	  TriggerServerEvent("bd-clothing:rename_outfit", pId, pName, CLOTHES:GetCurrentPed()) -- Rename outfit
	  end
  
  end)
  
  RegisterNetEvent('facewear:update', function(sentPed)
	CLOTHES:FacewearUpdate(sentPed)
  end)
  
--   RegisterCommand("customped", function(source, args, rawCommand)
-- 	CLOTHES:CustomPed(args[1])
--   end, false)

  
  RegisterCommand("g1", function(source, args, rawCommand) CLOTHES:FacewearAdjust(2, false) end, false)
  RegisterCommand("g0", function(source, args, rawCommand) CLOTHES:FacewearAdjust(2, true) end, false)
  RegisterCommand("e1", function(source, args, rawCommand) CLOTHES:FacewearAdjust(3, false) end, false)
  RegisterCommand("e0", function(source, args, rawCommand) CLOTHES:FacewearAdjust(3, true) end, false)
  RegisterCommand("m0", function(source, args, rawCommand) CLOTHES:FacewearAdjust(4, true) end, false)
  RegisterCommand("m1", function(source, args, rawCommand) CLOTHES:FacewearAdjust(4, false) end, false)
  RegisterCommand("h0", function(source, args, rawCommand) CLOTHES:FacewearAdjust(6, true) end, false)
  RegisterCommand("h1", function(source, args, rawCommand) CLOTHES:FacewearAdjust(6, false) end, false)
  
  exports("GetTats", function(...)
	return CLOTHES:GetTats(...)
  end)
  
  exports("SetTats", function(...)
	return CLOTHES:SetTats(...)
  end)
  
  exports("SetClothing", function(...)
	return CLOTHES:SetClothing(...)
  end)
  
  exports("SetHeadOverlayData", function(...)
	return CLOTHES:SetHeadOverlayData(...)
  end)
  
  exports("SetHeadStructure", function(...)
	return CLOTHES:SetHeadStructure(...)
  end)
  
  exports("IsThisAnAnimalAndCanIAnimate", function()
	return CLOTHES:IsThisAnAnimalAndCanIAnimate()
  end)
  
  exports("inMenu", function()
	return CLOTHES.isOpen
  end)
  
  exports("nearClothing", function()
	return CLOTHES.Inside and CLOTHES.Inside.type == 'clothing' or false
  end)
  
  exports("insideClothing", function()
	return CLOTHES:InsideClothing()
  end)
  
  exports("insideBarber", function()
	return CLOTHES:InsideBarber()
  end)
  
  exports("insideTattoo", function()
	return CLOTHES:InsideTattoo()
  end)
  
  exports("isPedMale", function()
	return CLOTHES:IsPedMale()
  end) -- exports['bd-clothing']:isPedMale()
  
  AddEventHandler('bd-clothing:openMenu', function()
	CLOTHES:OpenMenu()
  end)

  exports('createZone', function(...)
	return CLOTHES:CreateZone(...)
  end)
  
  exports('removeZone', function(...)
	return CLOTHES:RemoveZone(...)
  end)
  
  CreateThread(function()
	while true do
	  
	  Wait(5000)
  
	  local plyPed = PlayerPedId()
	  local model = GetEntityModel(plyPed)
  
	  SetPedMaxHealth(plyPed, model == `s_m_y_prismuscl_01` and 400 or 200)
	  SetEntityMaxHealth(plyPed, model == `s_m_y_prismuscl_01` and 400 or 200)
	  SetPedCanLosePropsOnDamage(plyPed, false, 0)
  
	end
  end)

  function IsInsideClothing()
	if pIsInClothingZone == 1 then
		pIsInClothingZone = true
	else
		pIsInClothingZone = false
	end
	return pIsInClothingZone
  end

  RegisterNetEvent("raid_clothes:AdminSetModel")
  AddEventHandler("raid_clothes:AdminSetModel", function(model)
	  local hashedModel = GetHashKey(model)
	  if not IsModelInCdimage(hashedModel) or not IsModelValid(hashedModel) then return end
	  SetSkin(hashedModel, true)
  end)
  
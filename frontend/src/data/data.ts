const data = [
	{
		country: "Afghanistan",
		confirmed: 89861,
		deaths: 3527,
		recovered: 61410
	},
	{
		country: "Albania",
		confirmed: 132459,
		deaths: 2453,
		recovered: 129842
	},
	{
		country: "Algeria",
		confirmed: 133388,
		deaths: 3571,
		recovered: 92852
	},
	{
		country: "Andorra",
		confirmed: 13813,
		deaths: 127,
		recovered: 13591
	},
	{
		country: "Angola",
		confirmed: 36705,
		deaths: 831,
		recovered: 30282
	},
	{
		country: "Antigua and Barbuda",
		confirmed: 1263,
		deaths: 42,
		recovered: 1214
	},
	{
		country: "Argentina",
		confirmed: 4124190,
		deaths: 85343,
		recovered: 3721350
	},
	{
		country: "Armenia",
		confirmed: 223682,
		deaths: 4484,
		recovered: 215195
	},
	{
		country: "Australia",
		confirmed: 30262,
		deaths: 910,
		recovered: 23677
	},
	{
		country: "Austria",
		confirmed: 648620,
		deaths: 10661,
		recovered: 633939
	},
	{
		country: "Azerbaijan",
		confirmed: 335171,
		deaths: 4953,
		recovered: 328580
	},
	{
		country: "Bahamas",
		confirmed: 12092,
		deaths: 236,
		recovered: 11081
	},
	{
		country: "Bahrain",
		confirmed: 258731,
		deaths: 1221,
		recovered: 244579
	},
	{
		country: "Bangladesh",
		confirmed: 826922,
		deaths: 13118,
		recovered: 766266
	},
	{
		country: "Barbados",
		confirmed: 4036,
		deaths: 47,
		recovered: 3971
	},
	{
		country: "Belarus",
		confirmed: 405663,
		deaths: 2978,
		recovered: 398742
	},
	{
		country: "Belgium",
		confirmed: 1076338,
		deaths: 25088,
		recovered: 0
	},
	{
		country: "Belize",
		confirmed: 12938,
		deaths: 325,
		recovered: 12463
	},
	{
		country: "Benin",
		confirmed: 8109,
		deaths: 102,
		recovered: 7979
	},
	{
		country: "Bhutan",
		confirmed: 1813,
		deaths: 1,
		recovered: 1467
	},
	{
		country: "Bolivia",
		confirmed: 406954,
		deaths: 15542,
		recovered: 321665
	},
	{
		country: "Bosnia and Herzegovina",
		confirmed: 204597,
		deaths: 9479,
		recovered: 177122
	},
	{
		country: "Botswana",
		confirmed: 59480,
		deaths: 896,
		recovered: 55617
	},
	{
		country: "Brazil",
		confirmed: 17412766,
		deaths: 487401,
		recovered: 15400169
	},
	{
		country: "Brunei",
		confirmed: 248,
		deaths: 3,
		recovered: 239
	},
	{
		country: "Bulgaria",
		confirmed: 420336,
		deaths: 17900,
		recovered: 389495
	},
	{
		country: "Burkina Faso",
		confirmed: 13459,
		deaths: 167,
		recovered: 13272
	},
	{
		country: "Burma",
		confirmed: 145603,
		deaths: 3244,
		recovered: 132928
	},
	{
		country: "Burundi",
		confirmed: 5013,
		deaths: 8,
		recovered: 773
	},
	{
		country: "Cabo Verde",
		confirmed: 31571,
		deaths: 273,
		recovered: 30316
	},
	{
		country: "Cambodia",
		confirmed: 38969,
		deaths: 348,
		recovered: 32967
	},
	{
		country: "Cameroon",
		confirmed: 80090,
		deaths: 1310,
		recovered: 35261
	},
	{
		country: "Canada",
		confirmed: 1409496,
		deaths: 25895,
		recovered: 1366469
	},
	{
		country: "Central African Republic",
		confirmed: 7101,
		deaths: 98,
		recovered: 6859
	},
	{
		country: "Chad",
		confirmed: 4942,
		deaths: 174,
		recovered: 4767
	},
	{
		country: "Chile",
		confirmed: 1476473,
		deaths: 30707,
		recovered: 1399187
	},
	{
		country: "China",
		confirmed: 103380,
		deaths: 4846,
		recovered: 97993
	},
	{
		country: "Colombia",
		confirmed: 3753224,
		deaths: 95778,
		recovered: 3477656
	},
	{
		country: "Comoros",
		confirmed: 3899,
		deaths: 146,
		recovered: 3736
	},
	{
		country: "Congo (Brazzaville)",
		confirmed: 12121,
		deaths: 160,
		recovered: 11211
	},
	{
		country: "Congo (Kinshasa)",
		confirmed: 35228,
		deaths: 834,
		recovered: 27825
	},
	{
		country: "Costa Rica",
		confirmed: 339900,
		deaths: 4322,
		recovered: 261195
	},
	{
		country: "Cote d'Ivoire",
		confirmed: 47662,
		deaths: 306,
		recovered: 47178
	},
	{
		country: "Croatia",
		confirmed: 358563,
		deaths: 8132,
		recovered: 349244
	},
	{
		country: "Cuba",
		confirmed: 157708,
		deaths: 1087,
		recovered: 149759
	},
	{
		country: "Cyprus",
		confirmed: 73190,
		deaths: 373,
		recovered: 39061
	},
	{
		country: "Czechia",
		confirmed: 1665097,
		deaths: 30225,
		recovered: 1629379
	},
	{
		country: "Denmark",
		confirmed: 290674,
		deaths: 2526,
		recovered: 279023
	},
	{
		country: "Diamond Princess",
		confirmed: 712,
		deaths: 13,
		recovered: 699
	},
	{
		country: "Djibouti",
		confirmed: 11572,
		deaths: 154,
		recovered: 11401
	},
	{
		country: "Dominica",
		confirmed: 189,
		deaths: 0,
		recovered: 188
	},
	{
		country: "Dominican Republic",
		confirmed: 308650,
		deaths: 3707,
		recovered: 251689
	},
	{
		country: "Ecuador",
		confirmed: 438934,
		deaths: 21048,
		recovered: 398645
	},
	{
		country: "Egypt",
		confirmed: 273182,
		deaths: 15623,
		recovered: 201038
	},
	{
		country: "El Salvador",
		confirmed: 75351,
		deaths: 2299,
		recovered: 70150
	},
	{
		country: "Equatorial Guinea",
		confirmed: 8650,
		deaths: 120,
		recovered: 8413
	},
	{
		country: "Eritrea",
		confirmed: 4848,
		deaths: 16,
		recovered: 4278
	},
	{
		country: "Estonia",
		confirmed: 130510,
		deaths: 1266,
		recovered: 125753
	},
	{
		country: "Eswatini",
		confirmed: 18736,
		deaths: 676,
		recovered: 17949
	},
	{
		country: "Ethiopia",
		confirmed: 274187,
		deaths: 4242,
		recovered: 250664
	},
	{
		country: "Fiji",
		confirmed: 1118,
		deaths: 4,
		recovered: 312
	},
	{
		country: "Finland",
		confirmed: 93821,
		deaths: 964,
		recovered: 46000
	},
	{
		country: "France",
		confirmed: 5802314,
		deaths: 110553,
		recovered: 399194
	},
	{
		country: "Gabon",
		confirmed: 24736,
		deaths: 156,
		recovered: 23741
	},
	{
		country: "Gambia",
		confirmed: 6008,
		deaths: 180,
		recovered: 5813
	},
	{
		country: "Georgia",
		confirmed: 353965,
		deaths: 5048,
		recovered: 339392
	},
	{
		country: "Germany",
		confirmed: 3723295,
		deaths: 89849,
		recovered: 3581340
	},
	{
		country: "Ghana",
		confirmed: 94493,
		deaths: 789,
		recovered: 92589
	},
	{
		country: "Greece",
		confirmed: 414933,
		deaths: 12419,
		recovered: 93764
	},
	{
		country: "Grenada",
		confirmed: 161,
		deaths: 1,
		recovered: 160
	},
	{
		country: "Guatemala",
		confirmed: 271703,
		deaths: 8455,
		recovered: 246426
	},
	{
		country: "Guinea",
		confirmed: 23398,
		deaths: 167,
		recovered: 21488
	},
	{
		country: "Guinea-Bissau",
		confirmed: 3803,
		deaths: 69,
		recovered: 3548
	},
	{
		country: "Guyana",
		confirmed: 18386,
		deaths: 426,
		recovered: 16280
	},
	{
		country: "Haiti",
		confirmed: 16079,
		deaths: 346,
		recovered: 12560
	},
	{
		country: "Holy See",
		confirmed: 27,
		deaths: 0,
		recovered: 27
	},
	{
		country: "Honduras",
		confirmed: 247728,
		deaths: 6631,
		recovered: 88164
	},
	{
		country: "Hungary",
		confirmed: 806790,
		deaths: 29904,
		recovered: 724614
	},
	{
		country: "Iceland",
		confirmed: 6555,
		deaths: 29,
		recovered: 6476
	},
	{
		country: "India",
		confirmed: 29510410,
		deaths: 374305,
		recovered: 28162947
	},
	{
		country: "Indonesia",
		confirmed: 1911358,
		deaths: 52879,
		recovered: 1745091
	},
	{
		country: "Iran",
		confirmed: 3028717,
		deaths: 82098,
		recovered: 2652792
	},
	{
		country: "Iraq",
		confirmed: 1254643,
		deaths: 16705,
		recovered: 1172227
	},
	{
		country: "Ireland",
		confirmed: 266804,
		deaths: 4941,
		recovered: 23364
	},
	{
		country: "Israel",
		confirmed: 839666,
		deaths: 6430,
		recovered: 832931
	},
	{
		country: "Italy",
		confirmed: 4244872,
		deaths: 127002,
		recovered: 3957557
	},
	{
		country: "Jamaica",
		confirmed: 49277,
		deaths: 997,
		recovered: 27542
	},
	{
		country: "Japan",
		confirmed: 775640,
		deaths: 14023,
		recovered: 727574
	},
	{
		country: "Jordan",
		confirmed: 739847,
		deaths: 9530,
		recovered: 726219
	},
	{
		country: "Kazakhstan",
		confirmed: 458452,
		deaths: 3499,
		recovered: 429329
	},
	{
		country: "Kenya",
		confirmed: 175337,
		deaths: 3410,
		recovered: 120208
	},
	{
		country: "Kiribati",
		confirmed: 2,
		deaths: 0,
		recovered: 0
	},
	{
		country: "Korea, South",
		confirmed: 148273,
		deaths: 1988,
		recovered: 139022
	},
	{
		country: "Kosovo",
		confirmed: 107170,
		deaths: 2255,
		recovered: 104678
	},
	{
		country: "Kuwait",
		confirmed: 327963,
		deaths: 1820,
		recovered: 310095
	},
	{
		country: "Kyrgyzstan",
		confirmed: 110829,
		deaths: 1899,
		recovered: 102890
	},
	{
		country: "Laos",
		confirmed: 2010,
		deaths: 3,
		recovered: 1880
	},
	{
		country: "Latvia",
		confirmed: 136030,
		deaths: 2456,
		recovered: 130728
	},
	{
		country: "Lebanon",
		confirmed: 542375,
		deaths: 7790,
		recovered: 526598
	},
	{
		country: "Lesotho",
		confirmed: 10921,
		deaths: 326,
		recovered: 6443
	},
	{
		country: "Liberia",
		confirmed: 2535,
		deaths: 93,
		recovered: 2094
	},
	{
		country: "Libya",
		confirmed: 189059,
		deaths: 3161,
		recovered: 174666
	},
	{
		country: "Liechtenstein",
		confirmed: 3026,
		deaths: 59,
		recovered: 2948
	},
	{
		country: "Lithuania",
		confirmed: 277746,
		deaths: 4339,
		recovered: 263362
	},
	{
		country: "Luxembourg",
		confirmed: 70406,
		deaths: 818,
		recovered: 68943
	},
	{
		country: "MS Zaandam",
		confirmed: 9,
		deaths: 2,
		recovered: 7
	},
	{
		country: "Madagascar",
		confirmed: 41933,
		deaths: 887,
		recovered: 40239
	},
	{
		country: "Malawi",
		confirmed: 34485,
		deaths: 1159,
		recovered: 32725
	},
	{
		country: "Malaysia",
		confirmed: 657508,
		deaths: 3908,
		recovered: 580276
	},
	{
		country: "Maldives",
		confirmed: 70301,
		deaths: 197,
		recovered: 60769
	},
	{
		country: "Mali",
		confirmed: 14350,
		deaths: 523,
		recovered: 9959
	},
	{
		country: "Malta",
		confirmed: 30581,
		deaths: 419,
		recovered: 30103
	},
	{
		country: "Marshall Islands",
		confirmed: 4,
		deaths: 0,
		recovered: 4
	},
	{
		country: "Mauritania",
		confirmed: 20073,
		deaths: 475,
		recovered: 19142
	},
	{
		country: "Mauritius",
		confirmed: 1673,
		deaths: 18,
		recovered: 1247
	},
	{
		country: "Mexico",
		confirmed: 2454176,
		deaths: 230150,
		recovered: 1954251
	},
	{
		country: "Micronesia",
		confirmed: 1,
		deaths: 0,
		recovered: 1
	},
	{
		country: "Moldova",
		confirmed: 255797,
		deaths: 6154,
		recovered: 248671
	},
	{
		country: "Monaco",
		confirmed: 2525,
		deaths: 33,
		recovered: 2473
	},
	{
		country: "Mongolia",
		confirmed: 78347,
		deaths: 369,
		recovered: 57025
	},
	{
		country: "Montenegro",
		confirmed: 99956,
		deaths: 1601,
		recovered: 97930
	},
	{
		country: "Morocco",
		confirmed: 523890,
		deaths: 9211,
		recovered: 511126
	},
	{
		country: "Mozambique",
		confirmed: 71538,
		deaths: 841,
		recovered: 69881
	},
	{
		country: "Namibia",
		confirmed: 65089,
		deaths: 995,
		recovered: 54535
	},
	{
		country: "Nepal",
		confirmed: 608472,
		deaths: 8412,
		recovered: 531105
	},
	{
		country: "Netherlands",
		confirmed: 1700260,
		deaths: 17989,
		recovered: 27110
	},
	{
		country: "New Zealand",
		confirmed: 2709,
		deaths: 26,
		recovered: 2656
	},
	{
		country: "Nicaragua",
		confirmed: 7662,
		deaths: 188,
		recovered: 4225
	},
	{
		country: "Niger",
		confirmed: 5446,
		deaths: 192,
		recovered: 5161
	},
	{
		country: "Nigeria",
		confirmed: 167066,
		deaths: 2117,
		recovered: 163463
	},
	{
		country: "North Macedonia",
		confirmed: 155536,
		deaths: 5471,
		recovered: 149628
	},
	{
		country: "Norway",
		confirmed: 128046,
		deaths: 789,
		recovered: 17998
	},
	{
		country: "Oman",
		confirmed: 234634,
		deaths: 2513,
		recovered: 210952
	},
	{
		country: "Pakistan",
		confirmed: 942189,
		deaths: 21723,
		recovered: 878740
	},
	{
		country: "Panama",
		confirmed: 387842,
		deaths: 6444,
		recovered: 371984
	},
	{
		country: "Papua New Guinea",
		confirmed: 16682,
		deaths: 165,
		recovered: 16017
	},
	{
		country: "Paraguay",
		confirmed: 391436,
		deaths: 10834,
		recovered: 324961
	},
	{
		country: "Peru",
		confirmed: 2003625,
		deaths: 188708,
		recovered: 1962124
	},
	{
		country: "Philippines",
		confirmed: 1315639,
		deaths: 22788,
		recovered: 1232986
	},
	{
		country: "Poland",
		confirmed: 2877469,
		deaths: 74573,
		recovered: 2648504
	},
	{
		country: "Portugal",
		confirmed: 857447,
		deaths: 17047,
		recovered: 815342
	},
	{
		country: "Qatar",
		confirmed: 219730,
		deaths: 577,
		recovered: 216944
	},
	{
		country: "Romania",
		confirmed: 1079726,
		deaths: 31834,
		recovered: 1044237
	},
	{
		country: "Russia",
		confirmed: 5148499,
		deaths: 124314,
		recovered: 4745756
	},
	{
		country: "Rwanda",
		confirmed: 28373,
		deaths: 370,
		recovered: 26341
	},
	{
		country: "Saint Kitts and Nevis",
		confirmed: 155,
		deaths: 0,
		recovered: 61
	},
	{
		country: "Saint Lucia",
		confirmed: 5179,
		deaths: 80,
		recovered: 4984
	},
	{
		country: "Saint Vincent and the Grenadines",
		confirmed: 2156,
		deaths: 12,
		recovered: 1898
	},
	{
		country: "Samoa",
		confirmed: 3,
		deaths: 0,
		recovered: 3
	},
	{
		country: "San Marino",
		confirmed: 5090,
		deaths: 90,
		recovered: 4998
	},
	{
		country: "Sao Tome and Principe",
		confirmed: 2358,
		deaths: 37,
		recovered: 2307
	},
	{
		country: "Saudi Arabia",
		confirmed: 465797,
		deaths: 7572,
		recovered: 448093
	},
	{
		country: "Senegal",
		confirmed: 41998,
		deaths: 1154,
		recovered: 40536
	},
	{
		country: "Serbia",
		confirmed: 714891,
		deaths: 6962,
		recovered: 0
	},
	{
		country: "Seychelles",
		confirmed: 12973,
		deaths: 46,
		recovered: 11634
	},
	{
		country: "Sierra Leone",
		confirmed: 4388,
		deaths: 82,
		recovered: 3181
	},
	{
		country: "Singapore",
		confirmed: 62276,
		deaths: 34,
		recovered: 61869
	},
	{
		country: "Slovakia",
		confirmed: 391026,
		deaths: 12439,
		recovered: 255300
	},
	{
		country: "Slovenia",
		confirmed: 256443,
		deaths: 4404,
		recovered: 249232
	},
	{
		country: "Solomon Islands",
		confirmed: 20,
		deaths: 0,
		recovered: 20
	},
	{
		country: "Somalia",
		confirmed: 14817,
		deaths: 774,
		recovered: 7043
	},
	{
		country: "South Africa",
		confirmed: 1747082,
		deaths: 57765,
		recovered: 1606581
	},
	{
		country: "South Sudan",
		confirmed: 10688,
		deaths: 115,
		recovered: 10514
	},
	{
		country: "Spain",
		confirmed: 3733600,
		deaths: 80501,
		recovered: 150376
	},
	{
		country: "Sri Lanka",
		confirmed: 223638,
		deaths: 2136,
		recovered: 188547
	},
	{
		country: "Sudan",
		confirmed: 36203,
		deaths: 2732,
		recovered: 29994
	},
	{
		country: "Suriname",
		confirmed: 18372,
		deaths: 404,
		recovered: 13927
	},
	{
		country: "Sweden",
		confirmed: 1083456,
		deaths: 14574,
		recovered: 0
	},
	{
		country: "Switzerland",
		confirmed: 700051,
		deaths: 10859,
		recovered: 317600
	},
	{
		country: "Syria",
		confirmed: 24814,
		deaths: 1810,
		recovered: 21675
	},
	{
		country: "Taiwan*",
		confirmed: 12921,
		deaths: 437,
		recovered: 1133
	},
	{
		country: "Tajikistan",
		confirmed: 13308,
		deaths: 90,
		recovered: 13218
	},
	{
		country: "Tanzania",
		confirmed: 509,
		deaths: 21,
		recovered: 183
	},
	{
		country: "Thailand",
		confirmed: 195909,
		deaths: 1449,
		recovered: 26873
	},
	{
		country: "Timor-Leste",
		confirmed: 8285,
		deaths: 18,
		recovered: 6731
	},
	{
		country: "Togo",
		confirmed: 13627,
		deaths: 126,
		recovered: 13305
	},
	{
		country: "Trinidad and Tobago",
		confirmed: 28723,
		deaths: 670,
		recovered: 18804
	},
	{
		country: "Tunisia",
		confirmed: 368908,
		deaths: 13515,
		recovered: 321485
	},
	{
		country: "Turkey",
		confirmed: 5330447,
		deaths: 48721,
		recovered: 5202251
	},
	{
		country: "Uganda",
		confirmed: 61977,
		deaths: 428,
		recovered: 48160
	},
	{
		country: "Ukraine",
		confirmed: 2284166,
		deaths: 53808,
		recovered: 2186244
	},
	{
		country: "United Arab Emirates",
		confirmed: 597986,
		deaths: 1726,
		recovered: 577234
	},
	{
		country: "United Kingdom",
		confirmed: 4581779,
		deaths: 128168,
		recovered: 15551
	},
	{
		country: "Uruguay",
		confirmed: 338513,
		deaths: 4995,
		recovered: 300119
	},
	{
		country: "Uzbekistan",
		confirmed: 103813,
		deaths: 708,
		recovered: 99733
	},
	{
		country: "Vanuatu",
		confirmed: 4,
		deaths: 1,
		recovered: 3
	},
	{
		country: "Venezuela",
		confirmed: 251686,
		deaths: 2829,
		recovered: 231558
	},
	{
		country: "Vietnam",
		confirmed: 10630,
		deaths: 59,
		recovered: 3998
	},
	{
		country: "West Bank and Gaza",
		confirmed: 311534,
		deaths: 3533,
		recovered: 303813
	},
	{
		country: "Yemen",
		confirmed: 6862,
		deaths: 1349,
		recovered: 3743
	},
	{
		country: "Zambia",
		confirmed: 111746,
		deaths: 1389,
		recovered: 97756
	},
	{
		country: "Zimbabwe",
		confirmed: 39959,
		deaths: 1632,
		recovered: 37004
	},
	{
		country: "US",
		confirmed: 33462030,
		deaths: 599769,
		recovered: 0
	},
	{
		country: "Global",
		confirmed: 175965522,
		deaths: 3804217,
		recovered: 113999599
	}
];

export default data;

/**
 * Created by Janessa Stabler on 4/28/2016.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var StaticGoals = db.staticGoals;

router.post('/', function (req, res) {

    console.log('HELLOHELLO');

    var body = req.body;
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    console.log('Creating a new goal at ' + color.green(time) + ' with the name: ' + color.green(body.name));

    // console.log('we here: '+body);

    var africaGoals = {};
    var antarcticaGoals = {};
    var europeGoals = {};
    var asiaGoals = {};
    var southAmericaGoals = {};
    var australiaGoals = {};
    var canadaGoals = {};
    var centralAmericaGoals = {};
    var unitedStatesGoals = {};

    africaGoals = [
        {
            name: 'Visit the Avenue of the Baobabs',
            continent: 'Africa',
            location: 'Madagascar, Africa',
            images: 'baobabs.jpg'
        },
        {
            name: 'Go on a Safari',
            continent: 'Africa',
            location: 'Africa',
            images: 'safari.jpg'
        },
        {
            name: 'Sample the Cape winelands',
            continent: 'Africa',
            location: 'South Africa, Africa',
            images: 'capewinelands.jpg'
        },
        {
            name: 'Eat African cuisine',
            continent: 'Africa',
            location: 'Africa',
            images: 'africanfood.jpg'
        },
        {
            name: 'Circle the Pyramids in Egypt',
            continent: 'Africa',
            location: 'Egypt, Africa',
            images: 'pyramid.jpg'
        },
        {
            name: 'Journey through Botswana',
            continent: 'Africa',
            location: 'Botswana, Africa',
            images: 'botswana.jpg'
        },
        {
            name: 'Take a thrilling walking Safari',
            continent: 'Africa',
            location: 'Africa',
            images: 'safariwalk.jpg'
        },
        {
            name: 'Marvel at Victoria Falls',
            continent: 'Africa',
            location: 'Zambia, Africa',
            images: 'victoriafalls.jpg'
        },
        {
            name: 'Ride South Africas Blue Train',
            continent: 'Africa',
            location: 'South Africa, Africa',
            images: 'bluetrain.jpg'
        },
        {
            name: 'Raft down the Zambezi',
            continent: 'Africa',
            location: 'Africa',
            images: 'zambezi.jpg'
        }
    ];

    australiaGoals = [
        {
            name: 'Swim with whale sharks in Exmouth',
            continent: 'Australia',
            location: 'Exmouth, Western Australia',
            images: 'whaleshark.jpg'
        },
        {
            name: 'Take a selfie with a Quokka on Rottsnest Island',
            continent: 'Australia',
            location: 'Perth, Western Australia',
            images: 'quokka.jpg'
        },
        {
            name: 'Visit a Wave Rock, Hyden',
            continent: 'Australia',
            location: 'Hyden, Western Australia',
            images: 'waverock.jpg'
        },
        {
            name: 'Drive the Eyre Highway',
            continent: 'Australia',
            location: 'Nullarbor, Western Australia',
            images: 'eyre.jpg'
        },
        {
            name: 'Swim with sea lions',
            continent: 'Australia',
            location: 'Bairds Bay, South Australia',
            images: 'sealion.jpg'
        },
        {
            name: 'Drive the Great Ocean Road',
            continent: 'Australia',
            location: 'Victoria, Australia',
            images: 'oceanroad.jpg'
        },
        {
            name: 'View the Aurora Australis',
            continent: 'Australia',
            location: 'Tasmania, Australia',
            images: 'australis.jpg'
        },
        {
            name: 'Celebrate a White Christmas on Hyams Beach',
            continent: 'Australia',
            location: 'Jervis Bay, New South Wales',
            images: 'hyams.jpg'
        },
        {
            name: 'Camp at the highest point in Australia, atop Mt. Kosziuszko in the Snowy Mountains',
            continent: 'Australia',
            location: 'New South Wales',
            images: 'kos.jpg'
        },
        {
            name: 'BridgeClimb, Sydney Harbour Bridge',
            continent: 'Australia',
            location: 'Sydney, New South Wales',
            images: 'bridgeclimb.jpg'
        },
        {
            name: 'Kayak in Katherine Gorge',
            continent: 'Australia',
            location: 'Western Australia',
            images: 'katherine.jpg'
        },
        {
            name: 'Crocodile diving',
            continent: 'Australia',
            location: 'Darwin, Northern Territory',
            images: 'crocodile.jpg'
        }
    ];

    antarcticaGoals = [
        {
            name: 'Sledding at Neko Harbour',
            continent: 'Antarctica',
            location: 'Antarctica',
            images: 'neko.jpg'
        },
        {
            name: 'Hiking a Volcano on Deception Island',
            continent: 'Antarctica',
            location: 'Antarctica',
            images: 'deception.jpg'
        },
        {
            name: 'First penguin encounter on Barrientos Island',
            continent: 'Antarctica',
            location: 'Antarctica',
            images: 'barrientos.jpg'
        },
        {
            name: 'Swimming in Antarctica',
            continent: 'Antarctica',
            location: 'Antarctica',
            images: 'swimant.jpg'
        },
        {
            name: 'Dolphin luminescence',
            continent: 'Antarctica',
            location: 'Antarctica',
            images: 'dolphin.jpg'
        }
    ];

    europeGoals = [
        {
            name: 'A food tour of Sicily',
            continent: 'Europe',
            location: 'Sicily, Italy',
            images: 'sicily.jpg'
        },
        {
            name: 'Take the Alternative Berlin tour',
            continent: 'Europe',
            location: 'Berlin, Germany',
            images: 'berlin.jpg'
        },
        {
            name: 'Drink at the ruin bar that started the movement',
            continent: 'Europe',
            location: 'Budapest, Hungary',
            images: 'ruinbar.jpg'
        },
        {
            name: 'Hang out in Freetown Christiania',
            continent: 'Europe',
            location: 'Copenhagen, Denmark',
            images: 'freetown.jpg'
        },
        {
            name: 'Catch a hurling game at Croke Park',
            continent: 'Europe',
            location: 'Dublin, Ireland',
            images: 'hurling.jpg'
        },
        {
            name: 'Get the top front row seat on a double-decker',
            continent: 'Europe',
            location: 'London, England',
            images: 'doubledecker.jpg'
        },
        {
            name: 'Tour the Paris Catacombs',
            continent: 'Europe',
            location: 'Paris, France',
            images: 'catacombs.jpg'
        },
        {
            name: 'Eat Trdelnik at the Christmas market',
            continent: 'Europe',
            location: 'Prague, Czech Republic',
            images: 'trdelnik.jpg'
        },
        {
            name: 'Eat gelato at Fatamorgana',
            continent: 'Europe',
            location: 'Rome, Italy',
            images: 'gelato.jpg'
        },
        {
            name: 'Explore the underground metro',
            continent: 'Europe',
            location: 'Stockholm, Sweden',
            images: 'metro.jpg'
        },
        {
            name: 'Dine at the milk bar',
            continent: 'Europe',
            location: 'Warsaw, Poland',
            images: 'milkbar.jpg'
        }
    ];

    southAmericaGoals = [
        {
            name: 'Mountain bike Ecuadors the Avenue of Volcanoes',
            continent: 'South America',
            location: 'Ecuador, South America',
            images: 'ecuador.jpg'
        },
        {
            name: 'Trek Torres Del Paine National Park',
            continent: 'South America',
            location: 'Chile, South America',
            images: 'torres.jpg'
        },
        {
            name: 'Paddle Brazils Bay of Paraty',
            continent: 'South America',
            location: 'Brazil, South America',
            images: 'paraty.jpg'
        },
        {
            name: 'Trek the Inca Trail to Machu Picchu',
            continent: 'South America',
            location: 'Peru, South America',
            images: 'inca.jpg'
        },
        {
            name: 'Ski in Portillo, Chile',
            continent: 'South America',
            location: 'Portillo, Chile',
            images: 'portillo.jpg'
        },
        {
            name: 'Tour the Salar De Uyuni',
            continent: 'South America',
            location: 'Bolivia, South America',
            images: 'saler.jpg'
        },
        {
            name: 'Spend a night in the Museum at Casapueblo',
            continent: 'South America',
            location: 'Uruguay, South America',
            images: 'casapueblo.jpg'
        },
        {
            name: 'Herd llamas in Peru',
            continent: 'South America',
            location: 'Peru, South America',
            images: 'llama.jpg'
        },
        {
            name: 'Visit Rio de Janeiro during Carnival',
            continent: 'South America',
            location: 'Rio de Janeiro, Brazil',
            images: 'carnival.jpg'
        },
        {
            name: 'Cruise on reed boat on Lake Titicaca',
            continent: 'South America',
            location: 'South America',
            images: 'reedboat.jpg'
        },
        {
            name: 'Discover wildlife in the Galapagos',
            continent: 'South America',
            location: 'Ecuador, South America',
            images: 'wildlife.jpg'
        }
    ];

    asiaGoals = [
        {
            name: 'Trek Paro Valley',
            continent: 'Asia',
            location: 'Bhutan, South Asia',
            images: 'paro.jpg'
        },

        {
            name: 'Stay at the worlds oldest hotel Nishiyama Onsen Keiunkan',
            continent: 'Asia',
            location: 'Japan, East Asia',
            images: 'nishi.jpg'
        },
        {
            name: 'Visit the tallest building in the world, Burj Khalifa in Dubai',
            continent: 'Asia',
            location: 'Dubai, United Arab Emirates',
            images: 'burj.jpg'
        },
        {
            name: 'Ride on a motorcycle taxi at peak hour in Bangkok, Thailand',
            continent: 'Asia',
            location: 'Bangkok, Thailand',
            images: 'motorcycletaxi.jpg'
        },
        {
            name: 'Scale the Great Wall of China',
            continent: 'Asia',
            location: 'China, Asia',
            images: 'wallofchina.jpg'
        },
        {
            name: 'Dance under the cherry blossoms in Japan',
            continent: 'Asia',
            location: 'Japan, East Asia',
            images: 'cherry.jpg'
        },
        {
            name: 'Cruise around Ha Long Bay in Vietnam',
            continent: 'Asia',
            location: 'Vietnam, Asia',
            images: 'halong.jpg'
        },
        {
            name: 'See Tarsier monkeys in Bohal, Philippines',
            continent: 'Asia',
            location: 'Bohal, Philippines',
            images: 'tarsier.jpg'
        },
        {
            name: 'Marvel at the breathtaking sculptures in Harbin, China',
            continent: 'Asia',
            location: 'Harbin, China',
            images: 'harbin.jpg'
        },
        {
            name: 'Get down and dirty at the Boryeong Mud Festival in Korea',
            continent: 'Asia',
            location: 'Korea, East Asia',
            images: 'mud.jpg'
        },
        {
            name: 'Visit the Tonle Sap floating villages',
            continent: 'Asia',
            location: 'Cambodia, Asia',
            images: 'tonle.jpg'
        },
        {
            name: 'Hug a baby panda in Chengdu',
            continent: 'Asia',
            location: 'Chengdu, China',
            images: 'panda.jpg'
        },
        {
            name: 'Take a night cruise around Victoria Harbour',
            continent: 'Asia',
            location: 'Hong Kong, China',
            images: 'hongkong.jpg'
        },
        {
            name: 'Have dinner in the sky at the Singapore Flyer',
            continent: 'Asia',
            location: 'Singapore, Asia',
            images: 'flyer.jpg'
        },
        {
            name: 'Sleep in a traditional hanok in Jeonju, Korea',
            continent: 'Asia',
            location: 'Jeonju, Korea',
            images: 'hanok.jpg'
        }
    ];

    centralAmericaGoals = [
        {
            name: 'Drive into Puerto Ricos Bioluminescent Bay',
            continent: 'Central America',
            location: 'Puerto Rico',
            images: 'bioluminescentbay.jpg'
        },
        {
            name: 'Whitewater rafting on the Pacuare River',
            continent: 'Central America',
            location: 'Costa Rica',
            images: 'pacuareriver.jpg'
        },
        {
            name: 'Meet a Mayan Shaman',
            continent: 'Central America',
            location: 'Panama',
            images: 'mayanshaman.jpg'
        },
        {
            name: 'Tour the Panama Canal',
            continent: 'Central America',
            location: 'Puerto Rico',
            images: 'panamacanal.jpg'
        },
        {
            name: 'Whale watching in Costa Rica',
            continent: 'Central America',
            location: 'Costa Rica',
            images: 'whalewatchcostarica.jpg'
        },
        {
            name: 'Have a toucan on your arm at the Peace Garden at La Paz',
            continent: 'Central America',
            location: 'Costa Rica',
            images: 'toucan.jpg'
        },
        {
            name: 'Have a rainforest adventure',
            continent: 'Central America',
            location: 'Central America',
            images: 'rainforest.jpg'
        },
        {
            name: 'Go deep sea fishing',
            continent: 'Central America',
            location: 'Central America',
            images: 'deepseafishing.jpg'
        },
        {
            name: 'Visit the haunted island of San Lucas, Costa Rica',
            continent: 'Central America',
            location: 'Costa Rica',
            images: 'sanlucas.jpg'
        }
    ];

    canadaGoals = [
        {
            name: 'Bungee jump in Wakefield Quebec',
            continent: 'Canada',
            location: 'Quebec, Canada',
            images: 'bungee.jpg'
        },
        {
            name: 'Go on a polar bear safari near Churchhill, Manitoba',
            continent: 'Canada',
            location: 'Manitoba, Canada',
            images: 'polarbear.jpg'
        },
        {
            name: 'Visit the hot springs in the Canadian Rockies',
            continent: 'Canada',
            location: 'Canada',
            images: 'hotsprings.jpg'
        },
        {
            name: 'Visit the wineries of Niagara-on-the-Lake, Ontario',
            continent: 'Canada',
            location: 'Ontario, Canada',
            images: 'wineries.jpg'
        },
        {
            name: 'Spend a night in the Hotel de Glace in Quebec',
            continent: 'Canada',
            location: 'Quebec, Canada',
            images: 'glace.jpg'
        },
        {
            name: 'White water raft in Banff',
            continent: 'Canada',
            location: 'Alberta, Canada',
            images: 'raft.jpg'
        },
        {
            name: 'Walk over the Capilano Suspension Bridge',
            continent: 'Canada',
            location: 'British Columbia, Canada',
            images: 'capilano.jpg'
        },
        {
            name: 'Kite surf off the Magdalen Islands in Quebec',
            continent: 'Canada',
            location: 'Quebec, Canada',
            images: 'kitesurf.jpg'
        },
        {
            name: 'Skydive in the Saskatchewan',
            continent: 'Canada',
            location: 'Saskatchewan, Canada',
            images: 'skydive.jpg'
        },
        {
            name: 'Zipline through the forests of Whistler, BC',
            continent: 'Canada',
            location: 'British Columbia, Canada',
            images: 'zipline.jpg'
        },
        {
            name: 'Discover the Columbia Ice Fields in Alberta',
            continent: 'Canada',
            location: 'Alberta, Canada',
            images: 'icefields.jpg'
        },
        {
            name: 'See the Northern Lights in Yellowknife',
            continent: 'Canada',
            location: 'Yellowknife, Canada',
            images: 'yellowknife.jpg'
        },
        {
            name: 'Place a love lock on the Corkstown bridge in Ottawa',
            continent: 'Canada',
            location: 'Ottawa, Canada',
            images: 'lovelock.jpg'
        },
        {
            name: 'Ride the Leviathan at Canadas Wonderland',
            continent: 'Canada',
            location: 'Ontario, Canada',
            images: 'lev.jpg'
        },
        {
            name: 'Dog sled across the Canadian North',
            continent: 'Canada',
            location: 'Canada',
            images: 'dogsled.jpg'
        },
        {
            name: 'Eat a bagel in Montreal',
            continent: 'Canada',
            location: 'Montreal, Quebec',
            images: 'bagel.jpg'
        }
    ];

    unitedStatesGoals = [
        {
            name: 'Visit the Cathedral Caverns',
            continent: 'United States',
            location: 'Alabama, USA',
            images: 'cath.jpg'
        },
        {
            name: 'Go to Space Camp at the U.S. Space & Rocket Center',
            continent: 'United States',
            location: 'Alabama, USA',
            images: 'spacecamp.jpg'
        },
        {
            name: 'Watch NASCAR at Talladega',
            continent: 'United States',
            location: 'Alabama, USA',
            images: 'talladega.jpg'
        },
        {
            name: 'See polar bears at the Arctic National Wildlife Refuge',
            continent: 'United States',
            location: 'Alabama, USA',
            images: 'refuge.jpg'
        },
        {
            name: 'Take a cruise around Alaskas icebergs',
            continent: 'United States',
            location: 'Alaska, USA',
            images: 'cruise.jpg'
        },
        {
            name: 'Marvel at the Northern Lights',
            continent: 'United States',
            location: 'Alaska, USA',
            images: 'nlights.jpg'
        },
        {
            name: 'Go on an Arctic Circle Tour',
            continent: 'United States',
            location: 'Alaska, USA',
            images: 'arctic.jpg'
        },
        {
            name: 'Grab a bit at Organ Stop Pizza',
            continent: 'United States',
            location: 'Arizona, USA',
            images: 'organ.jpg'
        },
        {
            name: 'Visit the Goldfield Ghost Town in Apache Junction',
            continent: 'United States',
            location: 'Arizona, USA',
            images: 'ghosttown.jpg'
        },
        {
            name: 'Spend a night on the floor of the Grand Canyon',
            continent: 'United States',
            location: 'Arizona, USA',
            images: 'floor.jpg'
        },
        {
            name: 'Have fun at Magic Springs and Crystal Falls Water and Theme Park',
            continent: 'United States',
            location: 'Arkansas, USA',
            images: 'magic.jpg'
        },
        {
            name: 'Visit Anthony Chapel in Garvan Woodland Gardens',
            continent: 'United States',
            location: 'Arkansas, USA',
            images: 'chapel.jpg'
        },
        {
            name: 'Walk across the Golden Gate Bridge',
            continent: 'United States',
            location: 'California, USA',
            images: 'goldengate.jpg'
        },
        {
            name: 'Drive State Route 1 through Big Sur',
            continent: 'United States',
            location: 'California, USA',
            images: 'bigsur.jpg'
        },
        {
            name: 'Visit Hollywood',
            continent: 'United States',
            location: 'California, USA',
            images: 'hollywood.jpg'
        },
        {
            name: 'Stroll Venice Beach and the Santa Monica Pier in Los Angeles',
            continent: 'United States',
            location: 'California, USA',
            images: 'pier.jpg'
        },
        {
            name: 'Ride a cable car in San Francisco',
            continent: 'United States',
            location: 'California, USA',
            images: 'cable.jpg'
        },
        {
            name: 'Get hot and bothered in Death Valley',
            continent: 'United States',
            location: 'California, USA',
            images: 'death.jpg'
        },
        {
            name: 'Go sandboarding at Great Sand Dunes National Park',
            continent: 'United States',
            location: 'Colorado, USA',
            images: 'sandboard.jpg'
        },
        {
            name: 'Ski Aspen Highlands in Colorado',
            continent: 'United States',
            location: 'Colorado, USA',
            images: 'aspen.jpg'
        },
        {
            name: 'Bungee jump from the Royal Gorge Bridge',
            continent: 'United States',
            location: 'Colorado, USA',
            images: 'royalgorge.jpg'
        },
        {
            name: 'Walk the Rehoboth Beach Boardwalk',
            continent: 'United States',
            location: 'Delaware, USA',
            images: 'rehoboth.jpg'
        },
        {
            name: 'Go to Disneyworld',
            continent: 'United States',
            location: 'Florida, USA',
            images: 'disney.jpg'
        },
        {
            name: 'Climb the Shark Valley tower',
            continent: 'United States',
            location: 'Florida, USA',
            images: 'sharkvalley.jpg'
        },
        {
            name: 'Drive from Miami to Key West',
            continent: 'United States',
            location: 'Florida, USA',
            images: 'keywest.jpg'
        },
        {
            name: 'Take a haunted bar tour in the historic section of St. Augustine',
            continent: 'United States',
            location: 'Florida, USA',
            images: 'augustine.jpg'
        },
        {
            name: 'Ride a fan boat in the Everglades',
            continent: 'United States',
            location: 'Florida, USA',
            images: 'fanboat.jpg'
        },
        {
            name: 'Eat at the Olde Pink House in Savannah',
            continent: 'United States',
            location: 'Georgia, USA',
            images: 'oldepink.jpg'
        },
        {
            name: 'Visit the Civil Rights District',
            continent: 'United States',
            location: 'Georgia, USA',
            images: 'civilrights.jpg'
        },
        {
            name: 'Surf in Hawaii',
            continent: 'United States',
            location: 'Hawaii, USA',
            images: 'surf.jpg'
        },
        {
            name: 'Climb the Stairway to Heaven',
            continent: 'United States',
            location: 'Hawaii, USA',
            images: 'stairway.jpg'
        },
        {
            name: 'See the lava flow in Hawaii',
            continent: 'United States',
            location: 'Hawaii, USA',
            images: 'lava.jpg'
        },
        {
            name: 'Take a helicopter tour over Hawaii',
            continent: 'United States',
            location: 'Hawaii, USA',
            images: 'heli.jpg'
        },
        {
            name: 'Have a drink at the top of the Hancock Building',
            continent: 'United States',
            location: 'Illinois, USA',
            images: 'hancock.jpg'
        },
        {
            name: 'Catch a game at Wrigley Field',
            continent: 'United States',
            location: 'Illinois, USA',
            images: 'wrigley.jpg'
        },
        {
            name: 'Go to the annual Chicago Blues Festival',
            continent: 'United States',
            location: 'Illinois, USA',
            images: 'blues.jpg'
        },
        {
            name: 'Eat at Ivanhoes',
            continent: 'United States',
            location: 'Indiana, USA',
            images: 'ivan.jpg'
        },
        {
            name: 'Hear the roar of the Indy 500',
            continent: 'United States',
            location: 'Indiana, USA',
            images: 'indy.jpg'
        },
        {
            name: 'Visit the Butter Cow at the Iowa State Fair',
            continent: 'United States',
            location: 'Iowa, USA',
            images: 'buttercow.jpg'
        },
        {
            name: 'Visit Gellas Diner & Lb. Brewing Co.',
            continent: 'United States',
            location: 'Kansas, USA',
            images: 'gellas.jpg'
        },
        {
            name: 'Drive and drink along the Bourbon Trail',
            continent: 'United States',
            location: 'Kentucky, USA',
            images: 'bourbon.jpg'
        },
        {
            name: 'Go to the Kentucky Derby',
            continent: 'United States',
            location: 'Kentucky, USA',
            images: 'derby.jpg'
        },
        {
            name: 'Listen to Jazz in New Orleans',
            continent: 'United States',
            location: 'Louisiana, USA',
            images: 'jazz.jpg'
        },
        {
            name: 'Visit for Mardi Gras',
            continent: 'United States',
            location: 'Louisiana, USA',
            images: 'mardi.jpg'
        },
        {
            name: 'Go to the French Quarter Festival',
            continent: 'United States',
            location: 'Louisiana, USA',
            images: 'french.jpg'
        },
        {
            name: 'Get spooked at Myrtles Plantation',
            continent: 'United States',
            location: 'Louisiana, USA',
            images: 'mytyle.jpg'
        },
        {
            name: 'Watch the sunrise on Cadillac Mountain',
            continent: 'United States',
            location: 'Maine, USA',
            images: 'sunrise.jpg'
        },
        {
            name: 'Eat blue crabs on the water in Maryland',
            continent: 'United States',
            location: 'Maryland, USA',
            images: 'bluecrab.jpg'
        },
        {
            name: 'Walk the Freedom Trail in Boston',
            continent: 'United States',
            location: 'Massachusetts, USA',
            images: 'freedomtrail.jpg'
        },
        {
            name: 'Visit Cape Cod',
            continent: 'United States',
            location: 'Massachusetts, USA',
            images: 'capecod.jpg'
        },
        {
            name: 'Visit the Shinola Store',
            continent: 'United States',
            location: 'Michigan, USA',
            images: 'shinola.jpg'
        },
        {
            name: 'See a Michigan game at the Big House',
            continent: 'United States',
            location: 'Michigan, USA',
            images: 'bighouse.jpg'
        },
        {
            name: 'Crack open a cold one in Grand Rapids',
            continent: 'United States',
            location: 'Michigan, USA',
            images: 'grand.jpg'
        },
        {
            name: 'Canoe the Boundary Waters',
            continent: 'United States',
            location: 'Minnesota, USA',
            images: 'canoe.jpg'
        },
        {
            name: 'Listen to blues at The Lyric in Oxford',
            continent: 'United States',
            location: 'Mississippi, USA',
            images: 'lyric.jpg'
        },
        {
            name: 'Explore the Ozark Caverns',
            continent: 'United States',
            location: 'Missouri, USA',
            images: 'ozark.jpg'
        },
        {
            name: 'Take the Polar Bear Plunge in Brandon Beach',
            continent: 'United States',
            location: 'Missouri, USA',
            images: 'polarbearplunge.jpg'
        },
        {
            name: 'Drive Going-to-the-Sun-Road',
            continent: 'United States',
            location: 'Montana, USA',
            images: 'goingtosun.jpg'
        },
        {
            name: 'Hike through Glacier National Park',
            continent: 'United States',
            location: 'Montana, USA',
            images: 'glacier.jpg'
        },
        {
            name: 'Go to Popcorn Days in North Loup',
            continent: 'United States',
            location: 'Nebraska, USA',
            images: 'popcorn.jpg'
        },
        {
            name: 'Gamble in Las Vegas',
            continent: 'United States',
            location: 'Nevada, USA',
            images: 'gamble.jpg'
        },
        {
            name: 'Order a late-night Awful Awful Burger at The Nugget in Reno',
            continent: 'United States',
            location: 'Nevada, USA',
            images: 'awful.jpg'
        },
        {
            name: 'Free your spirit at Burning Man',
            continent: 'United States',
            location: 'Nevada, USA',
            images: 'burning.jpg'
        },
        {
            name: 'Ride a gondola at the Venetian in Las Vegas',
            continent: 'United States',
            location: 'Nevada, USA',
            images: 'gondola.jpg'
        },
        {
            name: 'Add your pumpkin to the wall at the Keene Pumpkin Festival',
            continent: 'United States',
            location: 'New Hampshire, USA',
            images: 'pumpkinwall.jpg'
        },
        {
            name: 'Visit Lincoln Town',
            continent: 'United States',
            location: 'New Hampshire, USA',
            images: 'lincoln.jpg'
        },
        {
            name: 'Climb Barnegat Lighthouse on Long Beach Island',
            continent: 'United States',
            location: 'New Jersey, USA',
            images: 'lighthouse.jpg'
        },
        {
            name: 'Watch a Balloon Glow at the Albuquerque International Balloon Fiesta',
            continent: 'United States',
            location: 'New Mexico, USA',
            images: 'balloon.jpg'
        },
        {
            name: 'Visit Taos Pueblo',
            continent: 'United States',
            location: 'New Mexico, USA',
            images: 'taos.jpg'
        },
        {
            name: 'Visit Ellis Island',
            continent: 'United States',
            location: 'New York, USA',
            images: 'ellis.jpg'
        },
        {
            name: 'Go wine (and pie) tasting on Long Islands North Fork',
            continent: 'United States',
            location: 'New York, USA',
            images: 'northfork.jpg'
        },
        {
            name: 'Catch a Broadway Show in New York City',
            continent: 'United States',
            location: 'New York, USA',
            images: 'broadway.jpg'
        },
        {
            name: 'Eat Buffalo wings in Buffalo',
            continent: 'United States',
            location: 'New York, USA',
            images: 'wings.jpg'
        },
        {
            name: 'Feel the mist of Niagara Falls',
            continent: 'United States',
            location: 'New York, USA',
            images: 'niagara.jpg'
        },
        {
            name: 'Have a carriage ride in Central Park',
            continent: 'United States',
            location: 'New York, USA',
            images: 'carriage.jpg'
        },
        {
            name: 'Tour the Biltmore Estate',
            continent: 'United States',
            location: 'North Carolina, USA',
            images: 'biltmore.jpg'
        },
        {
            name: 'Visit Chimney Rock',
            continent: 'United States',
            location: 'North Carolina, USA',
            images: 'chimney.jpg'
        },
        {
            name: 'Climb White Butte',
            continent: 'United States',
            location: 'North Dakota, USA',
            images: 'butte.jpg'
        },
        {
            name: 'Visit Graeters Ice Cream',
            continent: 'United States',
            location: 'Ohio, USA',
            images: 'graeter.jpg'
        },
        {
            name: 'Ride the Milennium Force at Cedar Point',
            continent: 'United States',
            location: 'Ohio, USA',
            images: 'force.jpg'
        },
        {
            name: 'Visit Norman Music Festival',
            continent: 'United States',
            location: 'Oklahoma, USA',
            images: 'norman.jpg'
        },
        {
            name: 'Get lost in Powells City of Books',
            continent: 'United States',
            location: 'Oregon, USA',
            images: 'powell.jpg'
        },
        {
            name: 'Hang out on Cannon Beach',
            continent: 'United States',
            location: 'Oregon, USA',
            images: 'cannon.jpg'
        },
        {
            name: 'Go to a mud sale in Lancaster County',
            continent: 'United States',
            location: 'Pennsylvania, USA',
            images: 'mudsale.jpg'
        },
        {
            name: 'Pig out at Hersheys Chocolate World',
            continent: 'United States',
            location: 'Pennsylvania, USA',
            images: 'chocolate.jpg'
        },
        {
            name: 'Take the Cliff Walk in Newport',
            continent: 'United States',
            location: 'Rhode Island, USA',
            images: 'cliffwalk.jpg'
        },
        {
            name: 'Taste the barbecue hash at Sweatmans BBQ',
            continent: 'United States',
            location: 'South Carolina, USA',
            images: 'bbq.jpg'
        },
        {
            name: 'Visit the Mitchell Corn Palace',
            continent: 'United States',
            location: 'South Dakota, USA',
            images: 'cornpalace.jpg'
        },
        {
            name: 'Visit Mount Rushmore',
            continent: 'United States',
            location: 'South Dakota, USA',
            images: 'rushmore.jpg'
        },
        {
            name: 'Spend a day in Dollywood',
            continent: 'United States',
            location: 'Tennessee, USA',
            images: 'dollywood.jpg'
        },
        {
            name: 'See a show at the Grand Ole Opry in Nashville',
            continent: 'United States',
            location: 'Tennessee, USA',
            images: 'opry.jpg'
        },
        {
            name: 'Visit Lovers Leap in Chattanooga',
            continent: 'United States',
            location: 'Tennessee, USA',
            images: 'loversleap.jpg'
        },
        {
            name: 'Tube at the Guadalupe River',
            continent: 'United States',
            location: 'Texas, USA',
            images: 'tube.jpg'
        },
        {
            name: 'Visit the Alamo in San Antonio',
            continent: 'United States',
            location: 'Texas, USA',
            images: 'alamo.jpg'
        },
        {
            name: 'Build a structure at Texas Sandfest',
            continent: 'United States',
            location: 'Texas, USA',
            images: 'sandfest.jpg'
        },
        {
            name: 'Hike to Delicate Arch',
            continent: 'United States',
            location: 'Utah, USA',
            images: 'arch.jpg'
        },
        {
            name: 'Snowboard in Park City',
            continent: 'United States',
            location: 'Utah, USA',
            images: 'parkcity.jpg'
        },
        {
            name: 'Visit Sundance Film festival',
            continent: 'United States',
            location: 'Utah, USA',
            images: 'sundance.jpg'
        },
        {
            name: 'Go to the Clark Planetarium',
            continent: 'United States',
            location: 'Utah, USA',
            images: 'clark.jpg'
        },
        {
            name: 'Take a brewery tour',
            continent: 'United States',
            location: 'Vermont, USA',
            images: 'tour.jpg'
        },
        {
            name: 'See a movie at the Byrd Theater',
            continent: 'United States',
            location: 'Virginia, USA',
            images: 'byrd.jpg'
        },
        {
            name: 'See the Lincoln Memorial in Washington DC',
            continent: 'United States',
            location: 'Virginia, USA',
            images: 'memorial.jpg'
        },
        {
            name: 'Go to the Sasquatch! Music Festival',
            continent: 'United States',
            location: 'Washington, USA',
            images: 'sas.jpg'
        },
        {
            name: 'Hike the Ape Caves',
            continent: 'United States',
            location: 'Washington, USA',
            images: 'ape.jpg'
        },
        {
            name: 'Watch the fish fly at Pike Place Market',
            continent: 'United States',
            location: 'Washington, USA',
            images: 'pike.jpg'
        },
        {
            name: 'Take the Washington State Ferry to Orcas Island',
            continent: 'United States',
            location: 'Washington, USA',
            images: 'ferry.jpg'
        },
        {
            name: 'Visit the Seattle Space Needle',
            continent: 'United States',
            location: 'Washington, USA',
            images: 'spaceneedle.jpg'
        },
        {
            name: 'Eat a pepperoni roll from Country Club Bakery',
            continent: 'United States',
            location: 'West Virginia, USA',
            images: 'roll.jpg'
        },
        {
            name: 'Shop the Dane County Farmers Market',
            continent: 'United States',
            location: 'Wisconsin, USA',
            images: 'dane.jpg'
        },
        {
            name: 'Rock out at Summerfest',
            continent: 'United States',
            location: 'Wisconsin, USA',
            images: 'summerfest.jpg'
        },
        {
            name: 'Ski Jackson Holes steep slopes',
            continent: 'United States',
            location: 'Wyoming, USA',
            images: 'ski.jpg'
        },
        {
            name: 'Go to Cheyenne Frontier Days',
            continent: 'United States',
            location: 'Wyoming, USA',
            images: 'frontier.jpg'
        },
        {
            name: 'See the Morning Glory Pool (hole)',
            continent: 'United States',
            location: 'Wyoming, USA',
            images: 'glory.jpg'
        }
    ];

    for (var i = 0; i < asiaGoals.length; i++) {

        var newStaticGoal = new StaticGoals({
            name: asiaGoals[i].name,
            continent: asiaGoals[i].continent,
            location: asiaGoals[i].location,
            images: asiaGoals[i].images
        });

    // for (var i = 0; i < centralAmericaGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: centralAmericaGoals[i].name,
    //         continent: centralAmericaGoals[i].continent,
    //         location: centralAmericaGoals[i].location,
    //         images: centralAmericaGoals[i].images
    //     });

    // for (var i = 0; i < canadaGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: canadaGoals[i].name,
    //         continent: canadaGoals[i].continent,
    //         location: canadaGoals[i].location,
    //         images: canadaGoals[i].images
    //     });

    // for (var i = 0; i < southAmericaGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: southAmericaGoals[i].name,
    //         continent: southAmericaGoals[i].continent,
    //         location: southAmericaGoals[i].location,
    //         images: southAmericaGoals[i].images
    //     });

    // for (var i = 0; i < antarcticaGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: antarcticaGoals[i].name,
    //         continent: antarcticaGoals[i].continent,
    //         location: antarcticaGoals[i].location,
    //         images: antarcticaGoals[i].images
    //     });

    // for (var i = 0; i < australiaGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: australiaGoals[i].name,
    //         continent: australiaGoals[i].continent,
    //         location: australiaGoals[i].location,
    //         images: australiaGoals[i].images
    //     });

    // for (var i = 0; i < europeGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: europeGoals[i].name,
    //         continent: europeGoals[i].continent,
    //         location: europeGoals[i].location,
    //         images: europeGoals[i].images
    //     });

    // for (var i = 0; i < unitedStatesGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: unitedStatesGoals[i].name,
    //         continent: unitedStatesGoals[i].continent,
    //         location: unitedStatesGoals[i].location,
    //         images: unitedStatesGoals[i].images
    //     });

    // for (var i = 0; i < africaGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: africaGoals[i].name,
    //         continent: africaGoals[i].continent,
    //         location: africaGoals[i].location,
    //         images: africaGoals[i].images
    //     });

        // console.log("static goal: "+newStaticGoal);

        newStaticGoal.save(function (err, savedStaticGoal) {
            console.log("saved static goal: " + savedStaticGoal);

            if (err) {
                console.log('Problem saving the goal ' + color.yellow(savedStaticGoal.name) + ' due to ' + err);
                res.status(500).json({
                    'message': 'Database error trying to create goal.  Please contact support@yourproject.com.'
                });
            }

            console.log('Successfully created new goal: ' + color.green(savedStaticGoal.name));
            stop = true;
        });
    }

    res.status(201).json({
        'message': 'Successfully created new goal',
        'client': _.omit(body)
    });

});

module.exports = router;
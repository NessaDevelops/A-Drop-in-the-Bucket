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
            images: 'baobabs.jpg',
            feedme: false,
            viking: false,
            swimming: false
            
        },
        {
            name: 'Go on a Safari',
            continent: 'Africa',
            location: 'Africa',
            images: 'safari.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Sample the Cape winelands',
            continent: 'Africa',
            location: 'South Africa, Africa',
            images: 'capewinelands.jpg',
            feedme: true,
            viking: false,
            swimming: false
        },
        {
            name: 'Eat African cuisine',
            continent: 'Africa',
            location: 'Africa',
            images: 'africanfood.jpg',
            feedme: true,
            viking: false,
            swimming: false
        },
        {
            name: 'Circle the Pyramids in Egypt',
            continent: 'Africa',
            location: 'Egypt, Africa',
            images: 'pyramid.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Journey through Botswana',
            continent: 'Africa',
            location: 'Botswana, Africa',
            images: 'botswana.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Take a thrilling walking Safari',
            continent: 'Africa',
            location: 'Africa',
            images: 'safariwalk.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Marvel at Victoria Falls',
            continent: 'Africa',
            location: 'Zambia, Africa',
            images: 'victoriafalls.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Ride South Africas Blue Train',
            continent: 'Africa',
            location: 'South Africa, Africa',
            images: 'bluetrain.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Raft down the Zambezi',
            continent: 'Africa',
            location: 'Africa',
            images: 'zambezi.jpg',
            feedme: false,
            viking: false,
            swimming: true
        }
    ];

    australiaGoals = [
        {
            name: 'Swim with whale sharks in Exmouth',
            continent: 'Australia',
            location: 'Exmouth, Western Australia',
            images: 'whaleshark.jpg',
            feedme: false,
            viking: false,
            swimming: true
        },
        {
            name: 'Take a selfie with a Quokka on Rottsnest Island',
            continent: 'Australia',
            location: 'Perth, Western Australia',
            images: 'quokka.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Visit a Wave Rock, Hyden',
            continent: 'Australia',
            location: 'Hyden, Western Australia',
            images: 'waverock.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Drive the Eyre Highway',
            continent: 'Australia',
            location: 'Nullarbor, Western Australia',
            images: 'eyre.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Swim with sea lions',
            continent: 'Australia',
            location: 'Bairds Bay, South Australia',
            images: 'sealion.jpg',
            feedme: false,
            viking: false,
            swimming: true
        },
        {
            name: 'Drive the Great Ocean Road',
            continent: 'Australia',
            location: 'Victoria, Australia',
            images: 'oceanroad.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'View the Aurora Australis',
            continent: 'Australia',
            location: 'Tasmania, Australia',
            images: 'australis.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Celebrate a White Christmas on Hyams Beach',
            continent: 'Australia',
            location: 'Jervis Bay, New South Wales',
            images: 'hyams.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Camp at the highest point in Australia, atop Mt. Kosziuszko in the Snowy Mountains',
            continent: 'Australia',
            location: 'New South Wales',
            images: 'kos.jpg',
            feedme: false,
            viking: true,
            swimming: false
        },
        {
            name: 'BridgeClimb, Sydney Harbour Bridge',
            continent: 'Australia',
            location: 'Sydney, New South Wales',
            images: 'bridgeclimb.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Kayak in Katherine Gorge',
            continent: 'Australia',
            location: 'Western Australia',
            images: 'katherine.jpg',
            feedme: false,
            viking: false,
            swimming: true
        },
        {
            name: 'Crocodile diving',
            continent: 'Australia',
            location: 'Darwin, Northern Territory',
            images: 'crocodile.jpg',
            feedme: false,
            viking: false,
            swimming: true
        }
    ];

    antarcticaGoals = [
        {
            name: 'Sledding at Neko Harbour',
            continent: 'Antarctica',
            location: 'Antarctica',
            images: 'neko.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Hiking a Volcano on Deception Island',
            continent: 'Antarctica',
            location: 'Antarctica',
            images: 'deception.jpg',
            feedme: false,
            viking: true,
            swimming: false
        },
        {
            name: 'First penguin encounter on Barrientos Island',
            continent: 'Antarctica',
            location: 'Antarctica',
            images: 'barrientos.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Swimming in Antarctica',
            continent: 'Antarctica',
            location: 'Antarctica',
            images: 'swimant.jpg',
            feedme: false,
            viking: false,
            swimming: true
        },
        {
            name: 'Dolphin luminescence',
            continent: 'Antarctica',
            location: 'Antarctica',
            images: 'dolphin.jpg',
            feedme: false,
            viking: false,
            swimming: false
        }
    ];

    europeGoals = [
        {
            name: 'A food tour of Sicily',
            continent: 'Europe',
            location: 'Sicily, Italy',
            images: 'sicily.jpg',
            feedme: true,
            viking: false,
            swimming: false
        },
        {
            name: 'Take the Alternative Berlin tour',
            continent: 'Europe',
            location: 'Berlin, Germany',
            images: 'berlin.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Drink at the ruin bar that started the movement',
            continent: 'Europe',
            location: 'Budapest, Hungary',
            images: 'ruinbar.jpg',
            feedme: true,
            viking: false,
            swimming: false
        },
        {
            name: 'Hang out in Freetown Christiania',
            continent: 'Europe',
            location: 'Copenhagen, Denmark',
            images: 'freetown.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Catch a hurling game at Croke Park',
            continent: 'Europe',
            location: 'Dublin, Ireland',
            images: 'hurling.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Get the top front row seat on a double-decker',
            continent: 'Europe',
            location: 'London, England',
            images: 'doubledecker.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Tour the Paris Catacombs',
            continent: 'Europe',
            location: 'Paris, France',
            images: 'catacombs.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Eat Trdelnik at the Christmas market',
            continent: 'Europe',
            location: 'Prague, Czech Republic',
            images: 'trdelnik.jpg',
            feedme: true,
            viking: false,
            swimming: false
        },
        {
            name: 'Eat gelato at Fatamorgana',
            continent: 'Europe',
            location: 'Rome, Italy',
            images: 'gelato.jpg',
            feedme: true,
            viking: false,
            swimming: false
        },
        {
            name: 'Explore the underground metro',
            continent: 'Europe',
            location: 'Stockholm, Sweden',
            images: 'metro.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Dine at the milk bar',
            continent: 'Europe',
            location: 'Warsaw, Poland',
            images: 'milkbar.jpg',
            feedme: true,
            viking: false,
            swimming: false
        }
    ];

    southAmericaGoals = [
        {
            name: 'Mountain bike Ecuadors the Avenue of Volcanoes',
            continent: 'South America',
            location: 'Ecuador, South America',
            images: 'ecuador.jpg',
            feedme: false,
            viking: true,
            swimming: false
        },
        {
            name: 'Trek Torres Del Paine National Park',
            continent: 'South America',
            location: 'Chile, South America',
            images: 'torres.jpg',
            feedme: false,
            viking: true,
            swimming: false
        },
        {
            name: 'Paddle Brazils Bay of Paraty',
            continent: 'South America',
            location: 'Brazil, South America',
            images: 'paraty.jpg',
            feedme: false,
            viking: false,
            swimming: true
        },
        {
            name: 'Trek the Inca Trail to Machu Picchu',
            continent: 'South America',
            location: 'Peru, South America',
            images: 'inca.jpg',
            feedme: false,
            viking: true,
            swimming: false
        },
        {
            name: 'Ski in Portillo, Chile',
            continent: 'South America',
            location: 'Portillo, Chile',
            images: 'portillo.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Tour the Salar De Uyuni',
            continent: 'South America',
            location: 'Bolivia, South America',
            images: 'saler.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Spend a night in the Museum at Casapueblo',
            continent: 'South America',
            location: 'Uruguay, South America',
            images: 'casapueblo.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Herd llamas in Peru',
            continent: 'South America',
            location: 'Peru, South America',
            images: 'llama.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Visit Rio de Janeiro during Carnival',
            continent: 'South America',
            location: 'Rio de Janeiro, Brazil',
            images: 'carnival.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Cruise on reed boat on Lake Titicaca',
            continent: 'South America',
            location: 'South America',
            images: 'reedboat.jpg',
            feedme: false,
            viking: false,
            swimming: true
        },
        {
            name: 'Discover wildlife in the Galapagos',
            continent: 'South America',
            location: 'Ecuador, South America',
            images: 'wildlife.jpg',
            feedme: false,
            viking: false,
            swimming: false
        }
    ];

    asiaGoals = [
        {
            name: 'Trek Paro Valley',
            continent: 'Asia',
            location: 'Bhutan, South Asia',
            images: 'paro.jpg',
            feedme: false,
            viking: true,
            swimming: false
        },

        {
            name: 'Stay at the worlds oldest hotel Nishiyama Onsen Keiunkan',
            continent: 'Asia',
            location: 'Japan, East Asia',
            images: 'nishi.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Visit the tallest building in the world, Burj Khalifa in Dubai',
            continent: 'Asia',
            location: 'Dubai, United Arab Emirates',
            images: 'burj.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Ride on a motorcycle taxi at peak hour in Bangkok, Thailand',
            continent: 'Asia',
            location: 'Bangkok, Thailand',
            images: 'motorcycletaxi.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Scale the Great Wall of China',
            continent: 'Asia',
            location: 'China, Asia',
            images: 'wallofchina.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Dance under the cherry blossoms in Japan',
            continent: 'Asia',
            location: 'Japan, East Asia',
            images: 'cherry.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Cruise around Ha Long Bay in Vietnam',
            continent: 'Asia',
            location: 'Vietnam, Asia',
            images: 'halong.jpg',
            feedme: false,
            viking: false,
            swimming: true
        },
        {
            name: 'See Tarsier monkeys in Bohal, Philippines',
            continent: 'Asia',
            location: 'Bohal, Philippines',
            images: 'tarsier.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Marvel at the breathtaking sculptures in Harbin, China',
            continent: 'Asia',
            location: 'Harbin, China',
            images: 'harbin.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Get down and dirty at the Boryeong Mud Festival in Korea',
            continent: 'Asia',
            location: 'Korea, East Asia',
            images: 'mud.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Visit the Tonle Sap floating villages',
            continent: 'Asia',
            location: 'Cambodia, Asia',
            images: 'tonle.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Hug a baby panda in Chengdu',
            continent: 'Asia',
            location: 'Chengdu, China',
            images: 'panda.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Take a night cruise around Victoria Harbour',
            continent: 'Asia',
            location: 'Hong Kong, China',
            images: 'hongkong.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Have dinner in the sky at the Singapore Flyer',
            continent: 'Asia',
            location: 'Singapore, Asia',
            images: 'flyer.jpg',
            feedme: true,
            viking: false,
            swimming: false
        },
        {
            name: 'Sleep in a traditional hanok in Jeonju, Korea',
            continent: 'Asia',
            location: 'Jeonju, Korea',
            images: 'hanok.jpg',
            feedme: false,
            viking: false,
            swimming: false
        }
    ];

    centralAmericaGoals = [
        {
            name: 'Drive into Puerto Ricos Bioluminescent Bay',
            continent: 'Central America',
            location: 'Puerto Rico',
            images: 'bioluminescentbay.jpg',
            feedme: false,
            viking: false,
            swimming: false

        },
        {
            name: 'Whitewater rafting on the Pacuare River',
            continent: 'Central America',
            location: 'Costa Rica',
            images: 'pacuareriver.jpg',
            feedme: false,
            viking: false,
            swimming: true
        },
        {
            name: 'Meet a Mayan Shaman',
            continent: 'Central America',
            location: 'Panama',
            images: 'mayanshaman.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Tour the Panama Canal',
            continent: 'Central America',
            location: 'Puerto Rico',
            images: 'panamacanal.jpg',
            feedme: false,
            viking: false,
            swimming: true
        },
        {
            name: 'Whale watching in Costa Rica',
            continent: 'Central America',
            location: 'Costa Rica',
            images: 'whalewatchcostarica.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Have a toucan on your arm at the Peace Garden at La Paz',
            continent: 'Central America',
            location: 'Costa Rica',
            images: 'toucan.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Have a rainforest adventure',
            continent: 'Central America',
            location: 'Central America',
            images: 'rainforest.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Go deep sea fishing',
            continent: 'Central America',
            location: 'Central America',
            images: 'deepseafishing.jpg',
            feedme: false,
            viking: false,
            swimming: true
        },
        {
            name: 'Visit the haunted island of San Lucas, Costa Rica',
            continent: 'Central America',
            location: 'Costa Rica',
            images: 'sanlucas.jpg',
            feedme: false,
            viking: false,
            swimming: false
        }
    ];

    canadaGoals = [
        // {
        //     name: 'Bungee jump in Wakefield Quebec',
        //     continent: 'Canada',
        //     location: 'Quebec, Canada',
        //     images: 'bungee.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Go on a polar bear safari near Churchhill, Manitoba',
        //     continent: 'Canada',
        //     location: 'Manitoba, Canada',
        //     images: 'polarbear.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit the hot springs in the Canadian Rockies',
        //     continent: 'Canada',
        //     location: 'Canada',
        //     images: 'hotsprings.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: true
        // },
        // {
        //     name: 'Visit the wineries of Niagara-on-the-Lake, Ontario',
        //     continent: 'Canada',
        //     location: 'Ontario, Canada',
        //     images: 'wineries.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Spend a night in the Hotel de Glace in Quebec',
        //     continent: 'Canada',
        //     location: 'Quebec, Canada',
        //     images: 'glace.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'White water raft in Banff',
        //     continent: 'Canada',
        //     location: 'Alberta, Canada',
        //     images: 'raft.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: true
        // },
        // {
        //     name: 'Walk over the Capilano Suspension Bridge',
        //     continent: 'Canada',
        //     location: 'British Columbia, Canada',
        //     images: 'capilano.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Kite surf off the Magdalen Islands in Quebec',
        //     continent: 'Canada',
        //     location: 'Quebec, Canada',
        //     images: 'kitesurf.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: true
        // },
        // {
        //     name: 'Skydive in the Saskatchewan',
        //     continent: 'Canada',
        //     location: 'Saskatchewan, Canada',
        //     images: 'skydive.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Zipline through the forests of Whistler, BC',
        //     continent: 'Canada',
        //     location: 'British Columbia, Canada',
        //     images: 'zipline.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Discover the Columbia Ice Fields in Alberta',
        //     continent: 'Canada',
        //     location: 'Alberta, Canada',
        //     images: 'icefields.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // }








        {
            name: 'See the Northern Lights in Yellowknife',
            continent: 'Canada',
            location: 'Yellowknife, Canada',
            images: 'yellowknife.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Place a love lock on the Corkstown bridge in Ottawa',
            continent: 'Canada',
            location: 'Ottawa, Canada',
            images: 'lovelock.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Ride the Leviathan at Canadas Wonderland',
            continent: 'Canada',
            location: 'Ontario, Canada',
            images: 'lev.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Dog sled across the Canadian North',
            continent: 'Canada',
            location: 'Canada',
            images: 'dogsled.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Eat a bagel in Montreal',
            continent: 'Canada',
            location: 'Montreal, Quebec',
            images: 'bagel.jpg',
            feedme: true,
            viking: false,
            swimming: false
        }
    ];

    unitedStatesGoals = [
        // {
        //     name: 'Visit the Cathedral Caverns',
        //     continent: 'United States',
        //     location: 'Alabama, USA',
        //     images: 'cath.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Go to Space Camp at the U.S. Space & Rocket Center',
        //     continent: 'United States',
        //     location: 'Alabama, USA',
        //     images: 'spacecamp.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Watch NASCAR at Talladega',
        //     continent: 'United States',
        //     location: 'Alabama, USA',
        //     images: 'talladega.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'See polar bears at the Arctic National Wildlife Refuge',
        //     continent: 'United States',
        //     location: 'Alabama, USA',
        //     images: 'refuge.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Take a cruise around Alaskas icebergs',
        //     continent: 'United States',
        //     location: 'Alaska, USA',
        //     images: 'cruise.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: true
        // },
        // {
        //     name: 'Marvel at the Northern Lights',
        //     continent: 'United States',
        //     location: 'Alaska, USA',
        //     images: 'nlights.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Go on an Arctic Circle Tour',
        //     continent: 'United States',
        //     location: 'Alaska, USA',
        //     images: 'arctic.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Grab a bit at Organ Stop Pizza',
        //     continent: 'United States',
        //     location: 'Arizona, USA',
        //     images: 'organ.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit the Goldfield Ghost Town in Apache Junction',
        //     continent: 'United States',
        //     location: 'Arizona, USA',
        //     images: 'ghosttown.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Spend a night on the floor of the Grand Canyon',
        //     continent: 'United States',
        //     location: 'Arizona, USA',
        //     images: 'floor.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Have fun at Magic Springs and Crystal Falls Water and Theme Park',
        //     continent: 'United States',
        //     location: 'Arkansas, USA',
        //     images: 'magic.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit Anthony Chapel in Garvan Woodland Gardens',
        //     continent: 'United States',
        //     location: 'Arkansas, USA',
        //     images: 'chapel.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Walk across the Golden Gate Bridge',
        //     continent: 'United States',
        //     location: 'California, USA',
        //     images: 'goldengate.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Drive State Route 1 through Big Sur',
        //     continent: 'United States',
        //     location: 'California, USA',
        //     images: 'bigsur.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit Hollywood',
        //     continent: 'United States',
        //     location: 'California, USA',
        //     images: 'hollywood.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // }







        // {
        //     name: 'Stroll Venice Beach and the Santa Monica Pier in Los Angeles',
        //     continent: 'United States',
        //     location: 'California, USA',
        //     images: 'pier.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Ride a cable car in San Francisco',
        //     continent: 'United States',
        //     location: 'California, USA',
        //     images: 'cable.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Get hot and bothered in Death Valley',
        //     continent: 'United States',
        //     location: 'California, USA',
        //     images: 'death.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Go sandboarding at Great Sand Dunes National Park',
        //     continent: 'United States',
        //     location: 'Colorado, USA',
        //     images: 'sandboard.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Ski Aspen Highlands in Colorado',
        //     continent: 'United States',
        //     location: 'Colorado, USA',
        //     images: 'aspen.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Bungee jump from the Royal Gorge Bridge',
        //     continent: 'United States',
        //     location: 'Colorado, USA',
        //     images: 'royalgorge.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Walk the Rehoboth Beach Boardwalk',
        //     continent: 'United States',
        //     location: 'Delaware, USA',
        //     images: 'rehoboth.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Go to Disneyworld',
        //     continent: 'United States',
        //     location: 'Florida, USA',
        //     images: 'disney.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Climb the Shark Valley tower',
        //     continent: 'United States',
        //     location: 'Florida, USA',
        //     images: 'sharkvalley.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Drive from Miami to Key West',
        //     continent: 'United States',
        //     location: 'Florida, USA',
        //     images: 'keywest.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Take a haunted bar tour in the historic section of St. Augustine',
        //     continent: 'United States',
        //     location: 'Florida, USA',
        //     images: 'augustine.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Ride a fan boat in the Everglades',
        //     continent: 'United States',
        //     location: 'Florida, USA',
        //     images: 'fanboat.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Eat at the Olde Pink House in Savannah',
        //     continent: 'United States',
        //     location: 'Georgia, USA',
        //     images: 'oldepink.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit the Civil Rights District',
        //     continent: 'United States',
        //     location: 'Georgia, USA',
        //     images: 'civilrights.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Surf in Hawaii',
        //     continent: 'United States',
        //     location: 'Hawaii, USA',
        //     images: 'surf.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: true
        // }











        // {
        //     name: 'Climb the Stairway to Heaven',
        //     continent: 'United States',
        //     location: 'Hawaii, USA',
        //     images: 'stairway.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'See the lava flow in Hawaii',
        //     continent: 'United States',
        //     location: 'Hawaii, USA',
        //     images: 'lava.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Take a helicopter tour over Hawaii',
        //     continent: 'United States',
        //     location: 'Hawaii, USA',
        //     images: 'heli.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Have a drink at the top of the Hancock Building',
        //     continent: 'United States',
        //     location: 'Illinois, USA',
        //     images: 'hancock.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Catch a game at Wrigley Field',
        //     continent: 'United States',
        //     location: 'Illinois, USA',
        //     images: 'wrigley.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Go to the annual Chicago Blues Festival',
        //     continent: 'United States',
        //     location: 'Illinois, USA',
        //     images: 'blues.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Eat at Ivanhoes',
        //     continent: 'United States',
        //     location: 'Indiana, USA',
        //     images: 'ivan.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Hear the roar of the Indy 500',
        //     continent: 'United States',
        //     location: 'Indiana, USA',
        //     images: 'indy.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit the Butter Cow at the Iowa State Fair',
        //     continent: 'United States',
        //     location: 'Iowa, USA',
        //     images: 'buttercow.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit Gellas Diner & Lb. Brewing Co.',
        //     continent: 'United States',
        //     location: 'Kansas, USA',
        //     images: 'gellas.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Drive and drink along the Bourbon Trail',
        //     continent: 'United States',
        //     location: 'Kentucky, USA',
        //     images: 'bourbon.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Go to the Kentucky Derby',
        //     continent: 'United States',
        //     location: 'Kentucky, USA',
        //     images: 'derby.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Listen to Jazz in New Orleans',
        //     continent: 'United States',
        //     location: 'Louisiana, USA',
        //     images: 'jazz.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit for Mardi Gras',
        //     continent: 'United States',
        //     location: 'Louisiana, USA',
        //     images: 'mardi.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Go to the French Quarter Festival',
        //     continent: 'United States',
        //     location: 'Louisiana, USA',
        //     images: 'french.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // }











        // {
        //     name: 'Get spooked at Myrtles Plantation',
        //     continent: 'United States',
        //     location: 'Louisiana, USA',
        //     images: 'mytyle.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Watch the sunrise on Cadillac Mountain',
        //     continent: 'United States',
        //     location: 'Maine, USA',
        //     images: 'sunrise.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Eat blue crabs on the water in Maryland',
        //     continent: 'United States',
        //     location: 'Maryland, USA',
        //     images: 'bluecrab.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Walk the Freedom Trail in Boston',
        //     continent: 'United States',
        //     location: 'Massachusetts, USA',
        //     images: 'freedomtrail.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit Cape Cod',
        //     continent: 'United States',
        //     location: 'Massachusetts, USA',
        //     images: 'capecod.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit the Shinola Store',
        //     continent: 'United States',
        //     location: 'Michigan, USA',
        //     images: 'shinola.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'See a Michigan game at the Big House',
        //     continent: 'United States',
        //     location: 'Michigan, USA',
        //     images: 'bighouse.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Crack open a cold one in Grand Rapids',
        //     continent: 'United States',
        //     location: 'Michigan, USA',
        //     images: 'grand.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Canoe the Boundary Waters',
        //     continent: 'United States',
        //     location: 'Minnesota, USA',
        //     images: 'canoe.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: true
        // },
        // {
        //     name: 'Listen to blues at The Lyric in Oxford',
        //     continent: 'United States',
        //     location: 'Mississippi, USA',
        //     images: 'lyric.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Explore the Ozark Caverns',
        //     continent: 'United States',
        //     location: 'Missouri, USA',
        //     images: 'ozark.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Take the Polar Bear Plunge in Brandon Beach',
        //     continent: 'United States',
        //     location: 'Missouri, USA',
        //     images: 'polarbearplunge.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: true
        // },
        // {
        //     name: 'Drive Going-to-the-Sun-Road',
        //     continent: 'United States',
        //     location: 'Montana, USA',
        //     images: 'goingtosun.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Hike through Glacier National Park',
        //     continent: 'United States',
        //     location: 'Montana, USA',
        //     images: 'glacier.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Go to Popcorn Days in North Loup',
        //     continent: 'United States',
        //     location: 'Nebraska, USA',
        //     images: 'popcorn.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // }











        // {
        //     name: 'Gamble in Las Vegas',
        //     continent: 'United States',
        //     location: 'Nevada, USA',
        //     images: 'gamble.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Order a late-night Awful Awful Burger at The Nugget in Reno',
        //     continent: 'United States',
        //     location: 'Nevada, USA',
        //     images: 'awful.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Free your spirit at Burning Man',
        //     continent: 'United States',
        //     location: 'Nevada, USA',
        //     images: 'burning.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Ride a gondola at the Venetian in Las Vegas',
        //     continent: 'United States',
        //     location: 'Nevada, USA',
        //     images: 'gondola.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Add your pumpkin to the wall at the Keene Pumpkin Festival',
        //     continent: 'United States',
        //     location: 'New Hampshire, USA',
        //     images: 'pumpkinwall.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit Lincoln Town',
        //     continent: 'United States',
        //     location: 'New Hampshire, USA',
        //     images: 'lincoln.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Climb Barnegat Lighthouse on Long Beach Island',
        //     continent: 'United States',
        //     location: 'New Jersey, USA',
        //     images: 'lighthouse.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Watch a Balloon Glow at the Albuquerque International Balloon Fiesta',
        //     continent: 'United States',
        //     location: 'New Mexico, USA',
        //     images: 'balloon.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit Taos Pueblo',
        //     continent: 'United States',
        //     location: 'New Mexico, USA',
        //     images: 'taos.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit Ellis Island',
        //     continent: 'United States',
        //     location: 'New York, USA',
        //     images: 'ellis.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Go wine (and pie) tasting on Long Islands North Fork',
        //     continent: 'United States',
        //     location: 'New York, USA',
        //     images: 'northfork.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Catch a Broadway Show in New York City',
        //     continent: 'United States',
        //     location: 'New York, USA',
        //     images: 'broadway.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Eat Buffalo wings in Buffalo',
        //     continent: 'United States',
        //     location: 'New York, USA',
        //     images: 'wings.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Feel the mist of Niagara Falls',
        //     continent: 'United States',
        //     location: 'New York, USA',
        //     images: 'niagara.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Have a carriage ride in Central Park',
        //     continent: 'United States',
        //     location: 'New York, USA',
        //     images: 'carriage.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // }











        // {
        //     name: 'Tour the Biltmore Estate',
        //     continent: 'United States',
        //     location: 'North Carolina, USA',
        //     images: 'biltmore.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit Chimney Rock',
        //     continent: 'United States',
        //     location: 'North Carolina, USA',
        //     images: 'chimney.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Climb White Butte',
        //     continent: 'United States',
        //     location: 'North Dakota, USA',
        //     images: 'butte.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Visit Graeters Ice Cream',
        //     continent: 'United States',
        //     location: 'Ohio, USA',
        //     images: 'graeter.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Ride the Milennium Force at Cedar Point',
        //     continent: 'United States',
        //     location: 'Ohio, USA',
        //     images: 'force.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit Norman Music Festival',
        //     continent: 'United States',
        //     location: 'Oklahoma, USA',
        //     images: 'norman.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Get lost in Powells City of Books',
        //     continent: 'United States',
        //     location: 'Oregon, USA',
        //     images: 'powell.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Hang out on Cannon Beach',
        //     continent: 'United States',
        //     location: 'Oregon, USA',
        //     images: 'cannon.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Go to a mud sale in Lancaster County',
        //     continent: 'United States',
        //     location: 'Pennsylvania, USA',
        //     images: 'mudsale.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Pig out at Hersheys Chocolate World',
        //     continent: 'United States',
        //     location: 'Pennsylvania, USA',
        //     images: 'chocolate.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Take the Cliff Walk in Newport',
        //     continent: 'United States',
        //     location: 'Rhode Island, USA',
        //     images: 'cliffwalk.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Taste the barbecue hash at Sweatmans BBQ',
        //     continent: 'United States',
        //     location: 'South Carolina, USA',
        //     images: 'bbq.jpg',
        //     feedme: true,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit the Mitchell Corn Palace',
        //     continent: 'United States',
        //     location: 'South Dakota, USA',
        //     images: 'cornpalace.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit Mount Rushmore',
        //     continent: 'United States',
        //     location: 'South Dakota, USA',
        //     images: 'rushmore.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Spend a day in Dollywood',
        //     continent: 'United States',
        //     location: 'Tennessee, USA',
        //     images: 'dollywood.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // }









        // {
        //     name: 'See a show at the Grand Ole Opry in Nashville',
        //     continent: 'United States',
        //     location: 'Tennessee, USA',
        //     images: 'opry.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit Lovers Leap in Chattanooga',
        //     continent: 'United States',
        //     location: 'Tennessee, USA',
        //     images: 'loversleap.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Tube at the Guadalupe River',
        //     continent: 'United States',
        //     location: 'Texas, USA',
        //     images: 'tube.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: true
        // },
        // {
        //     name: 'Visit the Alamo in San Antonio',
        //     continent: 'United States',
        //     location: 'Texas, USA',
        //     images: 'alamo.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Build a structure at Texas Sandfest',
        //     continent: 'United States',
        //     location: 'Texas, USA',
        //     images: 'sandfest.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Hike to Delicate Arch',
        //     continent: 'United States',
        //     location: 'Utah, USA',
        //     images: 'arch.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Snowboard in Park City',
        //     continent: 'United States',
        //     location: 'Utah, USA',
        //     images: 'parkcity.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Visit Sundance Film festival',
        //     continent: 'United States',
        //     location: 'Utah, USA',
        //     images: 'sundance.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Go to the Clark Planetarium',
        //     continent: 'United States',
        //     location: 'Utah, USA',
        //     images: 'clark.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Take a brewery tour',
        //     continent: 'United States',
        //     location: 'Vermont, USA',
        //     images: 'tour.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'See a movie at the Byrd Theater',
        //     continent: 'United States',
        //     location: 'Virginia, USA',
        //     images: 'byrd.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'See the Lincoln Memorial in Washington DC',
        //     continent: 'United States',
        //     location: 'Virginia, USA',
        //     images: 'memorial.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Go to the Sasquatch! Music Festival',
        //     continent: 'United States',
        //     location: 'Washington, USA',
        //     images: 'sas.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // },
        // {
        //     name: 'Hike the Ape Caves',
        //     continent: 'United States',
        //     location: 'Washington, USA',
        //     images: 'ape.jpg',
        //     feedme: false,
        //     viking: true,
        //     swimming: false
        // },
        // {
        //     name: 'Watch the fish fly at Pike Place Market',
        //     continent: 'United States',
        //     location: 'Washington, USA',
        //     images: 'pike.jpg',
        //     feedme: false,
        //     viking: false,
        //     swimming: false
        // }









        {
            name: 'Take the Washington State Ferry to Orcas Island',
            continent: 'United States',
            location: 'Washington, USA',
            images: 'ferry.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Visit the Seattle Space Needle',
            continent: 'United States',
            location: 'Washington, USA',
            images: 'spaceneedle.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Eat a pepperoni roll from Country Club Bakery',
            continent: 'United States',
            location: 'West Virginia, USA',
            images: 'roll.jpg',
            feedme: true,
            viking: false,
            swimming: false
        },
        {
            name: 'Shop the Dane County Farmers Market',
            continent: 'United States',
            location: 'Wisconsin, USA',
            images: 'dane.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Rock out at Summerfest',
            continent: 'United States',
            location: 'Wisconsin, USA',
            images: 'summerfest.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'Ski Jackson Holes steep slopes',
            continent: 'United States',
            location: 'Wyoming, USA',
            images: 'ski.jpg',
            feedme: false,
            viking: true,
            swimming: false
        },
        {
            name: 'Go to Cheyenne Frontier Days',
            continent: 'United States',
            location: 'Wyoming, USA',
            images: 'frontier.jpg',
            feedme: false,
            viking: false,
            swimming: false
        },
        {
            name: 'See the Morning Glory Pool (hole)',
            continent: 'United States',
            location: 'Wyoming, USA',
            images: 'glory.jpg',
            feedme: false,
            viking: false,
            swimming: false
        }
    ];





    for (var i = 0; i < asiaGoals.length; i++) {

        var newStaticGoal = new StaticGoals({
            name: asiaGoals[i].name,
            continent: asiaGoals[i].continent,
            location: asiaGoals[i].location,
            images: asiaGoals[i].images,
            feedme: asiaGoals[i].feedme,
            viking: asiaGoals[i].viking,
            swimming: asiaGoals[i].swimming
        });

    // for (var i = 0; i < centralAmericaGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: centralAmericaGoals[i].name,
    //         continent: centralAmericaGoals[i].continent,
    //         location: centralAmericaGoals[i].location,
    //         images: centralAmericaGoals[i].images,
    //         feedme: asiaGoals[i].feedme,
    //         viking: asiaGoals[i].viking,
    //         swimming: asiaGoals[i].swimming
    //     });

    // for (var i = 0; i < canadaGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: canadaGoals[i].name,
    //         continent: canadaGoals[i].continent,
    //         location: canadaGoals[i].location,
    //         images: canadaGoals[i].images,
    //         feedme: asiaGoals[i].feedme,
    //         viking: asiaGoals[i].viking,
    //         swimming: asiaGoals[i].swimming
    //     });

    // for (var i = 0; i < southAmericaGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: southAmericaGoals[i].name,
    //         continent: southAmericaGoals[i].continent,
    //         location: southAmericaGoals[i].location,
    //         images: southAmericaGoals[i].images,
    //         feedme: asiaGoals[i].feedme,
    //         viking: asiaGoals[i].viking,
    //         swimming: asiaGoals[i].swimming
    //     });

    // for (var i = 0; i < antarcticaGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: antarcticaGoals[i].name,
    //         continent: antarcticaGoals[i].continent,
    //         location: antarcticaGoals[i].location,
    //         images: antarcticaGoals[i].images,
    //         feedme: asiaGoals[i].feedme,
    //         viking: asiaGoals[i].viking,
    //         swimming: asiaGoals[i].swimming
    //     });

    // for (var i = 0; i < australiaGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: australiaGoals[i].name,
    //         continent: australiaGoals[i].continent,
    //         location: australiaGoals[i].location,
    //         images: australiaGoals[i].images,
    //         feedme: asiaGoals[i].feedme,
    //         viking: asiaGoals[i].viking,
    //         swimming: asiaGoals[i].swimming
    //     });

    // for (var i = 0; i < europeGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: europeGoals[i].name,
    //         continent: europeGoals[i].continent,
    //         location: europeGoals[i].location,
    //         images: europeGoals[i].images,
    //         feedme: asiaGoals[i].feedme,
    //         viking: asiaGoals[i].viking,
    //         swimming: asiaGoals[i].swimming
    //     });

    // for (var i = 0; i < unitedStatesGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: unitedStatesGoals[i].name,
    //         continent: unitedStatesGoals[i].continent,
    //         location: unitedStatesGoals[i].location,
    //         images: unitedStatesGoals[i].images,
    //         feedme: asiaGoals[i].feedme,
    //         viking: asiaGoals[i].viking,
    //         swimming: asiaGoals[i].swimming
    //     });

    // for (var i = 0; i < africaGoals.length; i++) {
    //
    //     var newStaticGoal = new StaticGoals({
    //         name: africaGoals[i].name,
    //         continent: africaGoals[i].continent,
    //         location: africaGoals[i].location,
    //         images: africaGoals[i].images,
    //         feedme: asiaGoals[i].feedme,
    //         viking: asiaGoals[i].viking,
    //         swimming: asiaGoals[i].swimming
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
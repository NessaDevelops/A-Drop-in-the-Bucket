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

    var stop = false;

    var africaGoals = {};
    var antarcticaGoals = {};
    var europeGoals = {};
    var asiaGoals = {};
    var southAmericaGoals = {};
    var australiaGoals = {};
    var canadaGoals = {};
    var centralAmericaGoals = {};
    var unitedStatesGoals = {};

    southAmericaGoals = [
        {
            name: 'Mountain bike Ecuadors the Avenue of Volcanoes',
            continent: 'South America',
            location: 'Ecuador, South America',
            images: 'Placeholder'
        }
    ];

    asiaGoals = [
        {
            name: 'Trek Paro Valley',
            continent: 'Asia',
            location: 'Bhutan, South Asia',
            images: 'Placeholder'
        },
        {
            name: 'Stay at the worlds oldest hotel Nishiyama Onsen Keiunkan',
            continent: 'Asia',
            location: 'Japan, East Asia',
            images: 'Placeholder'
        },
        {
            name: 'Visit the tallest building in the world, Burj Khalifa in Dubai',
            continent: 'Asia',
            location: 'Dubai, United Arab Emirates',
            images: 'Placeholder'
        },
        {
            name: 'Ride on a motorcycle taxi at peak hour in Bangkok, Thailand',
            continent: 'Asia',
            location: 'Bangkok, Thailand',
            images: 'Placeholder'
        },
        {
            name: 'Scale the Great Wall of China',
            continent: 'Asia',
            location: 'China, Asia',
            images: 'Placeholder'
        },
        {
            name: 'Dance under the cherry blossoms in Japan',
            continent: 'Asia',
            location: 'Japan, East Asia',
            images: 'Placeholder'
        },
        {
            name: 'Cruise around Ha Long Bay in Vietnam',
            continent: 'Asia',
            location: 'Vietnam, Asia',
            images: 'Placeholder'
        },
        {
            name: 'See Tarsier monkeys in Bohal, Philippines',
            continent: 'Asia',
            location: 'Bohal, Philippines',
            images: 'Placeholder'
        },
        {
            name: 'Marvel at the breathtaking sculptures in Harbin, China',
            continent: 'Asia',
            location: 'Harbin, China',
            images: 'Placeholder'
        },
        {
            name: 'Get down and dirty at the Boryeong Mud Festival in Korea',
            continent: 'Asia',
            location: 'Korea, East Asia',
            images: 'Placeholder'
        },
        {
            name: 'Visit the Tonle Sap floating villages',
            continent: 'Asia',
            location: 'Cambodia, Asia',
            images: 'Placeholder'
        },
        {
            name: 'Hug a baby panda in Chengdu',
            continent: 'Asia',
            location: 'Chengdu, China',
            images: 'Placeholder'
        },
        {
            name: 'Take a night cruise around Victoria Harbour',
            continent: 'Asia',
            location: 'Hong Kong, China',
            images: 'Placeholder'
        },
        {
            name: 'Have dinner in the sky at the Singapore Flyer',
            continent: 'Asia',
            location: 'Singapore, Asia',
            images: 'Placeholder'
        },
        {
            name: 'Sleep in a traditional hanok in Jeonju, Korea',
            continent: 'Asia',
            location: 'Jeonju, Korea',
            images: 'Placeholder'
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
            images: 'Placeholder'
        },
        {
            name: 'Go on a polar bear safari near Churchhill, Manitoba',
            continent: 'Canada',
            location: 'Manitoba, Canada',
            images: 'Placeholder'
        },
        {
            name: 'Visit the hot springs in the Canadian Rockies',
            continent: 'Canada',
            location: 'Canada',
            images: 'Placeholder'
        },
        {
            name: 'Visit the wineries of Niagara-on-the-Lake, Ontario',
            continent: 'Canada',
            location: 'Ontario, Canada',
            images: 'Placeholder'
        },
        {
            name: 'Spend a night in the Hotel de Glace in Quebec',
            continent: 'Canada',
            location: 'Quebec, Canada',
            images: 'Placeholder'
        },
        {
            name: 'White water raft in Banff',
            continent: 'Canada',
            location: 'Alberta, Canada',
            images: 'Placeholder'
        },
        {
            name: 'Walk over the Capilano Suspension Bridge',
            continent: 'Canada',
            location: 'British Columbia, Canada',
            images: 'Placeholder'
        },
        {
            name: 'Kite surf off the Magdalen Islands in Quebec',
            continent: 'Canada',
            location: 'Quebec, Canada',
            images: 'Placeholder'
        },
        {
            name: 'Visit the land of Anne of Green Gables',
            continent: 'Canada',
            location: 'Canada',
            images: 'Placeholder'
        },
        {
            name: 'Skydive in the Saskatchewan',
            continent: 'Canada',
            location: 'Saskatchewan, Canada',
            images: 'Placeholder'
        },
        {
            name: 'Zipline through the forests of Whistler, BC',
            continent: 'Canada',
            location: 'British Columbia, Canada',
            images: 'Placeholder'
        },
        {
            name: 'Discover the Columbia Ice Fields in Alberta',
            continent: 'Canada',
            location: 'Alberta, Canada',
            images: 'Placeholder'
        },
        {
            name: 'See the Northern Lights in Yellowknife',
            continent: 'Canada',
            location: 'Yellowknife, Canada',
            images: 'Placeholder'
        },
        {
            name: 'Place a love lock on the Corkstown bridge in Ottawa',
            continent: 'Canada',
            location: 'Ottawa, Canada',
            images: 'Placeholder'
        },
        {
            name: 'Ride the Leviathan at Canadas Wonderland',
            continent: 'Canada',
            location: 'Ontario, Canada',
            images: 'Placeholder'
        },
        {
            name: 'Dog sled across the Canadian North',
            continent: 'Canada',
            location: 'Canada',
            images: 'Placeholder'
        },
        {
            name: 'Eat a bagel in Montreal',
            continent: 'Canada',
            location: 'Montreal, Quebec',
            images: 'Placeholder'
        }
    ];

    unitedStatesGoals = [
        {
            name: 'Visit the Cathedral Caverns',
            continent: 'United States',
            location: 'Alabama, USA',
            images: 'Placeholder'
        },
        {
            name: 'Go to Space Camp at the U.S. Space & Rocket Center',
            continent: 'United States',
            location: 'Alabama, USA',
            images: 'Placeholder'
        },
        {
            name: 'Watch NASCAR at Talladega',
            continent: 'United States',
            location: 'Alabama, USA',
            images: 'Placeholder'
        },
        {
            name: 'See polar bears at the Arctic National Wildlife Refuge',
            continent: 'United States',
            location: 'Alabama, USA',
            images: 'Placeholder'
        },
        {
            name: 'Take a cruise around Alaskas icebergs',
            continent: 'United States',
            location: 'Alaska, USA',
            images: 'Placeholder'
        },
        {
            name: 'Marvel at the Northern Lights',
            continent: 'United States',
            location: 'Alaska, USA',
            images: 'Placeholder'
        },
        {
            name: 'Go on an Arctic Circle Tour',
            continent: 'United States',
            location: 'Alaska, USA',
            images: 'Placeholder'
        },
        {
            name: 'Grab a bit at Organ Stop Pizza',
            continent: 'United States',
            location: 'Arizona, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit the Goldfield Ghost Town in Apache Junction',
            continent: 'United States',
            location: 'Arizona, USA',
            images: 'Placeholder'
        },
        {
            name: 'Spend a night on the floor of the Grand Canyon',
            continent: 'United States',
            location: 'Arizona, USA',
            images: 'Placeholder'
        },
        {
            name: 'Have fun at Magic Springs and Crystal Falls Water and Theme Park',
            continent: 'United States',
            location: 'Arkansas, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit Anthony Chapel in Garvan Woodland Gardens',
            continent: 'United States',
            location: 'Arkansas, USA',
            images: 'Placeholder'
        },
        {
            name: 'Walk across the Golden Gate Bridge',
            continent: 'United States',
            location: 'California, USA',
            images: 'Placeholder'
        },
        {
            name: 'Drive State Route 1 through Big Sur',
            continent: 'United States',
            location: 'California, USA',
            images: 'Placeholder'
        },
        {
            name: 'Skirt the Pacific Coast in a soft-top',
            continent: 'United States',
            location: 'California, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit Hollywood',
            continent: 'United States',
            location: 'California, USA',
            images: 'Placeholder'
        },
        {
            name: 'Stroll Venice Beach and the Santa Monica Pier in Los Angeles',
            continent: 'United States',
            location: 'California, USA',
            images: 'Placeholder'
        },
        {
            name: 'Ride a cable car in San Francisco',
            continent: 'United States',
            location: 'California, USA',
            images: 'Placeholder'
        },
        {
            name: 'Get hot and bothered in Death Valley',
            continent: 'United States',
            location: 'California, USA',
            images: 'Placeholder'
        },
        {
            name: 'Go sandboarding at Great Sand Dunes National Park',
            continent: 'United States',
            location: 'Colorado, USA',
            images: 'Placeholder'
        },
        {
            name: 'Ski Aspen Highlands in Colorado',
            continent: 'United States',
            location: 'Colorado, USA',
            images: 'Placeholder'
        },
        {
            name: 'Bungee jump from the Royal Gorge Bridge',
            continent: 'United States',
            location: 'Colorado, USA',
            images: 'Placeholder'
        },
        {
            name: 'Walk the Rehoboth Beach Boardwalk',
            continent: 'United States',
            location: 'Delaware, USA',
            images: 'Placeholder'
        },
        {
            name: 'Go to Disneyworld',
            continent: 'United States',
            location: 'Florida, USA',
            images: 'Placeholder'
        },
        {
            name: 'Climb the Shark Valley tower',
            continent: 'United States',
            location: 'Florida, USA',
            images: 'Placeholder'
        },
        {
            name: 'Drive from Miami to Key West',
            continent: 'United States',
            location: 'Florida, USA',
            images: 'Placeholder'
        },
        {
            name: 'Take a haunted bar tour in the historic section of St. Augustine',
            continent: 'United States',
            location: 'Florida, USA',
            images: 'Placeholder'
        },
        {
            name: 'Ride a fan boat in the Everglades',
            continent: 'United States',
            location: 'Florida, USA',
            images: 'Placeholder'
        },
        {
            name: 'Eat at the Olde Pink House in Savannah',
            continent: 'United States',
            location: 'Georgia, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit the Civil Rights District',
            continent: 'United States',
            location: 'Georgia, USA',
            images: 'Placeholder'
        },
        {
            name: 'Surf in Hawaii',
            continent: 'United States',
            location: 'Hawaii, USA',
            images: 'Placeholder'
        },
        {
            name: 'Climb the Stairway to Heaven',
            continent: 'United States',
            location: 'Hawaii, USA',
            images: 'Placeholder'
        },
        {
            name: 'See the lava flow in Hawaii',
            continent: 'United States',
            location: 'Hawaii, USA',
            images: 'Placeholder'
        },
        {
            name: 'Take a helicopter tour over Hawaii',
            continent: 'United States',
            location: 'Hawaii, USA',
            images: 'Placeholder'
        },
        {
            name: 'Have a drink at the top of the Hancock Building',
            continent: 'United States',
            location: 'Illinois, USA',
            images: 'Placeholder'
        },
        {
            name: 'Catch a game at Wrigley Field',
            continent: 'United States',
            location: 'Illinois, USA',
            images: 'Placeholder'
        },
        {
            name: 'Go to the annual Chicago Blues Festival',
            continent: 'United States',
            location: 'Illinois, USA',
            images: 'Placeholder'
        },
        {
            name: 'Eat at Ivanhoes',
            continent: 'United States',
            location: 'Indiana, USA',
            images: 'Placeholder'
        },
        {
            name: 'Hear the roar of the Indy 500',
            continent: 'United States',
            location: 'Indiana, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit the Butter Cow at the Iowa State Fair',
            continent: 'United States',
            location: 'Iowa, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit Gellas Diner & Lb. Brewing Co.',
            continent: 'United States',
            location: 'Kansas, USA',
            images: 'Placeholder'
        },
        {
            name: 'Drive and drink along the Bourbon Trail',
            continent: 'United States',
            location: 'Kentucky, USA',
            images: 'Placeholder'
        },
        {
            name: 'Go to the Kentucky Derby',
            continent: 'United States',
            location: 'Kentucky, USA',
            images: 'Placeholder'
        },
        {
            name: 'Listen to Jazz in New Orleans',
            continent: 'United States',
            location: 'Louisiana, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit for Mardi Gras',
            continent: 'United States',
            location: 'Louisiana, USA',
            images: 'Placeholder'
        },
        {
            name: 'Go to the French Quarter Festival',
            continent: 'United States',
            location: 'Louisiana, USA',
            images: 'Placeholder'
        },
        {
            name: 'Get spooked at Myrtles Plantation',
            continent: 'United States',
            location: 'Louisiana, USA',
            images: 'Placeholder'
        },
        {
            name: 'Watch the sunrise on Cadillac Mountain',
            continent: 'United States',
            location: 'Maine, USA',
            images: 'Placeholder'
        },
        {
            name: 'Eat blue crabs on the water in Maryland',
            continent: 'United States',
            location: 'Maryland, USA',
            images: 'Placeholder'
        },
        {
            name: 'Walk the Freedom Trail in Boston',
            continent: 'United States',
            location: 'Massachusetts, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit Cape Cod',
            continent: 'United States',
            location: 'Massachusetts, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit the Shinola Store',
            continent: 'United States',
            location: 'Michigan, USA',
            images: 'Placeholder'
        },
        {
            name: 'See a Michigan game at the Big House',
            continent: 'United States',
            location: 'Michigan, USA',
            images: 'Placeholder'
        },
        {
            name: 'Crack open a cold one in Grand Rapids',
            continent: 'United States',
            location: 'Michigan, USA',
            images: 'Placeholder'
        },
        {
            name: 'Canoe the Boundary Waters',
            continent: 'United States',
            location: 'Minnesota, USA',
            images: 'Placeholder'
        },
        {
            name: 'Listen to blues at The Lyric in Oxford',
            continent: 'United States',
            location: 'Mississippi, USA',
            images: 'Placeholder'
        },
        {
            name: 'Explore the Ozark Caverns',
            continent: 'United States',
            location: 'Missouri, USA',
            images: 'Placeholder'
        },
        {
            name: 'Take the Polar Bear Plunge in Brandon Beach',
            continent: 'United States',
            location: 'Missouri, USA',
            images: 'Placeholder'
        },
        {
            name: 'Drive Going-to-the-Sun-Road',
            continent: 'United States',
            location: 'Montana, USA',
            images: 'Placeholder'
        },
        {
            name: 'Hike through Glacier National Park',
            continent: 'United States',
            location: 'Montana, USA',
            images: 'Placeholder'
        },
        {
            name: 'Go to Popcorn Days in North Loup',
            continent: 'United States',
            location: 'Nebraska, USA',
            images: 'Placeholder'
        },
        {
            name: 'Gamble in Las Vegas',
            continent: 'United States',
            location: 'Nevada, USA',
            images: 'Placeholder'
        },
        {
            name: 'Order a late-night Awful Awful Burger at The Nugget in Reno',
            continent: 'United States',
            location: 'Nevada, USA',
            images: 'Placeholder'
        },
        {
            name: 'Free your spirit at Burning Man',
            continent: 'United States',
            location: 'Nevada, USA',
            images: 'Placeholder'
        },
        {
            name: 'Ride a gondola at the Venetian in Las Vegas',
            continent: 'United States',
            location: 'Nevada, USA',
            images: 'Placeholder'
        },
        {
            name: 'Add your pumpkin to the wall at the Keene Pumpkin Festival',
            continent: 'United States',
            location: 'New Hampshire, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit Lincoln Town',
            continent: 'United States',
            location: 'New Hampshire, USA',
            images: 'Placeholder'
        },
        {
            name: 'Climb Barnegat Lighthouse on Long Beach Island',
            continent: 'United States',
            location: 'New Jersey, USA',
            images: 'Placeholder'
        },
        {
            name: 'Watch a Balloon Glow at the Albuquerque International Balloon Fiesta',
            continent: 'United States',
            location: 'New Mexico, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit Taos Pueblo',
            continent: 'United States',
            location: 'New Mexico, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit Ellis Island',
            continent: 'United States',
            location: 'New York, USA',
            images: 'Placeholder'
        },
        {
            name: 'Go wine (and pie) tasting on Long Islands North Fork',
            continent: 'United States',
            location: 'New York, USA',
            images: 'Placeholder'
        },
        {
            name: 'Catch a Broadway Show in New York City',
            continent: 'United States',
            location: 'New York, USA',
            images: 'Placeholder'
        },
        {
            name: 'Eat Buffalo wings in Buffalo',
            continent: 'United States',
            location: 'New York, USA',
            images: 'Placeholder'
        },
        {
            name: 'Feel the mist of Niagara Falls',
            continent: 'United States',
            location: 'New York, USA',
            images: 'Placeholder'
        },
        {
            name: 'Have a carriage ride in Central Park',
            continent: 'United States',
            location: 'New York, USA',
            images: 'Placeholder'
        },
        {
            name: 'Tour the Biltmore Estate',
            continent: 'United States',
            location: 'North Carolina, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit Chimney Rock',
            continent: 'United States',
            location: 'North Carolina, USA',
            images: 'Placeholder'
        },
        {
            name: 'Climb White Butte',
            continent: 'United States',
            location: 'North Dakota, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit Graeters Ice Cream',
            continent: 'United States',
            location: 'Ohio, USA',
            images: 'Placeholder'
        },
        {
            name: 'Ride the Milennium Force at Cedar Point',
            continent: 'United States',
            location: 'Ohio, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit Norman Music Festival',
            continent: 'United States',
            location: 'Oklahoma, USA',
            images: 'Placeholder'
        },
        {
            name: 'Get lost in Powells City of Books',
            continent: 'United States',
            location: 'Oregon, USA',
            images: 'Placeholder'
        },
        {
            name: 'Hang out on Cannon Beach',
            continent: 'United States',
            location: 'Oregon, USA',
            images: 'Placeholder'
        },
        {
            name: 'Go to a mud sale in Lancaster County',
            continent: 'United States',
            location: 'Pennsylvania, USA',
            images: 'Placeholder'
        },
        {
            name: 'Pig out at Hersheys Chocolate World',
            continent: 'United States',
            location: 'Pennsylvania, USA',
            images: 'Placeholder'
        },
        {
            name: 'Take the Cliff Walk in Newport',
            continent: 'United States',
            location: 'Rhode Island, USA',
            images: 'Placeholder'
        },
        {
            name: 'Taste the barbecue hash at Sweatmans BBQ',
            continent: 'United States',
            location: 'South Carolina, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit the Mitchell Corn Palace',
            continent: 'United States',
            location: 'South Dakota, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit Mount Rushmore',
            continent: 'United States',
            location: 'South Dakota, USA',
            images: 'Placeholder'
        },
        {
            name: 'Spend a day in Dollywood',
            continent: 'United States',
            location: 'Tennessee, USA',
            images: 'Placeholder'
        },
        {
            name: 'See a show at the Grand Ole Opry in Nashville',
            continent: 'United States',
            location: 'Tennessee, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit Lovers Leap in Chattanooga',
            continent: 'United States',
            location: 'Tennessee, USA',
            images: 'Placeholder'
        },
        {
            name: 'Tube at the Guadalupe River',
            continent: 'United States',
            location: 'Texas, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit the Alamo in San Antonio',
            continent: 'United States',
            location: 'Texas, USA',
            images: 'Placeholder'
        },
        {
            name: 'Build a structure at Texas Sandfest',
            continent: 'United States',
            location: 'Texas, USA',
            images: 'Placeholder'
        },
        {
            name: 'Build a structure at Texas Sandfest',
            continent: 'United States',
            location: 'Texas, USA',
            images: 'Placeholder'
        },
        {
            name: 'Hike to Delicate Arch',
            continent: 'United States',
            location: 'Utah, USA',
            images: 'Placeholder'
        },
        {
            name: 'Snowboard in Park City',
            continent: 'United States',
            location: 'Utah, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit Sundance Film festival',
            continent: 'United States',
            location: 'Utah, USA',
            images: 'Placeholder'
        },
        {
            name: 'Go to the Clark Planetarium',
            continent: 'United States',
            location: 'Utah, USA',
            images: 'Placeholder'
        },
        {
            name: 'Take a brewery tour',
            continent: 'United States',
            location: 'Vermont, USA',
            images: 'Placeholder'
        },
        {
            name: 'See a movie at the Byrd Theater',
            continent: 'United States',
            location: 'Virginia, USA',
            images: 'Placeholder'
        },
        {
            name: 'See the Lincoln Memorial in Washington DC',
            continent: 'United States',
            location: 'Virginia, USA',
            images: 'Placeholder'
        },
        {
            name: 'Go to the Sasquatch! Music Festival',
            continent: 'United States',
            location: 'Washington, USA',
            images: 'Placeholder'
        },
        {
            name: 'Hike the Ape Caves',
            continent: 'United States',
            location: 'Washington, USA',
            images: 'Placeholder'
        },
        {
            name: 'Watch the fish fly at Pike Place Market',
            continent: 'United States',
            location: 'Washington, USA',
            images: 'Placeholder'
        },
        {
            name: 'Take the Washington State Ferry to Orcas Island',
            continent: 'United States',
            location: 'Washington, USA',
            images: 'Placeholder'
        },
        {
            name: 'Visit the Seattle Space Needle',
            continent: 'United States',
            location: 'Washington, USA',
            images: 'Placeholder'
        },
        {
            name: 'Eat a pepperoini roll from Country Club Bakery',
            continent: 'United States',
            location: 'West Virginia, USA',
            images: 'Placeholder'
        },
        {
            name: 'Shop the Dane County Farmers Market',
            continent: 'United States',
            location: 'Wisconsin, USA',
            images: 'Placeholder'
        },
        {
            name: 'Rock out at Summerfest',
            continent: 'United States',
            location: 'Wisconsin, USA',
            images: 'Placeholder'
        },
        {
            name: 'Ski Jackson Holes steep slopes',
            continent: 'United States',
            location: 'Wyoming, USA',
            images: 'Placeholder'
        },
        {
            name: 'Go to Cheyenne Frontier Days',
            continent: 'United States',
            location: 'Wyoming, USA',
            images: 'Placeholder'
        },
        {
            name: 'See the Morning Glory Pool (hole)',
            continent: 'United States',
            location: 'Wyoming, USA',
            images: 'Placeholder'
        }
    ];



    if(stop === false) {
        for (var i = 0; i < centralAmericaGoals.length; i++) {

            console.log(centralAmericaGoals[i].name);
            console.log(centralAmericaGoals[i].continent);
            console.log(centralAmericaGoals[i].location);
            console.log(centralAmericaGoals[i].images);

            var newStaticGoal = new StaticGoals({
                name: centralAmericaGoals[i].name,
                continent: centralAmericaGoals[i].continent,
                location: centralAmericaGoals[i].location,
                images: centralAmericaGoals[i].images
            });

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
    }
    res.status(201).json({
        'message': 'Successfully created new goal',
        'client': _.omit(body)
    });

});

module.exports = router;
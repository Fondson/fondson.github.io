// import mockups
import NoteLockerMockup from './img/mockups/note_locker.png';
import FindMeMockup from './img/mockups/find_me.png';
import FruityDuckMockup from './img/mockups/fruity_duck.png';
import MadlibsMockup from './img/mockups/madlibs.png';
import FoodyMockup from './img/mockups/foody.png';
import ConnectFourMockup from './img/mockups/connect_four.png';
import CircleTheDotMockup from './img/mockups/circle_the_dot.png';

const portfolioInfo = [
    {
        title: "Web",
        data:[
            {
                header: "Fruity Duck",
                modalRef: "fruityDuckModal",
                tech: [
                    "pixi.js", "localforage (in-browser storage)", "HTML/CSS/JavaScript"
                ],
                description: "2D HTML5 endless fruit collecting game",
                longDescription: {
                    __html: "Fruity Duck is a 2D HTML5 <b>progessive web app</b> created with the rendering engine <b>pixi.js.</b> \
                    I built this project to learn about game developement on the web, \
                    especially sprite rendering and interactions and game control adaptation on mobile and desktop devices. \
                    Additionally, I learned about progressive web app functionalities, giving Fruity Duck an app-like feel on mobile devices."
                },
                link: "https://github.com/Fondson/fruity-duck",
                mockup: FruityDuckMockup
            },
            {
                header: "Madlibs",
                modalRef: "madlibsModal",
                tech: [
                    "Flask", "Python", "HTML/CSS/JavaScript", "Bootstrap"
                ],
                description: "Madlibs generator",
                longDescription: {
                    __html: "MadLibs is a web application that allows users to create libs using their own words. \
                    Provide the required number of nouns, verbs and adjectives and the words will be inserted into a random lib to create a unique one each time."
                },
                link: "https://github.com/fondson/MadLibs",
                mockup: MadlibsMockup
            },
            {
                header: "Foody",
                modalRef: "foodyModal",
                tech: [
                    "Clarifai API (image recognition)", "YellowPages API", "Nuance API (speech recognition)", "Python", "HTML/CSS/JavaScript", "Bootstrap"
                ],
                description: "Interactive cuisine and restaurant finder",
                longDescription: {
                    __html: "Made for ConUHacks 2, Foody is a web app that finds nearby restaurants that serve cuisine based on images you've selected.\
                    I was responsible for configuring the Clarifai API to extract relevant tags for various food images and developing the front-end of Foody."
                },
                link: "https://github.com/dougouk/ConUHacks2",
                mockup: FoodyMockup
            }
        ]
    },
    {
        title: "Android",
        data: [
            {
                header: "Note Locker",
                modalRef: "noteLockerModal",
                tech: [
                    "Native Android", "Java", "natty API (natural language date parser)"
                ],
                description: "Note-taking lockscreen replacement",
                longDescription: {
                    __html: "Give your important reminders the attention they deserve. \
                    Note Locker is a replacement Android lockscreen that lets you quickly note down anything you want. \
                    Enjoy customization options such as changing wallpapers and having your item cards adapt colours automatically. \
                    Add items to your list, set scheduled notifications and be reminded everytime you open your phone."
                },
                link: "http://github.com/fondson/note-locker",
                mockup: NoteLockerMockup
            },
            {
                header: "Find Me",
                modalRef: "findMeModal",
                tech: [
                    "Native Android", "Java", "Clarifai API (image recognition)"
                ],
                description: "Game to test images against image recognition technology",
                longDescription: {
                    __html: "Made for ConUHacks 1 with the visual recognition technology of the Clarifai API,\
                    Find Me is an Android app that allows us to test how intelligent the API really is. \
                    The app displays six different images and the tags associated with ONE of the images. \
                    Tap on the images to guess which one was passed to the API and see how accurate the tags described the image."
                },
                link: "https://github.com/fondson/FindMe",
                mockup: FindMeMockup
            }
        ]
    },
    {
        title: "Desktop",
        data:[
            {
                header: "Connect Four",
                modalRef: "connectFourModal",
                tech: [
                    "C#"
                ],
                description: "Classic Connect Four with a mean AI",
                longDescription: {
                    __html: "A C# implementation of Connect Four packaged with a challenging AI and various per-game customizations. \
                    I created this app to learn about AI algorithms, specifically the <b>minimax algorithm</b> which the AI is powered on. \
                    Through optimizations such as <b>alpha-beta pruning</b> and Connect Four based utilities, the AI is able to play out game scenarios and pick out its best move."
                },
                link: "https://github.com/Fondson/Connect-4",
                mockup: ConnectFourMockup
            },
            {
                header: "Circle The Dot",
                modalRef: "circleTheDotModal",
                tech: [
                    "Java", "Swing"
                ],
                description: "Java implementation of the popular mobile game",
                longDescription: {
                    __html: "Circle The Dot is a game where the player tries to trap the computer by enclosing it with player dots. \
                    This implementation uses the <b>breadth-first search algorithm</b> to aid the computer in finding the shortest path to escape the board. \
                    I was able to learn about graph traversals and their implementation using different data structures through this project."
                },
                link: "https://github.com/Fondson/Circle-The-Dot",
                mockup: CircleTheDotMockup
            }
        ]
    }
];

export default portfolioInfo;
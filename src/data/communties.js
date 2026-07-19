
import delhi from '../assets/images/delhi.jpg'
import mumbai from '../assets/images/mumbai.jpg'
import punjab from '../assets/images/punjab.jpg'
import chandigarh from '../assets/images/chandigarh.jpg'
import farmersHub from '../assets/images/farmersHub.jpg'
import music from '../assets/images/music.jpg'
import tech from '../assets/images/tech.jpg'
import travel from '../assets/images/travel.jpg'
import heritagepunjab from '../assets/images/heritagepunjab.jpg'
import gurupurab from '../assets/images/gurupurab.jpg'
import punjabDance from '../assets/images/punjabDance.jpg'
import sports from '../assets/images/sports.jpeg'
import gym from '../assets/images/gym.jpg'
import businessSeminar from '../assets/images/businessSeminar.jpg'
import workshop from '../assets/images/workshop.jpg'
import startupMeeting from '../assets/images/startupMeeting.jpg'
import codingBootcamp from '../assets/images/codingBootcamp.jpg'
import careerGuidance from '../assets/images/careerGuidance.jpg'
import resumeBuilding from '../assets/images/resumeBuilding.jpeg'
import entrepreneur from '../assets/images/entrepreneur.jpg'
import startupPitch from '../assets/images/startupPitch.jpg'
import marketing from '../assets/images/marketing.jpg'
import organicFarming from '../assets/images/organicFarming.jpg'
import cropSeminar from '../assets/images/cropSeminar.jpg'
import kisanCamp from '../assets/images/kisanCamp.jpeg'
import reactBootcamp from '../assets/images/reactBootcamp.png'
import hackathon from '../assets/images/hackathon.jpg'
import aiWorkshop from '../assets/images/aiWorkshop.jpg'
import openMic from '../assets/images/openMic.jpg'
import bandCompetition from '../assets/images/bandCompetition.jpg'
import jamSession from '../assets/images/jamSession.jpg'
import photoGraphyWalk from '../assets/images/photoGraphyWalk.jpg'
import camping from '../assets/images/camping.jpg'
import shimlaTrip from '../assets/images/shimlaTrip.jpg'
import yogaFitness from '../assets/images/yogaFitness.jpg'
import morningFitness from '../assets/images/morningFitness.jpg'
import nutrition from '../assets/images/nutrition.jpg'
import cricketMatch from '../assets/images/cricketMatch.jpg'
import footballMatch from '../assets/images/footballMatch.jpg'
import badmintonMatch from '../assets/images/badmintonMatch.jpg'
import { FaKhanda } from "react-icons/fa6";
import { PiBuildingFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { GiWheat } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa6";
import { IoIosFootball } from "react-icons/io";
const communities = [
    {

        id: 1,
        image: punjab,
        logo: FaKhanda,
        name: "Punjab Culture Club",
        members: "2.5k Members",
        category: "Culture",
        description: "Celebrate Punjabi traditions, festivals, food, music, and cultural heritage with the community.",
        about: "Punjab Culture Club brings together people who love Punjabi traditions, festivals, music, food, and heritage. Members celebrate local culture, participate in community events, and help preserve the rich identity of Punjab.",

        rules: [
            "Respect every member and their opinions.",
            "No hate speech or offensive language.",
            "Keep discussions related to Punjabi culture.",
            "Avoid spam, advertisements, and fake news."
        ],

        events: [
            {
                id: 1,
                title: "Punjab Heritage Festival",
                date: "20 July 2026",
                time: "6:00 PM",
                location: "Chandigarh",
                attendees: "350",
                image: heritagepunjab
            },
            {
                id: 2,
                title: "Gurpurab Community Seva",
                date: "5 August 2026",
                time: "8:00 AM",
                location: "Amritsar",
                attendees: "220",
                image: gurupurab
            },
            {
                id: 3,
                title: "Folk Dance Workshop",
                date: "15 August 2026",
                time: "4:00 PM",
                location: "Ludhiana",
                attendees: "180",
                image: punjabDance
            }
        ],

        posts: [
            {
                id: 1,
                author: "Paramjeet Kaur (Admin)",
                time: "2 hours ago",
                content: "Welcome to Punjab Culture Club! Share your favorite Punjabi traditions and festival memories.",
                likes: "42 likes",
                comments: "8 comments"

            },
            {
                id: 2,
                author: "Gurpreet Singh",
                time: "1 day ago",
                content: "Don't miss the Heritage Festival next weekend. Everyone is invited!",
                likes: "12 likes",
                comments: "18 comments"

            },
            {
                id: 3,
                author: "Harleen Kaur",
                time: "3 days ago",
                content: "Share photos of your village celebrations in the comments.",
                likes: "23 likes",
                comments: "12 comments"
            }
        ]
    },
    {
        id: 2,
        image: chandigarh,
        logo: PiBuildingFill,
        name: "Chandigarh Connect",
        members: "3.2k Members",
        category: "Business",
        description: "Connect with local professionals, entrepreneurs, and residents to grow your network.",
        about:
            "Chandigarh Connect is a professional networking community that brings together entrepreneurs, freelancers, students, and working professionals. Members share career opportunities, business ideas, startup resources, and local networking events.",

        rules: [
            "Maintain professional and respectful communication.",
            "No fake job postings or misleading information.",
            "Avoid spamming promotional content.",
            "Support and encourage fellow members."
        ],

        events: [
            {
                id: 1,
                image: startupMeeting,
                title: "Startup Networking Meetup",
                date: "25 July 2026",
                time: "5:00 PM",
                location: "Sector 17, Chandigarh",
                attendees: 180,
                description: "Meet local founders, entrepreneurs, and investors."
            },
            {
                id: 2,
                image: workshop,
                title: "Digital Marketing Workshop",
                date: "2 August 2026",
                time: "11:00 AM",
                location: "IT Park, Chandigarh",
                attendees: 140,
                description: "Learn practical digital marketing strategies."
            },
            {
                id: 3,
                image: businessSeminar,
                title: "Business Leadership Seminar",
                date: "15 August 2026",
                time: "3:00 PM",
                location: "Panjab University",
                attendees: 220,
                description: "Leadership and communication skills for professionals."
            }
        ],

        posts: [
            {
                id: 1,
                author: "Harpreet Kaur (Admin)",
                time: "2 hours ago",
                content: "Startup Networking Meetup registrations are now open!",
                likes: 45,
                comments: 12
            },
            {
                id: 2,
                author: "Rahul Sharma",
                time: "1 day ago",
                content: "Looking for a React developer for a freelance project.",
                likes: 30,
                comments: 18
            },
            {
                id: 3,
                author: "Neha Gupta",
                time: "3 days ago",
                content: "Which coworking space in Chandigarh do you recommend?",
                likes: 27,
                comments: 10
            }
        ]
    },
    {
        id: 3,
        image: delhi,
        logo: FaGraduationCap,
        name: "Delhi Youth Network",
        members: "4.1k Members",
        category: "Education",
        description: "A vibrant community for students and young professionals to learn, share, and grow together.",
        about:
            "Delhi Youth Network is a vibrant community for students, fresh graduates, and young professionals. Members connect through educational workshops, career guidance sessions, internships, and social initiatives.",

        rules: [
            "Respect every member's opinion.",
            "No abusive or offensive language.",
            "Share educational and career-related content.",
            "Do not post fake news or misinformation."
        ],

        events: [
            {
                id: 1,
                image: careerGuidance,
                title: "Career Guidance Workshop",
                date: "28 July 2026",
                time: "10:00 AM",
                location: "New Delhi",
                attendees: 320,
                description: "Career experts will guide students about future opportunities."
            },
            {
                id: 2,
                image: resumeBuilding,
                title: "Resume Building Session",
                date: "6 August 2026",
                time: "2:00 PM",
                location: "Delhi University",
                attendees: 200,
                description: "Create professional resumes with HR experts."
            },
            {
                id: 3,
                image: codingBootcamp,
                title: "Coding Bootcamp",
                date: "18 August 2026",
                time: "9:00 AM",
                location: "Noida",
                attendees: 260,
                description: "Hands-on coding sessions for beginners."
            }
        ],

        posts: [
            {
                id: 1,
                author: "Admin",
                time: "4 hours ago",
                content: "Career Guidance Workshop registrations are now live.",
                likes: 56,
                comments: 15
            },
            {
                id: 2,
                author: "Aman Verma",
                time: "1 day ago",
                content: "Can anyone suggest good resources for interview preparation?",
                likes: 39,
                comments: 21
            },
            {
                id: 3,
                author: "Priya Singh",
                time: "2 days ago",
                content: "Looking for study partners preparing for placement interviews.",
                likes: 42,
                comments: 17
            }
        ]
    },
    {
        id: 4,
        image: mumbai,
        logo: FaBriefcase,
        name: "Business Hub",
        members: "5.0k Members",
        category: "Business",
        description: "Exchange business ideas, discover opportunities, and connect with entrepreneurs across Mumbai.",
        about: "Business Hub connects entrepreneurs, startups, and business owners to share ideas, collaborate, and explore new opportunities.",

        rules: [
            "Maintain professional discussions.",
            "No misleading business promotions.",
            "Support fellow entrepreneurs.",
            "Share valuable business knowledge."
        ],

        events: [
            {
                id: 1,
                title: "Entrepreneurs Meetup",
                date: "30 July 2026",
                time: "4:00 PM",
                location: "Mumbai",
                attendees: "220",
                image: entrepreneur
            },
            {
                id: 2,
                title: "Marketing Masterclass",
                date: "12 August 2026",
                time: "3:00 PM",
                location: "Andheri",
                attendees: "170",
                image: marketing
            },
            {
                id: 3,
                title: "Startup Pitch Event",
                date: "26 August 2026",
                time: "1:00 PM",
                location: "BKC",
                attendees: "280",
                image: startupPitch
            }
        ],

        posts: [
            {
                author: "Ankit Sharma (Admin)",
                time: "2 hours ago",
                content: "Welcome entrepreneurs! Share your startup journey here.",
                likes: 72,
                comments: 21
            },
            {
                author: "Mehul Shah",
                time: "7 hours ago",
                content: "Looking for a co-founder for my fintech startup.",
                likes: 38,
                comments: 16
            },
            {
                author: "Sneha Gupta",
                time: "1 day ago",
                content: "Our startup just secured seed funding. Thanks for the support!",
                likes: 89,
                comments: 28
            }
        ]
    },
    {
        id: 5,
        image: farmersHub,
        logo: GiWheat,
        name: "Punjab Farmers Hub",
        members: "3.1k Members",
        category: "Agriculture",
        description: "Share modern farming techniques, crop updates, and agricultural knowledge with fellow farmers.",
        about: "Punjab Farmers Hub connects farmers to share modern farming techniques, crop updates, government schemes, and agricultural knowledge.",

        rules: [
            "Respect every farmer's experience.",
            "Share verified farming information only.",
            "No fake agricultural news.",
            "Help fellow farmers whenever possible."
        ],

        events: [
            {
                id: 1,
                title: "Organic Farming Workshop",
                date: "5 August 2026",
                time: "10:00 AM",
                location: "Ludhiana",
                attendees: "240",
                image: organicFarming
            },
            {
                id: 2,
                title: "Kisan Awareness Camp",
                date: "15 August 2026",
                time: "9:00 AM",
                location: "Patiala",
                attendees: "320",
                image: kisanCamp
            },
            {
                id: 3,
                title: "Crop Management Seminar",
                date: "28 August 2026",
                time: "11:00 AM",
                location: "Bathinda",
                attendees: "180",
                image: cropSeminar
            }
        ],

        posts: [
            {
                author: "Gurmail Singh (Admin)",
                time: "2 hours ago",
                content: "Share your best farming tips with the community.",
                likes: 64,
                comments: 18
            },
            {
                author: "Harjit Singh",
                time: "8 hours ago",
                content: "Which wheat variety gave the best yield this season?",
                likes: 35,
                comments: 14
            },
            {
                author: "Baldev Kaur",
                time: "1 day ago",
                content: "Government subsidy forms are now available online.",
                likes: 52,
                comments: 11
            }
        ]
    },
    {
        id: 6,
        image: tech,
        logo: FaLaptopCode,
        name: "Tech Community",
        members: "4.8k Members",
        category: "Technology",
        description: "Learn programming, discuss technology trends, and collaborate on exciting tech projects.",
        about: "Tech Community is a place for developers, designers, and technology enthusiasts to learn, collaborate, and build exciting projects together.",

        rules: [
            "Help beginners with respect.",
            "Share coding knowledge.",
            "No plagiarism or spam.",
            "Keep discussions technology-related."
        ],

        events: [
            {
                id: 1,
                title: "React Bootcamp",
                date: "8 August 2026",
                time: "11:00 AM",
                location: "Online",
                attendees: "450",
                image: reactBootcamp
            },
            {
                id: 2,
                title: "Hackathon 2026",
                date: "20 August 2026",
                time: "9:00 AM",
                location: "Mohali",
                attendees: "300",
                image: hackathon
            },
            {
                id: 3,
                title: "AI Workshop",
                date: "30 August 2026",
                time: "2:00 PM",
                location: "Chandigarh",
                attendees: "220",
                image: aiWorkshop
            }
        ],

        posts: [
            {
                author: "Rahul Sharma (Admin)",
                time: "1 hour ago",
                content: "Welcome developers! Show us what you're building.",
                likes: 96,
                comments: 35
            },
            {
                author: "Aman Verma",
                time: "5 hours ago",
                content: "Can someone explain React Context API?",
                likes: 43,
                comments: 24
            },
            {
                author: "Neha Kapoor",
                time: "2 days ago",
                content: "I completed my first MERN project today!",
                likes: 88,
                comments: 31
            }
        ]
    },
    {
        id: 7,
        image: music,
        logo: IoMusicalNotesSharp,
        name: "Melody Makers",
        members: "2.3k Members",
        category: "Music",
        description: "Join singers, musicians, and music lovers to share performances and improve your skills.",
        about: "Melody Makers brings together singers, musicians, and music lovers to perform, collaborate, and celebrate every genre of music.",

        rules: [
            "Respect every artist.",
            "Give constructive feedback.",
            "No offensive content.",
            "Support original creations."
        ],

        events: [
            {
                id: 1,
                title: "Open Mic Night",
                date: "12 August 2026",
                time: "6:30 PM",
                location: "Amritsar",
                attendees: "160",
                image: openMic
            },
            {
                id: 2,
                title: "Music Jam Session",
                date: "21 August 2026",
                time: "5:00 PM",
                location: "Jalandhar",
                attendees: "120",
                image: jamSession
            },
            {
                id: 3,
                title: "Live Band Competition",
                date: "2 September 2026",
                time: "7:00 PM",
                location: "Ludhiana",
                attendees: "250",
                image: bandCompetition
            }
        ],

        posts: [
            {
                author: "Harpreet Kaur (Admin)",
                time: "2 hours ago",
                content: "Share your latest singing performance!",
                likes: 58,
                comments: 19
            },
            {
                author: "Karan Singh",
                time: "7 hours ago",
                content: "Looking for a guitarist for our band.",
                likes: 37,
                comments: 10
            },
            {
                author: "Riya Sharma",
                time: "1 day ago",
                content: "Thank you everyone for the support at yesterday's concert.",
                likes: 72,
                comments: 26
            }
        ]
    },
    {
        id: 8,
        image: travel,
        logo: BsFillAirplaneEnginesFill,
        name: "Travel Explorer Club",
        members: "3.7k Members",
        category: "Travel",
        description: "Explore new destinations, travel tips, and unforgettable adventures with fellow travelers.",
        about: "Travel Explorer Club is for adventure seekers who love discovering new destinations, sharing travel experiences, and planning unforgettable trips.",

        rules: [
            "Share genuine travel experiences.",
            "Respect every traveler's opinion.",
            "No fake promotions.",
            "Keep posts travel-related."
        ],

        events: [
            {
                id: 1,
                title: "Shimla Weekend Trip",
                date: "16 August 2026",
                time: "6:00 AM",
                location: "Shimla",
                attendees: "95",
                image: shimlaTrip
            },
            {
                id: 2,
                title: "Camping Adventure",
                date: "29 August 2026",
                time: "8:00 AM",
                location: "Kasol",
                attendees: "80",
                image: camping
            },
            {
                id: 3,
                title: "Photography Walk",
                date: "6 September 2026",
                time: "7:00 AM",
                location: "Manali",
                attendees: "110",
                image: photoGraphyWalk
            }
        ],

        posts: [
            {
                author: "Anjali Mehta (Admin)",
                time: "3 hours ago",
                content: "Which destination should we visit next month?",
                likes: 67,
                comments: 21
            },
            {
                author: "Rohit Sharma",
                time: "10 hours ago",
                content: "Just returned from Ladakh. Amazing experience!",
                likes: 94,
                comments: 30
            },
            {
                author: "Mehak Kaur",
                time: "2 days ago",
                content: "Sharing my budget itinerary for Himachal Pradesh.",
                likes: 55,
                comments: 14
            }
        ]
    },
    {
        id: 9,
        image: gym,
        logo: FaDumbbell,
        name: "Fitness Club",
        members: "5.2k Members",
        category: "Fitness",
        description: "Stay active with workout challenges, healthy habits, and fitness motivation from the community.",
        about:
            "Fitness Club motivates members to stay healthy through workouts, nutrition tips, and fitness challenges.",

        rules: [
            "Support and motivate fellow members.",
            "No body shaming or negativity.",
            "Share only safe fitness advice.",
            "Keep posts related to health and fitness."
        ],


        events: [
            {
                id: 1,
                image: morningFitness,
                title: "Morning Fitness Challenge",
                date: "22 July 2026",
                time: "6:30 AM",
                location: "Chandigarh",
                attendees: 250
            },
            {
                id: 2,
                image: yogaFitness,
                title: "Yoga Wellness Camp",
                date: "5 August 2026",
                time: "7:00 AM",
                location: "Mohali",
                attendees: 180
            },
            {
                id: 3,
                image: nutrition,
                title: "Nutrition Awareness Session",
                date: "18 August 2026",
                time: "5:00 PM",
                location: "Ludhiana",
                attendees: 140
            }
        ],

        posts: [
            {
                author: "Anjali Verma",
                time: "1 hour ago",
                content: "Completed a 10 km morning run today! Feeling amazing.",
                likes: 88,
                comments: 31
            },
            {
                author: "Rahul Sharma",
                time: "8 hours ago",
                content: "Who's joining tomorrow's fitness challenge?",
                likes: 52,
                comments: 19
            },
            {
                author: "Simran Kaur",
                time: "2 days ago",
                content: "Sharing my weekly healthy meal plan with everyone.",
                likes: 47,
                comments: 21
            }
        ]
    },


    {
        id: 10,
        image: sports,
        logo: IoIosFootball,
        name: "Sports Arena",
        members: "3.4k Members",
        category: "Sports",
        description: "Play, compete, and connect with sports enthusiasts through local matches and training sessions.",
        about:
            "Sports Arena connects sports enthusiasts to organize matches, tournaments, and training sessions across different games.",

        rules: [
            "Respect teammates and opponents.",
            "Promote fair play and sportsmanship.",
            "No abusive language during discussions.",
            "Keep posts related to sports activities."
        ],

        events: [
            {
                id: 1,
                image: cricketMatch,
                title: "Cricket Friendly Match",
                date: "25 July 2026",
                time: "8:00 AM",
                location: "Amritsar",
                attendees: 180
            },
            {
                id: 2,
                image: footballMatch,
                title: "Football Tournament",
                date: "12 August 2026",
                time: "4:00 PM",
                location: "Jalandhar",
                attendees: 220
            },
            {
                id: 3,
                image: badmintonMatch,
                title: "Badminton Championship",
                date: "30 August 2026",
                time: "10:00 AM",
                location: "Patiala",
                attendees: 140
            }
        ],

        posts: [
            {
                author: "Harpreet Singh",
                time: "2 hours ago",
                content: "Our football team won the semi-finals today! 🏆",
                likes: 74,
                comments: 26
            },
            {
                author: "Neha Gill",
                time: "1 day ago",
                content: "Registration for the badminton championship is now open.",
                likes: 39,
                comments: 17
            },
            {
                author: "Amanpreet Kaur",
                time: "3 days ago",
                content: "Looking for players to join our weekend cricket practice.",
                likes: 45,
                comments: 20
            }
        ]
    }


]
export default communities
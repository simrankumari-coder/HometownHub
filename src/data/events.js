import concert from '../assets/images/concert.jpg'
import folkDance from '../assets/images/folkDance.jpg'
import meeting from '../assets/images/meeting.jpg'
import coding from '../assets/images/coding.jpg'
import city from '../assets/images/city.jpg'
import treePlantation from '../assets/images/treePlantation.jpg'
import cricket from '../assets/images/cricket.jpg'
import seminar from '../assets/images/seminar.jpg'
import football from '../assets/images/football.jpg'
import ai from '../assets/images/ai.jpg'

const events = [
    {
        id: 1,
        name: "Punjab Heritage Festival",
        category: "Culture",
        date: "20 July 2026",
        time: "6:00 PM",
        location: "Chandigarh",
        organizer: {
            name: "Gurpreet Singh",
            role: "Cultural Event Coordinator",
            email: "gurpreet@hometownhub.com",
            phone: "+91 98765 11223"
        },

        schedule: [
            {
                time: "09:00 AM",
                activity: "Registration & Welcome"
            },
            {
                time: "10:00 AM",
                activity: "Punjab Heritage Exhibition"
            },
            {
                time: "11:30 AM",
                activity: "Folk Dance & Cultural Performances"
            },
            {
                time: "01:00 PM",
                activity: "Traditional Punjabi Lunch"
            },
            {
                time: "02:30 PM",
                activity: "Closing Ceremony & Group Photo"
            }
        ],
        attendees: 350,
        description: "Celebrate Punjabi culture with folk music, dance, traditional food, and cultural performances.",
        image: folkDance
    },
    {
        id: 2,
        name: "Intercity Cricket Tournament",
        category: "Sports",
        date: "25 July 2026",
        time: "9:00 AM",
        location: "Mohali Stadium",
        organizer: {
            name: "Harpreet Singh",
            role: "Sports Coordinator",
            email: "harpreet@hometownhub.com",
            phone: "+91 99887 66554"
        },

        schedule: [
            { time: "08:00 AM", activity: "Team Registration" },
            { time: "09:00 AM", activity: "Opening Match" },
            { time: "12:30 PM", activity: "Lunch Break" },
            { time: "01:30 PM", activity: "Semi-Finals" },
            { time: "04:30 PM", activity: "Final Match & Prize Ceremony" }
        ],
        attendees: 180,
        description: "Join exciting cricket matches between local teams and support your favorite players.",
        image: cricket
    },
    {
        id: 3,
        name: "React Bootcamp",
        category: "Technology",
        date: "28 July 2026",
        time: "11:00 AM",
        location: "Online",
        organizer: {
            name: "Ankit Verma",
            role: "Frontend Mentor",
            email: "ankit@hometownhub.com",
            phone: "+91 91234 56789"
        },

        schedule: [
            { time: "09:30 AM", activity: "Registration" },
            { time: "10:00 AM", activity: "React Fundamentals" },
            { time: "11:30 AM", activity: "Hands-on Practice" },
            { time: "01:00 PM", activity: "Lunch Break" },
            { time: "02:00 PM", activity: "Mini Project & Q&A" }
        ],
        attendees: 220,
        description: "Learn modern React development with hands-on coding sessions and expert guidance.",
        image: coding
    },
    {
        id: 4,
        name: "Career Guidance Seminar",
        category: "Education",
        date: "30 July 2026",
        time: "2:00 PM",
        location: "Ludhiana",
        organizer: {
            name: "Priya Kapoor",
            role: "Career Counselor",
            email: "priya@hometownhub.com",
            phone: "+91 97654 32109"
        },

        schedule: [
            { time: "10:00 AM", activity: "Welcome Session" },
            { time: "10:30 AM", activity: "Career Opportunities" },
            { time: "12:00 PM", activity: "Resume Tips" },
            { time: "01:00 PM", activity: "Lunch Break" },
            { time: "02:00 PM", activity: "Interview Q&A" }
        ],
        attendees: 150,
        description: "Explore career opportunities, internships, and higher education with industry experts.",
        image: seminar
    },
    {
        id: 5,
        name: "Tree Plantation Drive",
        category: "Social",
        date: "2 August 2026",
        time: "8:00 AM",
        location: "City Park",
        organizer: {
            name: "Neha Sharma",
            role: "Environment Coordinator",
            email: "neha@hometownhub.com",
            phone: "+91 98711 22334"
        },

        schedule: [
            { time: "07:30 AM", activity: "Volunteer Registration" },
            { time: "08:00 AM", activity: "Plant Distribution" },
            { time: "09:00 AM", activity: "Tree Plantation" },
            { time: "11:00 AM", activity: "Awareness Talk" },
            { time: "12:00 PM", activity: "Closing & Refreshments" }
        ],
        attendees: 120,
        description: "Join volunteers to plant trees and make the city greener for future generations.",
        image: treePlantation
    },
    {
        id: 6,
        name: "Startup Networking Meetup",
        category: "Business",
        date: "5 August 2026",
        time: "5:30 PM",
        location: "Chandigarh",
        organizer: {
            name: "Aman Mehta",
            role: "Startup Mentor",
            email: "aman@hometownhub.com",
            phone: "+91 98123 45678"
        },

        schedule: [
            { time: "05:00 PM", activity: "Registration" },
            { time: "05:30 PM", activity: "Founder Introductions" },
            { time: "06:30 PM", activity: "Networking Session" },
            { time: "07:30 PM", activity: "Startup Pitches" },
            { time: "08:30 PM", activity: "Closing Remarks" }
        ],
        attendees: 90,
        description: "Connect with entrepreneurs, startup founders, and business professionals.",
        image: meeting
    },
    {
        id: 7,
        name: "Photography Walk",
        category: "Travel",
        date: "9 August 2026",
        time: "7:00 AM",
        location: "Sukhna Lake",
        organizer: {
            name: "Riya Malhotra",
            role: "Photography Club Lead",
            email: "riya@hometownhub.com",
            phone: "+91 99001 11223"
        },

        schedule: [
            { time: "06:30 AM", activity: "Meet & Registration" },
            { time: "07:00 AM", activity: "Photography Walk" },
            { time: "09:00 AM", activity: "Photo Review" },
            { time: "10:00 AM", activity: "Editing Tips" },
            { time: "11:00 AM", activity: "Group Photo & Closing" }
        ],
        attendees: 75,
        description: "Capture beautiful city landscapes while exploring famous local attractions.",
        image: city
    },
    {
        id: 8,
        name: "Independence Day Marathon",
        category: "Sports",
        date: "15 August 2026",
        time: "6:00 AM",
        location: "Patiala",
        organizer: {
            name: "Karan Gill",
            role: "Fitness Coach",
            email: "karan@hometownhub.com",
            phone: "+91 97876 54321"
        },

        schedule: [
            { time: "05:30 AM", activity: "Registration" },
            { time: "06:00 AM", activity: "Warm-up Session" },
            { time: "06:30 AM", activity: "Marathon Starts" },
            { time: "08:30 AM", activity: "Refreshments" },
            { time: "09:00 AM", activity: "Medal Distribution" }
        ],
        attendees: 500,
        description: "Run together to celebrate Independence Day with fitness and community spirit.",
        image: football
    },
    {
        id: 9,
        name: "Folk Music Night",
        category: "Music",
        date: "18 August 2026",
        time: "7:30 PM",
        location: "Amritsar",
        organizer: {
            name: "Simran Kaur",
            role: "Music Coordinator",
            email: "simran@hometownhub.com",
            phone: "+91 98888 77665"
        },

        schedule: [
            { time: "06:00 PM", activity: "Audience Entry" },
            { time: "06:30 PM", activity: "Opening Performance" },
            { time: "07:30 PM", activity: "Folk Music Performances" },
            { time: "08:45 PM", activity: "Guest Artist Show" },
            { time: "09:30 PM", activity: "Vote of Thanks" }
        ],
        attendees: 260,
        description: "Enjoy an evening filled with live Punjabi folk music and cultural performances.",
        image: concert
    },
    {
        id: 10,
        name: "AI & Innovation Summit",
        category: "Technology",
        date: "22 August 2026",
        time: "10:00 AM",
        location: "Chandigarh",
        organizer: {
            name: "Vikram Gupta",
            role: "AI Research Lead",
            email: "vikram@hometownhub.com",
            phone: "+91 98700 11223"
        },

        schedule: [
            { time: "09:00 AM", activity: "Registration" },
            { time: "10:00 AM", activity: "AI Keynote Session" },
            { time: "11:30 AM", activity: "Innovation Showcase" },
            { time: "01:00 PM", activity: "Lunch Break" },
            { time: "02:00 PM", activity: "Panel Discussion & Closing" }
        ],
        attendees: 300,
        description: "Discover the latest trends in artificial intelligence and emerging technologies.",
        image: ai
    },
];

export default events;


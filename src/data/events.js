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
        organizer: "Punjab Culture Club",
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
        organizer: "Sports Hub",
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
        organizer: "Tech Innovators",
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
        organizer: "Student Success",
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
        organizer: "Green Punjab",
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
        organizer: "Business Circle",
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
        organizer: "Travel Explorers",
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
        organizer: "Sports Hub",
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
        organizer: "Melody Makers",
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
        organizer: "Tech Innovators",
        attendees: 300,
        description: "Discover the latest trends in artificial intelligence and emerging technologies.",
        image: ai
    },
];

export default events;



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

const communities = [
    {

        id: 1,
        image: punjab,
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
        name: "Delhi Youth Network",
        members: "4.1k Members",
        category: "Education",
        description: "A vibrant community for students and young professionals to learn, share, and grow together."
    },
    {
        id: 4,
        image: mumbai,
        name: "Business Hub",
        members: "5.0k Members",
        category: "Business",
        description: "Exchange business ideas, discover opportunities, and connect with entrepreneurs across Mumbai."
    },
    {
        id: 5,
        image: farmersHub,
        name: "Punjab Farmers Hub",
        members: "3.1k Members",
        category: "Agriculture",
        description: "Share modern farming techniques, crop updates, and agricultural knowledge with fellow farmers."
    },
    {
        id: 6,
        image: tech,
        name: "Tech Community",
        members: "4.8k Members",
        category: "Technology",
        description: "Learn programming, discuss technology trends, and collaborate on exciting tech projects."
    },
    {
        id: 7,
        image: music,
        name: "Melody Makers",
        members: "2.3k Members",
        category: "Music",
        description: "Join singers, musicians, and music lovers to share performances and improve your skills."
    },
    {
        id: 8,
        image: travel,
        name: "Travel Explorer Club",
        members: "3.7k Members",
        category: "Travel",
        description: "Explore new destinations, travel tips, and unforgettable adventures with fellow travelers."
    },
    {
        id: 9,
        image: gym,
        name: "Fitness Club",
        members: "5.2k Members",
        category: "Fitness",
        description: "Stay active with workout challenges, healthy habits, and fitness motivation from the community."
    },
    {
        id: 10,
        image: sports,
        name: "Sports Arena",
        members: "3.4k Members",
        category: "Sports",
        description: "Play, compete, and connect with sports enthusiasts through local matches and training sessions."
    }

]
export default communities
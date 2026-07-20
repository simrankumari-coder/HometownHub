import heritagePost from '../assets/images/heritagePost.jpg'
import cricketPost from '../assets/images/cricketPost.jpg'
import aiPost from '../assets/images/aiPost.jpg'
import musicPost from '../assets/images/musicPost.jpg'
import careerPost from '../assets/images/careerPost.jpg'
import reactPost from '../assets/images/reactPost.png'
import treePost from '../assets/images/treePost.jpg'
import photoPost from '../assets/images/photoPost.jpg'
import marathonPost from '../assets/images/marathonPost.jpg'
import startupPost from '../assets/images/startupPost.jpg'
const feedData = [
    {
        id: 1,
        author: "Gurpreet Singh",
        community: "Punjab Heritage Club",
        time: "2 hours ago",
        content: "What an incredible day at the Punjab Heritage Festival! Thank you to everyone who celebrated our traditions, music, and culture with us.",
        image: heritagePost,
        likes: 124,
        comments: [
            { author: "Rahul", text: "Amazing event!" },
            { author: "Priya", text: "Loved the cultural performances." }
        ]
    },
    {
        id: 2,
        author: "Harpreet Singh",
        community: "Sports Arena",
        time: "5 hours ago",
        content: "The Intercity Cricket Tournament begins tomorrow. Wishing every team the very best. Let's enjoy the spirit of sportsmanship!",
        image: cricketPost,
        likes: 98,
        comments: [
            { author: "Aman", text: "Can't wait!" },
            { author: "Rohit", text: "Go Team Punjab!" }
        ]
    },
    {
        id: 3,
        author: "Ankit Verma",
        community: "Tech Community",
        time: "1 day ago",
        content: "React Bootcamp registrations are officially open. Learn React by building real-world projects with experienced mentors.",
        image: reactPost,
        likes: 156,
        comments: [
            { author: "Karan", text: "Already registered!" },
            { author: "Neha", text: "Looking forward to it." }
        ]
    },
    {
        id: 4,
        author: "Priya Kapoor",
        community: "Education Hub",
        time: "1 day ago",
        content: "Our Career Guidance Seminar helped students explore career paths, higher education, and interview preparation.",
        image: careerPost,
        likes: 87,
        comments: [
            { author: "Vikas", text: "Very informative." },
            { author: "Anjali", text: "Thank you for organizing." }
        ]
    },
    {
        id: 5,
        author: "Neha Sharma",
        community: "Green Earth",
        time: "2 days ago",
        content: "Together we planted more than 500 trees during our Tree Plantation Drive. Every tree makes our future greener.",
        image: treePost,
        likes: 142,
        comments: [
            { author: "Riya", text: "Proud to be part of it." },
            { author: "Manpreet", text: "Great initiative!" }
        ]
    },
    {
        id: 6,
        author: "Aman Mehta",
        community: "Startup Hub",
        time: "2 days ago",
        content: "The Startup Networking Meetup connected entrepreneurs, developers, and investors to exchange ideas and opportunities.",
        image: startupPost,
        likes: 111,
        comments: [
            { author: "Harsh", text: "Met amazing people." },
            { author: "Nitin", text: "Waiting for the next meetup." }
        ]
    },
    {
        id: 7,
        author: "Riya Malhotra",
        community: "Photography Club",
        time: "3 days ago",
        content: "Our Photography Walk captured beautiful moments across the city. Thank you to everyone who joined us.",
        image: photoPost,
        likes: 95,
        comments: [
            { author: "Komal", text: "Beautiful clicks!" },
            { author: "Rahul", text: "Amazing experience." }
        ]
    },
    {
        id: 8,
        author: "Karan Gill",
        community: "Fitness Club",
        time: "3 days ago",
        content: "The Independence Day Marathon brought together runners of all ages to celebrate fitness, unity, and patriotism.",
        image: marathonPost,
        likes: 173,
        comments: [
            { author: "Deepak", text: "Fantastic event!" },
            { author: "Sonia", text: "See you next year." }
        ]
    },
    {
        id: 9,
        author: "Simran Kaur",
        community: "Music Community",
        time: "4 days ago",
        content: "Folk Music Night was filled with soulful performances and unforgettable memories. Thank you for your support.",
        image: musicPost,
        likes: 138,
        comments: [
            { author: "Mehak", text: "Wonderful evening!" },
            { author: "Arjun", text: "Loved every performance." }
        ]
    },
    {
        id: 10,
        author: "Vikram Gupta",
        community: "AI Community",
        time: "5 days ago",
        content: "The AI and Innovation Summit inspired participants with exciting discussions about artificial intelligence and future technologies.",
        image: aiPost,
        likes: 201,
        comments: [
            { author: "Nikhil", text: "Great insights!" },
            { author: "Pooja", text: "Amazing speakers." }
        ]
    }
];

export default feedData;
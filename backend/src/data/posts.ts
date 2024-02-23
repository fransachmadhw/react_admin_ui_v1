const posts = [
  {
    id: 1,
    thumbnail:
      'https://images.unsplash.com/photo-1474401915596-3c5adf84ef01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Exploring the Grand Canyon: A Journey Through Time',
    desc: 'Join us on an unforgettable journey through the majestic Grand Canyon. Experience breathtaking views, rugged landscapes, and rich history.',
    tags: ['travel', 'adventure', 'nature', 'national parks'],
    author: 'Shania Rahmawati',
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Public',
    date: '01.02.2024',
    views: 125,
    comments: [
      'Absolutely stunning!',
      "Can't wait to visit!",
      'Incredible experience.',
    ],
    likes: 17,
  },
  {
    id: 2,
    thumbnail:
      'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Discovering the Wonders of Japanese Cuisine',
    desc: 'Delve into the culinary delights of Japan with a gastronomic adventure like no other. From sushi to ramen, experience the flavors of Japan.',
    tags: ['food', 'Japanese cuisine', 'travel', 'culture'],
    author: 'Warsa Situmorang',
    avatar:
      'https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Public',
    date: '02.02.2024',
    views: 98,
    comments: [
      'Mouthwatering!',
      'I love Japanese food!',
      'Amazing culinary journey.',
    ],
    likes: 23,
  },
  {
    id: 3,
    thumbnail:
      'https://images.unsplash.com/photo-1558185348-c1e6420f12d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mastering the Art of Photography: Tips and Techniques',
    desc: "Unlock the secrets of photography and capture life's most precious moments with finesse. Learn essential tips and techniques from experts.",
    tags: ['photography', 'art', 'tips', 'techniques'],
    author: 'Hardi Halim',
    avatar:
      'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Private',
    date: '03.02.2024',
    views: 150,
    comments: [
      'Inspirational!',
      "I've learned so much!",
      'Great insights.',
    ],
    likes: 15,
  },
  {
    id: 4,
    thumbnail:
      'https://images.unsplash.com/photo-1570095378004-ce65d6c2d5bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'The Science of Climate Change: Understanding Our Planet',
    desc: 'Dive into the complex world of climate change and explore its impacts on our planet. Learn about environmental challenges and solutions.',
    tags: [
      'climate change',
      'environment',
      'science',
      'global warming',
    ],
    author: 'Septi Purwanti',
    avatar:
      'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Public',
    date: '04.02.2024',
    views: 88,
    comments: [],
    likes: 9,
  },
  {
    id: 5,
    thumbnail:
      'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1499&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Healthy Living: Mind, Body, and Soul',
    desc: 'Embrace a holistic approach to health and wellness. Discover tips for nourishing your mind, strengthening your body, and uplifting your soul.',
    tags: ['health', 'wellness', 'mindfulness', 'self-care'],
    author: 'Aswani Halim',
    avatar:
      'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Private',
    date: '05.02.2024',
    views: 200,
    comments: [
      'Great advice!',
      'Wellness is key!',
      'Inspiring content.',
    ],
    likes: 30,
  },
  {
    id: 6,
    thumbnail:
      'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:
      'Artificial Intelligence: Exploring the Future of Technology',
    desc: 'Delve into the fascinating world of artificial intelligence and its transformative impact on various industries. Explore the possibilities!',
    tags: [
      'artificial intelligence',
      'technology',
      'innovation',
      'future',
    ],
    author: 'Rafid Sinaga',
    avatar:
      'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Public',
    date: '06.02.2024',
    views: 175,
    comments: [
      'Mind-blowing!',
      'Exciting times ahead!',
      'AI revolution.',
    ],
    likes: 42,
  },
  {
    id: 7,
    thumbnail:
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'The Magic of Music: A Journey Through Sound',
    desc: 'Immerse yourself in the enchanting world of music and embark on a sonic adventure. From classical to rock, discover the power of sound.',
    tags: ['music', 'art', 'culture', 'sound'],
    author: 'Ika Puspita',
    avatar:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Public',
    date: '07.02.2024',
    views: 205,
    comments: [
      'Music speaks to the soul!',
      'Life is better with music!',
      'A symphony of emotions.',
    ],
    likes: 63,
  },
  {
    id: 8,
    thumbnail:
      'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Exploring Space: Journey to the Final Frontier',
    desc: 'Embark on an epic voyage through the cosmos and unravel the mysteries of the universe. Explore distant galaxies, stars, and planets.',
    tags: ['space', 'exploration', 'astronomy', 'universe'],
    author: 'Omar Napitupulu',
    avatar:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Private',
    date: '08.02.2024',
    views: 180,
    comments: [
      'Out of this world!',
      'Starry-eyed wonder!',
      'Space exploration is awe-inspiring.',
    ],
    likes: 50,
  },
  {
    id: 9,
    thumbnail:
      'https://images.unsplash.com/photo-1499728603263-13726abce5fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'The Power of Mindfulness: Cultivating Inner Peace',
    desc: "Discover the transformative power of mindfulness and learn to cultivate inner peace amidst life's chaos. Embrace the present moment.",
    tags: ['mindfulness', 'meditation', 'wellness', 'peace'],
    author: 'Kenari Saptono',
    avatar:
      'https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Public',
    date: '09.02.2024',
    views: 150,
    comments: [
      'Mindful living!',
      'Peace begins within!',
      'Breathe and be present.',
    ],
    likes: 35,
  },
  {
    id: 10,
    thumbnail:
      'https://images.unsplash.com/photo-1507475380673-1246fa72eeea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:
      "Exploring Ancient Civilizations: Unraveling History's Mysteries",
    desc: 'Journey back in time and explore the wonders of ancient civilizations. From the pyramids of Egypt to the ruins of Rome, history comes alive.',
    tags: ['history', 'civilizations', 'archaeology', 'ancient'],
    author: 'Kenes Lazuardi',
    avatar:
      'https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Private',
    date: '10.02.2024',
    views: 220,
    comments: [
      'Fascinating!',
      'History buff here!',
      'The past holds secrets.',
    ],
    likes: 75,
  },
  {
    id: 11,
    thumbnail:
      'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:
      'The Art of Storytelling: Crafting Narratives That Captivate',
    desc: 'Unlock the power of storytelling and learn to craft narratives that captivate audiences. From myths to modern tales, the art of storytelling lives on.',
    tags: ['storytelling', 'writing', 'narratives', 'creative'],
    author: 'Jaiman Napitupulu',
    avatar:
      'https://images.pexels.com/photos/4412516/pexels-photo-4412516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Public',
    date: '11.02.2024',
    views: 190,
    comments: [
      'Stories connect us!',
      'Words weave magic!',
      'Once upon a time...',
    ],
    likes: 55,
  },
  {
    id: 12,
    thumbnail:
      'https://images.unsplash.com/photo-1528652899333-492965af4854?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Into the Wild: Embracing Nature's Majesty",
    desc: 'Embark on an exhilarating adventure into the heart of the wilderness. Explore lush forests, rugged mountains, and pristine landscapes.',
    tags: ['nature', 'wilderness', 'adventure', 'exploration'],
    author: 'Pandu Anggriawan',
    avatar:
      'https://images.pexels.com/photos/19342871/pexels-photo-19342871/free-photo-of-a-man-with-no-shirt-and-glasses-on-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Public',
    date: '12.02.2024',
    views: 175,
    comments: [
      'Nature heals!',
      'Wanderlust unleashed!',
      'Incredible beauty.',
    ],
    likes: 40,
  },
  {
    id: 13,
    thumbnail:
      'https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'The World of Fantasy: Unleashing Imagination',
    desc: 'Dive into the fantastical realms of imagination and explore worlds beyond reality. From dragons to wizards, let your imagination soar.',
    tags: ['fantasy', 'imagination', 'magic', 'adventure'],
    author: 'Kezia Nasyidah',
    avatar:
      'https://images.pexels.com/photos/4728655/pexels-photo-4728655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Private',
    date: '13.02.2024',
    views: 250,
    comments: [
      'Epic adventures await!',
      'Magic is real in books!',
      'Fantasy realms beckon.',
    ],
    likes: 80,
  },
  {
    id: 14,
    thumbnail:
      'https://images.unsplash.com/photo-1622521186755-238135fafa54?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Exploring Underwater Worlds: Beneath the Surface',
    desc: 'Plunge into the depths of the ocean and discover the wonders that lie beneath the waves. From coral reefs to shipwrecks, explore underwater marvels.',
    tags: ['underwater', 'ocean', 'marine life', 'exploration'],
    author: 'Zamira Nasyidah',
    avatar:
      'https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Public',
    date: '14.02.2024',
    views: 210,
    comments: [
      'Oceanic wonders!',
      'Dive into adventure!',
      'Life beneath the surface.',
    ],
    likes: 70,
  },
  {
    id: 15,
    thumbnail:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "The Art of Gardening: Nurturing Nature's Bounty",
    desc: "Embark on a journey of cultivation and growth as you explore the art of gardening. From seeds to blooms, witness the beauty of nature's bounty.",
    tags: ['gardening', 'nature', 'plants', 'horticulture'],
    author: 'Lidya Nurdiyanti',
    avatar:
      'https://images.pexels.com/photos/713312/pexels-photo-713312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    visibility: 'Private',
    date: '15.02.2024',
    views: 180,
    comments: [
      'Green thumbs unite!',
      "Nature's canvas!",
      "Gardeners' paradise.",
    ],
    likes: 60,
  },
];

export default posts;

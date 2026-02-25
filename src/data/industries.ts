export interface Website {
  name: string;
  url: string;
  description?: string;
  founded?: string;
  headquarters?: string;
  category?: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  websites: Website[];
  icon: string;
  gradient: string;
  longDescription?: string;
  marketSize?: string;
  growthRate?: string;
  trendKeywords?: string[];
}

export const industries: Industry[] = [
  {
    id: 'technology',
    name: 'Technology',
    description: 'Leading technology companies and platforms shaping the digital world',
    icon: '💻',
    gradient: 'from-blue-500 to-cyan-500',
    longDescription: 'The technology sector drives global innovation through cloud computing, artificial intelligence, and enterprise software. It remains the largest industry by market capitalization, with companies expanding into healthcare, automotive, and financial services.',
    marketSize: '$5.3 trillion (2024)',
    growthRate: '8.5% CAGR',
    trendKeywords: ['Cloud Computing', 'Generative AI', 'Cybersecurity', 'Edge Computing', 'Quantum Computing'],
    websites: [
      { name: 'Microsoft', url: 'https://www.microsoft.com', description: 'Cloud computing and software solutions', founded: '1975', headquarters: 'Redmond, WA, USA', category: 'Cloud Computing' },
      { name: 'Apple', url: 'https://www.apple.com', description: 'Consumer electronics and software', founded: '1976', headquarters: 'Cupertino, CA, USA', category: 'Consumer Electronics' },
      { name: 'Google', url: 'https://www.google.com', description: 'Search engine and internet services', founded: '1998', headquarters: 'Mountain View, CA, USA', category: 'Internet Services' },
      { name: 'GitHub', url: 'https://www.github.com', description: 'Software development and version control', founded: '2008', headquarters: 'San Francisco, CA, USA', category: 'Developer Tools' },
      { name: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Developer community and Q&A', founded: '2008', headquarters: 'New York, NY, USA', category: 'Developer Community' },
      { name: 'IBM', url: 'https://www.ibm.com', description: 'Enterprise technology solutions', founded: '1911', headquarters: 'Armonk, NY, USA', category: 'Enterprise IT' },
      { name: 'Oracle', url: 'https://www.oracle.com', description: 'Database and cloud solutions', founded: '1977', headquarters: 'Austin, TX, USA', category: 'Database Software' },
      { name: 'Salesforce', url: 'https://www.salesforce.com', description: 'Customer relationship management', founded: '1999', headquarters: 'San Francisco, CA, USA', category: 'CRM Software' },
      { name: 'Adobe', url: 'https://www.adobe.com', description: 'Creative software and digital media', founded: '1982', headquarters: 'San Jose, CA, USA', category: 'Creative Software' },
      { name: 'SAP', url: 'https://www.sap.com', description: 'Enterprise resource planning software', founded: '1972', headquarters: 'Walldorf, Germany', category: 'Enterprise Software' }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Top healthcare organizations and medical service providers',
    icon: '🏥',
    gradient: 'from-green-500 to-emerald-500',
    longDescription: 'The healthcare industry encompasses hospitals, pharmaceuticals, medical devices, and digital health platforms. Driven by aging populations and technological advances, the sector is rapidly adopting telemedicine, AI diagnostics, and personalized medicine.',
    marketSize: '$12.2 trillion (2024)',
    growthRate: '7.9% CAGR',
    trendKeywords: ['Telemedicine', 'AI Diagnostics', 'Personalized Medicine', 'Digital Health', 'Genomics'],
    websites: [
      { name: 'Mayo Clinic', url: 'https://www.mayoclinic.org', description: 'Medical care and research', founded: '1889', headquarters: 'Rochester, MN, USA', category: 'Medical Center' },
      { name: 'Cleveland Clinic', url: 'https://www.clevelandclinic.org', description: 'Medical center and healthcare', founded: '1921', headquarters: 'Cleveland, OH, USA', category: 'Medical Center' },
      { name: 'Johns Hopkins Medicine', url: 'https://www.hopkinsmedicine.org', description: 'Academic medical center', founded: '1876', headquarters: 'Baltimore, MD, USA', category: 'Academic Medicine' },
      { name: 'WHO', url: 'https://www.who.int', description: 'World Health Organization', founded: '1948', headquarters: 'Geneva, Switzerland', category: 'Global Health' },
      { name: 'WebMD', url: 'https://www.webmd.com', description: 'Health information services', founded: '1998', headquarters: 'New York, NY, USA', category: 'Health Information' },
      { name: 'Pfizer', url: 'https://www.pfizer.com', description: 'Pharmaceutical company', founded: '1849', headquarters: 'New York, NY, USA', category: 'Pharmaceuticals' },
      { name: 'Johnson & Johnson', url: 'https://www.jnj.com', description: 'Healthcare and pharmaceutical', founded: '1886', headquarters: 'New Brunswick, NJ, USA', category: 'Pharmaceuticals' },
      { name: 'UnitedHealth Group', url: 'https://www.unitedhealthgroup.com', description: 'Health insurance and services', founded: '1977', headquarters: 'Minnetonka, MN, USA', category: 'Health Insurance' },
      { name: 'CVS Health', url: 'https://www.cvshealth.com', description: 'Pharmacy and healthcare', founded: '1963', headquarters: 'Woonsocket, RI, USA', category: 'Pharmacy' },
      { name: 'Kaiser Permanente', url: 'https://www.kaiserpermanente.org', description: 'Integrated healthcare', founded: '1945', headquarters: 'Oakland, CA, USA', category: 'Health System' }
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Leading financial institutions and fintech companies',
    icon: '💰',
    gradient: 'from-yellow-500 to-amber-500',
    longDescription: 'The finance industry spans banking, insurance, asset management, and fintech innovation. Digital transformation is reshaping payments, lending, and investing, while blockchain and decentralized finance challenge traditional models.',
    marketSize: '$28.5 trillion (2024)',
    growthRate: '6.2% CAGR',
    trendKeywords: ['Fintech', 'Digital Banking', 'Blockchain', 'Embedded Finance', 'RegTech'],
    websites: [
      { name: 'JPMorgan Chase', url: 'https://www.jpmorganchase.com', description: 'Banking and financial services', founded: '1799', headquarters: 'New York, NY, USA', category: 'Investment Banking' },
      { name: 'Bank of America', url: 'https://www.bankofamerica.com', description: 'Consumer and commercial banking', founded: '1998', headquarters: 'Charlotte, NC, USA', category: 'Commercial Banking' },
      { name: 'Wells Fargo', url: 'https://www.wellsfargo.com', description: 'Banking and mortgage services', founded: '1852', headquarters: 'San Francisco, CA, USA', category: 'Commercial Banking' },
      { name: 'Goldman Sachs', url: 'https://www.goldmansachs.com', description: 'Investment banking', founded: '1869', headquarters: 'New York, NY, USA', category: 'Investment Banking' },
      { name: 'Morgan Stanley', url: 'https://www.morganstanley.com', description: 'Investment management', founded: '1935', headquarters: 'New York, NY, USA', category: 'Investment Banking' },
      { name: 'Citigroup', url: 'https://www.citigroup.com', description: 'Global banking services', founded: '1998', headquarters: 'New York, NY, USA', category: 'Global Banking' },
      { name: 'PayPal', url: 'https://www.paypal.com', description: 'Digital payment platform', founded: '1998', headquarters: 'San Jose, CA, USA', category: 'Digital Payments' },
      { name: 'Visa', url: 'https://www.visa.com', description: 'Payment technology', founded: '1958', headquarters: 'San Francisco, CA, USA', category: 'Payment Network' },
      { name: 'Mastercard', url: 'https://www.mastercard.com', description: 'Payment solutions', founded: '1966', headquarters: 'Purchase, NY, USA', category: 'Payment Network' },
      { name: 'American Express', url: 'https://www.americanexpress.com', description: 'Financial services and cards', founded: '1850', headquarters: 'New York, NY, USA', category: 'Financial Services' }
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Top online shopping and marketplace platforms',
    icon: '🛒',
    gradient: 'from-orange-500 to-red-500',
    longDescription: 'E-commerce continues to reshape global retail with innovations in logistics, personalization, and social commerce. The industry is expanding rapidly in emerging markets while established players invest heavily in same-day delivery and AI-driven recommendations.',
    marketSize: '$6.3 trillion (2024)',
    growthRate: '9.4% CAGR',
    trendKeywords: ['Social Commerce', 'Same-Day Delivery', 'Live Shopping', 'Recommerce', 'Headless Commerce'],
    websites: [
      { name: 'Amazon', url: 'https://www.amazon.com', description: 'Online marketplace and retail', founded: '1994', headquarters: 'Seattle, WA, USA', category: 'Online Marketplace' },
      { name: 'Alibaba', url: 'https://www.alibaba.com', description: 'B2B e-commerce platform', founded: '1999', headquarters: 'Hangzhou, China', category: 'B2B Marketplace' },
      { name: 'eBay', url: 'https://www.ebay.com', description: 'Online auction and shopping', founded: '1995', headquarters: 'San Jose, CA, USA', category: 'Online Auction' },
      { name: 'Walmart', url: 'https://www.walmart.com', description: 'Retail and e-commerce', founded: '1962', headquarters: 'Bentonville, AR, USA', category: 'Omnichannel Retail' },
      { name: 'Rakuten', url: 'https://www.rakuten.com', description: 'E-commerce and internet services', founded: '1997', headquarters: 'Tokyo, Japan', category: 'Online Marketplace' },
      { name: 'JD.com', url: 'https://www.jd.com', description: 'Online retailer', founded: '1998', headquarters: 'Beijing, China', category: 'Online Retail' },
      { name: 'Shopify', url: 'https://www.shopify.com', description: 'E-commerce platform', founded: '2006', headquarters: 'Ottawa, Canada', category: 'E-commerce Platform' },
      { name: 'AliExpress', url: 'https://www.aliexpress.com', description: 'Online retail service', founded: '2010', headquarters: 'Hangzhou, China', category: 'Cross-border Retail' },
      { name: 'Etsy', url: 'https://www.etsy.com', description: 'Handmade and vintage marketplace', founded: '2005', headquarters: 'Brooklyn, NY, USA', category: 'Niche Marketplace' },
      { name: 'Target', url: 'https://www.target.com', description: 'Retail and online shopping', founded: '1902', headquarters: 'Minneapolis, MN, USA', category: 'Omnichannel Retail' }
    ]
  },
  {
    id: 'social-media',
    name: 'Social Media',
    description: 'Leading social networking and content platforms',
    icon: '📱',
    gradient: 'from-pink-500 to-purple-500',
    longDescription: 'Social media platforms connect billions of users worldwide and serve as major advertising channels. The industry is evolving toward short-form video, creator monetization, and decentralized social networking.',
    marketSize: '$230 billion (2024)',
    growthRate: '11.2% CAGR',
    trendKeywords: ['Creator Economy', 'Short-Form Video', 'Social Commerce', 'Decentralized Social', 'AI Content'],
    websites: [
      { name: 'Facebook', url: 'https://www.facebook.com', description: 'Social networking platform', founded: '2004', headquarters: 'Menlo Park, CA, USA', category: 'Social Network' },
      { name: 'YouTube', url: 'https://www.youtube.com', description: 'Video sharing platform', founded: '2005', headquarters: 'San Bruno, CA, USA', category: 'Video Sharing' },
      { name: 'Instagram', url: 'https://www.instagram.com', description: 'Photo and video sharing', founded: '2010', headquarters: 'Menlo Park, CA, USA', category: 'Photo Sharing' },
      { name: 'Twitter (X)', url: 'https://www.twitter.com', description: 'Microblogging and news', founded: '2006', headquarters: 'San Francisco, CA, USA', category: 'Microblogging' },
      { name: 'TikTok', url: 'https://www.tiktok.com', description: 'Short-form video platform', founded: '2016', headquarters: 'Los Angeles, CA, USA', category: 'Short-Form Video' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com', description: 'Professional networking', founded: '2002', headquarters: 'Sunnyvale, CA, USA', category: 'Professional Network' },
      { name: 'Reddit', url: 'https://www.reddit.com', description: 'Social news and discussion', founded: '2005', headquarters: 'San Francisco, CA, USA', category: 'Discussion Forum' },
      { name: 'Pinterest', url: 'https://www.pinterest.com', description: 'Visual discovery platform', founded: '2010', headquarters: 'San Francisco, CA, USA', category: 'Visual Discovery' },
      { name: 'Snapchat', url: 'https://www.snapchat.com', description: 'Messaging and multimedia', founded: '2011', headquarters: 'Santa Monica, CA, USA', category: 'Messaging' },
      { name: 'WhatsApp', url: 'https://www.whatsapp.com', description: 'Messaging application', founded: '2009', headquarters: 'Menlo Park, CA, USA', category: 'Messaging' }
    ]
  },
  {
    id: 'streaming',
    name: 'Streaming Services',
    description: 'Top video and audio streaming platforms',
    icon: '🎬',
    gradient: 'from-red-500 to-rose-500',
    longDescription: 'Streaming services have fundamentally disrupted traditional media and entertainment distribution. The market is maturing with ad-supported tiers, live sports rights, and global content localization becoming key competitive differentiators.',
    marketSize: '$550 billion (2024)',
    growthRate: '10.4% CAGR',
    trendKeywords: ['Ad-Supported Streaming', 'Live Sports', 'Content Bundling', 'Spatial Audio', 'Interactive Media'],
    websites: [
      { name: 'Netflix', url: 'https://www.netflix.com', description: 'Video streaming service', founded: '1997', headquarters: 'Los Gatos, CA, USA', category: 'Video Streaming' },
      { name: 'Disney+', url: 'https://www.disneyplus.com', description: 'Streaming entertainment', founded: '2019', headquarters: 'Burbank, CA, USA', category: 'Video Streaming' },
      { name: 'Amazon Prime Video', url: 'https://www.primevideo.com', description: 'Video on demand', founded: '2006', headquarters: 'Seattle, WA, USA', category: 'Video Streaming' },
      { name: 'Hulu', url: 'https://www.hulu.com', description: 'Streaming TV and movies', founded: '2007', headquarters: 'Santa Monica, CA, USA', category: 'Video Streaming' },
      { name: 'HBO Max', url: 'https://www.hbomax.com', description: 'Premium streaming', founded: '2020', headquarters: 'New York, NY, USA', category: 'Premium Streaming' },
      { name: 'Spotify', url: 'https://www.spotify.com', description: 'Music streaming service', founded: '2006', headquarters: 'Stockholm, Sweden', category: 'Music Streaming' },
      { name: 'Apple TV+', url: 'https://tv.apple.com', description: 'Original content streaming', founded: '2019', headquarters: 'Cupertino, CA, USA', category: 'Video Streaming' },
      { name: 'Twitch', url: 'https://www.twitch.tv', description: 'Live streaming platform', founded: '2011', headquarters: 'San Francisco, CA, USA', category: 'Live Streaming' },
      { name: 'Paramount+', url: 'https://www.paramountplus.com', description: 'Streaming service', founded: '2021', headquarters: 'New York, NY, USA', category: 'Video Streaming' },
      { name: 'Peacock', url: 'https://www.peacocktv.com', description: 'NBC streaming platform', founded: '2020', headquarters: 'New York, NY, USA', category: 'Video Streaming' }
    ]
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Online learning platforms and educational institutions',
    icon: '📚',
    gradient: 'from-teal-500 to-cyan-500',
    longDescription: 'The education technology sector has exploded with online learning, micro-credentials, and AI-powered tutoring transforming how knowledge is delivered. Universities and edtech startups alike are embracing hybrid models to reach global audiences.',
    marketSize: '$400 billion (2024)',
    growthRate: '13.6% CAGR',
    trendKeywords: ['EdTech', 'Micro-Credentials', 'AI Tutoring', 'Hybrid Learning', 'Lifelong Learning'],
    websites: [
      { name: 'Coursera', url: 'https://www.coursera.org', description: 'Online courses from top universities', founded: '2012', headquarters: 'Mountain View, CA, USA', category: 'Online Learning' },
      { name: 'edX', url: 'https://www.edx.org', description: 'Open online courses platform', founded: '2012', headquarters: 'Cambridge, MA, USA', category: 'Online Learning' },
      { name: 'Khan Academy', url: 'https://www.khanacademy.org', description: 'Free educational resources', founded: '2008', headquarters: 'Mountain View, CA, USA', category: 'Free Education' },
      { name: 'Udemy', url: 'https://www.udemy.com', description: 'Marketplace for online courses', founded: '2010', headquarters: 'San Francisco, CA, USA', category: 'Course Marketplace' },
      { name: 'Duolingo', url: 'https://www.duolingo.com', description: 'Language learning platform', founded: '2011', headquarters: 'Pittsburgh, PA, USA', category: 'Language Learning' },
      { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning', description: 'Professional skill development', founded: '1995', headquarters: 'Carpinteria, CA, USA', category: 'Professional Training' },
      { name: 'Udacity', url: 'https://www.udacity.com', description: 'Tech-focused nanodegree programs', founded: '2011', headquarters: 'Mountain View, CA, USA', category: 'Tech Education' },
      { name: 'Skillshare', url: 'https://www.skillshare.com', description: 'Creative skills community', founded: '2010', headquarters: 'New York, NY, USA', category: 'Creative Learning' },
      { name: 'Pluralsight', url: 'https://www.pluralsight.com', description: 'Technology skills platform', founded: '2004', headquarters: 'Draper, UT, USA', category: 'Tech Training' },
      { name: 'Codecademy', url: 'https://www.codecademy.com', description: 'Interactive coding education', founded: '2011', headquarters: 'New York, NY, USA', category: 'Coding Education' }
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Leading automotive manufacturers and mobility companies',
    icon: '🚗',
    gradient: 'from-slate-500 to-zinc-500',
    longDescription: 'The automotive industry is undergoing a historic transformation driven by electric vehicles, autonomous driving, and connected car technologies. Legacy automakers and new entrants are racing to electrify their fleets while software-defined vehicles reshape the ownership experience.',
    marketSize: '$3.5 trillion (2024)',
    growthRate: '6.7% CAGR',
    trendKeywords: ['Electric Vehicles', 'Autonomous Driving', 'Connected Cars', 'Battery Tech', 'Mobility-as-a-Service'],
    websites: [
      { name: 'Tesla', url: 'https://www.tesla.com', description: 'Electric vehicles and clean energy', founded: '2003', headquarters: 'Austin, TX, USA', category: 'Electric Vehicles' },
      { name: 'Toyota', url: 'https://www.toyota.com', description: 'Global automotive manufacturer', founded: '1937', headquarters: 'Toyota City, Japan', category: 'Auto Manufacturer' },
      { name: 'BMW', url: 'https://www.bmw.com', description: 'Luxury vehicles and motorcycles', founded: '1916', headquarters: 'Munich, Germany', category: 'Luxury Auto' },
      { name: 'Mercedes-Benz', url: 'https://www.mercedes-benz.com', description: 'Premium automobiles and trucks', founded: '1926', headquarters: 'Stuttgart, Germany', category: 'Luxury Auto' },
      { name: 'Ford', url: 'https://www.ford.com', description: 'Automobiles and commercial vehicles', founded: '1903', headquarters: 'Dearborn, MI, USA', category: 'Auto Manufacturer' },
      { name: 'Volkswagen', url: 'https://www.volkswagen.com', description: 'Global vehicle manufacturer', founded: '1937', headquarters: 'Wolfsburg, Germany', category: 'Auto Manufacturer' },
      { name: 'Rivian', url: 'https://www.rivian.com', description: 'Electric adventure vehicles', founded: '2009', headquarters: 'Irvine, CA, USA', category: 'Electric Vehicles' },
      { name: 'Hyundai', url: 'https://www.hyundai.com', description: 'Automobiles and mobility solutions', founded: '1967', headquarters: 'Seoul, South Korea', category: 'Auto Manufacturer' },
      { name: 'General Motors', url: 'https://www.gm.com', description: 'Automotive and mobility company', founded: '1908', headquarters: 'Detroit, MI, USA', category: 'Auto Manufacturer' },
      { name: 'Lucid Motors', url: 'https://www.lucidmotors.com', description: 'Luxury electric vehicles', founded: '2007', headquarters: 'Newark, CA, USA', category: 'Electric Vehicles' }
    ]
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Video game platforms, studios, and gaming services',
    icon: '🎮',
    gradient: 'from-violet-500 to-fuchsia-500',
    longDescription: 'The gaming industry has surpassed film and music combined in revenue, driven by mobile gaming, cloud gaming, and esports. Cross-platform play and free-to-play models are expanding the global gaming audience to over three billion players.',
    marketSize: '$250 billion (2024)',
    growthRate: '9.3% CAGR',
    trendKeywords: ['Cloud Gaming', 'Esports', 'Cross-Platform', 'Game-as-a-Service', 'VR Gaming'],
    websites: [
      { name: 'Steam', url: 'https://store.steampowered.com', description: 'PC gaming distribution platform', founded: '2003', headquarters: 'Bellevue, WA, USA', category: 'Game Distribution' },
      { name: 'PlayStation', url: 'https://www.playstation.com', description: 'Console gaming platform', founded: '1994', headquarters: 'San Mateo, CA, USA', category: 'Console Gaming' },
      { name: 'Xbox', url: 'https://www.xbox.com', description: 'Gaming consoles and services', founded: '2001', headquarters: 'Redmond, WA, USA', category: 'Console Gaming' },
      { name: 'Nintendo', url: 'https://www.nintendo.com', description: 'Gaming consoles and software', founded: '1889', headquarters: 'Kyoto, Japan', category: 'Console Gaming' },
      { name: 'Epic Games', url: 'https://www.epicgames.com', description: 'Game development and publishing', founded: '1991', headquarters: 'Cary, NC, USA', category: 'Game Publisher' },
      { name: 'Riot Games', url: 'https://www.riotgames.com', description: 'Competitive gaming and esports', founded: '2006', headquarters: 'Los Angeles, CA, USA', category: 'Esports' },
      { name: 'EA', url: 'https://www.ea.com', description: 'Interactive entertainment software', founded: '1982', headquarters: 'Redwood City, CA, USA', category: 'Game Publisher' },
      { name: 'Ubisoft', url: 'https://www.ubisoft.com', description: 'Game development and publishing', founded: '1986', headquarters: 'Montreuil, France', category: 'Game Publisher' },
      { name: 'Roblox', url: 'https://www.roblox.com', description: 'User-generated gaming platform', founded: '2004', headquarters: 'San Mateo, CA, USA', category: 'Gaming Platform' },
      { name: 'Activision Blizzard', url: 'https://www.activisionblizzard.com', description: 'Gaming and interactive entertainment', founded: '2008', headquarters: 'Santa Monica, CA, USA', category: 'Game Publisher' }
    ]
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    description: 'AI research labs, platforms, and intelligent solutions',
    icon: '🤖',
    gradient: 'from-emerald-500 to-teal-500',
    longDescription: 'Artificial intelligence is transforming every industry through large language models, computer vision, and autonomous systems. The sector is experiencing unprecedented investment as foundation models enable new applications in healthcare, science, and creative work.',
    marketSize: '$200 billion (2024)',
    growthRate: '36.6% CAGR',
    trendKeywords: ['Large Language Models', 'Foundation Models', 'AI Safety', 'MLOps', 'Autonomous Agents'],
    websites: [
      { name: 'OpenAI', url: 'https://www.openai.com', description: 'AI research and deployment lab', founded: '2015', headquarters: 'San Francisco, CA, USA', category: 'AI Research' },
      { name: 'DeepMind', url: 'https://deepmind.google', description: 'AI research laboratory', founded: '2010', headquarters: 'London, UK', category: 'AI Research' },
      { name: 'Anthropic', url: 'https://www.anthropic.com', description: 'AI safety and research company', founded: '2021', headquarters: 'San Francisco, CA, USA', category: 'AI Safety' },
      { name: 'Hugging Face', url: 'https://huggingface.co', description: 'Open-source ML model hub', founded: '2016', headquarters: 'New York, NY, USA', category: 'ML Platform' },
      { name: 'NVIDIA AI', url: 'https://www.nvidia.com/en-us/ai', description: 'AI computing hardware and software', founded: '1993', headquarters: 'Santa Clara, CA, USA', category: 'AI Hardware' },
      { name: 'Cohere', url: 'https://cohere.com', description: 'Enterprise AI language models', founded: '2019', headquarters: 'Toronto, Canada', category: 'Enterprise AI' },
      { name: 'Stability AI', url: 'https://stability.ai', description: 'Open generative AI models', founded: '2019', headquarters: 'London, UK', category: 'Generative AI' },
      { name: 'Midjourney', url: 'https://www.midjourney.com', description: 'AI image generation platform', founded: '2021', headquarters: 'San Francisco, CA, USA', category: 'Generative AI' },
      { name: 'Scale AI', url: 'https://scale.com', description: 'Data platform for AI training', founded: '2016', headquarters: 'San Francisco, CA, USA', category: 'AI Data Platform' },
      { name: 'Databricks', url: 'https://www.databricks.com', description: 'Data and AI lakehouse platform', founded: '2013', headquarters: 'San Francisco, CA, USA', category: 'Data & AI Platform' }
    ]
  },
  {
    id: 'energy',
    name: 'Energy',
    description: 'Major energy companies and renewable energy innovators',
    icon: '⚡',
    gradient: 'from-amber-500 to-yellow-500',
    longDescription: 'The energy industry is in a pivotal transition from fossil fuels to renewables, with solar, wind, and battery storage scaling rapidly. Government incentives and corporate sustainability commitments are accelerating the global shift toward clean energy infrastructure.',
    marketSize: '$8.0 trillion (2024)',
    growthRate: '7.1% CAGR',
    trendKeywords: ['Renewable Energy', 'Battery Storage', 'Green Hydrogen', 'Carbon Capture', 'Smart Grid'],
    websites: [
      { name: 'NextEra Energy', url: 'https://www.nexteraenergy.com', description: 'Renewable energy generation leader', founded: '1925', headquarters: 'Juno Beach, FL, USA', category: 'Renewable Energy' },
      { name: 'Tesla Energy', url: 'https://www.tesla.com/energy', description: 'Solar and energy storage products', founded: '2003', headquarters: 'Austin, TX, USA', category: 'Energy Storage' },
      { name: 'ExxonMobil', url: 'https://www.exxonmobil.com', description: 'Oil and gas multinational', founded: '1999', headquarters: 'Spring, TX, USA', category: 'Oil & Gas' },
      { name: 'Shell', url: 'https://www.shell.com', description: 'Global energy and petrochemical', founded: '1907', headquarters: 'London, UK', category: 'Oil & Gas' },
      { name: 'Enphase Energy', url: 'https://www.enphase.com', description: 'Solar microinverter technology', founded: '2006', headquarters: 'Fremont, CA, USA', category: 'Solar Technology' },
      { name: 'Vestas', url: 'https://www.vestas.com', description: 'Wind turbine manufacturer', founded: '1945', headquarters: 'Aarhus, Denmark', category: 'Wind Energy' },
      { name: 'First Solar', url: 'https://www.firstsolar.com', description: 'Thin-film solar panel manufacturer', founded: '1999', headquarters: 'Tempe, AZ, USA', category: 'Solar Technology' },
      { name: 'BP', url: 'https://www.bp.com', description: 'Energy company in transition', founded: '1909', headquarters: 'London, UK', category: 'Oil & Gas' },
      { name: 'Siemens Energy', url: 'https://www.siemens-energy.com', description: 'Energy technology and services', founded: '2020', headquarters: 'Munich, Germany', category: 'Energy Technology' },
      { name: 'SunPower', url: 'https://www.sunpower.com', description: 'Residential solar energy systems', founded: '1985', headquarters: 'Richmond, CA, USA', category: 'Solar Technology' }
    ]
  },
  {
    id: 'aerospace',
    name: 'Aerospace',
    description: 'Aerospace manufacturers and space exploration companies',
    icon: '🚀',
    gradient: 'from-sky-500 to-blue-500',
    longDescription: 'The aerospace sector encompasses commercial aviation, defense systems, and the rapidly growing space economy. Private space companies are driving down launch costs while satellite constellations enable global broadband and Earth observation.',
    marketSize: '$900 billion (2024)',
    growthRate: '5.8% CAGR',
    trendKeywords: ['Space Economy', 'Satellite Internet', 'Urban Air Mobility', 'Sustainable Aviation', 'Hypersonic Flight'],
    websites: [
      { name: 'SpaceX', url: 'https://www.spacex.com', description: 'Spacecraft and launch services', founded: '2002', headquarters: 'Hawthorne, CA, USA', category: 'Space Launch' },
      { name: 'Boeing', url: 'https://www.boeing.com', description: 'Aerospace and defense manufacturer', founded: '1916', headquarters: 'Arlington, VA, USA', category: 'Aerospace Manufacturing' },
      { name: 'Airbus', url: 'https://www.airbus.com', description: 'Commercial aircraft manufacturer', founded: '1970', headquarters: 'Leiden, Netherlands', category: 'Aircraft Manufacturing' },
      { name: 'Lockheed Martin', url: 'https://www.lockheedmartin.com', description: 'Defense and aerospace technology', founded: '1995', headquarters: 'Bethesda, MD, USA', category: 'Defense Aerospace' },
      { name: 'NASA', url: 'https://www.nasa.gov', description: 'US space and aeronautics agency', founded: '1958', headquarters: 'Washington, DC, USA', category: 'Space Agency' },
      { name: 'Blue Origin', url: 'https://www.blueorigin.com', description: 'Space launch and tourism', founded: '2000', headquarters: 'Kent, WA, USA', category: 'Space Launch' },
      { name: 'Northrop Grumman', url: 'https://www.northropgrumman.com', description: 'Aerospace and defense systems', founded: '1994', headquarters: 'Falls Church, VA, USA', category: 'Defense Aerospace' },
      { name: 'Raytheon', url: 'https://www.rtx.com', description: 'Aerospace and defense conglomerate', founded: '1922', headquarters: 'Arlington, VA, USA', category: 'Defense Aerospace' },
      { name: 'Rocket Lab', url: 'https://www.rocketlabusa.com', description: 'Small satellite launch provider', founded: '2006', headquarters: 'Long Beach, CA, USA', category: 'Space Launch' },
      { name: 'Virgin Galactic', url: 'https://www.virgingalactic.com', description: 'Space tourism and research', founded: '2004', headquarters: 'Tustin, CA, USA', category: 'Space Tourism' }
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Real estate platforms and property technology companies',
    icon: '🏠',
    gradient: 'from-lime-500 to-green-500',
    longDescription: 'The real estate industry is being transformed by proptech platforms that digitize property search, transactions, and management. Data analytics and virtual tours are reshaping how properties are marketed, while institutional investment in residential housing continues to grow.',
    marketSize: '$3.9 trillion (2024)',
    growthRate: '5.5% CAGR',
    trendKeywords: ['PropTech', 'Virtual Tours', 'iBuying', 'Smart Buildings', 'Fractional Ownership'],
    websites: [
      { name: 'Zillow', url: 'https://www.zillow.com', description: 'Real estate marketplace and data', founded: '2006', headquarters: 'Seattle, WA, USA', category: 'Property Marketplace' },
      { name: 'Redfin', url: 'https://www.redfin.com', description: 'Technology-powered real estate', founded: '2004', headquarters: 'Seattle, WA, USA', category: 'Real Estate Brokerage' },
      { name: 'Realtor.com', url: 'https://www.realtor.com', description: 'Property listings and resources', founded: '1996', headquarters: 'Santa Clara, CA, USA', category: 'Property Listings' },
      { name: 'Compass', url: 'https://www.compass.com', description: 'Real estate technology brokerage', founded: '2012', headquarters: 'New York, NY, USA', category: 'Real Estate Brokerage' },
      { name: 'Opendoor', url: 'https://www.opendoor.com', description: 'Instant home buying platform', founded: '2014', headquarters: 'San Francisco, CA, USA', category: 'iBuying' },
      { name: 'Trulia', url: 'https://www.trulia.com', description: 'Neighborhood and home search', founded: '2005', headquarters: 'San Francisco, CA, USA', category: 'Property Search' },
      { name: 'CoStar Group', url: 'https://www.costar.com', description: 'Commercial real estate analytics', founded: '1987', headquarters: 'Washington, DC, USA', category: 'Commercial RE Data' },
      { name: 'Apartments.com', url: 'https://www.apartments.com', description: 'Apartment rental marketplace', founded: '1992', headquarters: 'Atlanta, GA, USA', category: 'Rental Marketplace' },
      { name: 'CBRE', url: 'https://www.cbre.com', description: 'Commercial real estate services', founded: '1906', headquarters: 'Dallas, TX, USA', category: 'Commercial RE Services' },
      { name: 'Matterport', url: 'https://matterport.com', description: '3D virtual tour technology', founded: '2011', headquarters: 'Sunnyvale, CA, USA', category: 'Virtual Tour Tech' }
    ]
  },
  {
    id: 'food-beverage',
    name: 'Food & Beverage',
    description: 'Major food brands, restaurants, and delivery platforms',
    icon: '🍔',
    gradient: 'from-rose-500 to-pink-500',
    longDescription: 'The food and beverage industry is evolving with ghost kitchens, plant-based alternatives, and on-demand delivery reshaping consumer habits. Sustainability and supply chain transparency are becoming critical differentiators for brands worldwide.',
    marketSize: '$8.9 trillion (2024)',
    growthRate: '5.1% CAGR',
    trendKeywords: ['Ghost Kitchens', 'Plant-Based Foods', 'Food Delivery', 'Sustainable Packaging', 'Personalized Nutrition'],
    websites: [
      { name: 'DoorDash', url: 'https://www.doordash.com', description: 'Food delivery marketplace', founded: '2013', headquarters: 'San Francisco, CA, USA', category: 'Food Delivery' },
      { name: 'Uber Eats', url: 'https://www.ubereats.com', description: 'On-demand food delivery', founded: '2014', headquarters: 'San Francisco, CA, USA', category: 'Food Delivery' },
      { name: "McDonald's", url: 'https://www.mcdonalds.com', description: 'Global fast food restaurant chain', founded: '1955', headquarters: 'Chicago, IL, USA', category: 'Fast Food' },
      { name: 'Starbucks', url: 'https://www.starbucks.com', description: 'Coffeehouse chain worldwide', founded: '1971', headquarters: 'Seattle, WA, USA', category: 'Coffee & Beverages' },
      { name: 'Nestlé', url: 'https://www.nestle.com', description: 'Global food and beverage company', founded: '1866', headquarters: 'Vevey, Switzerland', category: 'Food Conglomerate' },
      { name: 'PepsiCo', url: 'https://www.pepsico.com', description: 'Beverages and snack foods', founded: '1965', headquarters: 'Purchase, NY, USA', category: 'Beverages & Snacks' },
      { name: 'Coca-Cola', url: 'https://www.coca-cola.com', description: 'Beverage manufacturing company', founded: '1892', headquarters: 'Atlanta, GA, USA', category: 'Beverages' },
      { name: 'Grubhub', url: 'https://www.grubhub.com', description: 'Online food ordering platform', founded: '2004', headquarters: 'Chicago, IL, USA', category: 'Food Delivery' },
      { name: 'Beyond Meat', url: 'https://www.beyondmeat.com', description: 'Plant-based meat alternatives', founded: '2009', headquarters: 'El Segundo, CA, USA', category: 'Plant-Based Food' },
      { name: 'Chipotle', url: 'https://www.chipotle.com', description: 'Fast-casual Mexican restaurant', founded: '1993', headquarters: 'Newport Beach, CA, USA', category: 'Fast Casual' }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Leading cybersecurity companies protecting digital infrastructure worldwide',
    icon: '🔒',
    gradient: 'from-red-600 to-orange-500',
    longDescription: 'The cybersecurity industry defends organizations against an ever-growing wave of cyber threats, ransomware, and state-sponsored attacks. Zero Trust architecture, extended detection and response (XDR), and AI-driven threat intelligence are redefining how enterprises secure their networks, endpoints, and identities.',
    marketSize: '$200 billion (2024)',
    growthRate: '12.4% CAGR',
    trendKeywords: ['Zero Trust', 'XDR', 'SASE', 'Threat Intelligence', 'Identity Security'],
    websites: [
      { name: 'CrowdStrike', url: 'https://www.crowdstrike.com', description: 'Cloud-native endpoint security platform', founded: '2011', headquarters: 'Austin, TX, USA', category: 'Endpoint Security' },
      { name: 'Palo Alto Networks', url: 'https://www.paloaltonetworks.com', description: 'Next-generation firewall and SASE solutions', founded: '2005', headquarters: 'Santa Clara, CA, USA', category: 'Network Security' },
      { name: 'Fortinet', url: 'https://www.fortinet.com', description: 'Integrated network security and SD-WAN', founded: '2000', headquarters: 'Sunnyvale, CA, USA', category: 'Network Security' },
      { name: 'Cloudflare', url: 'https://www.cloudflare.com', description: 'Web performance and security platform', founded: '2009', headquarters: 'San Francisco, CA, USA', category: 'Web Security' },
      { name: 'Zscaler', url: 'https://www.zscaler.com', description: 'Zero Trust cloud security platform', founded: '2007', headquarters: 'San Jose, CA, USA', category: 'Cloud Security' },
      { name: 'SentinelOne', url: 'https://www.sentinelone.com', description: 'AI-powered endpoint and cloud security', founded: '2013', headquarters: 'Mountain View, CA, USA', category: 'Endpoint Security' },
      { name: 'Okta', url: 'https://www.okta.com', description: 'Identity and access management platform', founded: '2009', headquarters: 'San Francisco, CA, USA', category: 'Identity Security' },
      { name: 'Check Point', url: 'https://www.checkpoint.com', description: 'Cyber security solutions for networks and cloud', founded: '1993', headquarters: 'Tel Aviv, Israel', category: 'Network Security' },
      { name: 'Splunk', url: 'https://www.splunk.com', description: 'Security information and event management', founded: '2003', headquarters: 'San Francisco, CA, USA', category: 'SIEM' },
      { name: 'NortonLifeLock', url: 'https://www.nortonlifelock.com', description: 'Consumer cybersecurity and identity protection', founded: '1982', headquarters: 'Tempe, AZ, USA', category: 'Consumer Security' }
    ]
  },
  {
    id: 'blockchain-web3',
    name: 'Blockchain & Web3',
    description: 'Decentralized finance, blockchain protocols, and Web3 platforms',
    icon: '⛓️',
    gradient: 'from-purple-600 to-blue-500',
    longDescription: 'The blockchain and Web3 ecosystem is redefining ownership, finance, and digital identity through decentralized protocols. DeFi platforms, NFT marketplaces, and Layer-2 scaling solutions are driving mainstream adoption while DAOs and tokenization unlock new governance and economic models.',
    marketSize: '$70 billion (2024)',
    growthRate: '56.3% CAGR',
    trendKeywords: ['DeFi', 'NFT', 'Layer 2', 'DAOs', 'Tokenization'],
    websites: [
      { name: 'Ethereum', url: 'https://ethereum.org', description: 'Decentralized smart contract blockchain platform', founded: '2015', headquarters: 'Zug, Switzerland', category: 'Blockchain Protocol' },
      { name: 'Coinbase', url: 'https://www.coinbase.com', description: 'Cryptocurrency exchange and wallet platform', founded: '2012', headquarters: 'San Francisco, CA, USA', category: 'Crypto Exchange' },
      { name: 'Binance', url: 'https://www.binance.com', description: 'World\'s largest cryptocurrency exchange', founded: '2017', headquarters: 'Cayman Islands', category: 'Crypto Exchange' },
      { name: 'Solana', url: 'https://solana.com', description: 'High-performance blockchain for DApps', founded: '2020', headquarters: 'San Francisco, CA, USA', category: 'Blockchain Protocol' },
      { name: 'Polygon', url: 'https://polygon.technology', description: 'Ethereum Layer-2 scaling solutions', founded: '2017', headquarters: 'Dubai, UAE', category: 'Layer 2' },
      { name: 'Chainlink', url: 'https://chain.link', description: 'Decentralized oracle network for smart contracts', founded: '2017', headquarters: 'Grand Cayman, Cayman Islands', category: 'Oracle Network' },
      { name: 'Uniswap', url: 'https://uniswap.org', description: 'Decentralized token exchange protocol', founded: '2018', headquarters: 'New York, NY, USA', category: 'DeFi' },
      { name: 'OpenSea', url: 'https://opensea.io', description: 'Largest NFT marketplace', founded: '2017', headquarters: 'New York, NY, USA', category: 'NFT Marketplace' },
      { name: 'Aave', url: 'https://aave.com', description: 'Decentralized lending and borrowing protocol', founded: '2017', headquarters: 'London, UK', category: 'DeFi' },
      { name: 'ConsenSys', url: 'https://consensys.io', description: 'Ethereum software and infrastructure company', founded: '2014', headquarters: 'New York, NY, USA', category: 'Blockchain Infrastructure' }
    ]
  },
  {
    id: 'robotics-iot',
    name: 'Robotics & IoT',
    description: 'Industrial robotics, smart devices, and Internet of Things platforms',
    icon: '🦾',
    gradient: 'from-cyan-500 to-blue-600',
    longDescription: 'The robotics and IoT industry is transforming manufacturing, logistics, and everyday life through intelligent automation and connected devices. Humanoid robots, collaborative arms, and edge AI are converging with billions of IoT sensors to create smart factories, cities, and homes.',
    marketSize: '$150 billion (2024)',
    growthRate: '25.4% CAGR',
    trendKeywords: ['Industrial IoT', 'Humanoid Robots', 'Digital Twin', 'Edge AI', 'Smart Factory'],
    websites: [
      { name: 'Boston Dynamics', url: 'https://bostondynamics.com', description: 'Advanced mobile robot platforms', founded: '1992', headquarters: 'Waltham, MA, USA', category: 'Industrial Robotics' },
      { name: 'iRobot', url: 'https://www.irobot.com', description: 'Consumer and defense robot systems', founded: '1990', headquarters: 'Bedford, MA, USA', category: 'Consumer Robotics' },
      { name: 'ABB Robotics', url: 'https://new.abb.com/products/robotics', description: 'Industrial robots and automation solutions', founded: '1988', headquarters: 'Zürich, Switzerland', category: 'Industrial Robotics' },
      { name: 'Fanuc', url: 'https://www.fanuc.eu', description: 'CNC systems and industrial robots', founded: '1972', headquarters: 'Oshino, Japan', category: 'Industrial Automation' },
      { name: 'Arduino', url: 'https://www.arduino.cc', description: 'Open-source electronics prototyping platform', founded: '2005', headquarters: 'Monza, Italy', category: 'IoT Hardware' },
      { name: 'Raspberry Pi', url: 'https://www.raspberrypi.com', description: 'Low-cost single-board computers for IoT', founded: '2012', headquarters: 'Cambridge, UK', category: 'IoT Hardware' },
      { name: 'Siemens IoT', url: 'https://www.siemens.com/iot', description: 'Industrial IoT and digital factory solutions', founded: '1847', headquarters: 'Munich, Germany', category: 'Industrial IoT' },
      { name: 'AWS IoT', url: 'https://aws.amazon.com/iot', description: 'Cloud IoT services and device management', founded: '2015', headquarters: 'Seattle, WA, USA', category: 'Cloud IoT' },
      { name: 'Bosch IoT', url: 'https://www.bosch-iot-suite.com', description: 'IoT platform and connected solutions', founded: '1886', headquarters: 'Stuttgart, Germany', category: 'Industrial IoT' },
      { name: 'Ubiquiti', url: 'https://www.ui.com', description: 'Networking and IoT infrastructure solutions', founded: '2003', headquarters: 'New York, NY, USA', category: 'Network IoT' }
    ]
  },
  {
    id: 'media-entertainment',
    name: 'Media & Entertainment',
    description: 'Digital publishing, news media, and entertainment content platforms',
    icon: '🎭',
    gradient: 'from-fuchsia-500 to-pink-600',
    longDescription: 'The media and entertainment industry is undergoing a profound digital transformation with the rise of streaming, podcasts, and creator-driven platforms. AI-assisted journalism, paywall innovation, and immersive experiences are reshaping how audiences discover and consume content globally.',
    marketSize: '$2.5 trillion (2024)',
    growthRate: '6.8% CAGR',
    trendKeywords: ['Digital Publishing', 'Podcast Boom', 'AI Journalism', 'Creator Tools', 'Paywall Innovation'],
    websites: [
      { name: 'The New York Times', url: 'https://www.nytimes.com', description: 'Global news and digital media publisher', founded: '1851', headquarters: 'New York, NY, USA', category: 'News Media' },
      { name: 'Bloomberg', url: 'https://www.bloomberg.com', description: 'Financial news and data media company', founded: '1981', headquarters: 'New York, NY, USA', category: 'Financial Media' },
      { name: 'Reuters', url: 'https://www.reuters.com', description: 'International news agency and content provider', founded: '1851', headquarters: 'London, UK', category: 'News Agency' },
      { name: 'BBC', url: 'https://www.bbc.com', description: 'British public broadcaster and global news', founded: '1922', headquarters: 'London, UK', category: 'Public Broadcasting' },
      { name: 'CNN', url: 'https://www.cnn.com', description: '24-hour cable news network', founded: '1980', headquarters: 'Atlanta, GA, USA', category: 'Cable News' },
      { name: 'Variety', url: 'https://variety.com', description: 'Entertainment industry news and analysis', founded: '1905', headquarters: 'Los Angeles, CA, USA', category: 'Entertainment Media' },
      { name: 'The Verge', url: 'https://www.theverge.com', description: 'Technology and culture news platform', founded: '2011', headquarters: 'New York, NY, USA', category: 'Tech Media' },
      { name: 'TechCrunch', url: 'https://techcrunch.com', description: 'Startup and technology news', founded: '2005', headquarters: 'San Francisco, CA, USA', category: 'Tech Media' },
      { name: 'Vice Media', url: 'https://www.vice.com', description: 'Youth-focused digital media network', founded: '1994', headquarters: 'New York, NY, USA', category: 'Digital Media' },
      { name: 'Condé Nast', url: 'https://www.condenast.com', description: 'Premium magazine and digital content publisher', founded: '1909', headquarters: 'New York, NY, USA', category: 'Magazine Publishing' }
    ]
  },
  {
    id: 'travel',
    name: 'Travel & Hospitality',
    description: 'Travel booking, airlines, and hospitality platforms',
    icon: '✈️',
    gradient: 'from-indigo-500 to-violet-500',
    longDescription: 'The travel and hospitality industry has rebounded strongly with digital-first booking, personalized travel experiences, and sustainable tourism initiatives. Online travel agencies and alternative accommodations continue to gain market share from traditional channels.',
    marketSize: '$1.9 trillion (2024)',
    growthRate: '8.1% CAGR',
    trendKeywords: ['Sustainable Tourism', 'Digital Booking', 'Experiential Travel', 'Bleisure Travel', 'AI Concierge'],
    websites: [
      { name: 'Booking.com', url: 'https://www.booking.com', description: 'Online travel accommodation', founded: '1996', headquarters: 'Amsterdam, Netherlands', category: 'Online Travel Agency' },
      { name: 'Airbnb', url: 'https://www.airbnb.com', description: 'Vacation rental marketplace', founded: '2008', headquarters: 'San Francisco, CA, USA', category: 'Vacation Rentals' },
      { name: 'Expedia', url: 'https://www.expedia.com', description: 'Full-service travel platform', founded: '1996', headquarters: 'Seattle, WA, USA', category: 'Online Travel Agency' },
      { name: 'TripAdvisor', url: 'https://www.tripadvisor.com', description: 'Travel reviews and bookings', founded: '2000', headquarters: 'Needham, MA, USA', category: 'Travel Reviews' },
      { name: 'Marriott', url: 'https://www.marriott.com', description: 'Global hotel and resort chain', founded: '1927', headquarters: 'Bethesda, MD, USA', category: 'Hotels & Resorts' },
      { name: 'Hilton', url: 'https://www.hilton.com', description: 'International hotel brand', founded: '1919', headquarters: 'McLean, VA, USA', category: 'Hotels & Resorts' },
      { name: 'Delta Air Lines', url: 'https://www.delta.com', description: 'Major US airline carrier', founded: '1924', headquarters: 'Atlanta, GA, USA', category: 'Airline' },
      { name: 'United Airlines', url: 'https://www.united.com', description: 'Global airline carrier', founded: '1926', headquarters: 'Chicago, IL, USA', category: 'Airline' },
      { name: 'Kayak', url: 'https://www.kayak.com', description: 'Travel search engine and planner', founded: '2004', headquarters: 'Stamford, CT, USA', category: 'Travel Search' },
      { name: 'Skyscanner', url: 'https://www.skyscanner.com', description: 'Flight and hotel comparison', founded: '2003', headquarters: 'Edinburgh, UK', category: 'Travel Search' }
    ]
  }
];

export function getIndustryById(id: string): Industry | undefined {
  return industries.find(industry => industry.id === id);
}

export function getIndustryIds(): string[] {
  return industries.map(industry => industry.id);
}

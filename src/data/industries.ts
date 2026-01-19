export interface Website {
  name: string;
  url: string;
  description?: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  websites: Website[];
}

export const industries: Industry[] = [
  {
    id: 'technology',
    name: 'Technology',
    description: 'Leading technology companies and platforms shaping the digital world',
    websites: [
      { name: 'Microsoft', url: 'https://www.microsoft.com', description: 'Cloud computing and software solutions' },
      { name: 'Apple', url: 'https://www.apple.com', description: 'Consumer electronics and software' },
      { name: 'Google', url: 'https://www.google.com', description: 'Search engine and internet services' },
      { name: 'GitHub', url: 'https://www.github.com', description: 'Software development and version control' },
      { name: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Developer community and Q&A' },
      { name: 'IBM', url: 'https://www.ibm.com', description: 'Enterprise technology solutions' },
      { name: 'Oracle', url: 'https://www.oracle.com', description: 'Database and cloud solutions' },
      { name: 'Salesforce', url: 'https://www.salesforce.com', description: 'Customer relationship management' },
      { name: 'Adobe', url: 'https://www.adobe.com', description: 'Creative software and digital media' },
      { name: 'SAP', url: 'https://www.sap.com', description: 'Enterprise resource planning software' }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Top healthcare organizations and medical service providers',
    websites: [
      { name: 'Mayo Clinic', url: 'https://www.mayoclinic.org', description: 'Medical care and research' },
      { name: 'Cleveland Clinic', url: 'https://www.clevelandclinic.org', description: 'Medical center and healthcare' },
      { name: 'Johns Hopkins Medicine', url: 'https://www.hopkinsmedicine.org', description: 'Academic medical center' },
      { name: 'WHO', url: 'https://www.who.int', description: 'World Health Organization' },
      { name: 'WebMD', url: 'https://www.webmd.com', description: 'Health information services' },
      { name: 'Pfizer', url: 'https://www.pfizer.com', description: 'Pharmaceutical company' },
      { name: 'Johnson & Johnson', url: 'https://www.jnj.com', description: 'Healthcare and pharmaceutical' },
      { name: 'UnitedHealth Group', url: 'https://www.unitedhealthgroup.com', description: 'Health insurance and services' },
      { name: 'CVS Health', url: 'https://www.cvshealth.com', description: 'Pharmacy and healthcare' },
      { name: 'Kaiser Permanente', url: 'https://www.kaiserpermanente.org', description: 'Integrated healthcare' }
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Leading financial institutions and fintech companies',
    websites: [
      { name: 'JPMorgan Chase', url: 'https://www.jpmorganchase.com', description: 'Banking and financial services' },
      { name: 'Bank of America', url: 'https://www.bankofamerica.com', description: 'Consumer and commercial banking' },
      { name: 'Wells Fargo', url: 'https://www.wellsfargo.com', description: 'Banking and mortgage services' },
      { name: 'Goldman Sachs', url: 'https://www.goldmansachs.com', description: 'Investment banking' },
      { name: 'Morgan Stanley', url: 'https://www.morganstanley.com', description: 'Investment management' },
      { name: 'Citigroup', url: 'https://www.citigroup.com', description: 'Global banking services' },
      { name: 'PayPal', url: 'https://www.paypal.com', description: 'Digital payment platform' },
      { name: 'Visa', url: 'https://www.visa.com', description: 'Payment technology' },
      { name: 'Mastercard', url: 'https://www.mastercard.com', description: 'Payment solutions' },
      { name: 'American Express', url: 'https://www.americanexpress.com', description: 'Financial services and cards' }
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Top online shopping and marketplace platforms',
    websites: [
      { name: 'Amazon', url: 'https://www.amazon.com', description: 'Online marketplace and retail' },
      { name: 'Alibaba', url: 'https://www.alibaba.com', description: 'B2B e-commerce platform' },
      { name: 'eBay', url: 'https://www.ebay.com', description: 'Online auction and shopping' },
      { name: 'Walmart', url: 'https://www.walmart.com', description: 'Retail and e-commerce' },
      { name: 'Rakuten', url: 'https://www.rakuten.com', description: 'E-commerce and internet services' },
      { name: 'JD.com', url: 'https://www.jd.com', description: 'Online retailer' },
      { name: 'Shopify', url: 'https://www.shopify.com', description: 'E-commerce platform' },
      { name: 'AliExpress', url: 'https://www.aliexpress.com', description: 'Online retail service' },
      { name: 'Etsy', url: 'https://www.etsy.com', description: 'Handmade and vintage marketplace' },
      { name: 'Target', url: 'https://www.target.com', description: 'Retail and online shopping' }
    ]
  },
  {
    id: 'social-media',
    name: 'Social Media',
    description: 'Leading social networking and content platforms',
    websites: [
      { name: 'Facebook', url: 'https://www.facebook.com', description: 'Social networking platform' },
      { name: 'YouTube', url: 'https://www.youtube.com', description: 'Video sharing platform' },
      { name: 'Instagram', url: 'https://www.instagram.com', description: 'Photo and video sharing' },
      { name: 'Twitter (X)', url: 'https://www.twitter.com', description: 'Microblogging and news' },
      { name: 'TikTok', url: 'https://www.tiktok.com', description: 'Short-form video platform' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com', description: 'Professional networking' },
      { name: 'Reddit', url: 'https://www.reddit.com', description: 'Social news and discussion' },
      { name: 'Pinterest', url: 'https://www.pinterest.com', description: 'Visual discovery platform' },
      { name: 'Snapchat', url: 'https://www.snapchat.com', description: 'Messaging and multimedia' },
      { name: 'WhatsApp', url: 'https://www.whatsapp.com', description: 'Messaging application' }
    ]
  },
  {
    id: 'streaming',
    name: 'Streaming Services',
    description: 'Top video and audio streaming platforms',
    websites: [
      { name: 'Netflix', url: 'https://www.netflix.com', description: 'Video streaming service' },
      { name: 'Disney+', url: 'https://www.disneyplus.com', description: 'Streaming entertainment' },
      { name: 'Amazon Prime Video', url: 'https://www.primevideo.com', description: 'Video on demand' },
      { name: 'Hulu', url: 'https://www.hulu.com', description: 'Streaming TV and movies' },
      { name: 'HBO Max', url: 'https://www.hbomax.com', description: 'Premium streaming' },
      { name: 'Spotify', url: 'https://www.spotify.com', description: 'Music streaming service' },
      { name: 'Apple TV+', url: 'https://tv.apple.com', description: 'Original content streaming' },
      { name: 'Twitch', url: 'https://www.twitch.tv', description: 'Live streaming platform' },
      { name: 'Paramount+', url: 'https://www.paramountplus.com', description: 'Streaming service' },
      { name: 'Peacock', url: 'https://www.peacocktv.com', description: 'NBC streaming platform' }
    ]
  }
];

export function getIndustryById(id: string): Industry | undefined {
  return industries.find(industry => industry.id === id);
}

export function getIndustryIds(): string[] {
  return industries.map(industry => industry.id);
}

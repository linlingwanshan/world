// Configuration
const MAX_WEBSITES_PER_INDUSTRY = 10;

// Industry data structure
const industries = [
    {
        name: "Search Engines",
        websites: [
            { name: "Google", url: "https://www.google.com" },
            { name: "Bing", url: "https://www.bing.com" },
            { name: "Yahoo", url: "https://www.yahoo.com" },
            { name: "Baidu", url: "https://www.baidu.com" },
            { name: "Yandex", url: "https://www.yandex.com" },
            { name: "DuckDuckGo", url: "https://www.duckduckgo.com" },
            { name: "Ask.com", url: "https://www.ask.com" },
            { name: "Ecosia", url: "https://www.ecosia.org" }
        ]
    },
    {
        name: "E-commerce",
        websites: [
            { name: "Amazon", url: "https://www.amazon.com" },
            { name: "Alibaba", url: "https://www.alibaba.com" },
            { name: "eBay", url: "https://www.ebay.com" },
            { name: "Walmart", url: "https://www.walmart.com" },
            { name: "Rakuten", url: "https://www.rakuten.com" },
            { name: "JD.com", url: "https://www.jd.com" },
            { name: "Shopify", url: "https://www.shopify.com" },
            { name: "AliExpress", url: "https://www.aliexpress.com" },
            { name: "Etsy", url: "https://www.etsy.com" },
            { name: "Target", url: "https://www.target.com" }
        ]
    },
    {
        name: "Social Media",
        websites: [
            { name: "Facebook", url: "https://www.facebook.com" },
            { name: "YouTube", url: "https://www.youtube.com" },
            { name: "Instagram", url: "https://www.instagram.com" },
            { name: "Twitter (X)", url: "https://www.twitter.com" },
            { name: "TikTok", url: "https://www.tiktok.com" },
            { name: "LinkedIn", url: "https://www.linkedin.com" },
            { name: "Reddit", url: "https://www.reddit.com" },
            { name: "Pinterest", url: "https://www.pinterest.com" },
            { name: "Snapchat", url: "https://www.snapchat.com" },
            { name: "WhatsApp", url: "https://www.whatsapp.com" }
        ]
    },
    {
        name: "Technology & Software",
        websites: [
            { name: "Microsoft", url: "https://www.microsoft.com" },
            { name: "Apple", url: "https://www.apple.com" },
            { name: "GitHub", url: "https://www.github.com" },
            { name: "Stack Overflow", url: "https://stackoverflow.com" },
            { name: "IBM", url: "https://www.ibm.com" },
            { name: "Oracle", url: "https://www.oracle.com" },
            { name: "Salesforce", url: "https://www.salesforce.com" },
            { name: "Adobe", url: "https://www.adobe.com" },
            { name: "SAP", url: "https://www.sap.com" },
            { name: "Intel", url: "https://www.intel.com" }
        ]
    },
    {
        name: "News & Media",
        websites: [
            { name: "CNN", url: "https://www.cnn.com" },
            { name: "BBC", url: "https://www.bbc.com" },
            { name: "The New York Times", url: "https://www.nytimes.com" },
            { name: "The Guardian", url: "https://www.theguardian.com" },
            { name: "Reuters", url: "https://www.reuters.com" },
            { name: "Al Jazeera", url: "https://www.aljazeera.com" },
            { name: "Bloomberg", url: "https://www.bloomberg.com" },
            { name: "Forbes", url: "https://www.forbes.com" },
            { name: "The Washington Post", url: "https://www.washingtonpost.com" },
            { name: "Wall Street Journal", url: "https://www.wsj.com" }
        ]
    },
    {
        name: "Streaming Services",
        websites: [
            { name: "Netflix", url: "https://www.netflix.com" },
            { name: "Disney+", url: "https://www.disneyplus.com" },
            { name: "Amazon Prime Video", url: "https://www.primevideo.com" },
            { name: "Hulu", url: "https://www.hulu.com" },
            { name: "HBO Max", url: "https://www.hbomax.com" },
            { name: "Spotify", url: "https://www.spotify.com" },
            { name: "Apple TV+", url: "https://tv.apple.com" },
            { name: "Twitch", url: "https://www.twitch.tv" },
            { name: "Paramount+", url: "https://www.paramountplus.com" },
            { name: "Peacock", url: "https://www.peacocktv.com" }
        ]
    }
];

/**
 * Renders the industry data dynamically into the HTML
 */
function renderIndustries() {
    const container = document.getElementById('industries-container');
    
    if (!container) {
        console.error('Industries container not found');
        return;
    }

    // Clear existing content
    container.innerHTML = '';

    // Create a card for each industry
    industries.forEach(industry => {
        // Create industry card
        const card = document.createElement('div');
        card.className = 'industry-card';

        // Create industry title
        const title = document.createElement('h2');
        title.textContent = industry.name;
        card.appendChild(title);

        // Create website list
        const list = document.createElement('ul');
        list.className = 'website-list';

        // Add each website to the list (limit to top 10)
        industry.websites.slice(0, MAX_WEBSITES_PER_INDUSTRY).forEach((website, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'website-item';

            // Create rank badge
            const rank = document.createElement('span');
            rank.className = 'website-rank';
            rank.textContent = index + 1;

            // Create link
            const link = document.createElement('a');
            link.className = 'website-link';
            link.href = website.url;
            link.textContent = website.name;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';

            listItem.appendChild(rank);
            listItem.appendChild(link);
            list.appendChild(listItem);
        });

        card.appendChild(list);
        container.appendChild(card);
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', renderIndustries);

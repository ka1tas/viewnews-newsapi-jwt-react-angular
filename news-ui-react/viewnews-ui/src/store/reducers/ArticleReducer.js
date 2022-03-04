import * as Constants from '../actions/Constants';

const initialState = {
  isLoading: false,
  searchArticles: [
    {
      "source": {
        "id": "independent",
        "name": "Independent"
      },
      "author": "Jon Stone",
      "title": "Eurostar to let Ukrainian refugees travel to Britain for free on its trains",
      "description": "Channel tunnel high-speed rail operator joins other services around Europe in extending free travel",
      "url": "https://www.independent.co.uk/news/world/europe/ukraine-refugees-eurostar-free-travel-train-b2026688.html",
      "urlToImage": "https://static.independent.co.uk/2022/03/02/11/GettyImages-1230653592.jpg?quality=75&width=1200&auto=webp",
      "publishedAt": "2022-03-02T12:05:02Z",
      "content": "Eurostar is to let Ukrainian refugees fleeing to the UK travel on its trains for free, the company has announced.\r\nThe cross-channel high-speed rail operator joins other carriers around Europe in ext… [+12233 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "PTI",
      "title": "Centre should realise humanity is more important than politics, can lead peace talks: Mamata on Russia-Ukraine crisis",
      "description": "India News: KOLKATA: Asserting that it is the Centre's responsibility to bring back Indians stranded in war-hit Ukraine, West Bengal Chief Minister Mamata Banerje.",
      "url": "https://timesofindia.indiatimes.com/india/centre-should-realise-humanity-is-more-important-than-politics-can-lead-peace-talks-mamata-on-russia-ukraine-crisis/articleshow/89947512.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-89947807,width-1070,height-580,imgsize-51578,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2022-03-02T11:11:26Z",
      "content": "Centre should realise humanity is more important than politics, can lead peace talks: Mamata on Russia-Ukraine crisis\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Centre should realise humanity is mo… [+90 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Business Wire"
      },
      "author": null,
      "title": "India Furniture Markets, Competition, Forecast & Opportunities, FY2027 - ResearchAndMarkets.com",
      "description": "DUBLIN--(BUSINESS WIRE)--The \"India Furniture Market, By Supply (Domestic Vs. Imported), By Organized Vs. Unorganized Market, By Type, By Product Type, By Point of Sale, By Raw Material, By Region, By Leading City, Competition, Forecast & Opportunities, FY202…",
      "url": "https://www.businesswire.com/news/home/20220302005572/en/India-Furniture-Markets-Competition-Forecast-Opportunities-FY2027---ResearchAndMarkets.com",
      "urlToImage": "https://mms.businesswire.com/media/20220302005572/en/1376912/23/logo.jpg",
      "publishedAt": "2022-03-02T10:38:02Z",
      "content": "DUBLIN--(BUSINESS WIRE)--The \"India Furniture Market, By Supply (Domestic Vs. Imported), By Organized Vs. Unorganized Market, By Type, By Product Type, By Point of Sale, By Raw Material, By Region, B… [+4745 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Republic World"
      },
      "author": "Press Trust Of India",
      "title": "Guj ATS arrests man wanted for abduction, killing of Kolkata jeweller",
      "description": "The Gujarat Anti-Terrorist Squad (ATS) has arrested a man, who was wanted for the abduction and murder of a Kolkata-based jeweller, from neighbouring Maharashtra, an official said on Wednesday.",
      "url": "https://www.republicworld.com/india-news/law-and-order/guj-ats-arrests-man-wanted-for-abduction-killing-of-kolkata-jeweller-articleshow.html",
      "urlToImage": "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/d5yahba9f23nlhbp_1646214731.jpeg",
      "publishedAt": "2022-03-02T09:53:00Z",
      "content": "The Gujarat Anti-Terrorist Squad (ATS) has arrested a man, who was wanted for the abduction and murder of a Kolkata-based jeweller, from neighbouring Maharashtra, an official said on Wednesday.\r\nA te… [+1156 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Gaurav Gupta",
      "title": "IPL 2022: Teams to practice at five venues in Mumbai",
      "description": "The forthcoming edition of the IPL will start from March 26 with a game between Chennai Super Kings and Kolkata Knight Riders at the Wankhede Stadium, and end on May 22 (Sunday). There will be 12 double-headers in the league this time.",
      "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2022-teams-to-practice-at-five-venues-in-mumbai/articleshow/89944378.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-89944410,width-1070,height-580,imgsize-56408,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2022-03-02T09:09:19Z",
      "content": "IPL 2022 format explained: 10 teams divided into two groups of five; each team to play 14 gamesThe 2022 Indian Premier League will see a tweak in format as 10 teams will be divided into groups of fiv… [+195 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Vandana Kalra",
      "title": "Delhi: New Art makes public places sparkle with wall paintings",
      "description": "Brainchild of two IIT Delhi alumni, the organisation has been beautifying public places like metro stations, railway stations and universities with hand-painted wall art",
      "url": "https://indianexpress.com/article/cities/delhi/delhi-new-art-makes-public-places-sparkle-with-wall-paintings-7797389/",
      "urlToImage": "https://images.indianexpress.com/2022/03/page-1.jpg",
      "publishedAt": "2022-03-02T09:05:00Z",
      "content": "Located a few metres from Triveni Kala Sangam and Lalit Kala Akademi, Punjab Bhawan might not boast of the same art lineage, but in recent weeks the building has been attracting the attention of pass… [+4494 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Weather Channel"
      },
      "author": null,
      "title": "Drugs Made from Neem Bark Extracts May Help Fight COVID-19 Variants: IISER Study | The Weather Channel - Articles from The Weather Channel | weather.com - The Weather Channel",
      "description": "<ol><li>Drugs Made from Neem Bark Extracts May Help Fight COVID-19 Variants: IISER Study | The Weather Channel - Articles from The Weather Channel | weather.com  The Weather Channel\r\n</li><li>Coronavirus: Study finds neem tree-based drugs may help fight COVID…",
      "url": "https://weather.com/en-IN/india/coronavirus/news/2022-03-02-drugs-made-from-neem-bark-extracts-may-help-fight-covid-19",
      "urlToImage": "https://s.w-x.co/in-capsule.jpg",
      "publishedAt": "2022-03-02T05:54:14Z",
      "content": "Extract from the bark of the neem tree, indigenous to India, may help treat and reduce the spread of coronavirus, a team of international researchers found. \r\nUsed for thousands of years, Neem is kno… [+1971 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "PTI",
      "title": "'Kacha Badam' singer injured in a car accident while taking his new vehicle out for a spin, discharged from hospital",
      "description": "The peanut seller-turned-internet sensation was discharged from the hospital after first aid.",
      "url": "https://economictimes.indiatimes.com/magazines/panache/kacha-badam-singer-injured-in-a-car-accident-while-taking-his-new-vehicle-out-for-a-spin-discharged-from-hospital/articleshow/89938962.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-89938999,width-1070,height-580,imgsize-45664,overlay-etpanache/photo.jpg",
      "publishedAt": "2022-03-02T05:43:18Z",
      "content": "KOLKATA: 'Kacha Badam' singing sensation Bhuban Badyakar sustained injuries in an accident following which he was admitted to a hospital at his native village in Birbhum district, a close aide said T… [+1259 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "After 'Kacha Badam', Guava Seller's Catchy Song Goes Viral",
      "description": "The guava seller is using a catchy jingle to attract buyers. Social media users are comparing him to \"Kacha Badam\" singer Bhuban Badyakar.",
      "url": "https://www.ndtv.com/india-news/after-kacha-badam-guava-sellers-catchy-song-goes-viral-2798248",
      "urlToImage": "https://c.ndtvimg.com/2022-03/ans0vido_guava-seller-song-650_625x300_02_March_22.jpg",
      "publishedAt": "2022-03-02T05:34:22Z",
      "content": "It is not known where the guava seller's video was shot.\r\nThe \"Kacha Badam\" song went wildly viral on social media. Many users liked the lyrics used by Bhuban Badyakar, the creator of the song, to se… [+1684 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Lata Jha",
      "title": "Vidya Balan’s new film to stream on Amazon Prime Video",
      "description": "‘Jalsa’, also starring Shefali Shah, has been co-produced by T-Series and Abundantia Entertainment.",
      "url": "https://www.livemint.com/industry/media/vidya-balan-s-new-film-to-stream-on-amazon-prime-video-11646197257499.html",
      "urlToImage": "https://images.livemint.com/img/2022/03/02/600x338/Capture_1646197639897_1646197650634.PNG",
      "publishedAt": "2022-03-02T05:09:47Z",
      "content": "New Delhi: Vidya Balans new film Jalsa co-starring Shefali Shah will stream directly on Amazon Prime Video on 18 March. The film has been co-produced by T-Series and Abundantia Entertainment.\r\nBalan … [+1659 chars]"
    }
  ],
  favouriteArticles: []
};


export default (state = initialState, action) => {
  switch (action.type) {

    case Constants.SEARCH_ARTICLE_SUCCESS: {
      let newState = state;
      if (action.payload.status === "ok") {
        newState = { ...state, searchArticles: action.payload.articles }
      }
      return { ...newState }
    }
    case Constants.LOAD_FAVOURITE_ARTICLE_SUCCESS: {
      let newState = state;
      newState = { ...state, favouriteArticles: action.payload }
      return { ...newState }
    }
    case Constants.ACTIVATE_LOADING: {
      return { ...state, isLoading: true }
    }
    case Constants.STOP_LOADING: {
      return { ...state, isLoading: false }
    }
    default:
      return state;
  }
};
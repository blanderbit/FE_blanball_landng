const APP_NAME = "Blanball";
const COMPANY_NAME = "FlumX";
const SEARCH_KEY_WORDS =
  "Sports, Football, Soccer, Team Sports, Competitive Games, Athletic Performance, Sports Management, Sports Training, Coaching, Player Development, Sports Analytics, Sports Technology, Sports Medicine, Injury Prevention, Fitness, Strength Training, Endurance, Speed, Agility, Strategy, Game Analysis, Sports Psychology, Sports Nutrition, Sports Equipment, Sports Events, Sports Marketing, Fan Engagement, Sponsorship, Stadium Management, Sports Broadcasting, Sports Journalism, Sports Industry, Sports Business, Sportsmanship, Fair Play, Sports Culture, Football Social Network, Football Community, Football Fans, Football Clubs, Football Players, Football Matches, Football News, Football Discussions, Football Highlights, Football Insights, Football Trends, Football Photos, Football Videos";

const APP_DESCRIPTION =
  "Welcome to Blanball, the ultimate social network for football enthusiasts. Join our vibrant community of passionate football fans, players and clubs and immerse yourself in the world of football like never before. At Blanball, we understand how important it is to connect with other football fans and share your love for this beautiful game. That's why our platform is designed to bring together fans, players and clubs from all over the world, fostering a sense of unity and friendship. Whether you want to discuss the latest football news, share exciting match highlights, engage in in-depth football discussions or simply socialize with like-minded people, Blanball is the place to be. With Blanball, you get access to a dynamic network of football enthusiasts who share your passion. Connect with other fans to support your favorite teams, exchange opinions, and stay up to date with the latest soccer trends. Follow your favorite clubs and players to get exclusive updates, behind-the-scenes content, and personalized information. Our platform also offers a space for aspiring footballers to showcase their skills, interact with coaches and explore opportunities for player development. Participate in lively discussions, share your football knowledge and build strong connections in the football community. Blanball provides a comprehensive football experience beyond the field.  Find out about exciting soccer events, from local tournaments to international championships, and connect with other fans to make your soccer experience even more memorable. With Blanball, you can truly immerse yourself in football culture and feel the spirit of the game. Join Blanball today and become part of our passionate football community. Let's start unforgettable moments together!";
const APP_EMAIL = "blanball@gmail.com";

export default [
  { charset: "utf-8" },
  { name: "viewport", content: "width=device-width, initial scale=1" },
  { hid: "description", name: "description", content: APP_DESCRIPTION },
  { hid: "og-type", property: "og:type", content: "website" },
  { hid: "og-title", property: "og:title", content: APP_NAME },
  { hid: "og-email", property: "og:email", content: APP_EMAIL },
  { name: "keywords", content: SEARCH_KEY_WORDS },
  { hid: "og-country-name", name: "og:country-name", content: "UA" },
  { name: "copyright", content: COMPANY_NAME },
  { name: "language", content: "UA" },
  { name: "rating", content: "General" },
  { name: "target", content: "all" },
  { name: "abstract", content: APP_DESCRIPTION },
  { name: "topic", content: "Sport" },
  { name: "subject", content: "Sport" },
  { name: "summary", content: APP_DESCRIPTION },
  { name: "subtitle", content: APP_DESCRIPTION },
  { name: "reply-to", content: APP_EMAIL },
  { name: "date", content: new Date().toISOString() },
  { name: "DC.title", content: APP_NAME },
  { name: "search_date", content: new Date().toISOString() },
  { name: "revisit-after", content: "7 days" },
  { name: "category", content: "Sport" },
  { name: "owner", content: "Makovskiy Yaroslav" },
  { name: "revised", content: new Date().toISOString() },
  { name: "Classification", content: "Business" },
  { name: "author", content: `Makovskiy Yaroslav, ${APP_EMAIL}` },
  {
    name: "identifier-URL",
    content: "https://blanball.com"
  },
  { name: "distribution", content: "Global" },
  { name: "medium", content: "landing" },
  { name: "MobileOptimized", content: "479.98" },
  { name: "application-name", content: APP_NAME },
  { name: "apple-mobile-web-app-title", content: APP_NAME },
  { name: "apple-mobile-web-app-capable", content: "yes" },
  { name: "apple-touch-fullscreen", content: "yes" },
  { name: "apple-mobile-web-app-status-bar-style", content: "black" },
  { name: "news_keywords", content: SEARCH_KEY_WORDS },
  { name: "robots", content: "index" }
];
const db = require("../db");
const { Review } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const reviews = [
    {
      name: "Halo Reach",
      userName: "Sierra 117",
      review: "This game delivered on every front. From the intense single player campaign stuffed with variety to the excellent voice acting, story and sound effects Halo:Reach is an absolute must buy for every Xbox360 owner. It is so rich in content that it can easily race for the top spot among the other heavy weapons in the genre. Although the graphics look quite good they are not on a Gears of War or Bad Company 2 level but they still look very convincing and that improvements are visible. I haven't really had time to dug into the multiplayer part of the game but seeing a lot of official review we can say that Halo: Reach is one of the most rich FPS when it comes to its content. All together if you are an Xbox owner, fond of FPS, have 60 bucks or a fan of the series pick this up! U won't regret it, because Bungie really kept its promise and finished the series with a BANG. Now its only up to Microsoft not to screw it up in the future.",
    },
    {
      name: "Halo 3",
      userName: "Master Chief",
      review: "As some of you may give this a 0, how can you guive it that. The balance is soo well done online, for wxample the player skill balance. Also each game everyone has the same weapon. You can get shot a few times and still have a chance. Isn't that great? I'm not a big fan of the older campaigns( Halo and Halo 2) I loved this one. Thr levels Tsvaso's Highway to the level Halo is just pure fun on Legendary. But the multiplayer is where the entire community is. You could probably play this game in 2016 and there probably will be at least 500 people on. But now 2.5 years after it 9/25/07 release there are 75,000 to 200,000 people on depending on the time. Just purely one of the best games on the Xbox 360 you can buy!!!",
    },
    {
      name: "Halo 5",
      userName: "Dingo",
      review: "The worst Halo for me and cannot understand any publication giving this game 9/10 as this game is definitely not nearly perfect. I play Halo for the story and its rich universe and this is the weakest entry yet. The plot is convoluted and you spend little time as the main character which is just bizarre. Graphics are just OK, as game contain low res textures, poor lighting and have seen lots of pop-in. Multiplayer is the games saving grace but warning to any new Halo players it is very competitive. The lack of local co-op is also very annoying as it has been a staple of my Halo experience for years. IF you buying Halo 5 for the campaign AVOID, if you are buying for multiplayer it maybe worth your time if you are very good at fps.",
    },
    {
      name: "Madden 23",
      userName: "cow212208",
      review: `It's a $60 roster update. For no reason at all, PC does NOT get the next gen update, once again. The animations are still bad. Franchise mode is still terrible. "A step in the right direction" means nothing when you are at the bottom. It is a shame what EA has done to the name of the great John Madden. Same trash as last year. NFL 2K5 has a mod somewhere to work on pc with up to date roster and a game almost 20 years old has far better gameplay, franchise mode, and detail compared to a billion dollar company.`,
    },
    {
      name: "Nba 2k23",
      userName: "Mattyice",
      review: "NBA 2K23 continues to set the bar for sports titles, as it plays just as smooth and realistic as ever, which is not much of a surprise at this point, as well as retains its very in-depth modes and features, while adding a few new ones. The Jordan Challenge's return is a nice addition, but MyNBA Eras is truly an outstanding mode/feature that makes this game instantly worth buying for any fan of franchise mode. The amount of depth, realism, and love put into Eras is so great to see and allows any NBA fan to accurately recreate the league from various points in NBA history, although I wish we could get even more specific with the starting years. A common downside to 2K, as always, is the micro-transactions in other modes, which is nothing new at this point and while I don't pay a dime, I know others are forced to. A new con, though, is the new shooting meter, which definitely takes a lot of time to get used to, and I'm not quite sure why 2K changed it again. Otherwise, 2K23 definitely is another hit for easily the deepest and most polished sports game on the market today.",
    },
    {
      name: "WWE 2k22",
      userName: "DiscoDan1983",
      review: "WWE2K22 is the best wrestling game ever made in my opinion. I've been totally blown away with how smooth and fast it feels, the graphics are out of this world. The character models look so realistic you could honestly believe it was. It also has more game modes than you can shake a stick at. Huge credit to Visual Concepts for getting it perfect after much disappointment with WWE2K20. Trust me you won't be disappointed, just buy it 10/10 rating.",
    },
  ];
  await Review.deleteMany();
  await Review.insertMany(reviews);
  console.log("Review List:", reviews);
};

const run = async () => {
  await main();
  db.close();
};

run();

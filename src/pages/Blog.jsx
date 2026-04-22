import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    date: 'March 29, 2026',
    location: 'San Diego, CA',
    title: 'Celebrating my Brother-in-law turing 21!',
    emoji: '🍻',
    image: 'src/assets/21.jpg',
    imageAlt: 'I can not hold my liquour, but this man can not handle me',
    body: [
      `Spring break finally arrived after being drained and exhausted of projects, assignments and collaborations week after week. First rule of business on March 27, 2026 was to congratulate my brother-in-law (the left most person in the photo) a happy 21st birthday. We are really close and have had great moments together like attending both of our first NFL game in 2024 where the Dolphins beat the Rams on Veteran Day at Sofi Stadium, visiting New York during the winter time experiencing a christmas miracle of show near Times Square and spending the last 4 Christmases together.`,
      `Our first stop was grabbing brunch at Cocina 35 in Liberty Station. Enjoyed some great Mexican Brunch with Mexican inspired drinks. After that we headed to Pacific Beach to go bar hopping during the day. We visited Shore Club first to be welcomed with a girl being kicked out of the bar while yelling, cussing and complimenting the bouncers that were throwing her out. While there, we witnessed the semi-final of March Madness where UCONN hit a buzzer beater to win the game and the bar went crazy when that happened. After we headed to Flamingo Deck since they are a Miami Dolphins Bar during the season to end up ordering my brother-in-law an "AMF" where he went adios. Great night with great people.`,
    ],
  },
  {
    id: 2,
    date: 'March 30, 2026',
    location: 'San Diego, CA',
    title: 'If I got free time, I am going to game.',
    emoji: '🎮',
    image: 'src/assets/lies_of_p.jpg',
    imageAlt: 'Git Good',
    body: [
      `The game that is displayed is called "Lies of P." It is a souls-like game meaning that the player has a third-person view of their character, has a health and stamnia bar and there is a roll mechanic all while facing hordes of enemies and unique bosses with scores of heart pounding classical music. This game is about the main character who is a puppet navigating a rundown city being overran by ferral puppets that are killing and pillaging humans. The puppet you play as has a creator name Geppetto leading to the players' name being Pinocchio. I am a fan of this game since it is a soulslike, Tyler the Creator made a song called "Puppet" featuring Kanye West and Kanye West made a song called "Pinocchio Story."`,
      `I love spending my free time playing video games, but the only types of video games I play are soulslikes. More specfically, games made by the game production company "From Software." The creator of souls games is Hidetaka Miyazaki where he got inspiration from a deary, gut wrenching anime called "Beserk" to create some of the greatest games of all time and defining a genre of gaming. If anyone needs recommendations on what games they can spend hours on while never getting bored of them, the games the company From Software makes is where they should be looking. After playing these masterpieces, I can not go back to playing any other games and feel satisfied. I may try GTA 6 when that comes out but I will always go back to these games for the thrill of it.`,
    ],
  },
  {
    id: 3,
    date: 'April 1, 2026',
    location: 'Los Angeles, CA',
    title: 'Attending Ye Concert at Sofi Stadium',
    emoji: '🐐',
    image: 'src/assets/the_goat.jpg',
    imageAlt: 'Runaway as fast as you can',
    body: [
      `Growing up, I used to sing the song "Runaway" by Kanye West while heading to play a tackle football game at the age of 11. He has always been and will always be my favorite music artist. The man has created music defining albums like College Dropout, Late Registration, Graduation, 808s and Heartbreak, My Beautiful Dark Twisted Fantasy, Watch the Throne, Yeezus, The Life of Pablo, ye, KIDS SEE GHOSTS, JESUS IS KING, Donda, VULTURES 1, VULTURES 2, DONDA 2 and has now released a new amazing album in 2026 called Bully. This man does not miss. He says what we are all thinking. He may have gotten people upset by the wild actions he has taken over the years, but he is human being himself as we all are.`,
      `My cousin born the same year as me and a Marine Veteran also is a fan of the goat. He hit me up about going to see his concert in LA since we've never been to one of his concerts. We both love his music so we did not pass up that opportunity. The stage Ye thought of is from the anime "Akira" and it looked incredible. His performance was amazing and during it, I was so happy and could not believe this was real life. To experience that with my cousin who is basically my brother since our fathers are twins, was one of the best days of my life. We enjoyed every second of his presence and made a decision to see him together any chance we get in the future. I've seen Coldplay in Rome, Tyler the Creator in San Diego, attended Coachella 2026 but none of these performances will live up to this. 10/10. Life is in fact changed. Can't tell me nothing.`,
    ],
  },
];

function BlogPost({ post }) {
  return (
    <article className="blog-article">
      <div className="blog-article-meta">
        <span className="blog-date">{post.date}</span>
        <span className="blog-location">📍 {post.location}</span>
      </div>
      <h2 className="blog-article-title">
        <span className="blog-emoji">{post.emoji}</span>
        {post.title}
      </h2>
      <div className="blog-image-wrap">
        <img src={post.image} alt={post.imageAlt} className="blog-image" loading="lazy" />
        <span className="blog-image-caption">{post.imageAlt}</span>
      </div>
      <div className="blog-body">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}

function Blog() {
  return (
    <main className="blog-page">
      <div className="blog-hero">
        <div className="blog-hero-inner">
          <p className="hero-eyebrow">Spring Break 2026</p>
          <h1>Loving Life in Southern California</h1>
          <p className="blog-hero-sub">
            A week of celebrating, chilling and seeing the Goat.
          </p>
        </div>
      </div>

      <div className="blog-container">
        <div className="blog-intro-bar">
          <span>3 entries</span>
          <span>·</span>
          <span>March 27 – April 3, 2026</span>
          <span>·</span>
        </div>

        <div className="blog-posts">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>

        <div className="blog-back">
          <Link to="/" className="btn btn-ghost">← Back to Portfolio</Link>
        </div>
      </div>
    </main>
  );
}

export default Blog;

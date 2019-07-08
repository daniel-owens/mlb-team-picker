import React, { Component } from 'react';
import TeamLogo from "./TeamLogo";
import PlayerCard from "./PlayerCard";
import "./Team.css";

class Team extends Component { 
  static defaultProps = {
    teams: [
      {
        logo: "http://content.sportslogos.net/logos/54/50/thumbs/gnnnrbxcmjhdgeu6mavqk3945.gif",
        name: "Arizona Diamondbacks",
        player: {
          name: "Andy Benes",
          image: "https://images-na.ssl-images-amazon.com/images/I/51zCZOD3yzL._SY445_.jpg",
          desc: "Yeah dude! Believe it. Andy Benes played for the Diamondbacks and you loved every minute of it."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/51/thumbs/5171502018.gif",
        name: "Atlanta Braves",
        player: {
          name: "Jeff Blauser",
          image: "https://images-na.ssl-images-amazon.com/images/I/51KaPJ0zXHL._SY445_.jpg",
          desc: "Tom Glavine and Greg Maddux might get all the credit, but Jeff Blauser was a fantastic ballplayer, Pat. Great choice here."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/52/thumbs/lty880yrmrra64y6tqfqmdnbf.gif",
        name: "Baltimore Orioles",
        player: {
          name: "Billy Ripken",
          image: "https://images-na.ssl-images-amazon.com/images/I/51anOpDdRSL._SY445_.jpg",
          desc: "Billy was one heck of a player growing up in Havre de Grace, Maryland. Rumor has it Cal Ripken Sr. thought Bill had more natural talent than Cal and - let's be real - he's probably right."
        }
      }, 
      {
        logo: "http://content.sportslogos.net/logos/53/53/thumbs/c0whfsa9j0vbs079opk2s05lx.gif",
        name: "Boston Red Sox",
        player: {
          name: "Frank Viola",
          image: "http://1.bp.blogspot.com/-e0f2mSJ7yJk/VOTZLZphKaI/AAAAAAAAByI/w4CBQlJFHOM/s1600/1993TriplePlay-178F.jpg",
          desc: "Frank had the good stuff when he was with the Red Sox. He went 25-21 with about 3.50 ERA. Shutter down, Viola!"
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/54/thumbs/q9gvs07u72gc9xr3395u6jh68.gif",
        name: "Chicago Cubs",
        player: {
          name: "Rick Sutcliffe",
          image: "https://images-na.ssl-images-amazon.com/images/I/81sMGjgkUlL._SY550_.jpg",
          desc: "Ohhhhh baby. You can't have a legit conversation about baseball without mentioning this gunslinger. Rick has also enjoyed an exciting career in broadcasting."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/55/thumbs/oxvkprv7v4inf5dgqdebp0yse.gif",
        name: "Chicago White Sox",
        player: {
          name: "Craig Grebeck",
          image: "https://images-na.ssl-images-amazon.com/images/I/51RBFY29RyL._SY445_.jpg",
          desc: "This guy could get it done, Patrick. He had an exciting year in 1991 when he hit 6 jacks and batted .281!"
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/56/thumbs/z9e0rqit393ojiizsemd0t1hx.gif",
        name: "Cincinatti Reds",
        player: {
          name: "Chris Sabo",
          image: "https://images-na.ssl-images-amazon.com/images/I/41AGrkequSL.jpg",
          desc: "Let's be honest with ourselves, folks - Chris Sabo makes any party better when he's there, doing keg stands."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/57/thumbs/5753472014.gif",
        name: "Cleveland Indians",
        player: {
          name: "Bud Black",
          image: "https://images-na.ssl-images-amazon.com/images/I/51SL1Irsy9L._SY445_.jpg",
          desc: "There's no question that Bud Black will be remembered as the most important coach of the Padres. He had a mediocre career as a pitcher as well."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/58/thumbs/5868712017.gif",
        name: "Colorado Rockies",
        player: {
          name: "Dante Bichette",
          image: "https://alchetron.com/cdn/dante-bichette-debd5329-13c5-44aa-adba-0fd04f0dd47-resize-750.jpeg",
          desc: "He's basically the evil 80's rocker kid from Stranger Things."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/59/thumbs/5989642016.gif",
        name: "Detroit Tigers",
        player: {
          name: "Chet Lemon",
          image: "https://images-na.ssl-images-amazon.com/images/I/81F7yahcm-L._SY550_.jpg",
          desc: "Chet had a lifetime .273 batting average and racked up 1,875 hits. 😐"
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/4929/thumbs/492995032000.gif",
        name: "Houston Astros",
        player: {
          name: "Brad Ausmus",
          image: "http://s.ecrater.com/stores/357549/554574bd67c32_357549b.jpg",
          desc: "Need we say more? Just look at him."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/62/thumbs/fmrl2b6xf5hruiike42gn62yu.gif",
        name: "Kansas City Royals",
        player: {
          name: "Kurt Stillwell",
          image: "https://images-na.ssl-images-amazon.com/images/I/41C8HqGHVYL._SY445_.jpg",
          desc: "Often overshadowed by Bo Jackson (for reasons most experts don't understand), Kurt Stillwell's legend will be felt in Kansas City for eons to come."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/6521/thumbs/652143892016.gif",
        name: "Los Angeles Angels",
        player: {
          name: "Lance Parrish",
          image: "https://kronozio.blob.core.windows.net/images/card/9113cf732e36461b813eda447e213e3c_front.jpg",
          desc: "Lance 'Big Wheel' Parrish is probably the best player on this list of shitty players, which means he doesn't really belong here. Enjoy."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/63/thumbs/efvfv5b5g1zgpsf56gb04lthx.gif",
        name: "Los Angeles Dodgers",
        player: {
          name: "Chris Gwynn",
          image: "https://images-na.ssl-images-amazon.com/images/I/51VCAOCYBPL._SY445_.jpg",
          desc: "Just an hour north of Tony Gwynn's residence, his brother, Chris, achieved peak fame status as the true Gwynn phenom."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/3637/thumbs/363717202017.gif",
        name: "Miami Marlins",
        player: {
          name: "Rob Natal",
          image: "https://kronozio.blob.core.windows.net/images/card/77a0fc6839de4b19b170380e04c60de5_front.jpg",
          desc: "You remember this guy? Yeah, me neither."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/64/thumbs/6479972018.gif",
        name: "Milwaukee Brewers",
        player: {
          name: "Rob Deer",
          image: "https://www.tradingcarddb.com/Images/Cards/Baseball/113/113-57Fr.jpg",
          desc: "You're damn right Rob Deer is part of this spectacular collection of ballplayers, Patrick."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/65/thumbs/peii986yf4l42v3aa3hy0ovlf.gif",
        name: "Minnesota Twins",
        player: {
          name: "Gary Gaetti",
          image: "https://i.pinimg.com/originals/e9/0a/4b/e90a4be49de0e3a37e26b58c3fcc86d2.jpg",
          desc: "Nicknamed 'The Rat' due to his gnarled and freakish-looking face, Gary Gaetti's legacy has fully entrenched itself in Twins' folklore."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/67/thumbs/m01gfgeorgvbfw15fy04alujm.gif",
        name: "New York Mets",
        player: {
          name: "Sid Fernandez",
          image: "https://images-na.ssl-images-amazon.com/images/I/517KVDaOueL.jpg",
          desc: "Sid Fernandez was a man amongst boys, and while he is known for his formidable stature, he's mostly known for being a winner, racking up 114 wins and 96 losses."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/68/thumbs/1256.gif",
        name: "New York Yankees",
        player: {
          name: "Mike Pagliarulo",
          image: "https://img.comc.com/ebay/2e0f2f40-2998-4788-9ee1-67f36152cd1c.jpg",
          desc: "Pags!"
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/69/thumbs/6xk2lpc36146pbg2kydf13e50.gif",
        name: "Oakland Athletics",
        player: {
          name: "Carney Lansford",
          image: "https://i.ebayimg.com/images/g/g~sAAOSwM5tcJYyt/s-l300.jpg",
          desc: "Baseball historian once said of Lansford, 'I don't think I ever saw a third baseman with less range than Lansford. The reason is he dived for everything. And I mean everything.' God love him."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/70/thumbs/o4lmh7dq5e3uordl7hvk6i3ug.gif",
        name: "Philadelphia Phillies",
        player: {
          name: "Terry Mulholland",
          image: "https://images-na.ssl-images-amazon.com/images/I/51eIsuwnkeL._SY445_.jpg",
          desc: "Terry played for 20 years and also managed to play for 11 different teams. If you're wondering how that is even possible, then you don't know Terry Mulholland."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/71/thumbs/7112502014.gif",
        name: "Pittsburgh Pirates",
        player: {
          name: "Sid Bream",
          image: "https://i.ebayimg.com/thumbs/images/g/c3oAAOSw6X1cEGHk/s-l225.jpg",
          desc: "Sid Bream, born and raised in Pennsylvania, lived out his boyhood dream while playing for his hometown Pirates and racking up 90 career dongs."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/73/thumbs/7343442015.gif",
        name: "San Diego Padres",
        player: {
          name: "Tom Lampkin",
          image: "https://images-na.ssl-images-amazon.com/images/I/51dE342ZACL._SY445_.jpg",
          desc: "Tom was a catcher but he's also known for infamous pinch hitting appearances where he'd sometimes do something kinda nice for the ball club."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/74/thumbs/cpqj6up5bvgpoedg5fwsk20ve.gif",
        name: "San Francisco Giants",
        player: {
          name: "Kelly Downs",
          image: "http://www.baseball-almanac.com/players/pics/kelly_downs_autograph.jpg",
          desc: "Kelly only played for eight seasons but he was able to effortlessly rack up 57 wins along with 53 losses and an ERA just under 4.00."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/75/thumbs/1305.gif",
        name: "Seattle Mariners",
        player: {
          name: "Jay Buhner",
          image: "https://images-na.ssl-images-amazon.com/images/I/51chy6xojRL.jpg",
          desc: "Look at this delicious stud. Jay Buhner had twice as many strikeouts as he did walks, and he constantly aspired to look like the lead singer of the Stone Temple Pilots."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/72/thumbs/3zhma0aeq17tktge1huh7yok5.gif",
        name: "St. Louis Cardinals",
        player: {
          name: "Tom Pagnozzi",
          image: "https://images-na.ssl-images-amazon.com/images/I/51L9vTzz2xL._SX342_.jpg",
          desc: "Tom racked up 44 dongs in his career and cemented himself as one of the top 30 catchers to ever play for the St. Louis Cardinals."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/2535/thumbs/qiru2jftx1a378eq8ad0s4ik4.gif",
        name: "Tampa Bay Rays",
        player: {
          name: "Ryan Rupe",
          image: "http://www.thebaseballcube.com/cards/526.jpg",
          desc: "Who the fuck is this guy, you ask? Standing at 6'5, this guy means business, with a career spanning 5 years and 5.85 ERA."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/77/thumbs/ajfeh4oqeealq37er15r3673h.gif",
        name: "Texas Rangers",
        player: {
          name: "Pete Incaviglia",
          image: "https://images-na.ssl-images-amazon.com/images/I/71MtgdBOrDL._SY550_.jpg",
          desc: "Look at this douche."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/53/78/thumbs/2559d7603ouedg7ldhw0br4fn.gif",
        name: "Toronto Blue Jays",
        player: {
          name: "Tom Henke",
          image: "https://i.pinimg.com/originals/44/ab/3a/44ab3ac34d5746aa98d4982b29745ec2.jpg",
          desc: "It was a toss-up between this goober and Todd Stottlemyre."
        }
      },
      {
        logo: "http://content.sportslogos.net/logos/54/578/thumbs/rcehah9k0kekjkgzm077fflws.gif",
        name: "Washington Nationals",
        player: {
          name: "Spike Owen",
          image: "https://images-na.ssl-images-amazon.com/images/I/51ZCvoVmXbL._SY445_.jpg",
          desc: "Let's remember that before they were the Nationals, Spike Owen lead the team when they were the Expos. The joy and excitement that Spike brought to the team was palpable."
        }
      }
    ],
    card: null,
    player: null
  }

  constructor(props) {
    super(props);
    
    this.state = {
      teamImage: "https://cdn.pixabay.com/photo/2017/03/02/09/26/question-mark-2110767_960_720.jpg",
      teamName: "",
      playerName: "",
      playerImage: "https://images-na.ssl-images-amazon.com/images/I/61LqhixbsoL._SX425_.jpg",
      playerDesc: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick() {
    const randTeam = this.props.teams[
      Math.floor(Math.random() * this.props.teams.length)
    ];  
    this.setState({
      teamImage: randTeam.logo,
      teamName: `Your Favorite Team is the ${randTeam.name}!`,
      playerName: `And you love ${randTeam.player.name}!`,
      playerImage: randTeam.player.image,
      playerDesc: randTeam.player.desc 
    })
  }

  render() {
    return (
      <section className="Team">
        <h1>{"HEY PICK A TEAM, PAT!"}</h1>
        <TeamLogo 
          name={this.state.teamName} 
          img={this.state.teamImage} 
        />
        <PlayerCard  
          name={this.state.playerName} 
          img={this.state.playerImage}
          desc={this.state.playerDesc}
        />
        <button 
          className="PickTeam"
          onClick={this.handleClick}>
            Getter Done, Huh! 
        </button>
      </section>
    );
  }
}

export default Team;
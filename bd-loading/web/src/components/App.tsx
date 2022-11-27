import React from 'react';
import useStyles from './App.styles';
import ReactPlayer from 'react-player';
import { useTheme, styled, ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, SwipeableDrawer, Paper } from "@mui/material";
import CoverArt from './CoverArt';
import TrackDetails from './TrackDetails';
import Controls from './Controls';
import VolumeControl from './VolumeControl';
import ProgressBar from './Progress';

const music = [
   {
      link: "https://soundcloud.com/lightdropz/she-dangerous-mr-lite",
      title: "She Dangerous",
      artist: "Mr. Lite",
      artwork: "https://i1.sndcdn.com/artworks-SR43OgI5ynpUcCNC-z42v5g-t500x500.jpg"
   },
   {
      link: "https://soundcloud.com/fayewhey/do-it-over?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      title: "Do It Over",
      artist: "Faye (Prod. Loreal)",
      artwork: "https://i1.sndcdn.com/artworks-zQoeTWcNwTad6nL2-NR90jg-t500x500.jpg"
   },
   {
      link: "https://soundcloud.com/legacy-records-110789396/lyrical-demons",
      title: "Lyrical Demons",
      artist: "Kylo Ft. Carter Mitchell",
      artwork: "https://i1.sndcdn.com/artworks-9MzzUHvPxDivCef8-yaDnxg-t500x500.jpg"
   },
   {
      link: "https://soundcloud.com/hvre/chase-stone-x-carter-mitchell-buggin?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      title: "Buggin",
      artist: "Chase Stone x Carter Mitchell",
      artwork: "https://i1.sndcdn.com/artworks-brdBdAIYy0u5daaG-pKOsjA-t500x500.jpg"
   },
   {
      link: "https://soundcloud.com/user-991353588/fallin-jay-wild-ft-mrlite",
      title: "Fallin",
      artist: "Jay Wild Ft. Mr.Lite",
      artwork: "https://i1.sndcdn.com/artworks-ERLmW8UBFwXKyWDq-hfdaeA-t500x500.jpg"
   },
   {
      link: "https://soundcloud.com/kylobanks/obey-me",
      title: "Obey Me",
      artist: "Kylo Banks",
      artwork: "https://i1.sndcdn.com/artworks-131AR9NyGGSOqLeV-5EU6EQ-t500x500.jpg"
   },
   {
      link: "https://soundcloud.com/kylobanks/obey-me",
      title: "Pain Away",
      artist: "Winnie (Prod. Drkside)",
      artwork: "https://i1.sndcdn.com/artworks-PT8k8y342Zr2FhNJ-VsEz8w-t500x500.jpg"
   },
   {
      link: "https://soundcloud.com/dr_cade/all-for-nothing",
      title: "All For Nothing",
      artist: "Dr Cade",
      artwork: "https://i1.sndcdn.com/artworks-p7oRtSCUSxyQGcdg-v3yCBA-t500x500.jpg"
   },
   {
      link: "https://soundcloud.com/breaxbrown/free-brea",
      title: "Free",
      artist: "Winnie (Prod. Drkside)",
      artwork: "https://i1.sndcdn.com/artworks-PT8k8y342Zr2FhNJ-VsEz8w-t500x500.jpg"
   },
   {
      link: "https://soundcloud.com/axelnewton/get-out",
      title: "get out.",
      artist: "Axel",
      artwork: "https://i1.sndcdn.com/artworks-p2J8toA7tE0Azb9P-Kwy7kQ-t500x500.jpg"
   },
   {
      link: "https://www.youtube.com/watch?v=mbbq2gnOcQo",
      title: "Out thë way",
      artist: "Yeat",
      artwork: "https://i1.sndcdn.com/artworks-NEhRyKEYF3zv-0-t500x500.jpg"
   },
];

const images = [
   'https://cdn.discordapp.com/attachments/652157608668561419/974911482947063869/Screenshot_3642.png',
   'https://media.discordapp.net/attachments/652157608668561419/970540872208891934/Screenshot_855.png',
   'https://media.discordapp.net/attachments/652157608668561419/969293702461792347/Screenshot_3323.png',
   'https://cdn.discordapp.com/attachments/652157608668561419/965703542520287313/unknown.png',
   'https://cdn.discordapp.com/attachments/652157608668561419/961166990112874516/2022-03-06_01h07_42.png',
   'https://cdn.discordapp.com/attachments/673934775400136749/975151254080716920/2FCF6E51-D8C6-4173-B0B8-52F63B2C3219.jpg',
   'https://cdn.discordapp.com/attachments/673934775400136749/974844757798961162/unknown.png',
   'https://media.discordapp.net/attachments/652157608668561419/954546526615646238/218_20220319013413_1.png',
   'https://cdn.discordapp.com/attachments/652157608668561419/940444451803910234/Screenshot_2268.png',
   'https://cdn.discordapp.com/attachments/652157608668561419/941695923094954024/unknown.png',
   'https://media.discordapp.net/attachments/652157608668561419/974801575405031524/unknown.png',
   'https://media.discordapp.net/attachments/652157608668561419/948131108803973201/unknown.png',
   'https://media.discordapp.net/attachments/652157608668561419/938647302032211968/unknown.png',
   'https://media.discordapp.net/attachments/652157608668561419/976935088132612106/Fam_Sign.png'
];

const shuffle = (sentArray: any[]) => {
   let currentIndex = sentArray.length, randomIndex;

   // While there remain elements to shuffle...
   while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [sentArray[currentIndex], sentArray[randomIndex]] = [
         sentArray[randomIndex], sentArray[currentIndex]];
   }

   return sentArray;
}

const shuffledMusic = shuffle(music);

const RootPaper = styled(Paper)(({ theme }) => ({
   width: "100vw",
   // positioning
   position: "fixed",
   bottom: 0,
   // prevent screen size overflow by making padding part of dimensions
   boxSizing: "border-box",
   borderRadius: `${theme.shape.borderRadius} ${theme.shape.borderRadius} 0 0`,
   // only pad left and right; top padding too much
   paddingRight: theme.spacing(1),
   paddingLeft: theme.spacing(1),
   // incase of overflow in undocked mode
   overflow: "hidden",
   transition: theme.transitions.create(["all"]),
}));

const SwipeableDrawerRoot = styled(Box)(({ theme }) => ({
   // fixed size root for swipeable
   // width including padding
   // boxSizing: "border-box",
   marginTop: 0,
   padding: theme.spacing(1),
   overflow: "hidden",

   // puller to be positioned middle of the parent's border
   [`& > .Player-swipeable-puller`]: {
      width: 30,
      height: theme.spacing(1),
      backgroundColor: theme.palette.action.disabled, // button color
      borderRadius: 3,
      // position
      position: "absolute",
      top: theme.spacing(3), // center in parent border
      left: "calc(50% - 15px)", // center horizontally
   },
}));

const RowBox = styled(Box)(() => ({
   display: "flex",
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
   flexWrap: "nowrap",
}));

const ColumnBox = styled(Box)(() => ({
   // fill swipeable drawer root
   width: "100%",
   height: "100%",
   // flexbox
   display: "flex",
   flexDirection: "column",
   justifyContent: "end",
   alignItems: "stretch",
   flexWrap: "nowrap",
}));

// box center child
const CenterChildBox = styled(Box)(() => ({
   // flexbox
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   flexWrap: "nowrap",
}));

function useForceUpdate() {
   const [, setValue] = React.useState(0); // integer state
   return () => setValue((value) => value + 1); // update the state to force render
}

const darkTheme = createTheme({
   palette: {
      mode: 'dark'
   },
});

const App: React.FC = () => {
   const classes = useStyles();
   const [currentSong, setCurrentSong] = React.useState(0);
   const [percent, setPercent] = React.useState(0);
   const [isPlaying, setIsPlaying] = React.useState(false);
   const [realVolume, setRealVolume] = React.useState(0.3);
   const [volume, setVolume] = React.useState(30);
   const [imageElements, setImageElements] = React.useState<any>([]);
   const [timePlayed, setTimePlayed] = React.useState(0);
   const [timeLeft, setTimeLeft] = React.useState(0);

   const [maximised, setMaximised] = React.useState(false);
   const [isLarge, setLarge] = React.useState(true);
   const forceUpdate = useForceUpdate();

   const [song, setSong] = React.useState({
      link: "https://www.youtube.com/watch?v=mbbq2gnOcQo",
      title: "Out thë way",
      artist: "Yeat",
      artwork: "https://i1.sndcdn.com/artworks-NEhRyKEYF3zv-0-t500x500.jpg"
   });

   const handleKeyDown = (event: any) => {
      if (event.key === 'ArrowLeft') {
         backwardMusic();
      } else if (event.key === 'ArrowRight') {
         forwardMusic();
      }

      //space to toggle play
      if (event.code === 'Space') {
         setIsPlaying(!isPlaying);
      }
   }

   React.useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
         document.removeEventListener("keydown", handleKeyDown);
      };
   });

   const theme = useTheme();

   const backwardMusic = () => {
      if (currentSong > 0) {
         setSong(shuffledMusic[currentSong - 1])
         setCurrentSong(currentSong - 1)
      }
   }

   const forwardMusic = () => {
      if (currentSong > -1 && currentSong !== shuffledMusic.length - 1) {
         setSong(shuffledMusic[currentSong + 1])
         setCurrentSong(currentSong + 1)
      } else {
         setSong(shuffledMusic[0])
         setCurrentSong(0)
      }
   }

   const handleVolume = (e: any) => {
      const value = e?.target?.value ?? e;
      const val = value / 100;
      setVolume(value);
      setRealVolume(Number(val));
   }

   const handleIncreaseVolume = () => {
      if (volume < 100) {
         handleVolume(volume + 5)
      }
   }

   const handleDecreaseVolume = () => {
      if (volume > 0) {
         handleVolume(volume - 5)
      }
   }

   const [states, setStates] = React.useState({
      'INIT_BEFORE_MAP_LOADED': {
         count: 0,
         done: 0
      },
      'MAP': {
         count: 0,
         done: 0
      },
      'INIT_AFTER_MAP_LOADED': {
         count: 0,
         done: 0
      },
      'INIT_SESSION': {
         count: 0,
         done: 0
      }
   });

   React.useEffect(() => {
      setCurrentSong(0)
      setSong({
         link: "https://www.youtube.com/watch?v=mbbq2gnOcQo",
         title: "Out thë way",
         artist: "Yeat",
         artwork: "https://i.ytimg.com/vi/mbbq2gnOcQo/maxresdefault.jpg"
      });

      setImageElements(shuffle(images).map((e: string, key: number) => {
         return e;
      }))

      const handlers: any = {
         startInitFunctionOrder: (data: any) => {

            const copiedState: any = states
            // Reconnecting
            if (data.type === 'INIT_SESSION' && copiedState['INIT_BEFORE_MAP_LOADED'].count < 1) {
               copiedState['INIT_BEFORE_MAP_LOADED'].count = 1;
               copiedState['INIT_BEFORE_MAP_LOADED'].done = 1;
               copiedState['MAP'].count = 1;
               copiedState['MAP'].done = 1;
               copiedState['INIT_AFTER_MAP_LOADED'].count = 1;
               copiedState['INIT_AFTER_MAP_LOADED'].done = 1;
            }

            copiedState[data.type].count += data.count;
            setStates(copiedState)

         },

         initFunctionInvoked: (data: any) => {
            const copiedState: any = states
            copiedState[data.type].done++
            setStates(copiedState)
         },

         startDataFileEntries: (data: any) => {
            const copiedState = states
            copiedState['MAP'].count = data.count
            setStates(copiedState)
         },

         performMapLoadFunction: (data: any) => {
            const copiedState: any = states
            copiedState['MAP'].done++
            setStates(copiedState)
         }

      };

      window.addEventListener('message', (e: any) => (handlers[e.data.eventName] || (() => { }))(e.data));

      let last = 0;

      setInterval(() => {
         let progress = 0;
         const copiedState: any = states
         for (let type in states) {
            if (copiedState[type].done < 1 || copiedState[type].count < 1) continue;
            progress += (copiedState[type].done / copiedState[type].count) * 100;
         }

         let total = Math.min(Math.round(progress / Object.keys(states).length), 100);
         if (total < last) total = last;
         last = total;

         setPercent(total)
      }, 100);

   }, [])

   const rowView = () => (
      <RowBox>
         <CoverArt
            src={song.artwork}
            sx={{
               height: "48px",
               width: "48px",
               flexShrink: 0,
            }}
         />
         <TrackDetails
            sx={{
               // fixed size to stop resize on content change
               width: "40px", //120px
               // grow if screen is small to cover extra space
               flexGrow: isLarge ? 0 : 1,
               textAlign: "left",
               margin: 1,
               flexShrink: 0,
            }}
            title={song.title}
            artist={song.artist}
         />
         <Controls size={isLarge ? "large" : "small"} handlePlay={() => setIsPlaying(!isPlaying)} playing={isPlaying} backwardMusic={backwardMusic} forwardMusic={forwardMusic} />
         <ProgressBar sx={{ flexGrow: 6 }} timePlayed={timePlayed} timeLeft={timeLeft} />
         <VolumeControl sx={{ flexGrow: 2 }} handleVolume={handleVolume} volume={volume} handleIncreaseVolume={handleIncreaseVolume} handleDecreaseVolume={handleDecreaseVolume} />
      </RowBox>
   );

   // set large depending on player width
   const rootRef = React.useRef();
   // eslint-disable-next-line
   React.useEffect(() => {
      /**
       * Root of the player
       * @type {Element}
       * */
      const rootElement = rootRef.current as any;
      if (rootElement?.clientWidth > theme.breakpoints.values.md) {
         if (!isLarge) setLarge(true);
      } else {
         if (isLarge) {
            setLarge(false);
            // incase maximised before resize
            if (maximised) setMaximised(false);
         }
      }
   });

   // also set window resize listener
   React.useEffect(() => {
      window.onresize = () => {
         forceUpdate();
      };
      // eslint-disable-next-line
   }, []);

   const slidePresentationTime = 3000 // after how many ms slide will change - now 3s / 3000ms
   const [currentSlide, setCurrentSlide] = React.useState(0) // value and function to set currrent slide index
   const sliderInterval = React.useRef<any>() // interval ref

   React.useEffect(() => {
      //when it reaches the end of the slides, it will go back to the first slide
      sliderInterval.current = setInterval(() => {
         if (currentSlide === imageElements.length - 1) {
            console.log("Slide reached end, going back to first slide")
            setCurrentSlide(0)
         } else {
            console.log("Slide changed")
            setCurrentSlide((currentSlide + 1) % imageElements.length); // change current slide to next slide after 'slidePresentationTime'
         }
      }, slidePresentationTime);

      // cleanup interval when your component will unmount
      return () => {
         clearInterval(sliderInterval.current)
      }
   })

   return (
      <ThemeProvider theme={darkTheme}>
         <div className={classes.container}>
            <div className={classes.background}>
               {imageElements.map((e: any, index: number) => (
                  <div
                     className={index === currentSlide ? `${classes.slide} ${classes.slideActive}` : classes.slide }
                     key={index}
                     style={{
                        backgroundImage: `url(${e})`,
                        zIndex: `-${index + 1}`
                     }}
                  />
               ))}
            </div>
            <img className={classes.pulse} src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png" alt="NUI Logo" width="#00" height="300" />

            <ReactPlayer style={{ zIndex: -1, display: 'none', objectFit: 'cover' }} playing={isPlaying} volume={realVolume} muted={false} url={song.link} width='10%' height='10%' config={{
               soundcloud: {
                  options: {
                     auto_play: true,
                  }
               },
               youtube: {
                  playerVars: {
                     autoplay: 1,
                  }
               }
            }} onProgress={(progress: any) => {
               setTimePlayed(progress.playedSeconds);
            }} onDuration={(progress: any) => {
               setTimeLeft(progress);
            }} onStart={() => setIsPlaying(true)} />
            <RootPaper elevation={4} style={{ marginTop: '0px !important', width: '50vw' }}>
               <SwipeableDrawer
                  open={false}
                  anchor="bottom"
                  onClose={() => { }}
                  onOpen={() => { }}
               />
               <SwipeableDrawerRoot>
                  {rowView()}
               </SwipeableDrawerRoot>
            </RootPaper>
         </div>
      </ThemeProvider>
   );
}

export default App;
import Head from "next/head";
import Navbar from "../components/Navbar";
import SchoolClock, {toSeconds} from "../components/SchoolClock";
import Particles from "react-particles-js";

const ClassSchedule:number[] = [
  toSeconds(7, 0),
  toSeconds(7, 33),
  toSeconds(7, 37),
  toSeconds(8, 10),
  toSeconds(8, 14),
  toSeconds(8, 47),
  toSeconds(8, 51),
  toSeconds(9, 24),
  toSeconds(9, 28),
  toSeconds(10, 1),
  toSeconds(10, 5),
  toSeconds(10, 38),
  toSeconds(10, 42),
  toSeconds(11, 15),
  toSeconds(12, 15),
  toSeconds(14, 0)
];

const ClassNames = [
  "1st period",
  "Break 1",
  "2nd period",
  "Break 2",
  "3rd period",
  "Break 3",
  "4th period",
  "Break 4",
  "5th period",
  "Break 5",
  "6th period",
  "Break 6",
  "7th period",
  "Break 7",
  "Office Hours"
];

export default function Home() {
  return (
    <div className="h-screen bg-gray-900">
      <Head>
        <title>School Clock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar activePage={"hs"}/>
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 60,
                "density": {
                  "enable": true,
                  "value_area": 1500
                }
              },
              "line_linked": {
                "enable": true,
                "opacity": 0.02
              },
              "move": {
                "direction": "right",
                "speed": 0.05
              },
              "size": {
                "value": 1
              },
              "opacity": {
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.05
                }
              }
            },
            "interactivity": {
              "events": {
                "onclick": {
                  "enable": true,
                  "mode": "push"
                }
              },
              "modes": {
                "push": {
                  "particles_nb": 1
                }
              }
            },
            "retina_detect": true
          }} className="bg-gray-900 h-screen w-screen"/>
        <SchoolClock PeriodTimes={ClassSchedule} PeriodNames={ClassNames} timeZone={"America/Chicago"}/>

    </div>
  );
}

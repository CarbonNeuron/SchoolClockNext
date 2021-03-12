import Head from "next/head";
import Navbar from "../components/Navbar";
import SchoolClock, {toSeconds} from "../components/SchoolClock";
import Particles from "react-particles-js";

const ClassSchedule = [
  toSeconds(8, 0),
  toSeconds(8, 26),
  toSeconds(8, 29),
  toSeconds(8, 55),
  toSeconds(8, 58),
  toSeconds(9, 24),
  toSeconds(9, 27),
  toSeconds(9, 53),
  toSeconds(9, 56),
  toSeconds(10, 22),
  toSeconds(10, 25),
  toSeconds(10, 51),
  toSeconds(10, 54),
  toSeconds(11, 20),
  toSeconds(11, 23),
  toSeconds(11, 49),
  toSeconds(11, 52),
  toSeconds(12, 19)
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
  "8th period",
  "Break 8",
  "9th period"
];
const PeriodHeadings = [
  "1st",
  "Break",
  "2nd",
  "Break",
  "3rd",
  "Break",
  "4th",
  "Break",
  "5th",
  "Break",
  "6th",
  "Break",
  "7th",
  "Break",
  "8th",
  "Break",
  "9th"
];

export default function pal() {
  return (
    <div className="h-screen bg-gray-900">
      <Head>
        <title>School Clock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar activePage={"pal"}/>
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
      <SchoolClock PeriodTimes={ClassSchedule} PeriodHeadings={PeriodHeadings} PeriodNames={ClassNames} timeZone={"America/New_York"}/>

    </div>
  );
}

import Head from "next/head";
import Navbar from "../components/Navbar";
import SchoolClock, {toSeconds} from "../components/SchoolClock";
import Particles from "react-particles-js";

const ClassSchedule = [
  toSeconds(7, 55),
  toSeconds(8, 5),
  toSeconds(8, 40),
  toSeconds(8,45),
  toSeconds(9, 20),
  toSeconds(9, 25),
  toSeconds(10, 0),
  toSeconds(10, 5),
  toSeconds(10, 40),
  toSeconds(10, 45),
  toSeconds(11, 20),
  toSeconds(11, 25),
  toSeconds(12, 0),
  toSeconds(12, 15)
];
const ClassNames = [
  "Announcements",
  "1st period",
  "Break 1",
  "2nd period",
  "Break 2",
  "3rd/4th period",
  "Break 3",
  "6th/7th period",
  "Break 4",
  "8th period",
  "break 5",
  "9th period",
  "Dismissal",
];
const PeriodHeadings = [
  "Announce",
  "1st",
  "Break",
  "2nd",
  "Break",
  "3rd/4th",
  "Break",
  "6th/7th",
  "Break",
  "8th",
  "Break ",
  "9th",
  "Dismiss",
];

export default function ms() {
  return (
    <div className="h-screen bg-gray-900">
      <Head>
        <title>School Clock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar activePage={"ms"}/>
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 60,
              "density": {
                "enable": true,
                "value_area": 1000
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
      <SchoolClock PeriodTimes={ClassSchedule} PeriodHeadings={PeriodHeadings} PeriodNames={ClassNames} timeZone={"America/Chicago"}/>

    </div>
  );
}

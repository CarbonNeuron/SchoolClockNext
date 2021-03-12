import Head from "next/head";
import Navbar from "../components/Navbar";
import SchoolClock, {toSeconds} from "../components/SchoolClock";
import Particles from "react-particles-js";

const BlueDaySchedule = [
    toSeconds(7, 25), //0 - Start
    toSeconds(7, 50), //0 - End Break start
    toSeconds(7, 55), //0 Break end 1 start
    toSeconds(8, 20), //1 End 1 break start
    toSeconds(8, 25), //1 break end 2 start
    toSeconds(8, 50), //2 end 2 break start
    toSeconds(8, 55), //2 break end 3 start
    toSeconds(9, 20), //3 end checkin/lunch
    toSeconds(10, 40), //lunch end 0 start
    toSeconds(11, 30), //0 - End Break start
    toSeconds(11, 35), //0 Break end 1 start
    toSeconds(12, 25), //1 End 1 break start
    toSeconds(12, 30),//1 break end 2 start
    toSeconds(13, 20),//2 end 2 break start
    toSeconds(13, 25),//2 break end 3 start
    toSeconds(14, 15)//3 end
]
const BlueDayNames = [
    "0 period",
    "Break 1",
    "1st period",
    "Break 2",
    "2nd period",
    "Break 3",
    "3rd period",
    "Remote Check-in / Lunch and transport to school",
    "0 period",
    "Break 4",
    "1st period",
    "Break 5",
    "2nd period",
    "Break 6",
    "3rd period"
]
const GoldDaySchedule = [
    toSeconds(7, 25), //4 - Start
    toSeconds(7, 50), //4 - End Break start
    toSeconds(7, 55), //4 Break end 5 start
    toSeconds(8, 20), //5 End 5 break start
    toSeconds(8, 25), //5 break end 6 start
    toSeconds(8, 50), //6 end 6 break start
    toSeconds(8, 55), //6 break end 7 start
    toSeconds(9, 20), //7 end 7 break start
    toSeconds(10, 40), //lunch end 4 start
    toSeconds(11, 30), //4 - End Break start
    toSeconds(11, 35), //4 Break end 5 start
    toSeconds(12, 25), //5 End 5 break start
    toSeconds(12, 30),//5 break end 6 start
    toSeconds(13, 20),//6 end 6 break start
    toSeconds(13, 25),//6 break end 7 start
    toSeconds(14, 15),//7 end 7 break start
    toSeconds(14, 25),//7 break end, 8 start
    toSeconds(15, 15)//8 end
]
const GoldDayNames = [
    "4th period",
    "Break 1",
    "5th period",
    "Break 2",
    "6th period",
    "Break 3",
    "7th period",
    "8th period / Remote Check-in / Lunch and transport to school",
    "4th period",
    "Break 4",
    "5th period",
    "Break 5",
    "6th period",
    "Break 6",
    "7th period",
    "Break 7",
    "8th period"
]

const LateStartSchedule = [
    toSeconds(9, 25), //0 start
    toSeconds(9, 55), //0 end, break
    toSeconds(10, 0), //break end 1 start
    toSeconds(10, 30), //1 end, break
    toSeconds(10, 35), //break end 2 start
    toSeconds(11, 5), //2 end, break
    toSeconds(11, 10), //break end 3 start
    toSeconds(11,40), //3 end, break
    toSeconds(11,45), //break end, 4 start
    toSeconds(12, 15), //4 end, break
    toSeconds(12, 20), //break end, 5 start
    toSeconds(12, 50), //5 end, break
    toSeconds(12, 55), //break end, 6 start
    toSeconds(13, 25), //6 end, break
    toSeconds(13, 30), //break end, 7 start
    toSeconds(14,0), //7 end, break
    toSeconds(14,30), //break end, 8 start
    toSeconds(15, 0)// 8 end
]
const LateStartNames = [
    "0 period",
    "Break 1",
    "1st period",
    "Break 2",
    "2nd period",
    "Break 3",
    "3rd period",
    "Break 4",
    "4th period",
    "Break 5",
    "5th period",
    "Break 6",
    "6th period",
    "Break 7",
    "7th period",
    "Break 8",
    "8th period"
]

let ClassSchedule: number[], PeriodHeadings: string[], ClassNames: string[];

if ([1,4].includes(new Date().getDay())) { // monday
  ClassSchedule = BlueDaySchedule
  PeriodHeadings = BlueDayNames
  ClassNames = BlueDayNames
} else if ([2,5].includes(new Date().getDay())) {
  ClassSchedule = GoldDaySchedule
  PeriodHeadings = GoldDayNames
  ClassNames = GoldDayNames
} else if (new Date().getDay() === 3) {
  ClassSchedule = LateStartSchedule
  PeriodHeadings = LateStartNames
  ClassNames = LateStartNames
}

export default function wths() {
  return (
    <div className="h-screen bg-gray-900">
      <Head>
        <title>School Clock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar activePage={"wths"}/>
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

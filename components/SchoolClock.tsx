import {useEffect, useRef, useState} from "react";
import { DateTime } from 'luxon';
import {Howl} from 'howler';
import { Helmet } from 'react-helmet'
import Switch from "react-switch";
import SvgVolumeOffSolid from "../icons/VolumeOffSolid";
import SvgVolumeUpSolid from "../icons/VolumeUpSolid";

export default function SchoolClock({PeriodTimes, PeriodNames, timeZone}:{
  PeriodTimes:number[],
  PeriodNames:string[],
  timeZone:string
}) {
  const updateTimer = useRef(setTimeout(()=>{return null},0));
  const [StopToken, setStopToken] = useState(false);
  const [PeriodText, setPeriodText] = useState("");
  const [CountdownText, setCountdownText] = useState("");
  let LastPeriod = '';
  const [Mute, setMute] = useState(false);
  const [HeaderText, setHeaderText] = useState("School clock");
  function HandleChange(checked:boolean){
    console.log("ran");
    setMute(checked);
    localStorage.setItem('mute', checked?"true":"false");
  }

  const sound = new Howl({src:["tone2.ulaw.wav"], volume: 0.25});

  function Update(){
    const local = DateTime.local().setZone(timeZone);
    const periodIndex = FindPeriodIndex(timeToSeconds(local), PeriodTimes);
    let Period: string;
    let SecondsRemaining: number;
    if (periodIndex === 999 || periodIndex === 1000 || local.weekday === 7 || local.weekday === 6)
    {
      Period = "After School";
      if (local.weekday === 5 && periodIndex == 1000)
      {
        SecondsRemaining = toSeconds(72, 0) - toSeconds(local.hour, local.minute, local.second) +
          PeriodTimes[0];
        Period = "Weekend!";
      }
      else if (local.weekday === 6)
      {
        SecondsRemaining = toSeconds(48, 0) - toSeconds(local.hour, local.minute, local.second) +
          PeriodTimes[0];
        Period = "Weekend";
      }
      else if (local.weekday === 7)
      {
        SecondsRemaining = toSeconds(24, 0) - toSeconds(local.hour, local.minute, local.second) +
          PeriodTimes[0];
        Period = "Weekend!";
      }
      else if (periodIndex === 1000)
      {
        SecondsRemaining = toSeconds(24, 0) - toSeconds(local.hour, local.minute, local.second) +
          PeriodTimes[0];
      }
      else
      {
        SecondsRemaining = PeriodTimes[0] - toSeconds(local.hour, local.minute, local.second);
      }
    }
    else
    {
      Period = PeriodNames[periodIndex];
      if (periodIndex === 16)
      {
        SecondsRemaining = toSeconds(24, 0) - toSeconds(local.hour, local.minute, local.second) + PeriodTimes[0];
      }
      else
      {
        SecondsRemaining = PeriodTimes[periodIndex + 1] - toSeconds(local.hour, local.minute, local.second);
      }
    }
    const mins = Math.floor((SecondsRemaining % 3600) / 60);
    const secs = (SecondsRemaining % 3600) % 60;
    const actualHours = Math.floor(SecondsRemaining / 3600);
    if(LastPeriod != "" && Period != LastPeriod) {
      if(!(localStorage.getItem('mute') == 'true')){
        console.log("Playing");

        sound.play() //Play sound
      }

    }
    LastPeriod = `${Period}`; //Set last period
    if (Period.startsWith("Break")) {
      setCountdownText(`Ends in: ${zeroPad(mins,2)}:${zeroPad(secs, 2)}`);
      setHeaderText(`${mins}:${zeroPad(secs, 2)}`);
    }
    else if (Period == "After School" || Period == "Weekend") {
      setCountdownText(`School starts in: ${zeroPad(actualHours,2)}:${zeroPad(mins,2)}:${zeroPad(secs, 2)}`);
      setHeaderText(`${actualHours}:${zeroPad(mins,2)}:${zeroPad(secs, 2)}`);
    }
    else {
      setCountdownText(`Ends in: ${zeroPad(mins,2)}:${zeroPad(secs, 2)}`);
      setHeaderText(`${mins}:${zeroPad(secs, 2)}`);
    }
    setPeriodText(Period);

    if(!StopToken){
      updateTimer.current = setTimeout(()=> {Update()}, local.plus({second: 1, millisecond: -local.millisecond}).diffNow().milliseconds)
    }

  }
  useEffect(() => {
    setMute(localStorage.getItem('mute') == 'true');

    setStopToken(false);
    Update();
    return () => {
      setStopToken(true);
      clearTimeout(updateTimer.current);
    };
  }, []);
  return (
    <div>
      <Helmet>
        <title>{HeaderText}</title>
      </Helmet>
      <div className="flex h-screen overlay" style={{pointerEvents:"none"}}>
        <div className="m-auto w-screen">
          <h1 className="text-white text-8xl text-center" style={{pointerEvents:"auto"}}>{PeriodText}</h1>
          <hr className="border-gray-800 border mt-4 mb-4 max-w-3xl align-middle m-auto"/>
          <h1 className="text-white text-7xl text-center" style={{pointerEvents:"auto"}}>{CountdownText}</h1>
        </div>
      </div>

      <div className={"controlBox"}>
        <Switch checked={Mute} onColor={"#e74c3c"} offColor={"#00bc8c"} onChange={HandleChange} checkedIcon={<SvgVolumeOffSolid style={{width:"22px",height:"28px",margin:"auto"}}/>} uncheckedIcon={<SvgVolumeUpSolid style={{width:"22px", height:"28px", margin:"auto"}}/>}/>
      </div>

    </div>

  )
}

export function toSeconds(hours:number, minutes:number, seconds=0){
  let totalSeconds = 0;
  totalSeconds += (hours * (60 * 60));
  totalSeconds += (minutes * 60);
  totalSeconds += seconds;
  return totalSeconds;
}

function timeToSeconds(timeToConvert:DateTime){
  return toSeconds(timeToConvert.hour, timeToConvert.minute, timeToConvert.second)
}

export function FindPeriodIndex(Seconds:number, PeriodTimes:number[]) {
  const length = PeriodTimes.length;
  if (PeriodTimes[0] > Seconds)
  {
    //Before school
    return 999;
  }
  else if (PeriodTimes[length - 1] < Seconds) {
    //After School
    return 1000;
  }
  for (let i = 0; i < PeriodTimes.length-1; i++)
  {
    if (Seconds >= PeriodTimes[i] && Seconds < PeriodTimes[i + 1])
    {
      return i;
    }
  }
  //Did not find it
  return 999;
}

function zeroPad(num:number, places:number) {
  const zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

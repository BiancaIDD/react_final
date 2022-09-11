import PendingList from "./components-sidebar/PendingThing";
import TrackCard from "./components-sidebar/SpotifyTrack";
import './SideBar.css'

export default function SideBar(){
  return(
    <div className="sidebar">
      <PendingList/>
      <TrackCard/>
    </div>
  )
}
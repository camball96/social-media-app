import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">TYPE</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <span><Search className="searchIcon"/>
                    <input className="searchInput" type="text" placeholder="Search" />
                    </span>
                </div>
            </div>
            
            <div className="topbarRight">
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/DP1.jpg" alt="displayPicture" className="profile" />
            </div>
        </div>
    )
}
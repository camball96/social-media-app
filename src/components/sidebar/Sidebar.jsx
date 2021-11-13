import "./sidebar.css"
import { RssFeed, Sms, Videocam, Sell, Groups, Palette } from '@mui/icons-material'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Sms className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <Videocam className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Sell className="sidebarIcon"/>
                        <span className="sidebarListItemText">Marketplace</span>
                    </li>
                    <li className="sidebarListItem">
                        <Groups className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Palette className="sidebarIcon"/>
                        <span className="sidebarListItemText">Art</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/DP2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/DP1.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/DP3.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/DP1.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/DP2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jon Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/DP3.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jon Doe</span>
                    </li>
                 
                </ul>
            </div>
        </div>
    )
}

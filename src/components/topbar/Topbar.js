import React from 'react'
import SvgNotif from '../../assets/icons/icon'
import SettingIcon from '../../assets/icons/Setting'
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">RiPort Admin</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconContainer">
                        <SvgNotif/>
                        <div className="topbarIcons1">2</div>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingIcon/>
                        <div></div>
                    </div>
                    <div>
                        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y8yjo0Va9Bhs98glEtla9QHaFE%26pid%3DApi&f=1'
                            className='topAvatar'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
 
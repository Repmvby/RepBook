import React from 'react'
import s from './ProfileInfo.module.css';
import PreLoader from "../../common/preLoader/PreLoader";
import instagramLogo from './../../../assets/images/instagramLogo.png'
import facebookLogo from './../../../assets/images/facebookLogo.png'
import twitterLogo from './../../../assets/images/twitterLogo.png'
import githubLogo from './../../../assets/images/gitHubLogo.png'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <PreLoader/>
    }
    return (
        <div className={s.descriptionBlock}>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
            <div className={s.userInfoContainer}>
                <div>
                    <div><h3>Status:</h3>{props.profile.aboutMe}</div>
                    <div><h1>{props.profile.fullName}</h1></div>
                </div>
                <div className={s.buttonContainer}>
                    {props.profile.lookingForAJob ? <button onClick={() => {
                        props.setHiredToDoJob()
                    }} className={s.button}>Looking fo a job</button> : <button onClick={() => {
                        props.setLookingForAJob()
                    }} className={s.button}>Hired</button>
                    }

                </div>
                <div className={s.contactsContainer}>
                    <div><h3>Contacts:</h3></div>
                    <div className={s.contactsItemsContainer}>
                        <a href={props.profile.contacts.facebook}><img className={s.logoItem}
                                                                       src={facebookLogo}/>
                        </a>
                        <a href={props.profile.contacts.instagram}><img className={s.logoItem}
                                                                        src={instagramLogo}/>
                        </a>
                        <a href={props.profile.contacts.twitter}><img className={s.logoItem}
                                                                      src={twitterLogo}/>
                        </a>
                        <a href={props.profile.contacts.github}><img className={s.logoItem}
                                                                     src={githubLogo}/>
                        </a>

                    </div>
                </div>


            </div>
        </div>
    )
}
export default ProfileInfo;
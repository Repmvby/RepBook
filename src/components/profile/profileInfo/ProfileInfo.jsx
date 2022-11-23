import React from 'react'
import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://fanzon-portal.ru/upload/iblock/4f5/4f5212a9ac6010c663d1554f40d869d0.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;
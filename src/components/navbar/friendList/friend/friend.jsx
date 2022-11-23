import s from './friend.module.css'

const Friend = (props) => {
    return (

        <div className={s.friendItem}>
            <img className={s.img}
                src='https://icdn.lenta.ru/images/2022/09/29/14/20220929144210212/square_320_4347dbf2b2844589abd53f61a14035ee.jpg'/>
            <div>{props.name}</div>
        </div>
    )
}
export default Friend;
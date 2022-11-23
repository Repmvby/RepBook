import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div>
                <div className={s.item}>
                    <img
                        src='https://icdn.lenta.ru/images/2022/09/29/14/20220929144210212/square_320_4347dbf2b2844589abd53f61a14035ee.jpg'/>
                    {props.message}
                    <div><span>Likes count: {props.likesCount}</span></div>
                </div>

            </div>

        </div>

    )
}
export default Post;
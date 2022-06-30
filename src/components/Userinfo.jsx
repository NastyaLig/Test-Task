import useRounder from "../hooks/uRounder";
import Following from "assets/following.svg";
import Followers from "assets/followers.svg";
import Image from "components/Img";
import "./Userinfo.css";

const Userinfo = ({user}) => {
    const { name, html_url, avatar_url, login, following,Followers}= user;
    const roundedFollowers = useRounder(followers);
    const roundedFollowing = useRounder(following);

 return(
    <div className="user-info">
        <Image src={avatar_url} alt={name}/>
        <h2 className="user-info_name">{name}</h2>
        <a
            className="user-info_link"
            rel="noreferrer"
            href={html_url}
            target="_blank"
        >
            <h3 className="user-info_login">{login}</h3>
        </a>

        <div className="user-info_bottom">
            <div className="user-info_bottom-followers followers">
                <img src={Followers} alt="followers" className="followers_img" />
                <span className="user-info_followers-amount">
                    {roundedFollowers} {followers === 1 ? "follower" : "followers"}
                </span>
            </div>

            <div className="user-info_bottom-following following">
                <img src={Following} alt="following" className="following_img" />
                <span className="user-info_following-amount">
                    {roundedFollowing} following
                </span>
            </div>
        </div>
    </div>
    );
};
export default Userinfo;
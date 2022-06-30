import "./Img.css";

const Image = ({src,alt})=>{
    return(
        <img className="img" src={src} alt={alt}/>
    );
};
export default Image;
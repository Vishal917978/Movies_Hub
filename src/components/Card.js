import './Card.css';
import StaticExample from './Card_Details';
function BasicExample2(Props) {
    return (
 <div className="card ">
      <div className="image"> 
        <img src={Props.data.Poster} alt="image"></img>
      </div>
      <div className="txt">
        <p>{Props.data.Title}</p>
      </div>
    </div>
  );
}
export default BasicExample2;

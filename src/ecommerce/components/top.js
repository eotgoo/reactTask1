import { icons } from "react-icons";
import { topData } from "../data/data";
const Top = () => {
  return (
    <div className="topMain row">
      <div className="col-8">
        <p>Need help? Call us: (+98) 0234 456 789</p>
      </div>
      <div className="topText col-4">
        {topData.map((x, index) => (
          <p key={index}>{x}</p>
        ))}
        ;
      </div>
    </div>
  );
};

export default Top;

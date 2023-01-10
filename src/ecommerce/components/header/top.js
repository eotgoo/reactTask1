import "./header.css";
import { BsGeoAlt } from "react-icons/bs";
import { topData } from "../../data/data";

const Top = () => {
  return (
    <div className="topMain row">
      <div className="col-8">
        <p>Need help? Call us: (+98) 0234 456 789</p>
      </div>
      <div className="topText col-4">
        {topData.map((x, index) => (
          <div key={index}>
            <BsGeoAlt></BsGeoAlt>
            {x}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top;

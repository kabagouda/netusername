import { ProjectIcons } from "../utils/plaform-icons";

const Availaible = () => {
  return (
    <div className="flex items-center space-x-2">
      <span className="font-bold">Available</span>
      {ProjectIcons.available}
    </div>
  );
};
export default Availaible;

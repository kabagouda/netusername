import { ProjectIcons } from "../utils/plaform-icons";

const Unavailable = () => {
  return (
    <div className="flex items-center space-x-2">
      <span className="font-bold">Unavailable</span>
      {ProjectIcons.unavailable}
    </div>
  );
};
export default Unavailable;

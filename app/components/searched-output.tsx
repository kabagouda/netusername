import { FC } from "react";
import { SocialPlatform } from "../services/api-services";
import { SocialOutput } from "./social-output";

interface SearchedOutputProps {
  username: string;
}

const SearchedOutput: FC<SearchedOutputProps> = (props) => {
  return (
    <div className="w-full max-w-xl mx-auto mt-6 space-y-3 text-gray-800 dark:text-gray-200 overflow-y-auto h-1/2">
      <ul className="space-y-3">
        {Object.keys(SocialPlatform).map((social) => {
          return (
            <li
              key={social}
              className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-gray-700"
            >
              <SocialOutput
                social={social}
                key={social}
                username={props.username}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SearchedOutput;

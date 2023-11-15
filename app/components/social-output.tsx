import React, { FC, useCallback, useEffect, useState } from "react";
import { GlobalServices } from "../services/global";
import Availaible from "./availaible";
import Unavailable from "./unavailable";
import debounce from "lodash.debounce";
import { ApiServices, SocialPlatform } from "../services/api-services";

interface SocialOutputProps {
  social: string;
  username: string;
}

export const SocialOutput: FC<SocialOutputProps> = (props) => {
  const { username, social } = props;
  const [loading, setLoading] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce(() => {
      setLoading(true);
      ApiServices.checkUsername(username, social as SocialPlatform).then(
        (res) => {
          setLoading(false);
          setIsAvailable(res?.available ?? false);
        }
      );
    }, 500),
    [username, social]
  );

  useEffect(() => {
    if (username) {
      debouncedSearch();
    }
  }, [debouncedSearch, username]);

  return (
    <>
      <span>{social}:</span>
      {loading ? (
        <div
          className={`mt-2 w-8 h-8 rounded-full border-t-2 ${GlobalServices.perfectColorOfPlatform(
            social
          )} animate-spin`}
        />
      ) : isAvailable ? (
        <Availaible />
      ) : (
        <Unavailable />
      )}
    </>
  );
};

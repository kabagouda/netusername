"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import React, { FC } from "react";
import { GlobalServices } from "./services/global";
import { debounce } from "lodash";
import { ProjectIcons } from "./utils/plaform-icons";
import StartSearching from "./components/start-searching";
import SearchedOutput from "./components/searched-output";

const debouncedSearch = debounce(() => {
  // call API
}, 500);

export default function Component() {
  const [username, setUsername] = React.useState("");

  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        Net Username
      </h1>
      <p className="mb-4 text-center text-gray-600 dark:text-gray-400">
        Discover social media profiles by username. Search for usernames across
        all social networks
      </p>
      <div className="w-full max-w-xl mx-auto flex items-center space-x-3 mb-6">
        <Input
          className="flex-grow h-10 px-4 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
          placeholder="Enter username , e.g. @elonmusk"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Button
          className="bg-black text-white"
          onClick={() => {
            // debouncedSearch();
          }}
        >
          {ProjectIcons.search}

          <span className="sr-only">Search</span>
        </Button>
      </div>
      <p className="mb-4 text-center text-gray-600 dark:text-gray-400">
        Entered username:{" "}
        <span className="font-bold">
          {GlobalServices.addAtToUsername(username)}
        </span>
      </p>
      <div className="flex items-center space-x-6">
        {ProjectIcons.facebook}
        {ProjectIcons.instagram}
        {ProjectIcons.twitter}
        {ProjectIcons.linkedin}
        {ProjectIcons.github}
      </div>
      {username.length === 0 ? (
        <StartSearching />
      ) : (
        <SearchedOutput username={username} />
      )}

      <div className="mt-auto text-center text-gray-500 dark:text-gray-400">
        <p>© 2023 All rights reserved. Made by Kab Agouda</p>
      </div>
    </section>
  );
}

"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { addAtToUsername } from "./services/global";
export default function Component() {
  const [username, setUsername] = React.useState("");
  // loading state
  const [loading, setLoading] = React.useState(false);
  // Facebook state
  const [facebookLoading, setFacebookLoading] = React.useState(false);
  const [facebookAvailable, setFacebookAvailable] = React.useState(false);

  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        Username Search
      </h1>
      <p className="mb-4 text-center text-gray-600 dark:text-gray-400">
        Discover social media profiles by username. Search for usernames across
        all social networks
      </p>
      <div className="w-full max-w-xl mx-auto flex items-center space-x-3 mb-6">
        <Input
          className="flex-grow h-10 px-4 rounded-lg bg-white dark:bg-gray-900"
          // defaultValue="@elonmusk"
          // placeholder with example @elonmusk
          placeholder="Enter username , e.g. @elonmusk"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          onClick={async () => {
            const res = await fetch(`https://api.github.com/users/${username}`);
            const data = await res.json();
            console.log(data);
          }}
        >
          <svg
            className=" h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="sr-only">Search</span>
        </Button>
      </div>
      <p className="mb-4 text-center text-gray-600 dark:text-gray-400">
        Entered username:{" "}
        <span className="font-bold">{addAtToUsername(username)}</span>
      </p>
      <div className="flex items-center space-x-6">
        <svg
          className=" h-8 w-8 text-blue-600"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
        <svg
          className=" h-8 w-8 text-blue-400"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
        <svg
          className=" h-8 w-8 text-pink-500"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
        <svg
          className=" h-8 w-8 text-blue-700"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect height="12" width="4" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
        <svg
          className=" h-8 w-8 text-black dark:text-white"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      </div>
      <div className="w-full max-w-xl mx-auto mt-6 space-y-3 text-gray-800 dark:text-gray-200 overflow-y-auto h-1/2">
        <ul className="space-y-3">
          <li className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-gray-700">
            <span>Facebook:</span>
            <div className="flex items-center space-x-2">
              <span className="font-bold">Available</span>
              <svg
                className=" h-6 w-6 text-green-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
          </li>
          <li className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-gray-700">
            <span>Twitter:</span>
            <div className="flex items-center space-x-2">
              <span className="font-bold">Unavailable</span>
              <svg
                className=" h-6 w-6 text-red-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </div>
          </li>
          <li className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-gray-700">
            <span>Instagram:</span>
            <div className="flex items-center space-x-2">
              <span className="font-bold">Available</span>
              <svg
                className=" h-6 w-6 text-green-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
          </li>
          <li className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-gray-700">
            <span>LinkedIn:</span>
            <div className="flex items-center space-x-2">
              <span className="font-bold">Unavailable</span>
              <svg
                className=" h-6 w-6 text-red-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </div>
          </li>
          <li className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-gray-700">
            <span>GitHub:</span>
            <div className="flex items-center space-x-2">
              <span className="font-bold">Available</span>
              <svg
                className=" h-6 w-6 text-green-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-auto text-center text-gray-500 dark:text-gray-400">
        <p>© 2023 All rights reserved. Made by Kab Agouda</p>
      </div>
    </section>
  );
}

import { QueryOutput } from "../models/query-output";

export class ApiServices {
  static async checkUsername(
    username: string,
    social: SocialPlatform
  ): Promise<QueryOutput | null> {
    console.log("Called checkUsername for " + username + " on " + social + "");
    try {
      let res = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/${social.toLocaleLowerCase()}/${username}`
      );
      let data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export enum SocialPlatform {
  Facebook = "facebook",
  Twitter = "twitter",
  Instagram = "instagram",
  Linkedin = "linkedin",
  Github = "github",

  // add more platforms as needed
}

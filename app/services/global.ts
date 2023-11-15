export class GlobalServices {
  // add @ to username if not present
  static addAtToUsername(username: string) {
    if (username[0] !== "@") {
      return `@${username}`;
    }
    return username;
  }

  static perfectColorOfPlatform(platform: string) {
    platform = platform.toLowerCase();

    switch (platform) {
      case "facebook":
        return "border-blue-600";
      case "twitter":
        return "border-blue-400";
      case "instagram":
        return "border-pink-500";
      case "linkedin":
        return "border-blue-700";
      case "github":
        return "dark:border-white";
      default:
        return ""; // return a default value in case the platform is not matched
    }
  }
}

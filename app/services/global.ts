// add @ to username if not present
export function addAtToUsername(username: string) {
  if (username[0] !== "@") {
    return `@${username}`;
  }
  return username;
}

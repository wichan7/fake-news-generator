import crypto from "node:crypto";

/**
 * Generates an MD5 hash from the given input string
 * @param input - The string to hash
 * @returns The MD5 hash as a hexadecimal string
 */
export const generateMD5Hash = (input: string): string => {
  return crypto.createHash("md5").update(input).digest("hex");
};

/**
 * Verifies if a given hash matches the hash of an input string
 * @param input - The original string
 * @param hash - The hash to verify against
 * @returns boolean indicating if the hash matches
 */
export const verifyMD5Hash = (input: string, hash: string): boolean => {
  const computedHash = generateMD5Hash(input);
  return computedHash === hash;
};

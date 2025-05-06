import { generateMD5Hash, verifyMD5Hash } from "./hash.util";

describe("Hash Utils", () => {
  const testKey = "asd123";
  const expectedHash = "bfd59291e825b5f2bbf1eb76569f8fe7";

  describe("generateMD5Hash", () => {
    it("should generate correct MD5 hash for the given input", () => {
      const hash = generateMD5Hash(testKey);
      expect(hash).toBe(expectedHash);
    });

    it("should generate different hashes for different inputs", () => {
      const hash1 = generateMD5Hash(testKey);
      const hash2 = generateMD5Hash("different-key");
      expect(hash1).not.toBe(hash2);
    });
  });

  describe("verifyMD5Hash", () => {
    it("should return true for matching input and hash", () => {
      const isValid = verifyMD5Hash(testKey, expectedHash);
      expect(isValid).toBe(true);
    });

    it("should return false for non-matching input and hash", () => {
      const isValid = verifyMD5Hash("wrong-key", expectedHash);
      expect(isValid).toBe(false);
    });
  });
});

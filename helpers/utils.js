import elliptic from "elliptic";

const EC = new elliptic.ec("secp256k1");

export const createKeyPair = () => {
  const key = EC.genKeyPair();
  const publicKey = key.getPublic("hex");
  const privateKey = key.getPrivate("hex");

  console.log("Your public key: ", publicKey);
  console.log("Your private key: ", privateKey);

  return {
    public: publicKey,
    private: privateKey,
  };
};

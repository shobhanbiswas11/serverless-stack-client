export default {
  s3: {
    REGION: "ap-south-1",
    BUCKET: "shobhan-notes-app-uploads"
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://02kr621uz0.execute-api.ap-south-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_ruupQm1kx",
    APP_CLIENT_ID: "4b4gn35d2dmktm50fh6mdnfvhr",
    IDENTITY_POOL_ID: "ap-south-1:00b69030-b5b3-41a8-8b41-c5e6103829cb"
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_8JyGasAGaYlyGgirlU5evj9K00UtxdcEHW"
};

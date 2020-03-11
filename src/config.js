// export default {
//   s3: {
//     REGION: "ap-south-1",
//     BUCKET: "shobhan-notes-app-uploads"
//   },
//   apiGateway: {
//     REGION: "ap-south-1",
//     URL: "https://02kr621uz0.execute-api.ap-south-1.amazonaws.com/prod"
//   },
//   cognito: {
//     REGION: "ap-south-1",
// USER_POOL_ID: "ap-south-1_ruupQm1kx",
// APP_CLIENT_ID: "4b4gn35d2dmktm50fh6mdnfvhr",
// IDENTITY_POOL_ID: "ap-south-1:00b69030-b5b3-41a8-8b41-c5e6103829cb"
//   },
//   MAX_ATTACHMENT_SIZE: 5000000,
//   STRIPE_KEY: "pk_test_8JyGasAGaYlyGgirlU5evj9K00UtxdcEHW"
// };

const dev = {
  STRIPE_KEY: "pk_test_8JyGasAGaYlyGgirlU5evj9K00UtxdcEHW",
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1d0yx1ldd1luq"
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://m81onu50lg.execute-api.ap-south-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_ruupQm1kx",
    APP_CLIENT_ID: "4b4gn35d2dmktm50fh6mdnfvhr",
    IDENTITY_POOL_ID: "ap-south-1:00b69030-b5b3-41a8-8b41-c5e6103829cb"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_8JyGasAGaYlyGgirlU5evj9K00UtxdcEHW",
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-177hl6ag2dbai"
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://m81onu50lg.execute-api.ap-south-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_wPaQ8if8w",
    APP_CLIENT_ID: "q4q5a2aq7evfmjug28f8vlusq",
    IDENTITY_POOL_ID: "ap-south-1:0259d6d2-4ec6-4b3d-8758-c103e62fbbc5"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

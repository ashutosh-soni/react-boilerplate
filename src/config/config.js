import commonConfig from "./common-config";
import devConfig from "./dev/dev-config";
import testConfig from "./testing/testing-config";
import prodConfig from "./prod/prod-config";

let _config = { ...commonConfig };

export const configInit = () => {
  const REACT_APP_ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;

  switch (REACT_APP_ENVIRONMENT) {
    case "productions":
      _config = {
        ..._config,
        ...prodConfig,
      };
      break;
    case "testing":
      _config = {
        ..._config,
        ...testConfig,
      };
      break;
    default:
      _config = {
        ..._config,
        ...devConfig,
      };
  }

  // deleting envVars key because it just use to prepare config
  delete _config.envVars;

  return _config;
};

export const getConfig = () => {
  return _config;
};

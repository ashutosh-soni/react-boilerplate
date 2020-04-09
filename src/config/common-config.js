const commonConfig = {

    // Collection of environment variable definitions. These override the configuration
    // obtained from the config files. The **key** represents the environment variable
    // name suffix and the value represents the index in the config map.
    // NOTE: If you save this in redux store make sure to remove this key 'envVars' as this only meant to 
    // know what are things coming from .env file and where there are getting mapped.
    envVars: {
        // Shows active environment like [prod, testing, dev]
        REACT_APP_ENVIRONMENT: ["activeEnv"],
    }, 

    activeEnv: null,
    //only for information and troubleshooting
    version: null,
    isDev : false,

} 

export default commonConfig;
// Use autorestart if in Docker
// Use instances=1 if in Docker

module.exports = {
    apps : [{
    name: 'sts-nextClass',
    script: './bin/www',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    exec_mode: 'cluster',
    watch: false,
    instances: 1,
    instance_id_env: "NODE_APP_INSTANCE",
    error_file : "logs/error.log",
    out_file : "logs/out.log",
    merge_logs: true,
    env: {
        PORT: 3000,
        NODE_ENV: "development",
        NODE_OPTIONS: "--inspect --inspect-port=9232"
        },   
    env_production: {
    NODE_ENV: 'production',
    autorestart: false,
    PORT: 3000
    }
    }]
    };
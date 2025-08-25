require("dotenv").config();

module.exports = {
  apps: [
    {
      env: {
        GAME_ORCHESTRATOR: true,
      },
      exec_mode: "cluster",
      instances: 1,
      name: "resync-backend",
      script: "./dist/backend/src/main.js",
    },
  ],
};

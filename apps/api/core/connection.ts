import { SQL } from "bun";

const sql = new SQL({
  url: process.env.POSTGRES_URL,
  max: Number(process.env.POSTGRES_MAX_POOL_SIZE || 10),
  idleTimeout: Number(process.env.POSTGRES_IDLE_TIMEOUT_SECONDS || 30),
  maxLifetime: Number(process.env.POSTGRES_MAX_LIFE_SECONDS || 0), // 0 = forever
  connectionTimeout: Number(
    process.env.POSTGRES_CONNECTION_TIMEOUT_SECONDS || 30,
  ),

  onconnect: (_client) => {
    console.log("[core.connections] RDB connection established.");
  },
  onclose: (_client) => {
    console.log("[core.connections] RDB Connection closed");
  },
});

export { sql };

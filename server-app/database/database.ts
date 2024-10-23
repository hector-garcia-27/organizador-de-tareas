import { Pool } from 'pg'

export const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "CHOpancho.01",
    database: "tasklist",
    allowExitOnIdle: true
})


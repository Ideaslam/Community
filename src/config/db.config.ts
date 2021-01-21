export class DbConfig {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: string[];
    synchronize: boolean;
    migrationsTableName: string;
    migrations: string[];
    cli: object
}
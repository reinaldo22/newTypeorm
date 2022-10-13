import { DataSource } from "typeorm";
import { User } from "./models/User";

export const AppDataSource = new DataSource({
   type: "mysql",
   host: "localhost",
   port: 3306,
   username: "root",
   password: "root",
   database: "blog",
   entities: [User],
   synchronize: true,
   logging: false,
})
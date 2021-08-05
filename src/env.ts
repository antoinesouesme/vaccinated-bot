import { config } from 'dotenv';
const env = config().parsed;

export class Env {
    static CONSUMER_KEY: string = process.env.CONSUMER_KEY ? process.env.CONSUMER_KEY : env.CONSUMER_KEY;
    static CONSUMER_SECRET: string = process.env.CONSUMER_SECRET ? process.env.CONSUMER_SECRET : env.CONSUMER_SECRET;
    static ACCESS_TOKEN: string = process.env.ACCESS_TOKEN ? process.env.ACCESS_TOKEN : env.ACCESS_TOKEN;
    static ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET ? process.env.ACCESS_TOKEN_SECRET : env.ACCESS_TOKEN_SECRET;
}
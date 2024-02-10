import { Client, GatewayIntentBits } from "discord.js";
import interactionCreate from "./events/interactionCreate";
import ready from "./events/ready";
import { token } from "./config";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', ready);

client.on('interactionCreate', interactionCreate);

console.log('Logging in...');
client.login(token);

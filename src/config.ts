import dotenv from 'dotenv';

dotenv.config();

export const token = process.env.DISCORD_BOT_TOKEN;

export const playFabApiKey = process.env.PLAYFAB_API_KEY;

export const channelId = process.env.CHANNEL_ID;

export const playFabTitleId = process.env.PLAYFAB_TITLE_ID;

const requiredConfigs = [token, playFabApiKey, channelId];
const configNames = ['DISCORD_BOT_TOKEN', 'PLAYFAB_API_KEY', 'CHANNEL_ID'];
requiredConfigs.forEach((value, index) => {
    if (!value) {
        console.warn(`Warning: Environment variable ${configNames[index]} is not set.`);
    }
});

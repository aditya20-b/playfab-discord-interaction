import { Client, Snowflake, ButtonBuilder, ActionRowBuilder, ButtonStyle, TextChannel} from 'discord.js';
import { channelId } from '../config';

async function ready(client: Client) {
    console.log('Ready!');
    console.log('Logged in as ' + client.user?.tag);
   
    const channel = client.channels.cache.get(channelId as Snowflake) as TextChannel; // certified ts moment, it'll cry that channel doesnt have send method so we need to cast it to TextChannel 
    const button = new ButtonBuilder()
        .setCustomId('check_beta_status')
        .setLabel('Check Beta Status')
        .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);
    const message = {
        content: 'Click the button below to check your beta status:',
        components: [row],
    };

    channel?.send(message);

}


export default ready;
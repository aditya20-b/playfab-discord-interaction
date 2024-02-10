import {Client} from 'discord.js';

async function ready(client: Client) {
    console.log('Ready!');
    console.log('Logged in as ' + client.user?.tag);
}


export default ready;
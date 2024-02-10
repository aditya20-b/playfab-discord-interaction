import axios from 'axios';
import { playFabApiKey, playFabTitleId } from '../config';
import { PlayerProfileApiResponse } from '../types';

async function getPlayerName(playFabId: string) {
    const statsUrl = `https://${playFabTitleId}.playfabapi.com/Server/GetPlayerProfile`;

    const response = await axios.post<PlayerProfileApiResponse>(statsUrl, {
        PlayFabId: playFabId,
    }, {
        headers: {
            'X-SecretKey': playFabApiKey,
            'Content-Type': 'application/json',
        },
    });

    const playerName = response.data.data.PlayerProfile.DisplayName;

    return playerName;
}

export default getPlayerName;
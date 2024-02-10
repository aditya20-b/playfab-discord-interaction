import axios from 'axios';
import { playFabApiKey, playFabTitleId } from '../config';
import { StatsApiResponse, Statistic } from '../types';


export async function getBetaStatus(playFabId: string) {
    const statsUrl = `https://${playFabTitleId}.playfabapi.com/Server/GetPlayerStatistics`;

    const response = await axios.post<StatsApiResponse>(statsUrl, {
        PlayFabId: playFabId,
    }, {
        headers: {
            'X-SecretKey': playFabApiKey,
            'Content-Type': 'application/json',
        },
    });

    const statistics = response.data.data.Statistics;
    const isBeta = statistics.find((stat: Statistic) => stat.StatisticName === 'is_beta') ?? false;
    // this returns {"StatisticName":"is_beta","Value":1,"Version":0}
    // but we need a boolean based on the value
    // so there are three cases:
    // 1. stat is undefined, which means the player is not a beta player
    // 2. stat is defined and stat.Value is 0, which means the player is not a beta player
    // 3. stat is defined and stat.Value is 1, which means the player is a beta player

    return isBeta ? isBeta.Value === 1 : false;
}

export default getBetaStatus;

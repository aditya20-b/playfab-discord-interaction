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

    return isBeta;
}

export default getBetaStatus;

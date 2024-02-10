interface ApiResponse<T> {
    code: number;
    status: string;
    data: T;
}

interface PlayerData {
    PlayFabId: string;
    Statistics: Statistic[];
}

interface Statistic {
    StatisticName: string;
    Value: number;
    Version: number;
}

interface PlayerProfile {
    PublisherId: string;
    TitleId: string;
    PlayerId: string;
    DisplayName: string;
}


// Generics are nice 
type StatsApiResponse = ApiResponse<PlayerData>;
type PlayerProfileApiResponse = ApiResponse<{ PlayerProfile: PlayerProfile }>;

export { StatsApiResponse, PlayerProfileApiResponse, PlayerData, Statistic };

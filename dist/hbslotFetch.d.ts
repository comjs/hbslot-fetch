declare namespace HbslotFetch {
    namespace slots {
        interface Item {
            productName: string;
            keyword: string;
            startDate: string;
            endDate: string;
            remain: number;
            rank: number;
            time: string;
            mid: number;
        }
        interface Result {
            list: Item[];
        }
    }
}
declare class HbslotFetch {
    private readonly host;
    private readonly userAgent;
    private cookieJar;
    private id;
    private pw;
    constructor(id: string, pw: string);
    login(): Promise<void>;
    slots(): Promise<{
        list: HbslotFetch.slots.Item[];
    }>;
}
export default HbslotFetch;

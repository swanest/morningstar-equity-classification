declare module 'morningstar-equity-classification' {
    export interface IEquityData {
        code: number;
        description?: string;
        industry?: number;
        industryGroup?: number;
        name: string;
        sector?: number;
        superSector?: number;
        type: string;
    }

    export function above(code: string | number): IEquityData[];

    export function all(): {
        [code: string]: IEquityData;
    };

    export function below(code: string | number): IEquityData[];

    export function find(code: string | number): IEquityData;

    export function search(keyword?: string, type?: string): IEquityData[];
}

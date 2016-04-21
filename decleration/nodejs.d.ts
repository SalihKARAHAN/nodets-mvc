declare module 'http' {
    export interface Server {
        listen(port: number, url: string): void;
        listen(port: number, callback: any): void;
        listen(port: number, url: string, callback: any): void;
    }
    export function createServer(httpManager: any): Server;
}

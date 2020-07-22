export interface Command {
    command: string;
    description: string;
    execute: Function;
}
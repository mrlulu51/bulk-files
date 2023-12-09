import { Command } from "commander";

interface ICommand {
    program(program: Command): void;
    run(...args: any[]): void | Promise<void>;
}

export { ICommand }
import { readdirSync } from "fs";
import { join } from "path";
import { ICommand } from '../schemas/ICommand';
import { Command } from "commander";

async function registerCLICommands(program: Command) {
    const commands = await readdirSync(join(__dirname, '..', 'commands')).filter(file => !file.endsWith('.map'))

    for (const command of commands) {
        const cliCommand = (await import(join(__dirname, '..', 'commands', `${command}`))).default as ICommand;

        cliCommand.program(program);
    }
}

export { registerCLICommands }
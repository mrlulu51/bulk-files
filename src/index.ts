import figlet from 'figlet';
import { Command } from 'commander';
import { registerCLICommands } from './handlers/CommandHandler';

const program = new Command();

console.log(figlet.textSync('Bulk Files'))

program
    .version('1.0.0')
    .description('A CLI tool for easily manage a lot of files quickly.')
    .option('ren [options] {args}', "Quick rename files.")

registerCLICommands(program);

program.parse(process.argv)

const option = program.opts();

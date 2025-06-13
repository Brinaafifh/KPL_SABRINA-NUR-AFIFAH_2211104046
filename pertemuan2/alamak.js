const readline = require("readline");

class StateMachine {
    constructor() {
        this.states = {
            START: "START",
            GAME: "GAME",
            PAUSE: "PAUSE",
            EXIT: "EXIT"
        };
        this.currentState = this.states.START;

        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    run() {
        console.log(`\n${this.currentState} SCREEN`);
        this.askCommand();
    }

    askCommand() {
        this.rl.question("Enter Command: ", (command) => {
            this.transition(command.trim().toUpperCase());

            if (this.currentState === this.states.EXIT) {
                console.log("EXIT SCREEN");
                this.rl.close();
            } else {
                console.log(`\n${this.currentState} SCREEN`);
                this.askCommand();
            }
        });
    }

    transition(command) {
        switch (this.currentState) {
            case this.states.START:
                if (command === "ENTER") this.currentState = this.states.GAME;
                else if (command === "QUIT") this.currentState = this.states.EXIT;
                else console.log("Invalid command! Use ENTER to start or QUIT to exit.");
                break;

            case this.states.GAME:
                if (command === "ESC") this.currentState = this.states.PAUSE;
                else console.log("Unknown command! Press ESC to pause.");
                break;

            case this.states.PAUSE:
                if (command === "BACK") this.currentState = this.states.GAME;
                else if (command === "HOME") this.currentState = this.states.START;
                else if (command === "QUIT") this.currentState = this.states.EXIT;
                else console.log("Invalid command! Use BACK to resume, HOME to restart, or QUIT to exit.");
                break;
        }
    }
}

// Jalankan State Machine
const game = new StateMachine();
game.run();

const readline = require("readline");

class GameFSM {
    constructor() {
        this.states = {
            START: "START",
            PLAYING: "PLAYING",
            GAME_OVER: "GAME_OVER",
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
                console.log("Exiting game...");
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
                if (command === "PLAY") this.currentState = this.states.PLAYING;
                else if (command === "EXIT") this.currentState = this.states.EXIT;
                else console.log("Invalid command! Use PLAY to start or EXIT to quit.");
                break;

            case this.states.PLAYING:
                if (command === "LOSE") this.currentState = this.states.GAME_OVER;
                else if (command === "EXIT") this.currentState = this.states.EXIT;
                else console.log("Invalid command! Use LOSE to end the game or EXIT to quit.");
                break;

            case this.states.GAME_OVER:
                if (command === "RESTART") this.currentState = this.states.START;
                else if (command === "EXIT") this.currentState = this.states.EXIT;
                else console.log("Invalid command! Use RESTART to play again or EXIT to quit.");
                break;
        }
    }
}

// Jalankan Game FSM
const game = new GameFSM();
game.run();

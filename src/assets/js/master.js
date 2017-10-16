class Master {
    constructor () {
        this.socket = io.connect("ws://127.0.0.1:444");
    };

    onMessage(msg) {
        console.log()
    };
};
new Master()
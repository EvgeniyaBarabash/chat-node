const ws = new require("ws");

const wsServer = new ws.Server({ port: 5000 });

const users = [];

wsServer.on("connection", (newUser) => {
    users.push(newUser);
    newUser.on('message', (data) => {
        const message = JSON.parse(data);
        const newData = JSON.stringify(message);
        users.forEach(user => {
            if (user !== newUser) {
                user.send(newData);
            }
        })
    });
})



        // console.log('Новое соединение с фронтенда');
        // setTimeout(() => {
        //     newclient.send("Добро пожаловать на бекэнд")
        // }, 3000);

        // clients.forEach(client => {
        //     if (client !== newclient) {
        //         client.send("У нас новый член команды")
        //     }
        // })

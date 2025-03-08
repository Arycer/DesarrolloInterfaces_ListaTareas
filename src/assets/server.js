import jsonServer from 'json-server';
import auth from 'json-server-auth';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.db = router.db;
server.use(middlewares);

const rules = auth.rewriter({
    "tasks": 660
});

server.use(rules);
server.use(auth);
server.use(router);

const port = 3000;
server.listen(port, () => {
    console.log('Ejecutando el servidor REST en localhost:', port);
});

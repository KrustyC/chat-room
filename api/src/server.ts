// import { ChatServer } from './ChatServer';

// let app = new ChatServer().app;

// var server = app.listen(3000, () => {
//   console.log(‘server is running on port’, server.address().port);
//  });

// export { app };

import { startAPI } from './bootstrap/setup';

startAPI();
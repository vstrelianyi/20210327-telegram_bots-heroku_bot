require( 'dotenv' ).config(); // writes all key-value pairs from .env to process.env

const { Telegraf, } = require( 'telegraf' );

const { BOT_TOKEN, URL, } = process.env;
const PORT = process.env.PORT || 5000;

const bot = new Telegraf( BOT_TOKEN );

bot.start( ctx => ctx.reply( 'Welcome' ) );
bot.help( ctx => ctx.reply( 'Send me a sticker' ) );
bot.on( 'sticker', ctx => ctx.reply( 'Great' ) );
bot.hears( 'hi', ctx => ctx.reply( 'hey there' ) );

bot.telegram.setWebhook( `${ URL }/bot${ BOT_TOKEN }` );
bot.startWebhook( `/bot${ BOT_TOKEN }`, null, 5000 );
console.log( `Launched with webhook at ${ new Date() }` );

// bot.launch()
//   .then( res => console.log( `Launched at ${ new Date() }` ) )
//   .catch( err => console.log( 'Error at launch', err ) );

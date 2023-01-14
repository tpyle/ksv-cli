const { encrypt, decrypt } = require('./crypto');

async function main() {
    let password = 'super secret password';
    let message = 'super secret message';

    console.log(await encrypt(message, password));

    console.log(await decrypt(await encrypt(message, password), password));
}

main()
    .then(() => {
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })
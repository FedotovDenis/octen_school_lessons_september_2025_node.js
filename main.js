const readLine = require('node:readline');
const { createReadStream } = require('node:fs');
const { createWriteStream} = require('node:fs');

const readEmails = async () => {
    try {
        const fileStream = createReadStream('emails.txt', 'utf-8');
        const writeStream = createWriteStream('gmail_emails.txt', 'utf-8')
        const rl = readLine.createInterface({input: fileStream});

        for await (const line of rl) {
            const parts = line.split(/\s+/);
            const email = parts[1];
            if (email.endsWith('@gmail.com')) {
                writeStream.write(`${email}\n`)
        }
        }
        writeStream.end();
        rl.close();

        console.log('Готово, всі адреси записані')
    } catch (error) {
        console.error('Произошла помилка', error)
    }
}
readEmails();
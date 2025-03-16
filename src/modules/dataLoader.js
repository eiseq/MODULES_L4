const https = require('https');

function dataLoading(url, callback) {
    const result = {
        data: [],
        isLoading: true,
        error: null
    };

    https.get(url, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            try {
                result.data = JSON.parse(data);
            } catch {
                result.error = 'Ошибка при парсинге JSON';
            }
            result.isLoading = false;
            callback(result);
        });

    }).on('error', (err) => {
        result.error = err.message;
        result.isLoading = false;
        callback(result);
    });
}

module.exports = dataLoading;
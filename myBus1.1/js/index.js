let request = require('request');
let cheerio = require('cheerio');

 // REST API 경로
  const $url = 'http://data.geoje.go.kr/rfcapi/rest/geojebis/getGeojebisBusline';
 // api key
  const $key = '13BNQreTIhd7rEK1zkf4AmYxzLq1aOAf2aHtwpBMBApzgarsPRMjp0PvWyRjUBtAn7BOGPiJ21USVhA62wNANA==';
  pageSize = '10';

// const $url = 'http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRouteAll';
// const $key =  '13BNQreTIhd7rEK1zkf4AmYxzLq1aOAf2aHtwpBMBApzgarsPRMjp0PvWyRjUBtAn7BOGPiJ21USVhA62wNANA==';
const $busid = '100100118';
const $api_url = $url + '?authApiKey='+ $key + '&pageSize=' + pageSize;
console.log($api_url);


request($api_url, function(err,res,body) {
    $ = cheerio.load(body);

    $('list').each(function(idx) {
        let no1 = $(this).find('dir_up_name').text();
        console.log(`test : ${no1}`);
    });
});



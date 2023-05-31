 let request = require('request');
 let cheerio = require('cheerio');



  // REST API 경로
   const $url = 'http://data.geoje.go.kr/rfcapi/rest/geojebis/getGeojebisBusarrive';
  // api key
   const $key = '13BNQreTIhd7rEK1zkf4AmYxzLq1aOAf2aHtwpBMBApzgarsPRMjp0PvWyRjUBtAn7BOGPiJ21USVhA62wNANA%3D%3D';
 //   pageSize = '10';

 const $line_name = '16-3';
 const $api_url = $url + '?authApiKey='+ $key + '&line_name=' + $line_name;
 console.log($api_url);


 request($api_url, function(err,res,body) {
      var $ = cheerio.load(body, {xmlMode : true});

      $('list').each(function(idx) {
          let num = $(this).find('num').text();
          let busline = $(this).find('line_name').text();
          let busstop_name = $(this).find('busstop_name').text();
          let ars_id = $(this).find('ars_id').text();
          console.log(`순번 : ${num}`);
          console.log(`노선번호 : ${busline}`);
          console.log(`현재정류장 : ${busstop_name}`);
          console.log(`정류장 번호 : ${ars_id}`);
          console.log('----------------------------')
     });
 });







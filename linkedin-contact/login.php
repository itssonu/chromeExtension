<?php


$result_json = array('name' => 'test', 'age' => '16');

// headers for not caching the results
header('Access-Control-Allow-Origin: *');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

// headers to tell that result is JSON
header('Content-type: application/json');

// send the result now
echo json_encode($result_json);

// returnSucess(json_encode($result_json));
// returnSucess($result_json);

// $conferenceLink = "bcjhdbsjvbdcjhvdsjhc";
// return (array("conferenceLink" => $conferenceLink));
// return "sonu";

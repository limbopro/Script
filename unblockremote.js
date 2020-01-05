var body = $response.body;
body = '\/*\n@supported EEDF545B4518\n*\/\n' + body;

$done(body);

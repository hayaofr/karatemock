function() {
   var requests = karate.get('requests');
   var traceJson = {};
   var resp = {};
   var nextId = karate.get('nextId');
   var time = new Date().getTime();
   traceJson.date = Number(time);
   traceJson.num = nextId();
   traceJson.requestUri = karate.get('requestUri');
   traceJson.requestHeaders = karate.get('requestHeaders');
   traceJson.requestBody = karate.get('request');
   traceJson.Response = {} ;
   traceJson.Response.status = karate.get('responseStatus');
   traceJson.Response.responseBody = karate.get('response');
   karate.log('traceJson: ' + traceJson);
   requests.add(traceJson);
   karate.set('requests',requests);
}
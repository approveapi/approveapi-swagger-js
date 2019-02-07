# ApproveapiSwaggerJs.ApproveApi

All URIs are relative to *https://virtserver.swaggerhub.com/rejberg/ApproveAPI/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPrompt**](ApproveApi.md#createPrompt) | **POST** /prompt | Sending a prompt
[**getPrompt**](ApproveApi.md#getPrompt) | **GET** /prompt/{id} | Retrieve a prompt
[**getPromptStatus**](ApproveApi.md#getPromptStatus) | **GET** /prompt/{id}/status | Check prompt status


<a name="createPrompt"></a>
# **createPrompt**
> Prompt createPrompt(user, body, opts)

Sending a prompt

Creates a prompt and pushes it to the user (sends via email, sms, or other supported protocols).

### Example
```javascript
var ApproveapiSwaggerJs = require('approveapi-swagger-js');
var defaultClient = ApproveapiSwaggerJs.ApiClient.instance;

// Configure HTTP basic authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.username = 'YOUR USERNAME';
apiKey.password = 'YOUR PASSWORD';

var apiInstance = new ApproveapiSwaggerJs.ApproveApi();

var user = "user_example"; // String | The user to send the approval request to. Can be either an email address or a phone number.

var body = "body_example"; // String | The body of the approval request to show the user.

var opts = { 
  'title': "title_example", // String | The title of an approval request. Defaults to an empty string.
  'approve_text': "approve_text_example", // String | The approve action text. Defaults to 'Approve'.
  'reject_text': "reject_text_example", // String | The reject action text. Defaults to 'Reject'.
  'long_poll': true // Boolean | If true, the request waits (long-polls) until the user responds to the prompt or more than 10 minutes pass. Defaults to false.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPrompt(user, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user to send the approval request to. Can be either an email address or a phone number. | 
 **body** | **String**| The body of the approval request to show the user. | 
 **title** | **String**| The title of an approval request. Defaults to an empty string. | [optional] 
 **approve_text** | **String**| The approve action text. Defaults to &#39;Approve&#39;. | [optional] 
 **reject_text** | **String**| The reject action text. Defaults to &#39;Reject&#39;. | [optional] 
 **long_poll** | **Boolean**| If true, the request waits (long-polls) until the user responds to the prompt or more than 10 minutes pass. Defaults to false. | [optional] 

### Return type

[**Prompt**](Prompt.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getPrompt"></a>
# **getPrompt**
> Prompt getPrompt(id, opts)

Retrieve a prompt

Retrieve the prompt object with the given ID.

### Example
```javascript
var ApproveapiSwaggerJs = require('approveapi-swagger-js');
var defaultClient = ApproveapiSwaggerJs.ApiClient.instance;

// Configure HTTP basic authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.username = 'YOUR USERNAME';
apiKey.password = 'YOUR PASSWORD';

var apiInstance = new ApproveapiSwaggerJs.ApproveApi();

var id = "id_example"; // String | The identifier for a pending or completed prompt. This is returned when you create a prompt.

var opts = { 
  'long_poll': true // Boolean | If true, the request waits (long-polls) until the user responds to the prompt or more than 10 minutes pass. Defaults to false.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPrompt(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The identifier for a pending or completed prompt. This is returned when you create a prompt. | 
 **long_poll** | **Boolean**| If true, the request waits (long-polls) until the user responds to the prompt or more than 10 minutes pass. Defaults to false. | [optional] 

### Return type

[**Prompt**](Prompt.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getPromptStatus"></a>
# **getPromptStatus**
> PromptStatus getPromptStatus(id)

Check prompt status

Returns whether a prompt has been completed by the user. This request does not require authentication, and so can be used client-side without sharing API credentials.

### Example
```javascript
var ApproveapiSwaggerJs = require('approveapi-swagger-js');

var apiInstance = new ApproveapiSwaggerJs.ApproveApi();

var id = "id_example"; // String | The prompt identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPromptStatus(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The prompt identifier. | 

### Return type

[**PromptStatus**](PromptStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


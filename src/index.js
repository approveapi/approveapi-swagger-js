/**
 * ApproveAPI
 * The simple API to request a user's approval on anything via email + sms.
 *
 * OpenAPI spec version: 1
 * Contact: dev@approveapi.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/Prompt', 'model/PromptAnswer', 'model/PromptStatus', 'api/ApproveApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Error'), require('./model/Prompt'), require('./model/PromptAnswer'), require('./model/PromptStatus'), require('./api/ApproveApi'));
  }
}(function(ApiClient, Error, Prompt, PromptAnswer, PromptStatus, ApproveApi) {
  'use strict';

  /**
   * The_simple_API_to_request_a_users_approval_on_anything_via_email__sms_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ApproveapiSwaggerJs = require('index'); // See note below*.
   * var xxxSvc = new ApproveapiSwaggerJs.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ApproveapiSwaggerJs.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ApproveapiSwaggerJs.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ApproveapiSwaggerJs.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The Prompt model constructor.
     * @property {module:model/Prompt}
     */
    Prompt: Prompt,
    /**
     * The PromptAnswer model constructor.
     * @property {module:model/PromptAnswer}
     */
    PromptAnswer: PromptAnswer,
    /**
     * The PromptStatus model constructor.
     * @property {module:model/PromptStatus}
     */
    PromptStatus: PromptStatus,
    /**
     * The ApproveApi service constructor.
     * @property {module:api/ApproveApi}
     */
    ApproveApi: ApproveApi
  };

  return exports;
}));
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ApproveapiSwaggerJs) {
      root.ApproveapiSwaggerJs = {};
    }
    root.ApproveapiSwaggerJs.PromptAnswer = factory(root.ApproveapiSwaggerJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PromptAnswer model module.
   * @module model/PromptAnswer
   * @version 1
   */

  /**
   * Constructs a new <code>PromptAnswer</code>.
   * @alias module:model/PromptAnswer
   * @class
   * @param result {Boolean} The user's answer to whether or not they approve this prompt.
   * @param time {Number} The unix timestamp when the user answered the prompt.
   */
  var exports = function(result, time) {
    var _this = this;

    _this['result'] = result;
    _this['time'] = time;
  };

  /**
   * Constructs a <code>PromptAnswer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PromptAnswer} obj Optional instance to populate.
   * @return {module:model/PromptAnswer} The populated <code>PromptAnswer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'Boolean');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The user's answer to whether or not they approve this prompt.
   * @member {Boolean} result
   */
  exports.prototype['result'] = undefined;
  /**
   * The unix timestamp when the user answered the prompt.
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;



  return exports;
}));


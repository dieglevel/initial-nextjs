# AuthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authControllerRegister**](#authcontrollerregister) | **POST** /api/auth/register | |
|[**authControllerResendOtp**](#authcontrollerresendotp) | **POST** /api/auth/resend-otp | |
|[**authControllerVerifyRegisterOtp**](#authcontrollerverifyregisterotp) | **POST** /api/auth/verify-register-otp | |

# **authControllerRegister**
> AuthControllerRegister200Response authControllerRegister(createAccountRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    CreateAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let createAccountRequest: CreateAccountRequest; //

const { status, data } = await apiInstance.authControllerRegister(
    createAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAccountRequest** | **CreateAccountRequest**|  | |


### Return type

**AuthControllerRegister200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success response with single object |  -  |
|**400** | Failed to create account. |  -  |
|**409** | Account already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerResendOtp**
> AuthControllerResendOtp200Response authControllerResendOtp(resendOtpRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    ResendOtpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let resendOtpRequest: ResendOtpRequest; //

const { status, data } = await apiInstance.authControllerResendOtp(
    resendOtpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resendOtpRequest** | **ResendOtpRequest**|  | |


### Return type

**AuthControllerResendOtp200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success response with single object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerVerifyRegisterOtp**
> AuthControllerVerifyRegisterOtp200Response authControllerVerifyRegisterOtp(verifyRegisterOtpRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    VerifyRegisterOtpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let otpToken: string; //Token for otp verification (default to undefined)
let verifyRegisterOtpRequest: VerifyRegisterOtpRequest; //

const { status, data } = await apiInstance.authControllerVerifyRegisterOtp(
    otpToken,
    verifyRegisterOtpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyRegisterOtpRequest** | **VerifyRegisterOtpRequest**|  | |
| **otpToken** | [**string**] | Token for otp verification | defaults to undefined|


### Return type

**AuthControllerVerifyRegisterOtp200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success response with single object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


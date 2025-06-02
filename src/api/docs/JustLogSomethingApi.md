# JustLogSomethingApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**justLogSomethingControllerCreate**](#justlogsomethingcontrollercreate) | **POST** /api/just-log-something | |
|[**justLogSomethingControllerFindAll**](#justlogsomethingcontrollerfindall) | **GET** /api/just-log-something | |
|[**justLogSomethingControllerFindOne**](#justlogsomethingcontrollerfindone) | **GET** /api/just-log-something/{id} | |
|[**justLogSomethingControllerRemove**](#justlogsomethingcontrollerremove) | **DELETE** /api/just-log-something/{id} | |
|[**justLogSomethingControllerUpdate**](#justlogsomethingcontrollerupdate) | **PATCH** /api/just-log-something/{id} | |

# **justLogSomethingControllerCreate**
> justLogSomethingControllerCreate(body)


### Example

```typescript
import {
    JustLogSomethingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JustLogSomethingApi(configuration);

let body: object; //

const { status, data } = await apiInstance.justLogSomethingControllerCreate(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **justLogSomethingControllerFindAll**
> justLogSomethingControllerFindAll()


### Example

```typescript
import {
    JustLogSomethingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JustLogSomethingApi(configuration);

const { status, data } = await apiInstance.justLogSomethingControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **justLogSomethingControllerFindOne**
> justLogSomethingControllerFindOne()


### Example

```typescript
import {
    JustLogSomethingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JustLogSomethingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.justLogSomethingControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **justLogSomethingControllerRemove**
> justLogSomethingControllerRemove()


### Example

```typescript
import {
    JustLogSomethingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JustLogSomethingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.justLogSomethingControllerRemove(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **justLogSomethingControllerUpdate**
> justLogSomethingControllerUpdate(body)


### Example

```typescript
import {
    JustLogSomethingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JustLogSomethingApi(configuration);

let id: string; // (default to undefined)
let body: object; //

const { status, data } = await apiInstance.justLogSomethingControllerUpdate(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


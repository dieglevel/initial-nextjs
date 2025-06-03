# DetailInformationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**detailInformationControllerCreate**](#detailinformationcontrollercreate) | **POST** /api/detail-information | |
|[**detailInformationControllerFindAll**](#detailinformationcontrollerfindall) | **GET** /api/detail-information | |
|[**detailInformationControllerFindOne**](#detailinformationcontrollerfindone) | **GET** /api/detail-information/{id} | |
|[**detailInformationControllerRemove**](#detailinformationcontrollerremove) | **DELETE** /api/detail-information/{id} | |
|[**detailInformationControllerUpdate**](#detailinformationcontrollerupdate) | **PATCH** /api/detail-information/{id} | |

# **detailInformationControllerCreate**
> DetailInformationControllerCreate200Response detailInformationControllerCreate(createDetailInformationDto)


### Example

```typescript
import {
    DetailInformationApi,
    Configuration,
    CreateDetailInformationDto
} from './api';

const configuration = new Configuration();
const apiInstance = new DetailInformationApi(configuration);

let createDetailInformationDto: CreateDetailInformationDto; //

const { status, data } = await apiInstance.detailInformationControllerCreate(
    createDetailInformationDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDetailInformationDto** | **CreateDetailInformationDto**|  | |


### Return type

**DetailInformationControllerCreate200Response**

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

# **detailInformationControllerFindAll**
> DetailInformationControllerFindAll200Response detailInformationControllerFindAll()


### Example

```typescript
import {
    DetailInformationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DetailInformationApi(configuration);

const { status, data } = await apiInstance.detailInformationControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**DetailInformationControllerFindAll200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success response with array of objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **detailInformationControllerFindOne**
> DetailInformationControllerCreate200Response detailInformationControllerFindOne()


### Example

```typescript
import {
    DetailInformationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DetailInformationApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.detailInformationControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**DetailInformationControllerCreate200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success response with single object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **detailInformationControllerRemove**
> detailInformationControllerRemove()


### Example

```typescript
import {
    DetailInformationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DetailInformationApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.detailInformationControllerRemove(
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
|**200** | Detail information successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **detailInformationControllerUpdate**
> DetailInformationControllerCreate200Response detailInformationControllerUpdate(updateDetailInformationDto)


### Example

```typescript
import {
    DetailInformationApi,
    Configuration,
    UpdateDetailInformationDto
} from './api';

const configuration = new Configuration();
const apiInstance = new DetailInformationApi(configuration);

let id: string; // (default to undefined)
let updateDetailInformationDto: UpdateDetailInformationDto; //

const { status, data } = await apiInstance.detailInformationControllerUpdate(
    id,
    updateDetailInformationDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateDetailInformationDto** | **UpdateDetailInformationDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**DetailInformationControllerCreate200Response**

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


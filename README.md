
# Flight Booking API



This is a rest API that enables users to perform the following operations:

 - Add/Book Flight
 - Get all Flight
 - Get single Flight
 - Update/Edit Flight
 - Delete Flight

This project is built using NodeJs, Express Framework.



### API Reference

#### Get all flights

```http
  GET 
        http://127.0.0.1/flights
```


#### Get flight

```http
  GET 
        http://127.0.0.1/flights/1
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of flight to fetch |


#### Add/Book flight

```http
  POST 
        http://127.0.0.1/flights/
```

```
    {
        'title' : 'Flight to Canada',
        'price' : 26000
    }
```

#### Update/Edit flight
```http
  PUT 
        http://127.0.0.1/flights/1
```

```
    {
        'title' : 'Flight to Mexico',
        'price' : 37500
    }
```


#### Delete flight

```http
  DELETE 
        http://127.0.0.1/flights/1
```





#### Built With
- NodeJs
- Express JS (Node-Js Framework)
- Rest Client (Visual Studio Code Extention)

### Authors

- Solola Sijibomi [@ossolola](https://github.com/ossolola)


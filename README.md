# Welcome to Flights Service

## Project Setup

- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create a `.env` file in the root directory and add the following environment variable
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
   "development": {
    "username": "<DB_USERNAME>",
    "password": "<DB_password>",
    "database": "Flights_Sarch_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

once you have added your db config as listed above , goto the src folder from your terminal and execute `npx sequelize db:crate`
and then execute

`npx sequelize db:migrate`

## DB Design

- Airplane Table
- Flight
- Airport
- City

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights, but a flight belongs to one airport

## 📊 Database Design

### 🛫 Airplane

- id
- model_number
- capacity

---

### ✈️ Flights

- id
- departure_city_id
- destination_city_id
- airplane_id
- departure
- arrival
- flight_number
- airport_id

---

### 🏢 Airport

- id
- name
- city_id
- address

---

### 🌆 City

- id
- name

---

## 🔗 Relationships

- One **Airplane** → Many **Flights** (1:N)
- One **City** → Many **Airports** (1:N)
- One **Airport** → Many **Flights** (1:N)



npx sequilize model:generate --name Airport --attributes name:String,address:String,cityId:Integer
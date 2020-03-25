**Plant Shelf API**
----

* **URL**

  https://plant-shelf.herokuapp.com/api

* **Method:**
  
  /quiz
  
  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{question objects}]`

------------------------------------------------------------------------------
* **Method:**
  
  /results

  `GET`
  
*  **URL Params**

   **Required:**
 
   `light=[string]&pet_safe=[string]&water=[string]&size=[string]&care_level=[string]`

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `[{plants as objects that match query}]`
 
------------------------------------------------------------------------------
* **Method:**
  
  /wishlist

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{plants as objects that are on the wishlist table}]`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "unauthorized access" }`
 
------------------------------------------------------------------------------
* **Method:**
  
  /wishlist

  `POST`

* **Data Params**

  **Required:**
  plant_id
  user_id

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 201 <br />
    **Content:** `{wishlist item}`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "unauthorized access" }`

------------------------------------------------------------------------------
* **Method:**
  
  <_The request type_>

  `DELETE`

* **Data Params**

  **Required:**
  id

* **Success Response:**

  * **Code:** 204 <br />
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "unauthorized access" }`

* **Sample Call:**

  ```.get(requireAuth, (req, res, next) => {
    WishlistService.getWishes(req.app.get('db'))
      .then(plants => {
        res.json(plants.map(serializePlant));
      })
      .catch(next);
  ```

* **Notes:**

  public GET calls don't have specified errors -LB 3/25/2020
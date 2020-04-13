**Plant Shelf API**
----

* **URL**

  https://plant-shelf.herokuapp.com/api

* **Method:**
  
  /quiz
  
  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content example:** `[{
        "id": 1,
        "question": "What light will you have for your plant?",
        "answer_1": "A bright spot",
        "answer_2": "A shadier spot",
        "answer_3": "I can barely read a book",
        "answer_4": "Artifical lighting only"
    }]`

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
    **Content example:** `[{
        "id": 1,
        "cmn_name": "Pothos",
        "sci_name": "Epipremnum aureum",
        "photo": "https://plant-app-images.s3.us-east-2.amazonaws.com/epipremnum-aureum.jpg",
        "light": "medium",
        "pet_safe": "no",
        "water": "low",
        "size": "tabletop",
        "care_level": "beginner"
    }]`
 
------------------------------------------------------------------------------
* **Method:**
  
  /wishlist

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content example:** `[{
        "id": 5,
        "cmn_name": "Swiss cheese vine",
        "sci_name": "Monstera adasonii",
        "photo": "https://plant-app-images.s3.us-east-2.amazonaws.com/monstera-adasonii.jpg",
        "light": "medium",
        "pet_safe": "no",
        "water": "medium",
        "size": "small",
        "care_level": "intermediate"
    }]`

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

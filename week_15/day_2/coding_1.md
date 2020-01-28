## Week 15 - Day 2

Submission folder `submissions/<your_folder>/week_15/day_2/session_1`

### Grocery List

**Backend** - Filename `server.py`

#### FSD.FLSK.1.1

- Route `/listing`
- Returns all the grocery items saved in the file `data/groceries.csv` with the headers `item, quantity, purchased`

#### FSD.FLSK.1.2

- Route `/create` (POST)
- Appends the posted data (`item, quantity`) to the file `data/groceries.csv` with the value for `purchased` as `false`

#### FSD.FLSK.1.3

- Route `/edit/<item_no>` (POST)
- Modifies the item with the newly posted data `item, quantity` (assume the `item_no` is the line number in the file)

#### FSD.FLSK.1.4

- Route `/delete` (POST)
- Get the `item_no` as post parameter  and delete the mentioned `item_no` from the file

#### FSD.FLSK.1.5

- Route `/purchased` (POST)
- Get the `item_no` as post parameter and mark that particular item in the file as purchased to `true`

#### FSD.FLSK.1.6

- Route `/purchased` (GET)
- Returns all the grocery items that are marked as purchased

**Frontend** - Folder `application`

#### FSD.RCT-FLSK.1.1

- `/home` - Shows the listing of all the items returned by the API build  **FSD.FLSK.1.1**
- Each item to have to have the links to change, delete and mark as purchased
- Show a button called `Purchased`

#### FSD.RCT-FLSK.1.2

- `/add` - Shows the page with the  fields `item` and `quantity` (dropdown)  connect to the POST API build to save the item **FSD.FLSK.1.2**

#### FSD.RCT-FLSK.1.3

- `/change/<index>` - Shows the page with the  fields `item` and `quantity` (dropdown)  filled from the listing data connect to the POST API build to save the modified item  **FSD.FLSK.1.3**

#### FSD.RCT-FLSK.1.4

- `/delete/<index>` - Shows the page with the  `item` and `quantity` and with the confirmation of the user deletes the item from the list using the API  **FSD.FLSK.1.4**

#### FSD.RCT-FLSK.1.5

- `/mark/<index>` - Shows the page with the  `item` and `quantity` and with the confirmation of the user mark the item as purchased using the API  **FSD.FLSK.1.5**

#### FSD.RCT-FLSK.1.6

- `/done` - Shows the page with the already purchased items using the API  **FSD.FLSK.1.6**
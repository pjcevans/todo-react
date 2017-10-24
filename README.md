#### Process for starting a redux app from scratch, bottom up:

* Lay out dumb component hierarchy
* Mock state data in a const within each component that will use state data
* Move consts to containing "clever" components and pass mocked data down as props
  * (Just to check dumb component is wired to up receive data)
* Move Mocked consts into default values within a reducer
* Wire up reducers to connected "clever" component
* App is now using a single redux state tree
  * Replace mocked default values with production values

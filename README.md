# How does postgre, node, express, react connect?

## campus info

**Always double check the init.sql to see the database schema**

To connect our applications together we will do the campus data starting from the front and the student info starting from the back to show how you might approach connecting apps in different ways

### step 1.)

- write the get request in the `componentDidMount`to grab the campus data from `/api/campus_info`
- set `setState` for `campusInfo` with the response returned
- `import` the `Campus` component into the `CampusInfo` component
- inbetween the render and return, map over the `campusInfo` array from state and return the `Campus` component on each loop with:
  - index
  - campus
  - program
  - campus_phone

tip: remember to add the key to the parent component, use the campus_id

<details>

```js
componentDidMount() {
    axios.get("/api/campus_info").then(response => {
      this.setState({
        campusInfo: response.data
      });
    });
  }

const mappedCampusInfo = campusInfo.map((campus, index) => {
    return <Campus index={index} key={campus.campus_id} {...campus} />;
});
```

<summary>
Solution

## student info

import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
  MenuItem,
} from "@material-ui/core";
import { AiFillPlusCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

// const tableData =

const Home = () => {
  const [value, setValue] = useState([
    {
      id: 1,
      first_name: "Beret",
      last_name: "Lennard",
      email: "blennard0@pcworld.com",
      gender: "Female",
      ip_address: "213.196.192.52",
    },
    {
      id: 2,
      first_name: "Tera",
      last_name: "Choke",
      email: "tchoke1@theatlantic.com",
      gender: "Male",
      ip_address: "101.152.241.70",
    },
  ]);

  const deleteTransaction = (id) => {
    setValue(value.filter((valuee) => valuee.id !== id));
  };

  const addTransaction = (values) => {
    alert("Item Adding");
    console.log(values);
    setValue((item) => [values, ...item]);
  };

  const [inputValues, setinputValues] = useState({
    Alertname: "",
    IndependentValue: "",
    DependentValue: "",
    Frequency: "",
  });

  const { Alertname, IndependentValue, DependentValue, Frequency } =
    inputValues;

  const handleChange = (e) => {
    setinputValues({ ...inputValues, [e.target.name]: e.target.value });
    console.log("inputValues", inputValues);
  };

  const saved = () => {
    alert("Data Saved");
  };

  return (
    <>
      <div className="text-center my-4">
        {" "}
        <Typography className="text-center" variant="h4">
          Alert Configuration
        </Typography>
      </div>
      <Grid container className="my-4">
        <Grid item sm={1} md={1} lg={1} className="my-4"></Grid>
        <Grid item sm={10} md={10} lg={10} className="my-4">
          <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
            <Table aria-label="simple table" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <AiFillPlusCircle
                      cursor="pointer"
                      onClick={addTransaction}
                      color="green"
                      size={50}
                    />
                  </TableCell>
                  <TableCell align="center">Alert Name</TableCell>
                  <TableCell align="center">Independent Variable</TableCell>
                  <TableCell align="center">Dependent variable</TableCell>
                  <TableCell align="center">Frequency</TableCell>
                  <TableCell align="center">Save</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {value.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <GiCancel
                        cursor="pointer"
                        onClick={() => deleteTransaction(value.id)}
                        color="red"
                        size={30}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        name="Alertname"
                        value={Alertname}
                        onChange={(e) => handleChange(e)}
                        label="Alret 1"
                        variant="filled"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <select
                        name="IndependentValue"
                        value={IndependentValue}
                        onChange={(e) => handleChange(e)}
                        id="cars"
                      >
                        <option value="Me Torge">ME Torge (Avg.)</option>
                        <option value="ME Speed">ME Speed (Avg.)</option>
                        <option value="Rate of Return">
                          Rate of Return(Avg.)
                        </option>
                        <option value="audi" selected></option>
                      </select>
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        select
                        helperText="Select Dependent variable...."
                        name="DependentValue"
                        value={DependentValue}
                        onChange={(e) => handleChange(e)}
                        variant="outlined"
                      >
                        <MenuItem selected value="Shaft">
                          ME Shaft Power (Avg.)
                        </MenuItem>
                        <MenuItem value="Speed">ME Speed(Avg.)</MenuItem>
                        <MenuItem value="Torge">ME Torge (Avg.)</MenuItem>
                      </TextField>
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <TextField
                        name="Frequency"
                        value={Frequency}
                        onChange={(e) => handleChange(e)}
                        type="number"
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={saved}
                        variant="outlined"
                        color="secondary"
                      >
                        Save
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item sm={1} md={1} lg={1}></Grid>
      </Grid>
    </>
  );
};

export default Home;

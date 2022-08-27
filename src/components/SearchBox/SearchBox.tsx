import TextField from "@mui/material/TextField";

export const SearchBox = (props: any) => {
  return (
    <TextField
      id="outlined-basic"
      label="Search"
      variant="outlined"
      style={{ display: "flex", margin: 20 }}
      onChange={(e) => props.setSearchText(e.target.value)}
    />
  );
};

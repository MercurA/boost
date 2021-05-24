import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles( (theme) => ({
  container: (props: IStyleProps) => ({
    backgroundColor: theme.palette[props.color].light,
    border: 0,
    boxShadow: "0px 4px 5px -4px",
    borderRadius: "5px",
    width: 130,
    height: 36,
    fontSize: "15px",
    textAlign: "left",
    fontFamily: "Crimson Pro",
    fontWeight: 400,
    display: "flex",
    padding: "6px 6px",
  }),
  containerText: {
    marginTop: "3px",
  },
}));

interface IStyleProps {
    color: string;
}
interface ICustomButton {
  name: string;
  color: string;
}

const CustomButton: FunctionComponent<ICustomButton> = ({
  name,
  color,
  children,
}) => {
  const classes = useStyles({ color });
  return (
    <>
      <button
        data-cy="custom-button"
        className={classes.container}
        type="button"
      >
        {children}
        <div className={classes.containerText}>{name}</div>
      </button>
    </>
  );
};

export default CustomButton;

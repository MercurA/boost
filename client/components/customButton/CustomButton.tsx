import { FunctionComponent } from "react";
import style from "./button.module.scss";
import {Add} from '@material-ui/icons';
interface ICustomButton {
  name: string;
}

const CustomButton: FunctionComponent<ICustomButton> = ({ name }) => {
  return (
      <>
          <button data-cy="custom-button" className={style.container} type="button">
            <Add/>
            <div className={style.containerText}>
                {name}
            </div>
          </button>
      </>
  );
};

export default CustomButton;

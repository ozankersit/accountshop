import React, {FC} from 'react';
import OpenEyeIcon from '../Icons/OpenEyeIcon';
import SlashedEyeIcon from '../Icons/SlashedEyeIcon';


interface Props {
  setShowPassword: (value: boolean) => void,
  showPassword: boolean,
}

export const ShowPassword: FC<Props> = ({setShowPassword, showPassword}) => {
  return (
    <div className={"absolute mr-5"}>
      {showPassword ? <SlashedEyeIcon onClick={() => setShowPassword(!showPassword)}/> :
        <OpenEyeIcon onClick={() => setShowPassword(!showPassword)}/>}
    </div>
  );
}

export default ShowPassword;

import React from "react";
import { useHistory } from 'react-router';


const BackLink = () => {
  const history = useHistory();
  return <i className="fa fa-arrow-circle-left" onClick={() => { history.goBack(); }}> </i>;
}

export default BackLink;

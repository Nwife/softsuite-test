import moment from "moment";

//get current timestamp
export const getCurrentTimestamp = (day = 0) => {
    const old_date = new Date();
  
    const date = new Date(old_date.setDate(old_date.getDate() + day));
  
    return moment(date).format("YYYY-MM-DD");

  };
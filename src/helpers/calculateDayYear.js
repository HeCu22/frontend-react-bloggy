function calculateDayYear() {
    const currMoment = new Date();
   // console.log('current moment', currMoment.getHours(), currMoment.getMinutes(), currMoment.getDay(), currMoment.getMonth(), currMoment.getFullYear() - 1, currMoment.getSeconds());
    const dateOfStartYear = new Date(currMoment.getFullYear() - 1, 12, 2);


    const dif1 = (currMoment.getTime() - dateOfStartYear.getTime()) / 1000 / 60 / 60 / 24;
  //  console.log ('difference today and first day of this year', Math.floor(dif1), 'full days');
    let dayDisplay = Math.floor(dif1);
    if (dif1 > 224) {dayDisplay = Math.floor(dif1 - 200);}
  //  console.log('day to display', dayDisplay);
    return dayDisplay ;
}

export default calculateDayYear;
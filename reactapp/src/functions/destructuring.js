function getUserIpDetails(userResponse = {}) {
    const {userIp = '0.0.0.0', userName} = userResponse;
    return [userName, userIp];
  }
  
  // console.log(getUserIpDetails(userResponse)); // ['test', '0.0.0.0']
  
  function getTopThree(studentMarks = []) {
    const [firstMark = null, secondMark = null, thirdMark = null] = studentMarks;
    return [firstMark, secondMark, thirdMark].Sort();
  }
  
 
  export { getUserIpDetails,getTopThree};
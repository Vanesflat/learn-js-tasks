const checkSpam = (str) => str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra');

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));
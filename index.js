(function (d) {
  const mtn=["+234803", "+234703", "+234903", "+234806", "+234706", "+234813", "+234810", "+234814", "+234816"];
  const glo=["+234805", "+234705", "+234905", "+234807", "+234815", "+234811"];
  const etisalat=["+234809", "+234909", "+234817", "+234818"];
  const airtel=["+234802", "+234902", "+234701", "+234808", "+234708", "+234812"];

  let matchNetwork = (value) => {
    if (mtn.includes(value)) {
      return 'mtn';
    }

    if (glo.includes(value)) {
      return 'glo';
    }

    if (etisalat.includes(value)) {
      return 'etisalat';
    }

    if (airtel.includes(value)) {
      return 'airtel';
    }

    return false;
  };

  d.addEventListener('input', e => {
    const target = e.target;

    if (target.matches('#auth_phone')) {
      let value = target.value;

      // Select and cache the Network Text element in a variable for repetitive calls
      const $net = d.getElementById('net');
      // Select and cache the Network Image element in a variable for repetitive calls
      const $netImage = d.getElementById('net_Image');

      // If the length of the inputted text isn't up to 4, reset the network type and show empty status
      if (value.length < 7) {
        $net.textContent = '';
        $netImage.src = '';
        $netImage.style.visibility = 'hidden';

        return false;
      }

      // Get the first 7 digits of the inputted phone number
      let prefix = value.slice(0, 7);

      // Match the prefix to find the network it belongs to
      let match = matchNetwork(prefix);

      switch (match) {
        case 'mtn':
          //console.log("Mtn! " + prefix);
          $net.textContent = "Yello! Welcome!";
          $netImage.style.visibility = 'visible';
          $netImage.src = 'img/'+match+'.png';

          break;

        case 'glo':
          //console.log("Glo! " + prefix);
          $net.textContent = "Glo with Pride!";
          $netImage.style.visibility = 'visible';
          $netImage.src = 'img/'+match+'.png';

          break;

        case 'etisalat':
          //console.log("Etisalat! " + prefix);
          $net.textContent = "9Mobile here for naija!";
          $netImage.style.visibility = 'visible';
          $netImage.src = 'img/'+match+'.png';

          break;

        case 'airtel':
          //console.log("Airtel! " + prefix);
          $net.textContent = "Airtel the smartphone network!";
          $netImage.style.visibility = 'visible';
          $netImage.src = 'img/'+match+'.png';

          break;

        default:
          //console.log("Couldn't find the network for your phone number.");
          $net.textContent = "Couldn't find the network for your phone number.";
          $netImage.style.visibility = 'hidden';
      }

      return false;
    }
  });
}(document));

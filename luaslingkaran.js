function calculateArea(jarijari) {
    return (jarijari * jarijari * Math.PI);
  };
  
  function MyArea() {
    var area = calculateArea(jarijari);
    alert("Lingkaran dengan jari-jari " + jarijari + "centimeter. Memiliki luas" + area + "centimeter <sup>2</sup>");
  };
  
  var jarijari = parseFloat(prompt("Masukkan jari-jari lingkaran dalam cm", 0));
  MyArea(jarijari);

  
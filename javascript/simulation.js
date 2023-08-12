
// Table
//creating an array to store all data
var list1 = [];
	var list2 = [];
	var list3 = [];
	var list4 = [];
	var list5 = [];
	var list6 = [];

	var n = 1;
	var x = 0;

  function myFunction1(){
    const openButton = document.getElementById("openButton");
    const popupContainer = document.getElementById("popupContainer");
    const closeButton = document.getElementById("closeButton");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    
    const waveAmplitude = 50;

    let waveOffset = 0.1;
    
    
    var x = document.getElementById("form1");
    var kilo = 1000;
    var meg = kilo*kilo;
    var micro = 1/meg;
    
    //since, input is in numbers converting it into float
    var R1 = parseFloat(x.elements[0].value)*kilo;
    var R2 = parseFloat(x.elements[1].value)*kilo;
    var C = parseFloat(x.elements[2].value)*micro;
      
    //formulae
    var f = 1.44/((R1+2*R2)*C);
    const f1 = f.toFixed(2);
    
    // On time (time high)
    var th = 0.693*(R1+R2)*C*kilo;
    const th1 = th.toFixed(2);
    const waveFrequency = th1;
    
    //time low
    var t1 = 0.693*(R2)*C*kilo;
    const t2 = t1.toFixed(2);
        
    var t = 0.693*(R1+2*R2)*C*kilo;
    const t3 = t.toFixed(2);
        
    var dc = (th/t)*100;
    const dc1 = dc.toFixed(2);
    //output
    document.getElementById("a1").innerHTML =
    "<b>Frequency </b> = " + f1+ "Hz <br><b> Time High</b> = " + th1 + "ms <br><b> Time Low= </b>"+ t2 + "ms <br><b> Time period </b> = "
    + t3 + "ms <br><b> Duty Cycle </b> =" + dc1 + "%"; 


    // Table
    var AddRown = document.getElementById('show');
        var NewRow = AddRown.insertRow(n);

        list1[x] = document.getElementById("r1").value;
        list2[x] = document.getElementById("r2").value;
        list3[x] = document.getElementById("c").value;
        list4[x] = f1;
        list5[x] = t3;
        list6[x] = dc1;

        var cel1 = NewRow.insertCell(0);
        var cel2 = NewRow.insertCell(1);
        var cel3 = NewRow.insertCell(2);
        var cel4 = NewRow.insertCell(3);
        var cel5 = NewRow.insertCell(4);
        var cel6 = NewRow.insertCell(5);

        cel1.innerHTML = list1[x];
        cel2.innerHTML = list2[x];
        cel3.innerHTML = list3[x];
        cel4.innerHTML = list4[x];
        cel5.innerHTML = list5[x];
        cel6.innerHTML = list6[x];

        n++;
        x++;
    
    //clearing the input fields after submission
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });
    
    openButton.addEventListener("click", () => {
        popupContainer.style.display = "block";
        // drawCanvas(); // Call a function to draw on the canvas (optional).
        draw();
      });
      
      closeButton.addEventListener("click", () => {
        popupContainer.style.display = "none";
      });
      
      function draw() {
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        
        for (let x = 0; x < width; x++) {
          const y = height / 2 + waveAmplitude * Math.sign(Math.sin(waveFrequency * x + waveOffset));
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.strokeStyle = "green";
        ctx.lineWidth = 2;
        ctx.stroke();
        waveOffset += 0.1;
        
        requestAnimationFrame(draw);
      }
  }




function myFunction2(){
    var x = document.getElementById("form2");

    //since, input is in numbers converting it into float
    var R1 = parseFloat(x.elements[0].value);
    var C = parseFloat(x.elements[1].value);

    //formulae
    var t = 1.1*R1*C;

    //output
    document.getElementById("show2").innerHTML =
    "<b>The output pulse duration= </b> = " + t+ "secs";  
}


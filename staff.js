function staff() {
  var x = document.getElementById("staff");
  
  if (x.style.display === "none") {
    x.style.display = "block";
  };
  var b = document.getElementById("patient");
  if (b.style.display === "block") {
    b.style.display = "none";
  }
  var c = document.getElementById("doctor");
  if (c.style.display === "block") {
    c.style.display = "none";
  }
  
  var e = document.getElementById("appointment");
  if (e.style.display === "block") {
    e.style.display = "none";
  }
  
 

 
}

  function patient() {
    

    var x = document.getElementById("patient");
    if (x.style.display === "none") {
      x.style.display = "block";
    } ;
    var b = document.getElementById("staff");
    if (b.style.display === "block") {
      b.style.display = "none";
    }
    var c = document.getElementById("doctor");
    if (c.style.display === "block") {
      c.style.display = "none";
    }
   
    var e = document.getElementById("appointment");
    if (e.style.display === "block") {
      e.style.display = "none";
    }
  }
  function doctor() {
    var x = document.getElementById("doctor");
    if (x.style.display === "none") {
      x.style.display = "block";
    } ;

    var b = document.getElementById("staff");
    if (b.style.display === "block") {
      b.style.display = "none";
    }
    var c = document.getElementById("patient");
    if (c.style.display === "block") {
      c.style.display = "none";
    }
   
    var e = document.getElementById("appointment");
    if (e.style.display === "block") {
      e.style.display = "none";
    }


  }

  

  function appointment()
  {
    var x = document.getElementById("appointment");
    if (x.style.display === "none") {
      x.style.display = "block";
    } ;

    var b = document.getElementById("staff");
    if (b.style.display === "block") {
      b.style.display = "none";
    }
    var c = document.getElementById("patient");
    if (c.style.display === "block") {
      c.style.display = "none";
    }
  
    var e = document.getElementById("doctor");
    if (e.style.display === "block") {
      e.style.display = "none";
    }

  }

  
